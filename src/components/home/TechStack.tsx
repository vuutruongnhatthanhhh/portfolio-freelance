"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
  SiTypescript, SiJavascript, SiNodedotjs, SiNextdotjs, SiReact,
  SiTailwindcss, SiShadcnui, SiReactquery, SiZod, SiNestjs,
  SiMongodb, SiPostgresql, SiPrisma, SiSupabase, SiDocker,
  SiGithubactions, SiGooglecloud, SiEthereum, SiAntdesign, SiExpress,
  SiGit, SiCloudinary, SiRedux, SiSolidity, SiWeb3Dotjs, SiHiveBlockchain,
  SiMui, SiGitlab, SiTypeorm, SiRedis, SiSentry, SiGrafana,
  SiAmazonwebservices, SiGithub, SiDotnet, SiSharp, SiAngular,
  SiSequelize, SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { GiBearHead } from "react-icons/gi";
import { Wallet, FlaskConical, Network, Pickaxe } from "lucide-react";
import { useLocaleStore } from "@/stores/useLocaleStore";
import { useStoreHydrated } from "@/hooks/useStoreHydrated";

const brand: Record<string, { light: string; dark: string }> = {
  TypeScript: { light: "#3178C6", dark: "#3178C6" },
  JavaScript: { light: "#F7DF1E", dark: "#F7DF1E" },
  Python: { light: "#3776AB", dark: "#3776AB" },
  Java: { light: "#ED8B00", dark: "#ED8B00" },
  "Node.js": { light: "#339933", dark: "#339933" },
  "Next.js": { light: "#000000", dark: "#FFFFFF" },
  Reactjs: { light: "#1FA6E6", dark: "#1FA6E6" },
  TailwindCSS: { light: "#38BDF8", dark: "#38BDF8" },
  "shadcn/ui": { light: "#111827", dark: "#FFFFFF" },
  "Ant Design": { light: "#1677FF", dark: "#1677FF" },
  MUI: { light: "#007FFF", dark: "#007FFF" },
  "React Query": { light: "#FF4154", dark: "#FF4154" },
  Zod: { light: "#3068B7", dark: "#3068B7" },
  NestJS: { light: "#E0234E", dark: "#E0234E" },
  Express: { light: "#000000", dark: "#FFFFFF" },
  "ASP.NET Core": { light: "#512BD4", dark: "#A78BFA" },
  PostgreSQL: { light: "#4169E1", dark: "#4169E1" },
  MongoDB: { light: "#47A248", dark: "#47A248" },
  MySQL: { light: "#1677FF", dark: "#1677FF" },
  Prisma: { light: "#0C344B", dark: "#9AD7FF" },
  TypeORM: { light: "#FE0902", dark: "#FE0902" },
  Supabase: { light: "#3ECF8E", dark: "#3ECF8E" },
  "Upstash Redis": { light: "#00C07F", dark: "#00C07F" },
  AWS: { light: "#FF9900", dark: "#FF9900" },
  Docker: { light: "#2496ED", dark: "#2496ED" },
  "GitHub Actions": { light: "#2088FF", dark: "#2088FF" },
  Git: { light: "#F05032", dark: "#F05032" },
  GitHub: { light: "#181717", dark: "#FFFFFF" },
  GitLab: { light: "#FC6D26", dark: "#FC6D26" },
  Sentry: { light: "#362D59", dark: "#A78BFA" },
  Grafana: { light: "#F46800", dark: "#F46800" },
  "Google Cloud": { light: "#4285F4", dark: "#4285F4" },
  Cloudinary: { light: "#3448C5", dark: "#3448C5" },
  Redux: { light: "#764ABC", dark: "#764ABC" },
  Zustand: { light: "#000000", dark: "#FFFFFF" },
  Ethereum: { light: "#3C3C3D", dark: "#FFFFFF" },
  Solidity: { light: "#363636", dark: "#FFFFFF" },
  MetaMask: { light: "#F6851B", dark: "#F6851B" },
  "web3.js": { light: "#F16822", dark: "#F16822" },
  "Hyperledger Fabric": { light: "#2F3134", dark: "#2FCE98" },
  Ganache: { light: "#E4A951", dark: "#E4A951" },
  Truffle: { light: "#5E464D", dark: "#C9A87C" },
  "Sepolia Testnet": { light: "#627EEA", dark: "#8FA8F4" },
  "C#": { light: "#239120", dark: "#68D57F" },
  Angular: { light: "#DD0031", dark: "#DD0031" },
  "SQL Server": { light: "#CC2927", dark: "#FF6B6B" },
  "React Native": { light: "#61DAFB", dark: "#61DAFB" },
  "Spring Boot": { light: "#6DB33F", dark: "#6DB33F" },
};

