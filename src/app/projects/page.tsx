"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CalendarDays, Star, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

/* ===================== I18N UI ===================== */
type Lang = "vi" | "en";
type LString = { vi: string; en: string };

const UI = {
  vi: {
    pageTitle: "Dự án đã thực hiện",
    pageDesc: "Các dự án đã triển khai cho khách hàng",
    featured: "Nổi bật",
    client: "Khách hàng",
    viewSite: "Xem ngay",
  },
  en: {
    pageTitle: "Completed Projects",
    pageDesc: "Projects Delivered for Clients",
    featured: "Featured",
    client: "Client",
    viewSite: "View site",
  },
} as const;

/* ===================== Types ===================== */
export type PersonalProject = {
  id: string;
  title: LString;
  timeframe?: string;
  shortDesc: LString;
  clientName?: string;
  clientAvatar?: string;
  liveUrl?: string;
  href: string;
  cover?: string;
  highlight?: boolean;
  showDetail?: boolean;
};

/* ===================== Data ===================== */
const projects: PersonalProject[] = [
  {
    id: "daipartners-corporate",
    title: {
      vi: "Website công ty luật DAI & PARTNERS (CORPORATE)",
      en: "DAI & PARTNERS Law Firm Website (CORPORATE)",
    },
    timeframe: "2026",
    shortDesc: {
      vi: "Nền tảng pháp lý trực tuyến cung cấp thông tin, tư vấn và hỗ trợ khách hàng trong các lĩnh vực như doanh nghiệp, hợp đồng, đất đai và giải quyết tranh chấp.",
      en: "An online legal platform that provides information, consultation, and customer support in areas such as business, contracts, real estate, and dispute resolution.",
    },
    clientName: "DAI & PARTNERS",
    clientAvatar: "/clients/client-daipartners.png",
    liveUrl: "https://corporate.daipartners.com.vn/",
    href: "/projects/daipartners-corporate",
    cover: "/projects/project-daipartners-corporate.png",
    highlight: true,
    showDetail: true,
  },
  {
    id: "daipartners",
    title: {
      vi: "Website công ty luật DAI & PARTNERS",
      en: "DAI & PARTNERS Law Firm Website",
    },
    timeframe: "2026",
    shortDesc: {
      vi: "Website công ty luật chuyên cung cấp dịch vụ tư vấn pháp lý toàn diện, hỗ trợ khách hàng giải quyết các vấn đề liên quan đến doanh nghiệp, hợp đồng, bất động sản và tranh chấp dân sự.",
      en: "A law firm website that offers comprehensive legal consultation services, assisting clients in resolving issues related to business, contracts, real estate, and civil disputes.",
    },
    clientName: "DAI & PARTNERS",
    clientAvatar: "/clients/client-daipartners.png",
    liveUrl: "https://daipartners.com.vn/",
    href: "/projects/daipartners",
    cover: "/projects/project-daipartners.png",
    highlight: true,
    showDetail: true,
  },
  {
    id: "bighead",
    title: {
      vi: "Website bán phụ kiện mô tô BigHead",
      en: "BigHead Motorcycle Parts Website",
    },
    timeframe: "2026",
    shortDesc: {
      vi: "Website bán phụ kiện mô tô, cho phép khách hàng khám phá đa dạng sản phẩm như mũ bảo hiểm, găng tay, đèn trợ sáng và đồ bảo hộ, đồng thời dễ dàng tìm kiếm, phân loại và đặt hàng trực tuyến.",
      en: "A website for selling motorcycle parts, allowing customers to explore a variety of products such as helmets, gloves, headlights, and protective gear, while easily searching, categorizing, and ordering online.",
    },
    clientName: "BigHead",
    clientAvatar: "/clients/client-bighead.png",
    liveUrl: "https://bighead-eight.vercel.app/",
    href: "/projects/bighead",
    cover: "/projects/project-bighead.png",
    highlight: false,
    showDetail: true,
  },
  {
    id: "katp",
    title: {
      vi: "Website salon tóc KATP",
      en: "KATP Hair Salon Website",
    },
    timeframe: "2025",
    shortDesc: {
      vi: "Website salon tóc nữ giúp khách hàng khám phá các dịch vụ làm tóc chuyên nghiệp như cắt, uốn, nhuộm và phục hồi tóc, đồng thời dễ dàng đặt lịch hẹn và tham khảo các mẫu tóc mới nhất.",
      en: "A website for a women's hair salon that helps customers discover professional hair services such as cutting, curling, dyeing, and hair restoration, while making it easy to book appointments and browse the latest hairstyles.",
    },
    clientName: "KATP",
    clientAvatar: "/clients/client-katp.png",
    liveUrl: "https://katp.vercel.app/",
    href: "/projects/katp",
    cover: "/projects/project-katp.png",
    highlight: false,
    showDetail: true,
  },
  {
    id: "tenjin",
    title: {
      vi: "Website marketing bất động sản Tenjin",
      en: "Tenjin Real Estate Marketing Website",
    },
    timeframe: "2025",
    shortDesc: {
      vi: "Website marketing bất động sản giúp giới thiệu các dự án, căn hộ và nhà đất nổi bật, cung cấp thông tin chi tiết, hình ảnh trực quan và hỗ trợ khách hàng đăng ký tư vấn hoặc liên hệ nhanh với đội ngũ chuyên viên.",
      en: "A real estate marketing website that showcases prominent projects, apartments, and houses, providing detailed information, visual images, and supporting customers in booking consultations or quickly contacting specialized teams.",
    },
    clientName: "Tenjin",
    clientAvatar: "/clients/client-tenjin.webp",
    liveUrl: "https://tenjin-agency.vercel.app/",
    href: "/projects/tenjin",
    cover: "/projects/project-tenjin.png",
    highlight: false,
    showDetail: true,
  },
];

