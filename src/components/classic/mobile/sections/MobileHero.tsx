import { MessageCircle } from "lucide-react";
import { ClassicMobileButton } from "../ClassicMobileButton";
import { ClassicMobileReveal } from "../ClassicMobileReveal";
import { CountUp } from "@/components/CountUp";
import { HERO_STATS } from "@/lib/classic-data";

/**
 * Mobile hero: a full-screen photo of the coach below the fixed header,
 * with the heading, a one-line intro and the two CTAs laid over the
 * bottom of the photo on a dark gradient. The two glass stat cards sit
 * just below the first screen. The white About panel's rounded edge
 * follows in normal flow.
 */
export function MobileHero() {
  return (
    <section id="top" data-nav-theme="dark" className="relative overflow-hidden bg-[#0f0f0f]">
      <div className="relative flex flex-col justify-end" style={{ minHeight: "100svh" }}>
        {/* The 1600×900 source is landscape with the athlete at ~63–86% of
            its width and his head ~5% from the top edge. The photo box starts
            below the fixed header so his head is never behind it, is
            height-fitted (`cover`) and anchored 86% / bottom so the full
            figure is centred in a phone-width frame. */}
        <div
          className="absolute inset-x-0 bottom-0 bg-cover bg-no-repeat"
          style={{
            top: "calc(var(--cm-header-h) + var(--cm-safe-top) + 24px)",
            backgroundImage: "url(/images/classic/hero-bg.jpeg)",
            backgroundPosition: "86% bottom",
          }}
          role="img"
          aria-label="Coach P in the gym"
        />
        {/* Bottom legibility gradient behind the copy. */}
        <div
          className="absolute inset-x-0 bottom-0 h-[62%]"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.55) 70%, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="relative px-5 pb-7">
          <ClassicMobileReveal delay={60} eager>
            <h1 className="cm-h-hero text-white">
              The Details Are the <span className="cm-accent-text">Difference</span>
            </h1>
          </ClassicMobileReveal>
          <ClassicMobileReveal delay={120} eager>
            <p className="mt-3 max-w-[34ch] text-[0.95rem] leading-relaxed text-white/75">
              People don&rsquo;t quit from laziness &mdash; they quit when results stall.
            </p>
          </ClassicMobileReveal>
          <ClassicMobileReveal delay={180} eager>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <ClassicMobileButton href="#pricing">See the Packages</ClassicMobileButton>
              <a
                href="#contact"
                aria-label="Chat with Coach P"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-full border border-white/35 bg-black/25 pl-4 pr-5 text-[0.95rem] font-medium text-white/90 backdrop-blur-sm active:bg-white/10"
              >
                <MessageCircle className="h-[17px] w-[17px]" strokeWidth={1.9} />
                Chat
              </a>
            </div>
          </ClassicMobileReveal>
        </div>
      </div>

      <div className="px-5 pt-2 pb-9">
        <ClassicMobileReveal delay={240}>
          <div className="grid grid-cols-2 gap-3">
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
