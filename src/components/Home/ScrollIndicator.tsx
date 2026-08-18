import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // si estás arriba del todo → visible
      if (window.scrollY < 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollBy({
      top: window.innerHeight * 0.6,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed bottom-5 lg:bottom-15 left-1/2 -translate-x-1/2 cursor-pointer transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="animate-bounce text-3xl text-[#259E93]">
        ↓
      </div>
    </div>
  );
}

export default ScrollIndicator;