/* ===================== Motion variants ===================== */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.86, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 24 },
  },
};

/* ===================== ProjectCard ===================== */
function ProjectCard({
  p,
  lang,
  ui,
}: {
  p: PersonalProject;
  lang: Lang;
  ui: (typeof UI)[Lang];
}) {
  const prefersReduced = useReducedMotion();
  const isClickable = p.showDetail !== false;

  const cardContent = (
    <Card className="group relative h-full rounded-2xl border-2 border-gray-300 bg-white/80 backdrop-blur transition-all dark:border-gray-700 dark:bg-neutral-900/80">
      <CardHeader className="space-y-3">
        <div className="min-w-0">
          <h3
            className={[
              "text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 line-clamp-2 transition-all",
              isClickable ? "group-hover:underline" : "",
            ].join(" ")}
          >
            {p.title[lang]}
          </h3>

          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            {p.timeframe && (
              <span className="inline-flex items-center gap-1">
                <CalendarDays className="h-4 w-4" /> {p.timeframe}
              </span>
            )}
            {p.clientName && (
              <span className="inline-flex items-center gap-1.5">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={p.clientAvatar}
                    alt={p.clientName}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-xs">
                    {p.clientName.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {p.clientName}
              </span>
            )}
            {p.highlight && (
              <motion.span
                className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400"
                animate={prefersReduced ? {} : { rotate: [0, -8, 6, -4, 2, 0] }}
                transition={{ duration: 0.8 }}
              >
                <Star className="h-4 w-4" /> {ui.featured}
              </motion.span>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {p.cover && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <motion.img
              src={p.cover}
              alt={p.title[lang]}
              className="w-full object-cover"
              initial={{ scale: 1.02 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </motion.div>
        )}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[16px] leading-relaxed text-slate-700 dark:text-slate-300"
        >
          {p.shortDesc[lang]}
        </motion.p>
      </CardContent>

      <CardFooter className="mt-2 flex items-center justify-between">
        <div className="text-[16px] text-slate-500 dark:text-slate-400">
          #{p.id}
        </div>
        {p.liveUrl && (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full bg-green-700 hover:bg-green-800 px-4 py-1.5 text-sm font-semibold text-white transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            {ui.viewSite}
          </a>
        )}
      </CardFooter>
    </Card>
  );

  return (
    <motion.div
      variants={popIn}
      whileHover={{
        y: prefersReduced ? 0 : -3,
        boxShadow:
          "0 10px 28px rgba(16,185,129,0.12), 0 4px 8px rgba(0,0,0,0.06)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="h-full"
    >
      {isClickable ? (
        <Link href={p.href} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}

/* ===================== Page ===================== */
export default function ProjectsPage() {
  const hydrated = useStoreHydrated();
  const raw = useLocaleStore((s) => s.locale);
  const lang: Lang = raw === "en" ? "en" : "vi";
  const ui = UI[lang];

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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            {ui.pageTitle}
          </h1>
          <p className="mt-4 text-black dark:text-white text-lg">
            {ui.pageDesc}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
        >
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} lang={lang} ui={ui} />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
