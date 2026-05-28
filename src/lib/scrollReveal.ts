const REVEAL_ATTR = "data-reveal";
const STATE_ATTR = "data-revealed";
const FALLBACK_MS = 3500;

export function initScrollReveal(): () => void {
  if (typeof window === "undefined") return () => {};

  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(`[${REVEAL_ATTR}]`),
  );

  elements.forEach((el) => {
    if (!el.hasAttribute(STATE_ATTR)) {
      el.setAttribute(STATE_ATTR, "false");
    }
    const delay = el.dataset.revealDelay;
    if (delay) el.style.transitionDelay = delay;
  });

  let observer: IntersectionObserver | null = null;
  if ("IntersectionObserver" in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute(STATE_ATTR, "true");
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((el) => observer?.observe(el));
  } else {
    elements.forEach((el) => el.setAttribute(STATE_ATTR, "true"));
  }

  const fallback = window.setTimeout(() => {
    document
      .querySelectorAll<HTMLElement>(`[${REVEAL_ATTR}][${STATE_ATTR}="false"]`)
      .forEach((el) => el.setAttribute(STATE_ATTR, "true"));
  }, FALLBACK_MS);

  return () => {
    observer?.disconnect();
    window.clearTimeout(fallback);
  };
}
