import api from "@/api/api";
import { useStoreContext } from "@/hook/useStoreContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Tooltip } from "@mui/material";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaLink } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import * as z from "zod";
import ModalFormTextField from "./ModalFormTextField";

const urlSchema = z.object({
  originalUrl: z
    .string()
    .trim()
    .min(1, "URL is required")
    .url("Please enter a valid URL"),
});

export const URLShortenerWidget = () => {
  return (
    <div className="mx-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white/10 backdrop-blur-xl max-w-4xl mx-auto rounded-xl overflow-hidden mt-0 mb-4 md:mb-16 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] relative before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rounded-xl"
      >
        <div className="p-8 relative">
          <h3 className="text-slate-800 font-bold text-xl mb-4">
            Shorten your URL instantly
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Paste your long URL here..."
              className="flex-1 bg-blue-50/20 focus:bg-blue-50/30 backdrop-blur-sm border rounded-lg px-4 py-3 focus:outline-none focus:border-transparent focus:ring-inset focus:ring-2 focus:ring-blue-300/40 shadow-inner transition-colors duration-100 linear"
            />
            <button className="bg-blue-500/90 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm">
              Shorten URL
            </button>
          </div>
          <div className="mt-3 pt-3 mb-0 pb-0 border-t border-purple-100/80">
            <p className="text-gray-400 text-sm">
              Your links will expire after 30 days. Create an account for
              permanent links.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const URLShortenerModal = ({ open, handleClose, refetch }) => {
  const { token } = useStoreContext();
  const [isLoading, setIsLoading] = useState(false);
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
      if (event.key === "Escape" && open) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [open, handleClose]);

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
      const shortUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${
        res.shortUrl
      }`;
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
      open={open}
      onClose={handleClose}
      aria-labelledby="url-shortener-modal"
      aria-describedby="create-short-url"
    >
      <div className="flex justify-center items-center h-full w-full p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden"
        >
          <Tooltip title="Close" placement="left">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <FaX className="w-5 h-5" />
            </button>
          </Tooltip>

          <form onSubmit={handleSubmit(shortenNewUrl)} className="p-6">
            <div className="text-center mb-6">
              <h1 className="font-bold text-2xl text-slate-800">
                Create Short URL
              </h1>
              <p className="text-slate-500 mt-1">
                Simplify your links in just one click
              </p>
            </div>

            <div className="mb-6">
              <ModalFormTextField
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
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center justify-center"
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : null}
                {isLoading ? "Loading..." : `Create`}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Modal>
  );
};
