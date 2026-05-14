"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // theme sẽ là "light" | "dark" | "system" sau khi mounted
  const current = theme ?? resolvedTheme;

  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ] as const;

  return (
    <div className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full border border-gray-300 p-0.5 dark:border-gray-700">
      {options.map(({ value, icon: Icon, label }) => {
        const isActive = theme === value; // highlight đúng nút đã chọn (kể cả "system")
        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-pressed={isActive}
            aria-label={label}
            title={label}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600",
              isActive
                ? "bg-green-700 text-white hover:bg-green-800"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800"
            )}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
