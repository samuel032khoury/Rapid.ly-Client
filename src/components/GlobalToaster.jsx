import { Toaster } from "react-hot-toast";

export const GlobalToaster = () => {
  return (
    <Toaster
      position="bottom-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 4000,
        style: {
          marginBottom: "40px",
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

export default GlobalToaster;
