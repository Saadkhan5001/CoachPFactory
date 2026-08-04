import "./classic.css";
import "./mobile.css";
import { ClassicResponsiveShell } from "@/components/classic/ClassicResponsiveShell";

/**
 * Coach P Factory — main (and only) route.
 *
 * Two fully separate, approved experiences, one mounted at a time by
 * ClassicResponsiveShell:
 *  - Desktop (fine pointer, >768px): src/components/classic/desktop/ —
 *    Lenis + GSAP counter-translate panel transitions (shared Motion.tsx).
 *  - Mobile / coarse pointer: src/components/classic/mobile/ — native
 *    scrolling, IntersectionObserver reveals, browser-native CSS-sticky
 *    section stacking. No GSAP, no Lenis.
 *
 * See CLASSIC_RESPONSIVE_HANDOVER.md for the architecture and QA guide.
 */
export default function Home() {
  return <ClassicResponsiveShell />;
}
