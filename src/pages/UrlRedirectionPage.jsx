import api from "@/api/api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import Spinner from "@/components/Spinner";

function UrlRedirectionPage() {
  const { url } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [urlExists, setUrlExists] = useState(true);

  useEffect(() => {
    const checkUrlExists = async () => {
      try {
        if ((await api.get(`/api/urls/exists/${url}`)).data.exists) {
          setUrlExists(true);
          window.location.href = import.meta.env.VITE_API_URL + "/" + url;
        } else {
          setUrlExists(false);
        }
      } finally {
        setIsLoading(false);
      }
    };
    checkUrlExists();
  }, [url]);

  if (isLoading || urlExists) {
    return (
      <div className="flex w-full h-full min-h-screen min-w-min justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return <NotFoundPage />;
}

export default UrlRedirectionPage;
