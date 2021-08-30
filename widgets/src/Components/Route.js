import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [curPathName, setCurPathName] = useState("/");

  const onLocationChange = () => {
    setCurPathName(window.location.pathname);
  };
  useEffect(() => {
    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return curPathName === path ? children : null;
};

export default Route;
