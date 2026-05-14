"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

type Props = {
  images?: string[];
  /** fixed = chiều cao cố định; ratio = theo tỉ lệ */
  mode?: "fixed" | "ratio";
  /** Dùng khi mode="ratio" */
  aspect?: "wide" | "video" | "square";
  /** Dùng khi mode="fixed": override chiều cao mặc định nếu muốn */
  heightClass?: string;
  className?: string;
};

export default function CoverSlider({
  images = [],
  mode = "fixed", // mặc định đảm bảo slider cao hơn
  aspect = "wide",
  heightClass,
  className = "",
}: Props) {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false); // lightbox
  const len = images.length;
  if (!len) return null;

  const go = (n: number) => setIdx((p) => (p + n + len) % len);
  const goto = (n: number) => setIdx(n);

  // touch
  const startX = useRef<number | null>(null);
  const onStart = (e: React.TouchEvent) =>
    (startX.current = e.touches[0].clientX);
  const onEnd = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) < 30) return;
    dx > 0 ? go(-1) : go(1);
  };

  // keyboard (slider)
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (open) return; // khi mở lightbox, để lightbox xử lý
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [len, open]);

  // ===== Layout classes
  const ratio =
    aspect === "video"
      ? "aspect-[16/9]"
      : aspect === "square"
      ? "aspect-square"
      : "aspect-[16/8] md:aspect-[16/7]";

  const fixedHeights =
    heightClass ??
    "h-[260px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[540px]";

  return (
    <>
      <div
        className={`relative ${
          mode === "fixed" ? fixedHeights : ratio
        } ${className}`}
      >
        <div
          className="h-full w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-neutral-800 bg-black/5"
          onTouchStart={onStart}
          onTouchEnd={onEnd}
        >
          <div
            className="h-full w-full flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {images.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setIdx(i);
                  setOpen(true);
                }}
                className="relative shrink-0 w-full h-full group"
                aria-label="Xem ảnh lớn"
              >
                <Image
                  src={src}
                  alt={`cover-${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={i === 0}
                />

                {/* overlay gradient dưới */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 md:h-28 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl" />

                {/* overlay icon con mắt khi hover */}
                <div
                  className="
                    absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/20
                    transition-colors duration-200
                    grid place-items-center
                  "
                >
                  <Eye
                    className="
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                    "
                    size={28}
                    color="white"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {len > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="
    absolute left-3 top-1/2 -translate-y-1/2
    grid place-items-center rounded-full
    bg-green-600 hover:bg-green-700
    text-white
    p-2 shadow-lg
    focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
  "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="
    absolute right-3 top-1/2 -translate-y-1/2
    grid place-items-center rounded-full
    bg-green-600 hover:bg-green-700
    text-white
    p-2 shadow-lg
    focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
  "
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goto(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? "w-6 bg-white shadow" : "w-2 bg-white/60"
                  } dark:bg-neutral-300/80 dark:shadow-none`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ===== Lightbox / Modal xem ảnh lớn ===== */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="max-w-[90vw] md:max-w-[84vw] lg:max-w-[80vw] p-0 overflow-hidden"
          // ❌ bỏ onInteractOutside để click ra ngoài tự đóng
        >
          {/* Nút đóng: 1 nút đỏ, tròn */}
          <DialogClose asChild>
            <button
              aria-label="Close"
              className="
          absolute right-3 top-3 z-20 grid place-items-center
          rounded-full bg-red-600 hover:bg-red-700
          text-white p-2 shadow
          focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400
        "
            >
              <X className="h-4 w-4" />
            </button>
          </DialogClose>

          {/* Ảnh lớn + mũi tên */}
          <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] bg-black">
            <Image
              src={images[idx]}
              alt={`preview-${idx + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />

            {len > 1 && (
              <>
                <button
                  aria-label="Previous image"
                  onClick={() => go(-1)}
                  className="
              absolute left-3 top-1/2 -translate-y-1/2
              grid place-items-center rounded-full
              bg-green-600 hover:bg-green-700
              text-white
              p-2 shadow-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
            "
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <button
                  aria-label="Next image"
                  onClick={() => go(1)}
                  className="
              absolute right-3 top-1/2 -translate-y-1/2
              grid place-items-center rounded-full
              bg-green-600 hover:bg-green-700
              text-white
              p-2 shadow-lg
              focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400
            "
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Dots trong modal */}
          {len > 1 && (
            <div className="flex items-center justify-center gap-1.5 py-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goto(i)}
                  aria-label={`Go to ${i + 1}`}
                  className={[
                    "h-1.5 rounded-full transition-all",
                    // light (nền trắng): xám
                    i === idx ? "w-6 bg-gray-700" : "w-2 bg-gray-400",
                    // dark mode: trắng như cũ
                    "dark:" + (i === idx ? "bg-white w-6" : "bg-white/60 w-2"),
                  ].join(" ")}
                />
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
