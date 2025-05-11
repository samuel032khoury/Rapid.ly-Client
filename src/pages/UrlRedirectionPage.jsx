import api from "@/api/api";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

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
