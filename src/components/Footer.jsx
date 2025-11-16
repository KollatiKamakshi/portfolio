import { FiArrowUp } from "react-icons/fi";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="py-5 bg-themeBg border-t border-themeAccent transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-4">
        <p className="text-themeText text-sm text-center">
          © {new Date().getFullYear()} Kamakshi. All rights reserved.
        </p>
      </div>

      {showButton && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg 
                    bg-themeAccent text-themeBg hover:opacity-90 transition"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </footer>
  );
};

export default Footer;