"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/providers/theme-toggle";
import { Mail, Phone, Globe } from "lucide-react";
import { SiFacebook } from "react-icons/si";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

type Props = { onNavClick?: () => void; className?: string };

const i18n = {
  vi: {
    name: "Vưu Trường Nhật Thanh",
    title: "Lập trình viên TJZenn",
    cta: "Liên hệ với tôi",
    nav: {
      about: "Giới thiệu",
      experience: "Kinh nghiệm",
      startup: "Startup",
      projects: "Dự án đã thực hiện",
      achievements: "Thành tựu",
    },
    social: { facebook: "Facebook TJZenn", website: "Website TJZenn" },
    language: "Ngôn ngữ",
    viLabel: "Tiếng Việt",
    enLabel: "English",
    email: "contact.tjzenn@gmail.com",
    phone: "0812 303 471",
    location: "Biên Hòa, Đồng Nai",
  },
  en: {
    name: "Vuu Truong Nhat Thanh",
    title: "TJZenn Developer",
    cta: "Contact me",
    nav: {
      about: "About",
      experience: "Experience",
      startup: "Startup",
      projects: "Completed Projects",
      achievements: "Achievements",
    },
    social: { facebook: "Facebook TJZenn", website: "Website TJZenn" },
    language: "Language",
    viLabel: "Vietnamese",
    enLabel: "English",
    email: "contact.tjzenn@gmail.com",
    phone: "0812 303 471",
    location: "Bien Hoa, Dong Nai",
  },
} as const;

export default function SideMenu({ onNavClick, className }: Props) {
  const hydrated = useStoreHydrated();
  const { locale, setLocale } = useLocaleStore();
  const lang: "vi" | "en" = locale === "en" ? "en" : "vi";
  const t = i18n[lang];

  const pathname = usePathname();

  const navItems = [
    { id: "about", label: t.nav.about, href: "/" },
    // { id: "experience", label: t.nav.experience, href: "/experience" },
    // { id: "startup", label: t.nav.startup, href: "/startup" },
    { id: "projects", label: t.nav.projects, href: "/projects" },
    // { id: "achievements", label: t.nav.achievements, href: "/achievements" },
  ] as const;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside
      aria-busy={!hydrated}
      className={[
        className ??
          "sticky top-0 h-[100dvh] w-full lg:w-85 shrink-0 border-r bg-background/60 backdrop-blur p-4 lg:p-6 overflow-y-auto",
        "transition-opacity duration-200",
        hydrated ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      {/* Avatar + Name */}
      <div className="flex flex-col items-center">
        <Avatar className="h-36 w-30 border">
          <AvatarImage src="/avt2.jpg" alt="Avatar" className="object-cover" />
        </Avatar>

        <h1 className="mt-4 text-center text-lg font-semibold">{t.name}</h1>
        <p className="text-muted-foreground">{t.title}</p>
      </div>

      <Separator className="my-5" />

      {/* Big primary action */}
      <div className="flex justify-center">
        <Link href="/contact" className="w-full" onClick={onNavClick}>
          <Button
            className="w-full rounded-xl bg-green-700 hover:bg-green-800 text-white cursor-pointer"
            size="lg"
          >
            {t.cta}
          </Button>
        </Link>
      </div>

      <div className="mt-5 space-y-3">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              className="block"
              onClick={onNavClick}
              aria-current={active ? "page" : undefined}
            >
              <Button
                variant="outline"
                className={[
                  "w-full justify-center rounded-xl text-base cursor-pointer transition-colors",
                  "border-gray-300 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-neutral-800",
                  active
                    ? "bg-gray-200 dark:bg-neutral-800  dark:border-gray-700"
                    : "",
                ].join(" ")}
              >
                {item.label}
              </Button>
            </Link>
          );
        })}
      </div>

      {/* Social / Phone / Email */}
      <Card className="mt-5 rounded-2xl border-gray-300 dark:border-gray-800">
        <CardContent>
          <div className="grid grid-cols-1 gap-2">
            <p className="inline-flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4" /> {t.email}
            </p>
            <p className="inline-flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4" /> {t.phone}
            </p>
            <a
              className="inline-flex items-center gap-2 text-sm hover:underline"
              href="https://www.facebook.com/profile.php?id=61577630908608"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook className="h-4 w-4 text-[#1877F2]" />{" "}
              {t.social.facebook}
            </a>
            <a
              className="inline-flex items-center gap-2 text-sm hover:underline"
              href="https://tjzenn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="h-4 w-4" /> {t.social.website}
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Language */}
      <div className="mt-6 flex justify-center">
        <Select
          value={lang}
          onValueChange={(v) => setLocale(v as "vi" | "en")}
          disabled={!hydrated}
        >
          <SelectTrigger className="w-[160px] justify-center border-gray-300 dark:border-gray-700">
            <SelectValue placeholder={t.language} />
          </SelectTrigger>
          <SelectContent
            align="center"
            className="border-gray-200 dark:border-neutral-800 bg-background/95 backdrop-blur"
          >
            <SelectItem value="vi">
              <div className="flex items-center gap-2">
                <img
                  src="/language/vi.png"
                  alt="VN"
                  className="h-4 w-6 object-cover rounded-sm"
                />
                <span>{t.viLabel}</span>
              </div>
            </SelectItem>
            <SelectItem value="en">
              <div className="flex items-center gap-2">
                <img
                  src="/language/en.png"
                  alt="EN"
                  className="h-4 w-6 object-cover rounded-sm"
                />
                <span>{t.enLabel}</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4">
        <ThemeToggle />
      </div>
    </aside>
  );
}
