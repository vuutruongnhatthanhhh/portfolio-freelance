// app/achievements/page.tsx
"use client";

import React, { useState, useCallback } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Images } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ✅ đọc locale & chống flicker
import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

/* ===================== I18N ===================== */
type Lang = "vi" | "en";
type LStr = { vi: string; en: string };

const UI = {
  vi: {
    pageTitle: "Thành tựu",
    subtitle: "Một vài cột mốc đáng nhớ — nhấn vào ảnh để xem",
    viewHint: "Nhấn để xem ảnh",
    lightboxTitleFallback: "Ảnh",
  },
  en: {
    pageTitle: "Achievements",
    subtitle:
      "A few memorable milestones — click an image to view it in full size.",
    viewHint: "Click to view",
    lightboxTitleFallback: "Image",
  },
} as const;

/* ===================== Types ===================== */
type ImageItem = { src: string; alt?: string | LStr };
type Achievement = {
  id: string;
  title: LStr;
  description: LStr;
  image: ImageItem; // chỉ 1 ảnh
};

/* ===================== Mock data (1 ảnh/mục) ===================== */
const achievements: Achievement[] = [
  {
    id: "scrum-certificate",
    title: {
      vi: "Chứng nhận Scrum – Axon Active Vietnam",
      en: "Software Development with Scrum – Axon Active Vietnam",
    },
    description: {
      vi: "Hoàn thành khóa học 'Software Development with Scrum' do Axon Active Vietnam tổ chức, bao gồm Agile Manifesto, Scrum Foundations, Scrum Master, Product Owner và Scrum Events.",
      en: "Successfully completed the 'Software Development with Scrum' training course by Axon Active Vietnam, covering Agile Manifesto, Scrum Foundations, Scrum Master, Product Owner, and Scrum Events.",
    },
    image: {
      src: "/achievements/achievement-scrum.webp",
      alt: {
        vi: "Chứng nhận khóa học Scrum của Axon Active Vietnam",
        en: "Certificate of Software Development with Scrum by Axon Active Vietnam",
      },
    },
  },
];

/* ===================== Motion variants ===================== */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 22 },
  },
};

/* ===================== Lightbox (1 ảnh) ===================== */
function LightboxOne({
  open,
  onOpenChange,
  image,
  title,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  image?: { src: string; alt?: string };
  title?: string;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogContent
            className="
              w-[95vw] sm:max-w-[90vw] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl
              border-2 border-gray-300 dark:border-gray-700
              p-0 overflow-hidden
            "
          >
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, scale: 0.98 }}
              animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
              exit={prefersReduced ? {} : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative bg-white dark:bg-neutral-900"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Images className="h-4 w-4" />
                  <span className="font-medium text-xl">{title}</span>
                </div>
              </div>

              {/* Image */}
              <div className="grid place-items-center px-4 py-4 sm:px-6 sm:py-6">
                {image && (
                  <motion.img
                    src={image.src}
                    alt={image.alt ?? title ?? "Preview"}
                    className="max-h-[88vh] w-full object-contain rounded-md"
                    initial={prefersReduced ? {} : { opacity: 0, y: 6 }}
                    animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
                    exit={prefersReduced ? {} : { opacity: 0, y: 6 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}

/* ===================== Card item ===================== */
function AchievementCard({
  item,
  onOpen,
  lang,
  viewHint,
}: {
  item: Achievement;
  onOpen: (item: Achievement) => void;
  lang: Lang;
  viewHint: string;
}) {
  const cover = item.image;
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      variants={popIn}
      whileHover={{
        y: prefersReduced ? 0 : -3,
        boxShadow:
          "0 10px 28px rgba(16,185,129,0.12), 0 4px 8px rgba(0,0,0,0.06)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="
        group relative h-full rounded-2xl border-2 
        border-gray-300 bg-white/80 backdrop-blur
        dark:border-gray-700 dark:bg-neutral-900/80 pb-6 pt-2
      "
    >
      <CardHeader className="space-y-3">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          {item.title[lang]}
        </h3>
        <p className="text-[16px] leading-relaxed text-slate-700 dark:text-slate-300 mb-4">
          {item.description[lang]}
        </p>
      </CardHeader>

      <CardContent>
        {cover && (
          <button
            onClick={() => onOpen(item)}
            className="group relative block overflow-hidden"
          >
            {/* Thumbnail reveal */}
            <motion.img
              src={cover.src}
              alt={
                typeof cover.alt === "object"
                  ? cover.alt[lang]
                  : cover.alt ?? item.title[lang]
              }
              loading="lazy"
              decoding="async"
              className="h-48 sm:h-56 w-full object-cover object-center bg-gray-100 dark:bg-neutral-800"
              initial={{ opacity: 0, scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />

            <motion.span
              className="absolute bottom-2 right-2 rounded-lg bg-green-700 px-2.5 py-1 text-xs font-medium text-white shadow-sm"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {viewHint}
            </motion.span>
          </button>
        )}
      </CardContent>
    </motion.div>
  );
}

/* ===================== Page ===================== */
export default function AchievementsPage() {
  const hydrated = useStoreHydrated();
  const raw = useLocaleStore((s) => s.locale);
  const lang: Lang = raw === "en" ? "en" : "vi";
  const L = UI[lang];

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<{ src: string; alt?: string } | undefined>(
    undefined
  );
  const [title, setTitle] = useState<string>("");

  const onOpen = useCallback(
    (item: Achievement) => {
      const alt =
        typeof item.image.alt === "object"
          ? item.image.alt[lang]
          : item.image.alt ?? item.title[lang];
      setImage({ src: item.image.src, alt });
      setTitle(item.title[lang] || L.lightboxTitleFallback);
      setOpen(true);
    },
    [lang, L.lightboxTitleFallback]
  );

  return (
    <main
      aria-busy={!hydrated}
      className={[
        "min-h-screen px-4 py-10 sm:px-8",
        "transition-opacity duration-200",
        hydrated ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <section className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
            {L.pageTitle}
          </h1>
          <p className="mt-3 text-black dark:text-white text-lg">
            {L.subtitle}
          </p>
        </motion.header>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
        >
          {achievements.map((a) => (
            <AchievementCard
              key={a.id}
              item={a}
              onOpen={onOpen}
              lang={lang}
              viewHint={L.viewHint}
            />
          ))}
        </motion.div>

        <LightboxOne
          open={open}
          onOpenChange={setOpen}
          image={image}
          title={title || L.lightboxTitleFallback}
        />
      </section>
    </main>
  );
}
