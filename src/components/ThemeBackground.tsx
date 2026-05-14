"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BackgroundGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="min-h-screen w-full">{children}</div>;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`min-h-screen w-full relative ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Grid Background */}
      {isDark ? (
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "#000000",
            backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
      `,
            backgroundSize: "30px 30px",
            backgroundPosition: "0 0",
          }}
        />
      ) : (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
            backgroundSize: "40px 40px",
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
