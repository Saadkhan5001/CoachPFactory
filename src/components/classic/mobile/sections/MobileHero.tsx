import { MessageCircle } from "lucide-react";
import { ClassicMobileButton } from "../ClassicMobileButton";
import { ClassicMobileReveal } from "../ClassicMobileReveal";
import { CountUp } from "@/components/CountUp";
import { HERO_STATS } from "@/lib/classic-data";

/**
 * Mobile hero: the coach photo in its own band directly below the fixed
 * header, then heading, paragraph, CTAs and two glass stat cards. The
 * white About panel's rounded edge peeks below in normal flow.
 */
export function MobileHero() {
  return (
    <section id="top" data-nav-theme="dark" className="relative overflow-hidden bg-[#0f0f0f]">
      {/* The 1600×900 source is landscape with the athlete at ~63–86% of
          its width and his head ~5% from the top edge. On a phone any text
          laid over the photo lands on his face/body, and a full-height
          background puts his head behind the fixed header. So the photo
          gets its own band that starts below the header, is height-fitted
          and anchored right so the whole figure (head to shoes) is in frame
          and nothing overlaps him. Only the band's bottom edge is feathered
          into the section background. */}
      <div style={{ paddingTop: "calc(var(--cm-header-h) + 24px)" }}>
        <div
          className="bg-cover bg-no-repeat"
          style={{
            height: "clamp(340px, 46svh, 520px)",
            backgroundImage: "url(/images/classic/hero-bg.jpeg)",
            backgroundPosition: "right bottom",
            maskImage: "linear-gradient(to bottom, #000 94%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 94%, transparent)",
          }}
          role="img"
          aria-label="Coach P in the gym"
        />
      </div>

      <div className="relative px-5 pb-9">
        <ClassicMobileReveal delay={60}>
          <h1 className="cm-h-hero mt-6 text-white">
            The Details Are the <span className="cm-accent-text">Difference</span>
          </h1>
        </ClassicMobileReveal>
        <ClassicMobileReveal delay={120}>
          <p className="mt-4 max-w-[34ch] text-[0.95rem] leading-relaxed text-white/75">
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
