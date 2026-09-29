import { MessageCircle } from "lucide-react";
import { PrimaryButton } from "../PrimaryButton";
import { StatCard } from "../StatCard";
import { Reveal } from "@/components/Reveal";
import { HERO_STATS } from "@/lib/classic-data";

export function Hero() {
  return (
    <section
      id="top"
      data-nav-theme="dark"
      className="relative z-[1] min-h-[100svh] w-full overflow-hidden bg-[#121212]"
    >
      {/* Photographic background. The 1600×900 source has his head ~5%
          from the top edge, so plain `cover` put it behind the fixed
          header (and cropped it on wide screens). Instead the photo box
          is sized to the section height minus a header clearance and
          anchored bottom at 80% horizontally, so the full figure always
          sits below the nav. Its top/side edges are feathered into the
          dark section background, which matches the photo's dark wall. */}
      <div
        className="absolute bottom-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/images/classic/hero-bg.jpeg)",
          height: "calc(100% - 110px)",
          aspectRatio: "1600 / 900",
          left: "80%",
          transform: "translateX(-80%)",
          maskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent), linear-gradient(to bottom, transparent, #000 4%)",
          maskComposite: "intersect",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent), linear-gradient(to bottom, transparent, #000 4%)",
          WebkitMaskComposite: "source-in",
        }}
        aria-hidden="true"
      />
      {/* Left legibility gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,20,20,0.53) 0%, rgba(8,20,20,0.31) 34%, rgba(8,20,20,0.07) 65%, rgba(8,20,20,0.07) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Bottom gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 52%, rgba(0,0,0,0.10) 72%, rgba(0,0,0,0.45) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[100svh] w-[min(calc(100%_-_40px),1120px)] flex-col pt-[112px] pb-8 md:block md:w-[min(calc(100%_-_48px),1120px)] md:pt-[138px]">
        <div className="w-full" style={{ maxWidth: 760 }}>
          <Reveal delay={0.12}>
            <h1 className="mt-5 max-w-[672px] text-[clamp(44px,12vw,60px)] font-medium leading-[0.98] tracking-[-0.045em] text-[#f3f4f2] md:mt-[28px] md:text-[72px] md:leading-none">
              The Details Are
              <br />
              the <span className="text-[#c01d18]">Difference</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-[520px] text-[15px] font-normal leading-[1.45] tracking-[-0.015em] text-white/[0.91] md:mt-[28px] md:text-[16px] md:leading-[1.3]">
              People don’t quit from laziness - they quit when results stall.
              Form-focused coaching means fewer injuries, less wasted effort,
              and a body that responds.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-7 flex flex-wrap items-center gap-3 md:mt-[39px]">
              <PrimaryButton
                size="lg"
                href="#pricing"
                className="h-[42px] w-[212px] gap-2 py-0 pl-[18px] pr-1 text-[16px] font-medium leading-none shadow-[0_0_0_1px_rgba(255,255,255,0.20),0_4px_14px_rgba(0,0,0,0.12)] [&>span:last-child]:h-8 [&>span:last-child]:w-8"
              >
                See the Packages
              </PrimaryButton>
              <a
                href="#contact"
                className="inline-flex h-[42px] items-center gap-2 rounded-full border border-white/35 bg-black/20 pl-5 pr-6 text-[16px] font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.9} />
                Chat with Coach P
              </a>
            </div>
          </Reveal>
        </div>

        {/* Stats anchor to the section bottom (original composition); on
            viewports too short to fit hero copy + anchored stats they fall
            back into normal flow so they never overlap the CTA. */}
        <Reveal
          delay={0.4}
          className="mt-8 md:absolute md:bottom-[102px] md:left-0 md:mt-0 md:[@media(max-height:800px)]:static md:[@media(max-height:800px)]:mt-10"
        >
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-[14px]">
            {HERO_STATS.map((s) => (
              <StatCard
                key={s.label}
                value={Number(s.value)}
                suffix={s.suffix}
                label={s.label}
                className="w-full md:w-[228px]"
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
