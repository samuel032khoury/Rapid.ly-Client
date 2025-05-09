import { useEffect } from "react";
import { useParams } from "react-router-dom";

function UrlRedirectionPage() {
  const { url } = useParams();
  useEffect(() => {
    window.location.href = import.meta.env.VITE_API_URL + "/" + url;
  }, [url]);
  return null;
}

export default UrlRedirectionPage;
