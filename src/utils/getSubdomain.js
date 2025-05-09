export const getSubdomain = () => {
  const host = window.location.hostname;
  const parts = host.split(".");
  if (host.endsWith("localhost")) {
    return parts.slice(0, -1).join(".");
  }
  if (host.endsWith("vercel.app")) {
    return parts.slice(0, -3).join(".");
  }
  if (parts.length <= 2) {
    return "";
  }
  return parts.slice(0, -2).join(".");
};
