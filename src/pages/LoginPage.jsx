import api from "@/api/api";
import AuthFormTextField from "@/components/AuthFormTextField";
import { useStoreContext } from "@/hook/useStoreContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { token, setToken } = useStoreContext();

  useEffect(() => {
    toast.dismiss();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const loginHandler = async (data) => {
    toast.dismiss();

    setIsLoading(true);
    try {
      const { data: response } = await api.post("/api/auth/public/login", data);
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      toast.success("Login successful");
      reset();
      navigate("/dashboard");
    } catch (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        toast.error("Invalid username or password");
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

  if (token) {
    return <Navigate to="/dashboard" />;
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
                Welcome Back
              </span>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">
                Login to <span className="text-blue-600">Rapid.ly</span>
              </h1>
              <p className="text-slate-600">
                Access your URL shortener dashboard
              </p>
            </div>

            <motion.form
              onSubmit={handleSubmit(loginHandler)}
              variants={formAnimation}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.div variants={itemAnimation}>
                <AuthFormTextField
                  label="Username"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  register={register}
                  errors={errors}
                  icon="user"
                />
              </motion.div>

              <motion.div variants={itemAnimation}>
                <AuthFormTextField
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  register={register}
                  errors={errors}
                  icon="lock"
                />
              </motion.div>

              <motion.div variants={itemAnimation} className="flex justify-end">
                <Link
                  to="/reset-password"
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Forgot password?
                </Link>
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
                        Logging in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </span>
                </button>
              </motion.div>

              <motion.div variants={itemAnimation} className="text-center mt-6">
                <p className="text-slate-600 flex flex-wrap justify-center gap-1">
                  Don't have an account yet?
                  <Link
                    to="/register"
                    className="font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Sign up
                  </Link>
                </p>
              </motion.div>
            </motion.form>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-slate-500">
          By logging in, you agree to our{" "}
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

export default LoginPage;
