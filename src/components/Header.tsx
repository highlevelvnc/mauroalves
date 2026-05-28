"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, WHATSAPP_URL, AGENCY } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-ink-50/85 backdrop-blur-md shadow-[0_1px_0_rgba(11,24,48,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between sm:h-20">
        <a
          href="#topo"
          className="flex items-center gap-3 text-navy-900"
          aria-label={`${AGENCY.name} — proposta`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-grad text-ink-50 font-display text-sm font-bold tracking-wider">
            HV
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.2em] sm:inline">
            {AGENCY.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Secções">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-700 transition hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden sm:inline-flex"
        >
          Falar no WhatsApp
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary sm:hidden px-4 py-2 text-xs"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
