// app/projects/[id]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { experienceItems, getExperienceById } from "@/lib/projects-data";

import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";
import CoverSlider from "@/components/experience/CoverSlider";

const TXT = {
  vi: {
    back: "Quay lại",
    notFound: "Không tìm thấy dự án",
    checkPath: "Kiểm tra lại đường dẫn hoặc quay về trang",
    projects: "Dự án",
    backToList: "Trang trước",
    client: "Khách hàng",
    viewSite: "Xem ngay",
  },
  en: {
    back: "Go back",
    notFound: "Project not found",
    checkPath: "Please check the URL or return to",
    projects: "Projects",
    backToList: "Back to list",
    client: "Client",
    viewSite: "View site",
  },
} as const;

export default function ProjectDetailPage() {
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
            <Link href="/projects" className="underline">
              {t.projects}
            </Link>
            .
          </p>
        </div>
      </main>
    );
  }

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
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-5">
              {item.title}
            </h1>

            {/* Client info */}
            {item.clientName && (
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={item.clientAvatar}
                    alt={item.clientName}
                    className="object-cover"
                  />
                  <AvatarFallback className="text-xs">
                    {item.clientName.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium">{item.clientName}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-green-700 hover:bg-green-800 px-4 py-2 text-sm font-semibold text-white transition-colors"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {t.viewSite}
              </a>
            )}
            <Link href="/projects">
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
        <div className="mt-10">
          <Link href="/projects">
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
