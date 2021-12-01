import { useState, useEffect } from "react";

export const useSizeFlag = () => {
  const [sizeFlag, setSizeFlag] = useState();
  const size = {
    LARGE: "large",
    MEDIUM: "medium",
    SMALL: "small",
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 475) {
        setSizeFlag(size.LARGE);
      }

      if (window.innerWidth <= 475 && window.innerWidth > 375) {
        setSizeFlag(size.MEDIUM);
      }

      if (window.innerWidth <= 375) {
        setSizeFlag(size.SMALL);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [size.LARGE, size.MEDIUM, size.SMALL]);

  return sizeFlag;
};
