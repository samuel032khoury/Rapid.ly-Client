import AnalyticsGraph from "@/components/AnalyticsGraph";
import Spinner from "@/components/Spinner";
import { URLShortenerModal } from "@/components/URLShortener";
import { useFetchTotalClicks } from "@/hook/useQuery";
import { useStoreContext } from "@/hook/useStoreContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DashboardPage = () => {
  const refetch = false;
  const { token } = useStoreContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onError = (error) => {
    const errorMessage = error?.message || "Failed to load analytics data";
    toast.error(errorMessage);
  };
  const {
    isLoading,
    data: graphData,
    error,
  } = useFetchTotalClicks(token, onError);

  useEffect(() => {
    if (error) {
      const errorMessage = error?.message || "Failed to load analytics data";
      toast.error(errorMessage);
    }
  }, [error]);

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] bg-gradient-to-tl from-blue-100 via-gray-50 to-blue-100">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <Spinner />
        </div>
      ) : (
        <div className="lg:w-[90%] w-full mx-auto py-16">
          <div className="h-96 relative">
            <AnalyticsGraph graphData={graphData} />
          </div>
          <div className="py-5 sm:text-end text-center">
            <button
              className="bg-blue-500 px-4 py-2 rounded-md text-white"
              onClick={() => {
                setIsModalOpen(true);
                console.log("Create new short URL");
              }}
            >
              Create a New Short URL
            </button>
          </div>
        </div>
      )}
      <div>
        <URLShortenerModal
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
