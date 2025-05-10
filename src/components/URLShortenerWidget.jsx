import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import urlSchema from "@/schema/urlSchema";
import toast from "react-hot-toast";
import api from "@/api/api";

export const URLShortenerWidget = () => {
  const [isLoading, setIsLoading] = useState(false);
  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      originalUrl: "",
    },
    mode: "onSubmit",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      let recaptchaToken = null;
      if (recaptchaRef.current) {
        try {
          recaptchaToken = await recaptchaRef.current.executeAsync();
        } catch {
          throw new Error("reCAPTCHA was not completed. Please try again.");
        }

        if (!recaptchaToken) {
          throw new Error("reCAPTCHA verification failed. Please try again.");
        }
      } else {
        throw new Error("reCAPTCHA is not loaded. Please refresh the page.");
      }

      const { data: response } = await api.post(
        "/api/public/shorten",
        {
          originalUrl: data.originalUrl,
          recaptchaToken: recaptchaToken,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const { shortenedUrl } = response;

      if (!shortenedUrl) {
        throw new Error("Failed to shorten URL");
      }

      await copyToClipboard(shortenedUrl);
      toast.success("Shortened URL copied to clipboard!");
    } catch (err) {
      toast.error("Error: " + (err?.message || "Failed to shorten URL"));
    } finally {
      setIsLoading(false);
      reset();
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    }
  };

  const copyToClipboard = async (shortenedUrl) => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      toast.success("Shortened URL copied to clipboard!");
    } catch {
      toast.error("Failed to copy shortened URL");
    }
  };

  return (
    <div className="mx-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="h-[22em] sm:h-auto bg-white/10 backdrop-blur-sm max-w-4xl mx-auto rounded-xl overflow-hidden mt-0 mb-4 md:mb-16 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] relative before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rounded-xl"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-8 relative">
            <h3 className="text-slate-800 font-bold text-xl mb-4">
              Shorten your URL instantly
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                {...register("originalUrl")}
                type="text"
                placeholder="Paste your long URL here..."
                className="flex-1 bg-blue-50/20 focus:bg-blue-50/30 backdrop-blur-sm border rounded-lg px-4 py-3 focus:outline-none focus:border-transparent focus:ring-inset focus:ring-2 focus:ring-blue-300/40 shadow-inner transition-colors duration-100 linear"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || recaptchaRef.current === null}
                className="bg-blue-500/90 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Shortening..." : "Shorten URL"}
              </button>
            </div>

            {errors.originalUrl && (
              <div className="fixed mt-3 text-red-500 text-sm">
                {errors.originalUrl.message}
              </div>
            )}

            <div className="mt-6 pt-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-gray-400 text-sm">
                  Your links will expire after 30 days. Create an account for
                  permanent links.
                </p>

                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env.VITE_APP_SITE_KEY}
                  size="invisible"
                />
              </div>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default URLShortenerWidget;
