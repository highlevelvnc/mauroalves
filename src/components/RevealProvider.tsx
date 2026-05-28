"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/lib/scrollReveal";

export function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);

  return <>{children}</>;
}