const i18n = {
  vi: {
    badge: "Kỹ năng",
    categories: {
      "Ngôn ngữ": "Ngôn ngữ",
      Frontend: "Frontend",
      Backend: "Backend",
      Database: "Cơ sở dữ liệu",
      "Tool & DevOps": "Công cụ & DevOps",
      Cloud: "Cloud",
      State: "Quản lý state",
      Blockchain: "Blockchain",
    } as Record<string, string>,
  },
  en: {
    badge: "Skills",
    categories: {
      "Ngôn ngữ": "Languages",
      Frontend: "Frontend",
      Backend: "Backend",
      Database: "Database",
      "Tool & DevOps": "Tools & DevOps",
      Cloud: "Cloud",
      State: "State management",
      Blockchain: "Blockchain",
    } as Record<string, string>,
  },
} as const;

const DATA = [
  {
    category: "Ngôn ngữ",
    items: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Java", Icon: FaJava },
      { name: "C#", Icon: SiSharp },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "Reactjs", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Angular", Icon: SiAngular },
      { name: "React Native", Icon: SiReact },
      { name: "TailwindCSS", Icon: SiTailwindcss },
      { name: "shadcn/ui", Icon: SiShadcnui },
      { name: "Ant Design", Icon: SiAntdesign },
      { name: "MUI", Icon: SiMui },
    ],
  },
  {
    category: "State",
    items: [
      { name: "Redux", Icon: SiRedux },
      { name: "Zustand", Icon: GiBearHead },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "NestJS", Icon: SiNestjs },
      { name: "Express", Icon: SiExpress },
      { name: "ASP.NET Core", Icon: SiDotnet },
      { name: "Spring Boot", Icon: SiSpringboot },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "MySQL", Icon: GrMysql },
      { name: "SQL Server", Icon: SiSequelize },
      { name: "Prisma", Icon: SiPrisma },
      { name: "TypeORM", Icon: SiTypeorm },
      { name: "Upstash Redis", Icon: SiRedis },
    ],
  },
  {
    category: "Tool & DevOps",
    items: [
      { name: "Docker", Icon: SiDocker },
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "GitLab", Icon: SiGitlab },
      { name: "Sentry", Icon: SiSentry },
      { name: "Grafana", Icon: SiGrafana },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "Cloudinary", Icon: SiCloudinary },
      { name: "Supabase", Icon: SiSupabase },
      { name: "AWS", Icon: SiAmazonwebservices },
      { name: "Google Cloud", Icon: SiGooglecloud },
    ],
  },
  {
    category: "Blockchain",
    items: [
      { name: "Solidity", Icon: SiSolidity },
      { name: "web3.js", Icon: SiWeb3Dotjs },
      { name: "MetaMask", Icon: Wallet },
      { name: "Ethereum", Icon: SiEthereum },
      { name: "Hyperledger Fabric", Icon: SiHiveBlockchain },
      { name: "Ganache", Icon: FlaskConical },
      { name: "Truffle", Icon: Pickaxe },
      { name: "Sepolia Testnet", Icon: Network },
    ],
  },
] as const;

export default function TechStackShowcase() {
  const hydrated = useStoreHydrated();
  const { locale } = useLocaleStore();
  const lang: "vi" | "en" = locale === "en" ? "en" : "vi";
  const L = i18n[lang];

  return (
    <section
      aria-busy={!hydrated}
      className={[
        "mx-auto max-w-6xl px-4 md:px-6 py-6",
        "transition-opacity duration-200",
        hydrated ? "opacity-100" : "opacity-0",
      ].join(" ")}
    >
      <div className="space-y-5">
        <div className="space-y-5">
          {DATA.map((group) => (
            <div key={group.category}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {L.categories[group.category] ?? group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Chip key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({ item }: { item: { name: string; Icon: any } }) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const Icon = item.Icon as React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  const isDark = mounted ? (resolvedTheme ?? theme) === "dark" : false;
  const color = brand[item.name] ? (isDark ? brand[item.name].dark : brand[item.name].light) : "#64748B";

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted/70">
      <Icon className="shrink-0 text-sm" style={mounted ? { color } : undefined} />
      {item.name}
    </span>
  );
}
