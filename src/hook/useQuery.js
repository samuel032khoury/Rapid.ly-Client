import api from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useFetchAnalytics = (token, onError) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(endDate.getFullYear() - 1);

  const formattedStartDate = startDate.toISOString().split("T")[0];
  const formattedEndDate = endDate.toISOString().split("T")[0];

  return useQuery({
    queryKey: ["url-totalclick", token, formattedStartDate, formattedEndDate],
    queryFn: async () => {
      try {
        const response = await api.get(
          `/api/urls/analytics/totalclicks?startDate=${formattedStartDate}&endDate=${formattedEndDate}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response;
      } catch (error) {
        throw error.response?.data?.message
          ? new Error(error.response.data.message)
          : error;
      }
    },
    select: (resp) => {
      const dataArray = Object.entries(resp.data).map(([key, val]) => ({
        clickDate: key,
        count: val,
      }));
      return dataArray;
    },
    onError,
    staleTime: 5000,
    retry: 1,
  });
};

export const useFetchAllUrls = (token, onError) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setFullYear(endDate.getFullYear() - 1);

  return useQuery({
    queryKey: ["url-myurls", token],
    queryFn: async () => {
      try {
        const response = await api.get(`/api/urls/myurls`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        return response;
      } catch (error) {
        throw error.response?.data?.message
          ? new Error(error.response.data.message)
          : error;
      }
    },
    select: (resp) =>
      resp.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    onError,
    staleTime: 5000,
    retry: 1,
  });
};
