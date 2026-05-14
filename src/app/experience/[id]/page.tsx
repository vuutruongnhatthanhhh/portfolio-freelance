// app/experience/[id]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Building2, CalendarDays, ExternalLink } from "lucide-react";
import { experienceItems, getExperienceById } from "@/lib/experience-data";

// ✅ đọc locale & chống flicker
import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";
import CoverSlider from "@/components/experience/CoverSlider";

const TXT = {
  vi: {
    back: "Quay lại",
    notFound: "Không tìm thấy mục kinh nghiệm",
    checkPath: "Kiểm tra lại đường dẫn hoặc quay về trang",
    experience: "Kinh nghiệm",
    backToList: "Trang trước",
    overview: "Tổng quan",
    responsibilities: "Nhiệm vụ chính",
    achievements: "Kết quả nổi bật",
    contactCta: "Liên hệ để hợp tác",
  },
  en: {
    back: "Go back",
    notFound: "Experience not found",
    checkPath: "Please check the URL or return to",
    experience: "Experience",
    backToList: "Back to list",
    overview: "Overview",
    responsibilities: "Key responsibilities",
    achievements: "Key outcomes",
    contactCta: "Contact for collaboration",
  },
} as const;

export default function ExperienceDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const hydrated = useStoreHydrated();
  const raw = useLocaleStore((s) => s.locale);
  const lang: "vi" | "en" = raw === "en" ? "en" : "vi";
  const t = TXT[lang];

  const id = params?.id as string;
  const item = getExperienceById(id, lang);

  if (!item) {
    return (
      <main
        className={[
          "min-h-screen px-4 py-10 sm:px-8",
          "transition-opacity duration-200",
          hydrated ? "opacity-100" : "opacity-0",
        ].join(" ")}
        aria-busy={!hydrated}
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => router.back()}
              className="rounded-lg border-gray-300 dark:border-gray-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.back}
            </Button>
            <h1 className="text-xl font-semibold">{t.notFound}</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            {t.checkPath}{" "}
            <Link href="/experience" className="underline">
              {t.experience}
            </Link>
            .
          </p>
        </div>
      </main>
    );
  }

  const others = experienceItems[lang]
    .filter((x) => x.id !== item.id)
    .slice(0, 4);

  const normalizeCover = (c?: string | string[]) =>
    !c ? [] : Array.isArray(c) ? c : [c];

  const coverImages = normalizeCover(item.cover);

  return (
    <main
      className={[
        "min-h-screen px-4 py-10 sm:px-8",
        "transition-opacity duration-200",
        hydrated ? "opacity-100" : "opacity-0",
      ].join(" ")}
      aria-busy={!hydrated}
    >
      <article className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
              {item.title}
            </h1>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              {item.company && (
                <>
                  {item.companyUrl ? (
                    // ✅ có link: mở tab mới
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-slate-700 hover:underline dark:text-slate-300"
                      aria-label={`Open ${item.company} in new tab`}
                    >
                      <Building2 className="h-4 w-4" />
                      {item.company}
                      <ExternalLink className="ml-1 h-3.5 w-3.5 opacity-70" />
                    </a>
                  ) : (
                    // ✅ không có link: chỉ là text
                    <span className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300">
                      <Building2 className="h-4 w-4" />
                      {item.company}
                    </span>
                  )}
                  <span className="text-slate-300 dark:text-slate-700">|</span>
                </>
              )}

              <span className="inline-flex items-center gap-1 text-slate-700 dark:text-slate-300">
                <CalendarDays className="h-4 w-4" />
                {item.duration}
              </span>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-gray-200">
                {item.type}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/experience">
              <Button
                variant="outline"
                className="rounded-lg border-gray-300 dark:border-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.backToList}
              </Button>
            </Link>
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.stack.map((t) => (
            <Badge
              key={t}
              className="rounded-lg bg-green-700 text-white hover:bg-green-800 text-[14px]"
            >
              {t}
            </Badge>
          ))}
        </div>

        {!!coverImages.length && (
          <div className="mb-6">
            <CoverSlider images={coverImages} aspect="wide" />
          </div>
        )}

        {/* Responsibilities / Achievements */}
        <section className="grid gap-5 md:grid-cols-2">
          <Card className="rounded-2xl border-2 border-gray-300 dark:border-gray-700">
            <CardContent className="p-4">
              <h3 className="mb-3 text-base font-semibold">
                {t.responsibilities}
              </h3>

              <ul
                className="
        list-disc pl-5 space-y-2
        text-base text-slate-700 dark:text-slate-300
        marker:text-green-700 marker:text-base
      "
              >
                {item.responsibilities.map((x, i) => (
                  <li key={i} className="leading-relaxed">
                    {x}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {item.achievements?.length ? (
            <Card className="rounded-2xl border-2 border-gray-300 dark:border-gray-700">
              <CardContent className="p-4">
                <h3 className="mb-3 text-base font-semibold">
                  {t.achievements}
                </h3>

                <ul
                  className="
        list-disc pl-5 space-y-2
        text-base text-slate-700 dark:text-slate-300
        marker:text-green-700 marker:text-base
      "
                >
                  {item.achievements.map((x, i) => (
                    <li key={i} className="leading-relaxed">
                      {x}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : (
            <div />
          )}
        </section>

        {item.contentHtml && (
          <section className="mt-8">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
            </article>
          </section>
        )}

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/experience">
            <Button
              variant="outline"
              className="rounded-lg border-gray-300 dark:border-gray-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.backToList}
            </Button>
          </Link>
        </div>
      </article>
    </main>
  );
}
