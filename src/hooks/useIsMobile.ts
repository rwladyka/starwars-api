import { useEffect, useState } from "react";

import { size } from "../utils/responsive";

const getMobile = () => window.innerWidth < size.mobile;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getMobile());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [isMobile]);

  return isMobile;
};
