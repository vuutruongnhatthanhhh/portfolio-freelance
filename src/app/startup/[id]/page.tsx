// app/projects/[id]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  ExternalLink,
  Github,
  Youtube,
} from "lucide-react";
import { experienceItems, getExperienceById } from "@/lib/startup-data";

// ✅ đọc locale & chống flicker
import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";
import CoverSlider from "@/components/experience/CoverSlider";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

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
    githubFE: "Front end",
    githubBE: "Back end",
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
    githubFE: "Front end",
    githubBE: "Back end",
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

  const hasTwoRepos = Boolean(item?.githubRepoFront && item?.githubRepoBack);
  const singleRepoHref =
    item?.githubRepo ?? item?.githubRepoFront ?? item?.githubRepoBack;

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
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
              {item.title}
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <Link href="/startup">
              <Button
                variant="outline"
                className="rounded-lg border-gray-300 dark:border-gray-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.backToList}
              </Button>
            </Link>
            {/* GitHub: 2 repo => dropdown; 1 repo => link thẳng */}
            {hasTwoRepos ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    title="GitHub"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-white bg-violet-500 hover:bg-violet-600 dark:border-gray-700"
                  >
                    <Github className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-[160px]">
                  <DropdownMenuItem asChild>
                    <a
                      href={item.githubRepoFront!}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.githubFE}
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href={item.githubRepoBack!}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.githubBE}
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              singleRepoHref && (
                <a
                  href={singleRepoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-white bg-violet-500 hover:bg-violet-600 dark:border-gray-700"
                >
                  <Github className="h-4 w-4" />
                </a>
              )
            )}

            {/* YouTube demo (nếu có) */}
            {item.youtube && (
              <a
                href={item.youtube}
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-white bg-violet-500 hover:bg-violet-600 dark:border-gray-700"
              >
                <Youtube className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {item.stack.map((t) => (
            <Badge
              key={t}
              className="rounded-xl bg-green-700 text-white hover:bg-green-800 text-[14px]"
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

        {item.contentHtml && (
          <section className="mt-8">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: item.contentHtml }} />
            </article>
          </section>
        )}

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link href="/startup">
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
