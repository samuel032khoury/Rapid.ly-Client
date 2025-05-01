import AnalyticsGraph from "@/components/AnalyticsGraph";
import { useStoreContext } from "@/hook/StoreContext";
import { analyticsGraphData } from "@/mock/analyticsGraphData";

const DashboardPage = () => {
  const { token } = useStoreContext();
  console.log("DASHBOARD TOKEN" + token);
  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)] bg-gradient-to-tl from-blue-100 via-gray-50 to-blue-100">
      <div className="lg:w-[90%] w-full mx-auto py-16">
        <div className="h-96 relative">
          <AnalyticsGraph graphData={analyticsGraphData} />
        </div>
        <div className="py-5 sm:text-end text-center">
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white">
            Create a New Short URL
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
