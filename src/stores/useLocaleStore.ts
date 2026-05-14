// src/stores/useLocaleStore.ts
"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Locale = "vi" | "en";

type State = {
  locale: Locale;
};

type Actions = {
  setLocale: (next: Locale | "vie" | string) => void;
  toggleLocale: () => void;
};

const normalize = (l: string | null | undefined): Locale => {
  const s = (l ?? "").toLowerCase();
  if (s === "en") return "en";
  // gom tất cả biến thể của tiếng Việt về "vi"
  if (s === "vi" || s === "vie" || s === "vn" || s.startsWith("vi-"))
    return "vi";
  return "vi";
};

const systemDefault = (): Locale => {
  if (typeof navigator !== "undefined") {
    const lang =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      "vi";
    return normalize(lang);
  }
  return "vi";
};

export const useLocaleStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      locale: systemDefault(),
      setLocale: (next) => set({ locale: normalize(next) }),
      toggleLocale: () => set({ locale: get().locale === "vi" ? "en" : "vi" }),
    }),
    {
      name: "app-locale",
      version: 2,
      storage: createJSONStorage(() => localStorage),
      // migrate các bản cũ có giá trị "vie" -> "vi"
      migrate: (persistedState: any, persistedVersion) => {
        if (persistedState?.locale) {
          persistedState.locale = normalize(persistedState.locale);
        }
        return persistedState as State;
      },
      partialize: (state) => ({ locale: state.locale }),
    }
  )
);

// tiện hơn khi import:
export const useLocale = () => useLocaleStore((s) => s.locale);
export const useSetLocale = () => useLocaleStore((s) => s.setLocale);
