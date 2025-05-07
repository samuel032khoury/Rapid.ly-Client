import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import {
  FaCheck,
  FaCopy,
  FaExternalLinkAlt,
  FaTimes,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const DeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 w-full h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        ref={modalRef}
        className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl max-w-md w-full p-6 border border-white/40"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Confirm Delete</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-600">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-gray-800">{itemName}</span>?
            This action cannot be undone.
          </p>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-md transition-colors duration-200 flex items-center shadow-md shadow-red-500/20"
          >
            <FaTrash size={14} className="mr-2" />
            Delete
          </button>
        </div>
      </motion.div>
    </div>,
    document.body
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

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white/80 backdrop-blur-sm border border-white/40 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 flex items-center relative"
    >
      <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

      <div className="flex-grow p-4 pl-5">
        <div className="flex items-center space-x-2">
          <h3 className="font-medium text-blue-600">{shortUrl}</h3>

          <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full font-medium">
            {clickCount} clicks
          </span>
        </div>

        <div className="mt-1 flex items-center text-sm text-gray-500 truncate">
          <span className="truncate">{originalUrl}</span>
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

      <div className="flex-shrink-0 pr-4 flex items-center space-x-2">
        <button
          onClick={handleCopy}
          className={`p-2 rounded-md transition-all duration-300 ease-in-out ${
            copied
              ? "bg-green-100 text-green-600"
              : "hover:bg-blue-50 text-gray-400 hover:text-blue-500"
          }`}
          title="Copy short URL"
        >
          {copied ? <FaCheck size={18} /> : <FaCopy size={18} />}
        </button>

        <button
          onClick={() => onDelete(shortUrl)}
          className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
          title="Delete URL"
        >
          <FaTrash size={18} />
        </button>
      </div>
    </motion.div>
  );
};

const URLList = ({ listData, onDeleteUrl, onCreateNew }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDeleteClick = (shortUrl) => {
    setItemToDelete(shortUrl);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = () => {
    if (itemToDelete) {
      onDeleteUrl(itemToDelete);
      setItemToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="flex items-center justify-between p-4 pt-10 border-b border-white/30">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold text-slate-800 mr-3">
            Your Shortened URLs
          </h2>
          {listData?.length > 0 && (
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium">
              {listData?.length} URLs
            </span>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onCreateNew}
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg shadow-md shadow-blue-500/20 flex items-center transition-all duration-200"
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
        isOpen={showDeleteModal}
        onClose={handleCloseModal}
        onConfirm={handleDeleteConfirm}
        itemName={itemToDelete}
      />
    </motion.div>
  );
};

export default URLList;
