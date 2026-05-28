"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 220);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!visible) {
      setTip(false);
      return;
    }
    const show = window.setTimeout(() => setTip(true), 1200);
    const hide = window.setTimeout(() => setTip(false), 5200);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, [visible]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition ${
        visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
      }`}
      aria-hidden={!visible}
    >
      <span
        className="wa-tooltip hidden rounded-2xl bg-white px-4 py-2 text-xs font-semibold text-navy-900 shadow-card sm:block"
        data-visible={tip}
      >
        Fale connosco no WhatsApp
      </span>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-card ring-4 ring-white/70 transition hover:scale-105"
        style={{ background: "#25D366" }}
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.85 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.46-.83-2-.22-.54-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.03 5.33c-5.91 0-10.7 4.79-10.7 10.7 0 1.89.49 3.72 1.43 5.34L5.27 27l5.79-1.46c1.56.85 3.31 1.3 5.07 1.3 5.91 0 10.7-4.79 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57-2.02-2.02-4.71-3.14-7.57-3.14zm0 19.62c-1.56 0-3.09-.42-4.43-1.22l-.32-.19-3.43.87.92-3.34-.21-.34c-.89-1.41-1.36-3.04-1.36-4.7 0-4.89 3.98-8.86 8.86-8.86 2.37 0 4.59.92 6.27 2.6 1.67 1.67 2.6 3.9 2.6 6.27 0 4.89-3.98 8.86-8.86 8.86z" />
        </svg>
      </a>
    </div>
  );
}
