import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const createDateRange = (daysBack = 365) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - daysBack);
  return { startDate, endDate };
};

const formatDateISODate = (date) => date.toISOString().split("T")[0];

const formatFullISODate = (date) => {
  const pad = (n) => String(n).padStart(2, "0");
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate()
    )}T` +
    `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds()
    )}`
  );
};

const createHeaders = (token) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${token}`,
});

const handleError = (error) => {
  throw error.response?.data?.message
    ? new Error(error.response.data.message)
    : error;
};

const defaultQueryOptions = {
  onError: (error) => toast.error(error?.message || "Failed to load data"),
  staleTime: 5000,
  retry: 1,
};

export const useFetchAllAnalytics = (token) => {
  const { startDate, endDate } = createDateRange();

  return useQuery({
    queryKey: [
      "url-totalclick",
      token,
      formatDateISODate(startDate),
      formatDateISODate(endDate),
    ],
    queryFn: async () => {
      try {
        return await api.get(
          `/api/urls/analytics/totalclicks?startDate=${formatDateISODate(
            startDate
          )}&endDate=${formatDateISODate(endDate)}`,
          { headers: createHeaders(token) }
        );
      } catch (error) {
        handleError(error);
      }
    },
    select: (resp) =>
      Object.entries(resp.data).map(([clickDate, count]) => ({
        clickDate,
        count,
      })),
    ...defaultQueryOptions,
  });
};

export const useFetchAllUrls = (token) => {
  return useQuery({
    queryKey: ["url-myurls", token],
    queryFn: async () => {
      try {
        return await api.get(`/api/urls/myurls`, {
          headers: createHeaders(token),
        });
      } catch (error) {
        handleError(error);
      }
    },
    select: (resp) =>
      resp.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    ...defaultQueryOptions,
  });
};

export const useFetchSingleAnalytics = (token, shortUrl) => {
  const { startDate, endDate } = createDateRange(7);
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  return useQuery({
    queryKey: ["url-analytics", token, shortUrl],
    queryFn: async () => {
      try {
        return await api.get(
          `/api/urls/analytics/${shortUrl}?startDate=${formatFullISODate(
            startDate
          )}&endDate=${formatFullISODate(endDate)}`,
          { headers: createHeaders(token) }
        );
      } catch (error) {
        handleError(error);
      }
    },
    select: (resp) => resp.data,
    ...defaultQueryOptions,
  });
};
