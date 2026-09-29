"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** Stagger delay in ms, applied to the transition only. */
  delay?: number;
  className?: string;
  /** Reveal on mount instead of on scroll — for above-the-fold content
      (e.g. the hero) that may sit inside the observer's bottom margin. */
  eager?: boolean;
};

/**
 * One-shot IntersectionObserver reveal for /classic-mobile interior
 * content. Hidden state lives in mobile-v2.css behind
 * `@media (scripting: enabled)` so no-JS visitors always see content.
 * Never wrap `.cm-stack` / `.cm-stack-held` / `.cm-stack-riser` in this —
 * a transformed ancestor silently breaks sticky positioning.
 */
export function ClassicMobileReveal({ children, delay = 0, className = "", eager = false }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    if (eager) {
      // Next task, so the hidden state paints first and the transition runs.
      const t = window.setTimeout(() => setShown(true), 30);
      return () => window.clearTimeout(t);
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  return (
    <div
      ref={ref}
      className={`cm-reveal ${shown ? "cm-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
