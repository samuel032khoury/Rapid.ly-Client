import { Toaster } from "react-hot-toast";

export const GlobalToaster = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: {
          marginTop: "80px",
          background: "#fff",
          color: "#333",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          borderRadius: "32px",
          padding: "16px",
        },
        success: {
          iconTheme: {
            primary: "#5EFF5F",
            secondary: "#ffffff",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#ffffff",
          },
        },
      }}
    />
  );
};

export const showToast = {
  success: (message) => {
    import("react-hot-toast").then((toast) => {
      toast.dismiss();
      toast.success(message);
    });
  },
  error: (message) => {
    import("react-hot-toast").then((toast) => {
      toast.dismiss();
      toast.error(message);
    });
  },
  custom: (message, options) => {
    import("react-hot-toast").then((toast) => {
      toast.dismiss();
      toast.custom(message, options);
    });
  },
};

export default GlobalToaster;
