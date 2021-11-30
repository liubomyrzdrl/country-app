import { useState, useEffect } from "react";

export const useIsMobile = () => {
  const [windowWidth, setWindowWidth] = useState();
  const WIDTH_DEVICE = 996;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth <= WIDTH_DEVICE;
};
