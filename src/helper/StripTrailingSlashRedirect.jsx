import { Navigate, useLocation } from "react-router-dom";

const StripTrailingSlashRedirect = () => {
  const location = useLocation();
  const { pathname, search, hash } = location;

  if (pathname !== "/" && pathname.endsWith("/")) {
    const newPath = pathname.slice(0, -1);
    return <Navigate to={newPath + search + hash} replace />;
  }

  return null;
};

export default StripTrailingSlashRedirect;
