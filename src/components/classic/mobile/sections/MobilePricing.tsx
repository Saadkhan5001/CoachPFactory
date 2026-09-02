"use client";

import { useState } from "react";
import { User, Users, Dumbbell, Globe, Check, Zap } from "lucide-react";
import { ClassicMobileSectionHeading } from "../ClassicMobileSectionHeading";
import { ClassicMobileReveal } from "../ClassicMobileReveal";
import { PRICING_CATEGORIES, type PricingCategory } from "@/lib/classic-data";

const CATEGORY_ICON: Record<PricingCategory["key"], typeof User> = {
  solo: User,
  group: Users,
  build: Dumbbell,
  online: Globe,
};

/**
 * Mobile Packages section: dark background image + overlay behind
 * everything; heading → 4-category toggle (1-on-1 / Group / Bodybuilding /
 * Online) → the active category's package cards stacked full-width in
 * normal flow at natural height.
 *
 * IMPORTANT: this section is the sticky "held" element of a stack scene —
 * it must never gain `overflow: hidden` / `clip` / `transform` (an
 * overflow'd sticky ancestor silently kills the hold; proven in the
 * previous /classic implementation). The background layers below are
 * plain `background-image` fills, which cannot overflow, so no clipping
 * is needed. Category switches only change natural flow height, which
 * native CSS sticky recomputes on its own.
 */
export function MobilePricing() {
  const [activeKey, setActiveKey] = useState<PricingCategory["key"]>("solo");
  const active = PRICING_CATEGORIES.find((c) => c.key === activeKey)!;
  const Icon = CATEGORY_ICON[active.key];

  return (
    <section id="pricing" data-nav-theme="dark" className="relative bg-[#0f0f0f] pb-20" style={{ paddingTop: "72px" }}>
      <div
        className="absolute inset-0 bg-cover bg-left"
        style={{ backgroundImage: "url(/images/classic/pricing-bg.jpg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0b0d0e]/75" aria-hidden="true" />

      <div className="relative">
        <ClassicMobileSectionHeading
          label="Packages"
          subtitle="Every package is ten sessions. One-on-one packages include measurements, weight tracking, and a custom meal protocol with per-meal fat, protein and carb targets."
        >
          Pick <span className="cm-accent-text">Your Lane</span>
        </ClassicMobileSectionHeading>

        {/* Category toggle */}
        <div role="tablist" aria-label="Package types" className="mt-7 flex flex-wrap justify-center gap-2 px-5">
          {PRICING_CATEGORIES.map((cat) => {
            const selected = cat.key === activeKey;
            return (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveKey(cat.key)}
                className={`min-h-[42px] rounded-full px-5 text-[0.9rem] font-medium ${
                  selected
                    ? "bg-[#c01d18] text-white"
                    : "border border-white/15 bg-white/[0.06] text-white/70 active:bg-white/[0.12]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div key={active.key} className="mt-8 flex flex-col gap-4 px-5">
          {active.plans.map((plan, planIndex) => (
            <ClassicMobileReveal key={plan.name} delay={planIndex * 70}>
              <div className="relative rounded-3xl bg-black p-2.5">
                {plan.featured && (
                  <span className="absolute -top-3 right-5 z-10 flex items-center gap-1.5 rounded-full bg-[#c01d18] px-3 py-1.5 text-[0.78rem] font-semibold text-white">
                    <Zap className="h-3.5 w-3.5 fill-white" />
                    Best Value
                  </span>
                )}

                <div className="relative overflow-hidden rounded-[20px] bg-[#1c1c1c] p-6 text-white">
                  {/* Lane visual under a heavy scrim — texture without
                      costing the copy any contrast. */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${active.image})`, opacity: 0.32 }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#1c1c1c]/88 via-[#1c1c1c]/70 to-[#1c1c1c]/45"
                    aria-hidden="true"
                  />
                  <p className="relative text-[0.76rem] font-semibold uppercase tracking-[0.08em] text-[#ff5a54]">
                    {plan.window}
                  </p>
                  <div className="relative mt-2 flex items-center gap-2.5">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                    <h3 className="text-[1.25rem] font-semibold">{plan.name}</h3>
                  </div>
                  {/* Reserve three lines so price, total and button sit at the
                      same offset in every stacked card. */}
                  <p className="relative mt-3 min-h-[4.9em] text-[0.92rem] leading-relaxed text-white/70">{plan.body}</p>
                  <div className="relative mt-6 flex items-baseline gap-1">
                    <span className="text-[2.3rem] font-semibold leading-none">{plan.price}</span>
                    {plan.period && <span className="text-[0.95rem] text-white/55">{plan.period}</span>}
                  </div>
                  <p className="relative mt-2 text-[0.85rem] text-white/50">{plan.total ?? " "}</p>
                  <a
                    href="#contact"
                    className="relative mt-5 flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full bg-[#c01d18] px-5 text-[0.95rem] font-medium text-white active:bg-[#a91814]"
                  >
                    Get Started
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0f0f0f] text-white">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                        <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </a>
                </div>

                <ul className="space-y-3.5 px-4 py-5">
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
            </ClassicMobileReveal>
          ))}
        </div>

        <p className="mt-8 px-8 text-center text-[0.85rem] leading-relaxed text-white/50">{active.note}</p>
      </div>
    </section>
  );
}
