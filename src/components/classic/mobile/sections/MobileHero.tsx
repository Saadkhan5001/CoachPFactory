import { MessageCircle } from "lucide-react";
import { ClassicMobileButton } from "../ClassicMobileButton";
import { ClassicMobileReveal } from "../ClassicMobileReveal";
import { CountUp } from "@/components/CountUp";
import { HERO_STATS } from "@/lib/classic-data";

/**
 * Mobile hero, per the reference recording: ~75% viewport-height image
 * (subject right, text left-aligned), pill label, heading, paragraph,
 * CTA, then two glass stat cards side by side. The white About panel's
 * rounded edge peeks below in normal flow.
 */
export function MobileHero() {
  return (
    <section id="top" data-nav-theme="dark" className="relative flex flex-col justify-end overflow-hidden bg-[#0f0f0f]" style={{ minHeight: "78svh" }}>
      {/* Mobile framing: the source is a wide 1600×837 landscape with the
          athlete at ~63–92% of its width and his head almost touching the top
          edge. Plain `cover` height-fits it, so a phone shows only a ~37%-wide
          slice — at the old 62% anchor the face/right arm were cut by the
          window edge and the head sat behind the fixed header. Instead:
          size slightly under height-cover (auto 88%), anchor bottom so the
          figure gains headroom below the header, and anchor 80% so the full
          body sits inside the right half of the frame. The band above the
          image blends into the section's #0f0f0f via the top gradient. */}
      <div
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: "url(/images/classic/hero-bg.png)",
          backgroundSize: "auto 88%",
          backgroundPosition: "84% bottom",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0f0f0f] to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" aria-hidden="true" />

      <div className="relative px-5 pb-9" style={{ paddingTop: "calc(var(--cm-header-h) + 40px)" }}>
        {/* Heading + paragraph are width-capped so they stack on the left
            and keep the athlete (right side of the frame) fully visible. */}
        <ClassicMobileReveal delay={60}>
          <h1 className="cm-h-hero mt-4 max-w-[7.2em] text-white">
            The Details Are the <span className="cm-accent-text">Difference</span>
          </h1>
        </ClassicMobileReveal>
        <ClassicMobileReveal delay={120}>
          <p className="mt-4 max-w-[26ch] text-[0.95rem] leading-relaxed text-white/75">
            People don&rsquo;t quit from laziness &mdash; they quit when results stall. Form-focused coaching means
            fewer injuries, less wasted effort, and a body that responds.
          </p>
        </ClassicMobileReveal>
        <ClassicMobileReveal delay={180}>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ClassicMobileButton href="#pricing">See the Packages</ClassicMobileButton>
            <a
              href="#contact"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/35 bg-black/25 pl-4 pr-5 text-[0.95rem] font-medium text-white/90 backdrop-blur-sm active:bg-white/10"
            >
              <MessageCircle className="h-[17px] w-[17px]" strokeWidth={1.9} />
              Chat with Coach P
            </a>
          </div>
        </ClassicMobileReveal>

        <ClassicMobileReveal delay={240}>
          <div className="mt-7 grid grid-cols-2 gap-3">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 backdrop-blur-md"
              >
                <CountUp
                  value={Number(stat.value)}
                  suffix={stat.suffix}
                  className="text-[1.9rem] font-semibold leading-none text-white"
                  suffixClassName="text-[#c01d18]"
                />
                <p className="mt-1.5 text-[0.82rem] text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </ClassicMobileReveal>
      </div>
    </section>
  );
}
