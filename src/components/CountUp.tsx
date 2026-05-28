"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  durationMs?: number;
  className?: string;
};

const NUMERIC_RE = /^(\D*)(\d+(?:[.,]\d+)?)(\D*)$/;

export function CountUp({ value, durationMs = 1600, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const animatedRef = useRef(false);

  useEffect(() => {
    const match = value.match(NUMERIC_RE);
    if (!match) {
      setDisplay(value);
      return;
    }

    const [, prefix, numberPart, suffix] = match;
    const target = Number(numberPart.replace(",", "."));
    if (Number.isNaN(target)) {
      setDisplay(value);
      return;
    }

    setDisplay(`${prefix}0${suffix}`);

    if (!ref.current || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = target * eased;
              const rendered = Number.isInteger(target)
                ? Math.floor(current).toString()
                : current.toFixed(1).replace(".", ",");
              setDisplay(`${prefix}${rendered}${suffix}`);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
