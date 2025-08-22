import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top instantly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // you can use "smooth" if you want animation
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 bottom-6 right-6 p-3 gold-bg text-black rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
}
