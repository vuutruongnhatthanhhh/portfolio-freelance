// app/startup/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Building2, CalendarDays, Globe } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

/* ===================== Types ===================== */
type StartupProject = {
  id: string;
  title: string;
  client: string;
  timeframe: string;
  shortDesc: string;
  tech: string[];
  href?: string;
  site?: string;
  logo?: string;
  icon?: string;
};
type Locale = "vi" | "en";

/* ===================== I18N UI text ===================== */
const TXT: Record<
  Locale,
  { pageTitle: string; subtitle: string; liveSite: string; viewDetails: string }
> = {
  vi: {
    pageTitle: "Startup",
    subtitle:
      "Một vài dự án startup tiêu biểu mà mình đã thực hiện — tối ưu hiệu năng, trải nghiệm người dùng",
    liveSite: "Xem website",
    viewDetails: "Xem chi tiết",
  },
  en: {
    pageTitle: "Startup",
    subtitle:
      "A selection of startup projects I delivered — optimized performance, great UX",
    liveSite: "Live site",
    viewDetails: "View details",
  },
};

/* ===================== Data theo ngôn ngữ ===================== */
const PROJECTS: Record<Locale, StartupProject[]> = {
  vi: [
    {
      id: "tjguard",
      title: "TJGuard - Phần mềm quản lý mật khẩu",
      client: "TJGuard",
      timeframe: "01.2026",
      shortDesc:
        "Quản lý và bảo vệ mật khẩu của cá nhân và doanh nghiệp một cách an toàn và hiệu quả.",
      tech: ["Next.js", "Supabase", "Tailwind CSS", "Payos", "Upstash Redis"],
      href: "/startup/tjguard",
      site: "https://tjguard.com",
      icon: "/freelance/tjguard.png",
    },
    {
      id: "tjzenn",
      title: "TJZenn - Dịch vụ thiết kế website và phần mềm",
      client: "TJZenn",
      timeframe: "05.2025",
      shortDesc:
        "Thiết kế và phát triển website – phần mềm theo nhu cầu riêng của từng khách hàng, tối ưu hiệu năng, bảo mật và trải nghiệm người dùng.",
      tech: ["Next.js", "Supabase", "Tailwind CSS"],
      // href: "/startup/tjzenn",
      site: "https://tjzenn.com",
      icon: "/freelance/tjzenn.png",
    },
  ],
  en: [
    {
      id: "tjguard",
      title: "TJGuard - Password manager",
      client: "TJGuard",
      timeframe: "01.2026",
      shortDesc:
        "Manage and protect passwords for individuals and businesses in a secure and efficient manner.",
      tech: ["Next.js", "Supabase", "Tailwind CSS", "Payos", "Upstash Redis"],
      href: "/startup/tjguard",
      site: "https://tjguard.com",
      icon: "/freelance/tjguard.png",
    },
    {
      id: "tjzenn",
      title: "TJZenn - Website and Software Design Services",
      client: "TJZenn",
      timeframe: "05.2025",
      shortDesc:
        "Design and develop bespoke websites and software tailored to each client's needs, optimized for performance, security, and user experience.",
      tech: ["Next.js", "Supabase", "Tailwind CSS"],
      // href: "/startup/tjzenn",
      site: "https://tjzenn.com",
      icon: "/freelance/tjzenn.png",
    },
  ],
};

/* ===================== Motion variants ===================== */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.86, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 24 },
  },
};

/* ===================== Sub components ===================== */
function TechChips({ tech }: { tech: string[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      className="flex flex-wrap gap-2"
    >
      {tech.map((t) => (
        <motion.div key={t} variants={popIn}>
          <Badge className="rounded-xl bg-green-700 text-white text-[14px]">
            {t}
          </Badge>
        </motion.div>
      ))}
    </motion.div>
  );
}

function StartupCard({
  p,
  ui,
}: {
  p: StartupProject;
  ui: { liveSite: string; viewDetails: string };
}) {
  const prefersReduced = useReducedMotion();
  const hasDetails = Boolean(p.href);

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
      <Card className="group relative h-full rounded-2xl border-2 border-gray-300 bg-white/80 backdrop-blur transition-all dark:border-gray-700 dark:bg-neutral-900/80">
        <CardHeader className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              {p.title}
            </h3>
            <Avatar className="h-9 w-9 ring-1 ring-gray-300 dark:ring-gray-700 bg-white dark:bg-neutral-800">
              {p.icon || p.logo ? (
                <AvatarImage
                  src={(p.icon ?? p.logo)!}
                  alt={`${p.client} icon`}
                  className="object-contain p-1"
                />
              ) : null}
              <AvatarFallback className="text-[11px]">
                {p.client.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300">
              <Building2 className="h-4 w-4" />
              {p.client}
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300">
              <CalendarDays className="h-4 w-4" />
              {p.timeframe}
            </span>
            {p.site && (
              <>
                <span className="text-slate-300 dark:text-slate-700">|</span>
                <motion.a
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300"
                  whileHover={{ x: prefersReduced ? 0 : 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="h-4 w-4" />
                  <span className="underline-offset-4 group-hover:underline">
                    {ui.liveSite}
                  </span>
                </motion.a>
              </>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[16px] leading-relaxed text-slate-700 dark:text-slate-300"
          >
            {p.shortDesc}
          </motion.p>
          <div className="space-y-1.5">
            <TechChips tech={p.tech} />
          </div>
        </CardContent>

        <CardFooter
          className={[
            "mt-2 flex items-center",
            hasDetails ? "justify-between" : "justify-start",
          ].join(" ")}
        >
          <div className="text-slate-500 dark:text-slate-400">#{p.id}</div>

          {hasDetails && (
            <Link href={p.href!} className="inline-flex">
              <motion.div whileHover={{ x: prefersReduced ? 0 : 2 }}>
                <Button
                  className="rounded-lg bg-green-700 px-3 py-1.5 text-white hover:bg-green-800"
                  size="sm"
                >
                  {ui.viewDetails}
                </Button>
              </motion.div>
            </Link>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

/* ===================== Page ===================== */
export default function StartupPage() {
  const hydrated = useStoreHydrated();
  const raw = useLocaleStore((s) => s.locale);
  const lang: Locale = raw === "en" ? "en" : "vi";
  const ui = TXT[lang];
  const data = PROJECTS[lang];

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
            {ui.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          className="grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]"
        >
          {data.map((p) => (
            <StartupCard
              key={p.id}
              p={p}
              ui={{ liveSite: ui.liveSite, viewDetails: ui.viewDetails }}
            />
          ))}
        </motion.div>
      </section>
    </main>
  );
}
