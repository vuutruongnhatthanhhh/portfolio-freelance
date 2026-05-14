"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopButtonProps {
  /** After how many pixels should the button appear (default 300) */
  showAfter?: number;
}

export default function BackToTopButton({
  showAfter = 300,
}: BackToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setVisible(y > showAfter);
    };

    onScroll(); // check mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Trở về đầu trang"
      className="
        fixed
        bottom-4 right-4
        md:bottom-6 md:right-2
        z-40
        inline-flex items-center justify-center
        rounded-full
        bg-[#2D9A4B]
        text-white
        shadow-lg
        hover:bg-[#22803C]
        active:scale-95
        transition-transform 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9A4B]/40
        h-11 w-11 md:h-12 md:w-12
      "
    >
      <ArrowUp className="h-4 w-4 md:h-5 md:w-5" />
    </button>
  );
}
