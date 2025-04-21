import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
const UsePreviousLocation = () => {
  const location = useLocation();
  const prevLocation = useRef();
  useEffect(() => {
    prevLocation.current = location.pathname;
  }, [location]);
  return prevLocation.current;
};

export default UsePreviousLocation;
