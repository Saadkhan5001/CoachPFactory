"use client";

import { useEffect, useRef, useState } from "react";
import { User, Users, Dumbbell, Globe, Check, Zap } from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "@/components/Reveal";
import { PRICING_CATEGORIES, type PricingCategory } from "@/lib/classic-data";

const CATEGORY_ICON: Record<PricingCategory["key"], typeof User> = {
  solo: User,
  group: Users,
  build: Dumbbell,
  online: Globe,
};

export function Pricing() {
  const [activeKey, setActiveKey] = useState<PricingCategory["key"]>("solo");
  const active = PRICING_CATEGORIES.find((c) => c.key === activeKey)!;
  const Icon = CATEGORY_ICON[active.key];
  const mounted = useRef(false);

  // Category switches change the section's height; the desktop experience
  // pins panels with ScrollTrigger, so recompute its measurements.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [activeKey]);

  const threeUp = active.plans.length >= 3;

  return (
    <section
      id="pricing"
      data-nav-theme="dark"
      className="relative z-[3] overflow-hidden bg-dark-bg py-20 sm:py-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-left"
        style={{ backgroundImage: "url(/images/classic/pricing-bg.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0b0d0e]/75" aria-hidden="true" />

      <div className="relative">
        <SectionHeading label="Packages" className="px-5 sm:px-6" subtitle="Every package is ten sessions. One-on-one packages include measurements, weight tracking, and a custom meal protocol with per-meal fat, protein and carb targets.">
          Pick <span className="text-[#c01d18]">Your Lane</span>
        </SectionHeading>

        {/* Category toggle */}
        <div
          role="tablist"
          aria-label="Package types"
          className="mx-auto mt-10 flex flex-wrap justify-center gap-2 px-5"
        >
          {PRICING_CATEGORIES.map((cat) => {
            const selected = cat.key === activeKey;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveKey(cat.key)}
                className={`min-h-[42px] rounded-full px-6 text-[0.95rem] font-medium transition-colors ${
                  selected
                    ? "bg-[#c01d18] text-white"
                    : "border border-white/15 bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div
          key={active.key}
          className={`mx-auto mt-12 grid items-stretch gap-5 px-5 sm:grid-cols-2 lg:px-6 ${
            threeUp ? "max-w-[1200px] lg:grid-cols-3" : "max-w-[880px]"
          }`}
        >
          {active.plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.08} className="h-full">
              <div className="relative flex h-full flex-col rounded-[26px] bg-black p-2.5">
                {plan.featured && (
                  <span className="absolute -top-3 right-5 z-10 flex items-center gap-1.5 rounded-full bg-[#c01d18] px-3 py-1.5 text-[0.78rem] font-semibold text-white">
                    <Zap className="h-3.5 w-3.5 fill-white" />
                    Best Value
                  </span>
                )}

                {/* Header panel */}
                <div className="rounded-[20px] bg-dark-card p-6 text-white">
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[#ff5a54]">
                    {plan.window}
                  </p>
                  <div className="mt-2 flex items-center gap-2.5">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                    <h3 className="text-[1.25rem] font-semibold">{plan.name}</h3>
                  </div>
                  {/* Reserve three lines so price, total and button align across
                      every card in the row regardless of blurb length. */}
                  <p className="mt-3 min-h-[4.9em] text-[0.92rem] leading-relaxed text-white/60">
                    {plan.body}
                  </p>
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="text-[2.4rem] font-semibold leading-none">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-[0.95rem] text-white/55">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-2 text-[0.85rem] text-white/50">{plan.total ?? " "}</p>
                  <a
                    href="#contact"
                    className="mt-5 flex w-full justify-center sm:w-fit items-center gap-2 rounded-full bg-[#c01d18] px-5 py-2 text-[0.92rem] font-medium text-white transition-[transform,background-color] hover:scale-[1.03] hover:bg-[#a91814]"
                  >
                    Get Started
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f0f0f] text-white">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-3.5 px-5 py-6">
                  {plan.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          f.highlight ? "bg-[#c01d18] text-white" : "bg-white/10 text-white/70"
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={`text-[0.95rem] ${
                          f.highlight ? "font-medium text-[#ff5a54]" : "text-white/85"
                        }`}
                      >
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-9 max-w-[640px] px-5 text-center text-[0.88rem] leading-relaxed text-white/50">
          {active.note}
        </p>
      </div>

    </section>
  );
}
