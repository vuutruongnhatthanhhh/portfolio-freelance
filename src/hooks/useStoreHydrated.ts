// src/hooks/useStoreHydrated.ts
"use client";
import { useEffect, useState } from "react";
import { useLocaleStore } from "@/stores/useLocaleStore";

export function useStoreHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Zustand persist API
    const unsub = (useLocaleStore.persist as any).onFinishHydration?.(() => {
      setHydrated(true);
    });
    // Lỡ đã hydrate trước đó (navigation nội bộ)
    const has = (useLocaleStore.persist as any).hasHydrated?.();
    if (has) setHydrated(true);

    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, []);

  return hydrated;
}
