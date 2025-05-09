import { useFetchSingleAnalytics } from "@/hook/useQuery";
import { useStoreContext } from "@/hook/useStoreContext";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCheck,
  FaCopy,
  FaExternalLinkAlt,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import AnalyticsCompactGraph from "./AnalyticsCompactGraph";
import DeleteModal from "./DeleteModal";

const ActionButton = ({ onClick, icon, color, title }) => {
  const colors = {
    blue: "hover:bg-blue-50 hover:text-blue-500",
    green: "bg-green-100 text-green-600",
    red: "hover:bg-red-50 hover:text-red-500",
  };

  const icons = {
    copy: <FaCopy size={18} />,
    check: <FaCheck size={18} />,
    trash: <FaTrash size={18} />,
  };

  const baseClass =
    "p-2 rounded-md transition-all duration-300 linear text-gray-400";
  const colorClass = colors[color];

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${colorClass}`}
      title={title}
    >
      {icons[icon]}
    </button>
  );
};

const URLListItem = ({
  originalUrl,
  shortUrl,
  clickCount,
  createdAt,
  onDelete,
}) => {
  const [copied, setCopied] = useState(false);
  const { token } = useStoreContext();
  const { data: graphData } = useFetchSingleAnalytics(token, shortUrl);

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${import.meta.env.VITE_REACT_SUBDOMAIN}/${shortUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200"
    >
      <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-blue-400 to-purple-400 z-10" />

      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 pl-5 relative">
          <div className="flex-grow w-full">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-medium text-blue-600">
                <span className="sm:inline-block hidden">
                  {import.meta.env.VITE_REACT_SUBDOMAIN.replace(
                    /^https?:\/\//,
                    ""
                  )}
                  /
                </span>
                {shortUrl}
              </h3>
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">
                {clickCount} {clickCount === 1 ? "click" : "clicks"}
              </span>
            </div>

            <div className="mt-1 flex items-center text-sm text-gray-500">
              <div className="truncate max-w-full sm:max-w-xs md:max-w-md">
                {originalUrl}
              </div>
              <a
                href={originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-gray-400 hover:text-blue-500 flex-shrink-0 transition-colors"
              >
                <FaExternalLinkAlt size={14} />
              </a>
            </div>

            <div className="mt-1 text-xs text-gray-400">
              Created {formattedDate}
            </div>
          </div>

          <div className="flex-shrink-0 mt-3 sm:mt-0 flex items-center space-x-2 w-full sm:w-auto justify-end sm:justify-start">
            <ActionButton
              onClick={handleCopy}
              icon={copied ? "check" : "copy"}
              color={copied ? "green" : "blue"}
              title="Copy short URL"
            />

            <ActionButton
              onClick={() => onDelete(shortUrl)}
              icon="trash"
              color="red"
              title="Delete URL"
            />
          </div>
        </div>

        <div className="px-5 pb-4 w-full">
          <AnalyticsCompactGraph graphData={graphData} />
        </div>
      </div>
    </motion.div>
  );
};

const URLList = ({ listData, onDeleteUrl, onCreateNew }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (shortUrl) => {
    setItemToDelete(shortUrl);
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handleDeleteConfirm = () => {
    if (itemToDelete) {
      onDeleteUrl(itemToDelete);
      handleCloseModal();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-7 pt-6 border-b border-white/30 gap-4">
        <div className="flex flex-col sm:flex-col sm:items-start gap-0">
          <div className="flex items-center gap-px">
            <span
              className={`inline-block px-4 py-1 bg-blue-100 rounded-full rounded-r-none text-blue-600 font-medium text-sm mb-3 `}
            >
              URL Library
            </span>
            <span className="inline-block px-4 py-1 rounded-l-none rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-3">
              {listData.length} URL{listData.length > 1 ? "s" : ""}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">
            Your Shortened URLs
          </h2>
          <p className="text-slate-600 text-sm md:text-base">
            Manage your created shortened URLs
          </p>
          {/* <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
            Your Shortened URLs
          </h2>
          {listData?.length > 0 && (
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium w-fit">
              {listData.length} URLs
            </span>
          )} */}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCreateNew}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg shadow-md shadow-blue-500/20 flex items-center justify-center sm:justify-start transition-all duration-200 w-full sm:w-auto"
        >
          <FaPlus size={14} className="mr-2" />
          Create New URL
        </motion.button>
      </div>

      <div className="space-y-4 p-4">
        {listData?.map((item) => (
          <URLListItem key={item.id} {...item} onDelete={handleDeleteClick} />
        ))}
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleDeleteConfirm}
        itemName={itemToDelete}
      />
    </motion.div>
  );
};

export default URLList;
