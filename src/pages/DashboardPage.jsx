import { motion } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaRegFile } from "react-icons/fa";

import AnalyticsGraph from "@/components/AnalyticsGraph";
import Spinner from "@/components/Spinner";
import URLList from "@/components/URLList";
import { URLShortenerModal } from "@/components/URLShortenerModal";
import { useFetchAllUrls, useFetchAllAnalytics } from "@/hook/useQuery";
import { useStoreContext } from "@/hook/useStoreContext";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const { token } = useStoreContext();
  const [isURLShortenerModalOpen, setIsURLShortenerModalOpen] = useState(false);

  const { isLoading: isLoadingAnalytics, data: graphData } =
    useFetchAllAnalytics(token);

  const {
    isLoading: isLoadingUrls,
    data: listData,
    refetch,
  } = useFetchAllUrls(token);

  const handleDeleteUrl = (shortUrl) => {
    // TODO: Implement delete functionality
    toast.success(`URL ${shortUrl} deleted successfully`);
    refetch();
  };

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-tl from-blue-100 via-gray-50 to-blue-100 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
          <p className="text-slate-600">
            Manage your shortened URLs and track performance
          </p>
        </motion.div>

        <section className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden border border-white/40 shadow-lg relative"
          >
            {isLoadingAnalytics ? (
              <div className="h-96 flex justify-center items-center bg-white/80 backdrop-blur-sm rounded-xl border border-white/40 shadow-lg">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500"></div>
                <Spinner />
              </div>
            ) : (
              <div className="h-96">
                <AnalyticsGraph graphData={graphData} />
              </div>
            )}
          </motion.div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border border-white/40 shadow-lg relative"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500"></div>

            {isLoadingUrls ? (
              <div className="py-16 flex justify-center items-center">
                <Spinner />
              </div>
            ) : listData?.length ? (
              <URLList
                listData={listData}
                onDeleteUrl={handleDeleteUrl}
                onCreateNew={() => setIsURLShortenerModalOpen(true)}
              />
            ) : (
              <div className="py-16 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <FaRegFile className="text-4xl text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-700 mb-2">
                  No URLs found
                </h3>
                <p className="text-slate-500 mb-4">
                  Create your first shortened URL to get started
                </p>
                <button
                  onClick={() => setIsURLShortenerModalOpen(true)}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md shadow-blue-500/20 flex items-center"
                >
                  <FaPlus size={14} className="mr-2" />
                  Create New URL
                </button>
              </div>
            )}
          </motion.div>
        </section>
      </div>
      <URLShortenerModal
        isOpen={isURLShortenerModalOpen}
        onClose={() => setIsURLShortenerModalOpen(false)}
        refetch={refetch}
      />
    </div>
  );
};

export default DashboardPage;
