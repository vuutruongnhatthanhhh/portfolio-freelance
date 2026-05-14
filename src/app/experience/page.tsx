// src/app/experience/page.tsx
"use client";

import React, { memo } from "react";
import { motion, useReducedMotion } from "framer-motion";

// đọc locale & chống flicker khi zustand hydrate
import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

/* ===================== Helper icons ===================== */
const Code = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);
const Palette = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const Badge = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[14px] font-medium ${className}`}
    {...props}
  >
    {children}
  </span>
);

/* ===================== Types ===================== */
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;
interface TimelineItemData {
  id: string;
  title: string;
  type: string;
  duration: string;
  icon: IconType;
  responsibilities: string[];
  skills: string[];
  href?: string;
  company?: string;
  companyUrl?: string;
}
interface ProfessionalTimelineProps {
  data: TimelineItemData[];
}

/* ===================== Motion variants ===================== */
const listContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 320, damping: 22 },
  },
};

/* ===================== I18N nhỏ gọn ===================== */
const I18N = {
  vi: {
    pageTitle: "Kinh nghiệm làm việc",
    viewDetail: "Xem chi tiết",
  },
  en: {
    pageTitle: "Work experience",
    viewDetail: "View details",
  },
} as const;

/* ===================== Dữ liệu song ngữ ===================== */
const TIMELINE = {
  vi: [
    {
      id: "timeline-item-2",
      title: "Lập trình viên Full-stack",
      type: "Toàn thời gian",
      duration: "10.2024 — Hiện tại",
      company: "Công ty TNHH Ngân Anh Phát", // <- NEW
      companyUrl: "https://www.ngananhphat.com/", // <- optional
      icon: Code,
      responsibilities: [
        "Tùy chỉnh và tích hợp hệ thống Odoo ERP bằng cách xây dựng các module mới và kết nối các quy trình nội bộ như sản xuất, bán hàng và kế toán.",
        "Thiết kế và phát triển phần mềm ERP riêng biệt phù hợp với nhu cầu riêng của doanh nghiệp, đảm bảo tính bảo mật và trải nghiệm thân thiện với người dùng cuối.",
      ],
      skills: [
        "Next.js",
        "MongoDB",
        "Python",
        "Docker",
        "Linux",
        "Bash Script",
        "GitHub Actions (CI/CD)",
      ],
      href: "/experience/fullstack-nap",
    },
    {
      id: "timeline-item-3",
      title: "Thực tập sinh Lập trình viên Blockchain",
      type: "Toàn thời gian",
      duration: "07.2024 — 10.2024",
      company: "Công ty TNHH Globalchain", // <- NEW
      companyUrl: "", // <- optional
      icon: Code,
      responsibilities: [
        "Triển khai mạng Hyperledger Fabric, triển khai chaincode và gọi chaincode bằng Node.js.",
        "Kết nối ứng dụng di động trên nền tảng React Native với Hyperledger Fabric thông qua proxy.",
        "Nghiên cứu về mã hóa đầu-cuối (end-to-end encryption).",
        "Triển khai tính năng gọi video cho ứng dụng nhắn tin.",
      ],
      skills: [
        "Node.js",
        "NestJS",
        "React Native",
        "Docker",
        "TypeScript",
        "Hyperledger Fabric",
      ],
      // href: "/experience/frontend-developer",
    },
  ] satisfies TimelineItemData[],
  en: [
    {
      id: "timeline-item-2",
      title: "Full-stack Developer",
      type: "Full-time",
      duration: "10.2024 — Present",
      company: "Ngan Anh Phat Co., Ltd.", // <- translated
      companyUrl: "https://www.ngananhphat.com/", // <- optional
      icon: Code,
      responsibilities: [
        "Customize and integrate the Odoo ERP system by developing new modules and connecting internal business processes such as manufacturing, sales, and accounting.",
        "Design and develop a tailored ERP software solution that meets the specific needs of the enterprise, ensuring data security and a user-friendly experience.",
      ],
      skills: [
        "Next.js",
        "MongoDB",
        "Python",
        "Docker",
        "Linux",
        "Bash Script",
        "GitHub Actions (CI/CD)",
      ],
      href: "/experience/fullstack-nap",
    },
    {
      id: "timeline-item-3",
      title: "Blockchain Developer Intern",
      type: "Full-time",
      duration: "07.2024 — 10.2024",
      company: "Globalchain Co., Ltd.", // <- translated
      companyUrl: "", // <- optional
      icon: Code,
      responsibilities: [
        "Deployed Hyperledger Fabric network, deployed chaincode, and invoked chaincode using Node.js.",
        "Connected a mobile application on the React Native platform to Hyperledger Fabric via a proxy.",
        "Researched end-to-end encryption.",
        "Implemented video call functionality for the messaging app.",
      ],
      skills: [
        "Node.js",
        "NestJS",
        "React Native",
        "Docker",
        "TypeScript",
        "Hyperledger Fabric",
      ],
      // href: "/experience/frontend-developer",
    },
  ] satisfies TimelineItemData[],
} as const;

/* ===================== Sub component ===================== */
const TimelineItemContent = memo(function TimelineItemContent({
  item,
}: {
  item: TimelineItemData;
}) {
  return (
    <div className="mt-5 space-y-4">
      <motion.ul
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="space-y-3"
      >
        {item.responsibilities.map((responsibility, idx) => (
          <motion.li
            variants={fadeUp}
            key={`${item.id}-resp-${idx}`}
            className="flex items-start gap-3 text-[16px] text-slate-600 dark:text-slate-400"
          >
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-700" />
            <span className="leading-relaxed">{responsibility}</span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="flex flex-wrap gap-2 pt-1"
      >
        {item.skills.map((skill, i) => (
          <motion.div key={`${item.id}-skill-${i}`} variants={popIn}>
            <Badge className="bg-green-700 text-white hover:bg-green-800 transition-colors">
              {skill}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

/* ===================== Timeline item ===================== */
const TimelineItem = memo(function TimelineItem({
  item,
  viewDetail,
}: {
  item: TimelineItemData;
  viewDetail: string;
}) {
  const Icon = item.icon;
  const prefersReduced = useReducedMotion();

  return (
    <motion.li
      className="relative pl-14"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15% 0px -10% 0px" }}
    >
      {/* Icon dot */}
      <motion.div
        className="absolute left-4 top-5 z-10 grid h-8 w-8 place-items-center rounded-full bg-white dark:bg-black ring-2 ring-green-700 shadow-sm"
        variants={popIn}
      >
        <Icon className="h-4 w-4 text-green-700" />
      </motion.div>

      <div className="pb-8">
        <motion.div
          variants={fadeUp}
          whileHover={{
            y: prefersReduced ? 0 : -2,
            boxShadow:
              "0 6px 24px rgba(16, 185, 129, 0.15), 0 2px 6px rgba(0,0,0,0.05)",
          }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className="rounded-xl p-4 sm:p-5 shadow-sm border-2 border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-neutral-900/80"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              <h3 className="text-xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
                {item.title}
              </h3>

              {/* Company + Duration chung dòng */}
              {item.company && (
                <div className="mt-1 flex flex-wrap items-center gap-x-2 text-[14px] text-slate-600 dark:text-slate-300">
                  {item.companyUrl ? (
                    <a
                      href={item.companyUrl}
                      className="font-medium text-slate-700 dark:text-slate-200 hover:underline"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <span className="font-medium text-slate-700 dark:text-slate-200">
                      {item.company}
                    </span>
                  )}
                  <span aria-hidden>•</span>
                  <span className="tabular-nums">{item.duration}</span>
                </div>
              )}
            </div>

            {item.href && (
              <motion.a
                href={item.href}
                className="inline-flex items-center gap-2 self-start rounded-lg bg-green-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
                whileHover={{ x: prefersReduced ? 0 : 2 }}
                whileTap={{ scale: 0.98 }}
              >
                {viewDetail}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.a>
            )}
          </div>

          <TimelineItemContent item={item} />
        </motion.div>
      </div>
    </motion.li>
  );
});
TimelineItem.displayName = "TimelineItem";

/* ===================== Main timeline ===================== */
export function ProfessionalTimeline({ data }: ProfessionalTimelineProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative">
      {/* vertical line animate */}
      <motion.div
        className="pointer-events-none absolute left-7 top-0 h-full w-px bg-green-600 origin-top"
        aria-hidden
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: prefersReduced ? 0 : 0.8, ease: "easeOut" }}
      />
      <motion.ol
        variants={listContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="relative"
      >
        {data.map((item) => (
          <TimelineItem key={item.id} item={item} viewDetail={"..."} />
        ))}
      </motion.ol>
    </div>
  );
}

/* ===================== Page ===================== */
export default function TimelinePage() {
  const hydrated = useStoreHydrated();
  const raw = useLocaleStore((s) => s.locale);
  const lang: "vi" | "en" = raw === "en" ? "en" : "vi";
  const L = I18N[lang];
  const DATA = TIMELINE[lang];

  return (
    <div
      aria-busy={!hydrated}
      className={[
        "min-h-screen py-10 transition-colors",
        "transition-opacity duration-200",
        hydrated ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 flex items-center justify-between"
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {L.pageTitle}
          </h1>
        </motion.header>

        {/* Truyền đúng text nút theo locale */}
        <div className="relative">
          <motion.div
            className="pointer-events-none absolute left-7 top-0 h-full w-px bg-green-600 origin-top"
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <motion.ol
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            className="relative"
          >
            {DATA.map((item) => (
              <TimelineItem
                key={item.id}
                item={item}
                viewDetail={L.viewDetail}
              />
            ))}
          </motion.ol>
        </div>
      </div>
    </div>
  );
}
