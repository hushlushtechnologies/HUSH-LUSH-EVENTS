import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to top (no smooth scroll animation)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // 👈 key part
    });
  }, [pathname]);

  return null;
}
