import api from "@/api/api";
import AuthFormTextField from "@/components/AuthFormTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { z } from "zod";

const resetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

const ResetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    toast.dismiss();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
  });

  const resetPasswordHandler = async (data) => {
    toast.dismiss();

    setIsLoading(true);
    try {
      await api.post("/api/auth/public/reset-password", data);
      setIsSubmitted(true);
      toast.success("Password reset instructions sent to your email");
      reset();
    } catch (error) {
      if (error?.response?.status === 404) {
        toast.error("Email address not found");
      } else if (error?.response?.status === 429) {
        toast.error("Too many requests. Please try again later");
      } else {
        toast.error(
          error?.response?.data?.message ??
            "An Error Occurred. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  if (isSubmitted) {
    return (
      <div className="min-h-[calc(100vh-64px)] flex justify-center items-center py-12 px-6 bg-gradient-to-br from-purple-50 via-blue-100 to-purple-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full"
        >
          <div className="bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden border border-white/40 shadow-lg relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500"></div>
            <div className="absolute -left-12 -top-12 w-24 h-24 rounded-full bg-blue-200 opacity-40 blur-xl"></div>
            <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-purple-200 opacity-40 blur-xl"></div>

            <div className="p-8 sm:p-10 relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="text-2xl font-bold text-slate-800 mb-3">
                Check your email
              </h1>
              <p className="text-slate-600 mb-8">
                We've sent password reset instructions to your email address.
                Please check your inbox and follow the link to reset your
                password.
              </p>

              <div className="space-y-4">
                <Link
                  to="/login"
                  className="inline-block w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Back to Login
                </Link>
                <p className="text-sm text-slate-500">
                  Didn't receive an email? Check your spam folder or{" "}
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    try again
                  </button>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center py-12 px-6 bg-gradient-to-br from-purple-50 via-blue-100 to-purple-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <div className="bg-white/80 backdrop-blur-lg rounded-xl overflow-hidden border border-white/40 shadow-lg relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500"></div>
          <div className="absolute -left-12 -top-12 w-24 h-24 rounded-full bg-blue-200 opacity-40 blur-xl"></div>
          <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-purple-200 opacity-40 blur-xl"></div>

          <div className="p-8 sm:p-10 relative z-10">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-3">
                Password Reset
              </span>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Forgot your password?
              </h1>
              <p className="text-slate-600">
                Enter your email address and we'll send you a link to reset your
                password
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit(resetPasswordHandler)}
              variants={formAnimation}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.div variants={itemAnimation}>
                <AuthFormTextField
                  label="Email Address"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  register={register}
                  errors={errors}
                  icon={"mail"}
                />
              </motion.div>

              <motion.div variants={itemAnimation} className="pt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="relative flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Reset Link"
                    )}
                  </span>
                </button>
              </motion.div>

              <motion.div variants={itemAnimation} className="text-center mt-6">
                <p className="text-slate-600">
                  Remember your password?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Back to Login
                  </Link>
                </p>
              </motion.div>
            </motion.form>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-slate-500">
          By using our services, you agree to our{" "}
          <Link
            to="/terms-of-service"
            className="text-blue-600 hover:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPasswordPage;
