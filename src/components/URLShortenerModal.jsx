import api from "@/api/api";
import { useStoreContext } from "@/hook/useStoreContext";
import urlSchema from "@/schema/urlSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import TextField from "./TextField";

export const URLShortenerModal = ({
  isOpen,
  onClose: handleClose,
  refetch,
}) => {
  const { token } = useStoreContext();
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    resolver: zodResolver(urlSchema),
    mode: "onSubmit",
  });

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClose();
        event.stopPropagation();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, [isOpen, handleClose]);

  const shortenNewUrl = async (data) => {
    setIsLoading(true);
    try {
      const { data: res } = await api.post("/api/urls/shorten", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const shortUrl = `${import.meta.env.VITE_REACT_MAIN}/s/${res.shortUrl}`;
      navigator.clipboard.writeText(shortUrl);
      toast.success("Short URL created and copied to clipboard!", {
        position: "bottom-right",
        className: "mb-8",
        duration: 3000,
      });
      await refetch();
      reset();
      handleClose();
    } catch (error) {
      toast.error(error?.message || "Failed to create!", {
        position: "top-right",
        className: "mt-8",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="url-shortener-modal"
      aria-describedby="create-short-url"
    >
      <div className="flex justify-center items-center h-full w-full p-4 backdrop-blur-sm bg-black/20">
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside from bubbling
        >
          {/* Improved header with better spacing and visual hierarchy */}
          <div className="bg-gray-50 p-6 border-b border-gray-100">
            <div className="text-center">
              <h1 className="font-bold text-2xl text-slate-800">
                Create Short URL
              </h1>
              <p className="text-slate-500 mt-2">
                Simplify your links in just one click
              </p>
            </div>

            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <FaX className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit(shortenNewUrl)} className="p-6">
            <div className="mb-6">
              <TextField
                label="URL"
                id="originalUrl"
                icon={<FaLink />}
                placeholder="https://example.com"
                register={register}
                errors={errors}
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <FaLink className="w-4 h-4" />
                )}
                {isLoading ? "Creating..." : "Create Short URL"}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Modal>
  );
};
