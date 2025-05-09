import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./provider/ContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StripTrailingSlashRedirect from "./helper/StripTrailingSlashRedirect";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <BrowserRouter>
          <StripTrailingSlashRedirect />
          <App />
        </BrowserRouter>
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
