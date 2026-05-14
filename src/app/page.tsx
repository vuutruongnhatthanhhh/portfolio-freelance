// src/app/page.tsx
"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import TechStack from "@/components/home/TechStack";
import TypewriterText from "@/components/home/typewriter-text";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated"; // hook chống flicker

/* ===================== I18N (đơn giản) ===================== */
const i18n = {
  vi: {
    quote:
      "Sự hài lòng của khách hàng là chuẩn mực cho mọi sản phẩm chúng tôi xây dựng.",
    introLine1:
      "Tôi chuyên thiết kế website và phần mềm cho các doanh nghiệp vừa và nhỏ — từ landing page chuyển đổi cao đến hệ thống quản lý nội bộ phức tạp.",
    expPrefix: "Với hơn ",
    expHighlight: "5 năm kinh nghiệm",
    expSuffix:
      " trong phát triển web và ứng dụng full-stack, tôi đã đồng hành cùng nhiều khách hàng xây dựng nền tảng số vững chắc, tối ưu hiệu suất và nâng cao trải nghiệm người dùng.",
    projectsBtn: "Dự án đã thực hiện",
  },
  en: {
    quote:
      "Customer satisfaction is the standard by which we build every product.",
    introLine1:
      "I specialize in designing websites and software for small and medium-sized businesses — from high-converting landing pages to complex internal management systems.",
    expPrefix: "With over ",
    expHighlight: "5 years of experience",
    expSuffix:
      " in web and full-stack development, I’ve helped many clients build a solid digital foundation, optimize performance, and deliver outstanding user experiences.",
    projectsBtn: "View Featured Projects",
  },
} as const;

/* ===================== Motion ===================== */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function HomePage() {
  const prefersReduced = useReducedMotion();
  const hydrated = useStoreHydrated(); // ✅ chờ zustand hydrate
  const rawLocale = useLocaleStore((s) => s.locale);
  const lang: "vi" | "en" = rawLocale === "en" ? "en" : "vi"; // normalize
  const t = i18n[lang];

  return (
    <motion.div
      aria-busy={!hydrated}
      className={[
        "space-y-10",
        "transition-opacity duration-200",
        hydrated ? "opacity-100" : "opacity-0", // ✅ tránh giật ngôn ngữ
      ].join(" ")}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Avatar */}
        <motion.div
          variants={fadeUp}
          className="flex-shrink-0 w-[208px] h-[208px] flex items-center justify-center mb-10 md:mb-0"
          whileHover={{ scale: 1.04, rotate: prefersReduced ? 0 : 0.5 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            animate={prefersReduced ? {} : { y: [0, -6, 0] }}
            transition={
              prefersReduced
                ? {}
                : { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <Avatar className="size-52 border shadow-sm">
              <AvatarImage src="/code-avt.webp" alt="Avatar" />
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>

        {/* Quote / Typewriter */}
        <motion.div
          variants={fadeUp}
          className="relative max-w-[60ch] md:ml-24"
        >
          {/* giữ layout */}
          <span className="invisible block text-lg md:text-4xl font-medium leading-relaxed">
            {t.quote}
          </span>

          {/* Typewriter overlay */}
          <div className="absolute inset-0 flex items-center justify-center md:justify-start">
            <TypewriterText
              text={t.quote}
              className="text-lg md:text-4xl font-medium leading-relaxed"
            />
          </div>
        </motion.div>
      </div>

      {/* Intro */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="text-center space-y-4"
      >
        <p className="text-base md:text-lg max-w-6xl text-left mx-auto leading-relaxed">
          {t.introLine1}
          <br /><br />
          {t.expPrefix}
          <span className="font-bold text-foreground">{t.expHighlight}</span>
          {t.expSuffix}
        </p>
      </motion.section>

      {/* Projects button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="flex justify-center"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(21,128,61,0.55)",
              "0 0 0 12px rgba(21,128,61,0)",
              "0 0 0 0 rgba(21,128,61,0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-green-700 px-7 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-green-800"
          >
            {t.projectsBtn}
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Tech stack */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      >
        <TechStack />
      </motion.div>
    </motion.div>
  );
}
