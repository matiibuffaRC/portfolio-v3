import { useEffect, useRef, useState } from "react";

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(() => {
        setVisible(window.scrollY < 50);
        frame.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
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
      <div className="animate-bounce text-3xl text-[#087EA4] dark:text-[#58C4DC]">
        ↓
      </div>
    </div>
  );
}

export default ScrollIndicator;