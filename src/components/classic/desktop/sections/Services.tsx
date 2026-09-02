import { SectionHeading } from "../SectionHeading";
import { Reveal } from "@/components/Reveal";
import {
  STANDARD_DETAILS,
  STANDARD_PRINCIPLES,
  STANDARD_QUOTE,
} from "@/lib/classic-data";

/**
 * The Standard — the section that has to land the whole pitch: attention to
 * detail is the method, not a slogan.
 *
 * Deliberately typography-led rather than photo-led. Generic gym stock
 * imagery competed with the message and forced body copy onto busy
 * backgrounds; here the concrete specifics ("how you set your feet") carry
 * it, the three principles are numbered so the argument reads in order,
 * and Coach P's own quote closes it.
 */
export function Services() {
  return (
    <div id="services" className="mx-auto max-w-[1220px] px-5 pt-20 sm:pt-28 lg:px-6">
      <SectionHeading
        label="The Standard"
        subtitle="Attention to detail — not as a slogan, as the actual method. Get the small things right and everything downstream gets faster."
      >
        One Thing Separates This <span className="text-[#c01d18]">From the Rest</span>
      </SectionHeading>

      {/* The specifics — what "detail" actually means, in three concrete beats */}
      <Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/[0.08] sm:grid-cols-3">
          {STANDARD_DETAILS.map((detail) => (
            <div
              key={detail}
              className="flex items-center gap-3 bg-[#0f0f0f] px-6 py-5"
            >
              <span className="h-px w-6 shrink-0 bg-[#c01d18]" aria-hidden="true" />
              <span className="text-[0.95rem] font-medium text-white/85">{detail}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* The three principles */}
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {STANDARD_PRINCIPLES.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.08} className="h-full">
            <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-[#141414] p-7 transition-colors duration-300 hover:bg-[#181818] sm:p-8">
              {/* Ghosted numeral */}
              <span
                className="pointer-events-none absolute -right-2 -top-6 select-none text-[7rem] font-semibold leading-none text-white/[0.04]"
                aria-hidden="true"
              >
                {p.n}
              </span>

              <span className="relative text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#c01d18]">
                {p.label}
              </span>
              <h3 className="relative mt-4 text-[1.5rem] font-semibold leading-[1.15] text-white">
                {p.title}
              </h3>
              <p className="relative mt-3 text-[0.95rem] leading-relaxed text-white/60">
                {p.body}
              </p>

              {/* Accent rule that fills on hover — the "precision" motif */}
              <span
                className="relative mt-auto block h-[2px] w-10 bg-[#c01d18] transition-all duration-500 group-hover:w-20"
                aria-hidden="true"
              />
            </article>
          </Reveal>
        ))}
      </div>

      {/* Coach P's own words close the argument */}
      <Reveal delay={0.1}>
        <figure className="mt-4 overflow-hidden rounded-3xl border-l-[3px] border-[#c01d18] bg-[#141414] p-7 sm:p-9">
          <blockquote className="max-w-[46ch] text-[clamp(1.25rem,2.2vw,1.7rem)] font-semibold leading-[1.25] tracking-[-0.01em] text-white">
            &ldquo;{STANDARD_QUOTE.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-[0.82rem] font-medium uppercase tracking-[0.14em] text-white/45">
            {STANDARD_QUOTE.attribution}
          </figcaption>
        </figure>
      </Reveal>
    </div>
  );
}
