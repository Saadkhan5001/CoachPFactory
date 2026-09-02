import { ClassicMobileSectionHeading } from "../ClassicMobileSectionHeading";
import { ClassicMobileReveal } from "../ClassicMobileReveal";
import {
  STANDARD_DETAILS,
  STANDARD_PRINCIPLES,
  STANDARD_QUOTE,
} from "@/lib/classic-data";

/**
 * Mobile "The Standard" — mirrors the desktop rebuild: concrete details
 * strip, three numbered principles, then Coach P's quote. Typography-led
 * rather than photo-led so the message reads on a small screen instead of
 * competing with stock imagery.
 */
export function MobileServices() {
  return (
    <div id="services" className="px-5 pb-16" style={{ paddingTop: "64px" }}>
      <ClassicMobileSectionHeading
        label="The Standard"
        subtitle="Attention to detail — not as a slogan, as the actual method. Get the small things right and everything downstream gets faster."
      >
        One Thing Separates This <span className="cm-accent-text">From the Rest</span>
      </ClassicMobileSectionHeading>

      {/* The specifics — what "detail" actually means */}
      <ClassicMobileReveal className="mt-9">
        <div className="overflow-hidden rounded-2xl bg-white/[0.08]">
          <div className="flex flex-col gap-px">
            {STANDARD_DETAILS.map((detail) => (
              <div key={detail} className="flex items-center gap-3 bg-[#0f0f0f] px-5 py-4">
                <span className="h-px w-5 shrink-0 bg-[#c01d18]" aria-hidden="true" />
                <span className="text-[0.92rem] font-medium text-white/85">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </ClassicMobileReveal>

      {/* The three principles */}
      <div className="mt-3.5 flex flex-col gap-3.5">
        {STANDARD_PRINCIPLES.map((p, i) => (
          <ClassicMobileReveal key={p.n} delay={i * 60}>
            <article className="relative overflow-hidden rounded-3xl bg-[#141414] p-6">
              <span
                className="pointer-events-none absolute -right-1 -top-4 select-none text-[5rem] font-semibold leading-none text-white/[0.04]"
                aria-hidden="true"
              >
                {p.n}
              </span>
              <span className="relative text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-[#c01d18]">
                {p.label}
              </span>
              <h3 className="relative mt-3 text-[1.3rem] font-semibold leading-[1.2] text-white">
                {p.title}
              </h3>
              <p className="relative mt-2.5 text-[0.92rem] leading-relaxed text-white/60">{p.body}</p>
              <span className="relative mt-5 block h-[2px] w-10 bg-[#c01d18]" aria-hidden="true" />
            </article>
          </ClassicMobileReveal>
        ))}
      </div>

      {/* Coach P's own words */}
      <ClassicMobileReveal delay={60} className="mt-3.5">
        <figure className="overflow-hidden rounded-3xl border-l-[3px] border-[#c01d18] bg-[#141414] p-6">
          <blockquote className="text-[1.15rem] font-semibold leading-[1.3] tracking-[-0.01em] text-white">
            &ldquo;{STANDARD_QUOTE.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-white/45">
            {STANDARD_QUOTE.attribution}
          </figcaption>
        </figure>
      </ClassicMobileReveal>
    </div>
  );
}
