import { Bone } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "@/components/Reveal";

function AvocadoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M12 22c-4 0-7-3.2-7-7.5C5 9 8 3 12 2c4 1 7 7 7 12.5 0 4.3-3 7.5-7 7.5Z" />
      <circle cx="12" cy="15" r="2.6" />
    </svg>
  );
}

export function Services() {
  return (
    <div id="services" className="mx-auto max-w-[1220px] px-5 pt-20 sm:pt-28 lg:px-6">
      <SectionHeading label="The Standard" subtitle="Attention to detail — not as a slogan, as the actual method. How you set your feet, where the load sits, what your last three inches of range look like. Get those right and everything downstream gets faster.">
        One Thing Separates This <span className="text-[#c01d18]">From the Rest</span>
      </SectionHeading>

      <div className="mt-12 grid gap-4 lg:h-[540px] lg:grid-cols-2">
        {/* Big left card */}
        <Reveal className="h-full min-h-0">
          <article className="relative flex h-full min-h-[360px] flex-col justify-end overflow-hidden rounded-[26px] lg:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.2s] ease-out hover:scale-105"
              style={{ backgroundImage: "url(/images/classic/svc-strength.jpg)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            <div className="relative p-7 text-center sm:p-9 lg:px-8 lg:pb-8">
              <h3 className="h-card-lg text-white">Form Is Coached, Not Assumed</h3>
              <p className="mx-auto mt-3 max-w-sm text-[0.95rem] leading-relaxed text-white/70">
                Every exercise gets corrected in real time. The better you
                execute a movement, the more efficiently the body responds —
                and the sooner you see it in the mirror.
              </p>
            </div>
          </article>
        </Reveal>

        <div className="grid min-h-0 gap-4 lg:h-full lg:grid-rows-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Wide conditioning card */}
          <Reveal delay={0.06} className="h-full min-h-0">
            <article className="relative flex h-full min-h-[300px] items-end overflow-hidden rounded-[26px] bg-dark-card2 sm:min-h-[220px] sm:items-center lg:min-h-0">
              <div
                className="absolute inset-0 bg-cover bg-center sm:inset-y-0 sm:left-auto sm:right-0 sm:w-[48%]"
                style={{ backgroundImage: "url(/images/classic/svc-conditioning.jpg)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-card2 via-dark-card2/80 to-transparent sm:bg-gradient-to-r" />
              <div className="relative max-w-full p-7 sm:max-w-[52%] sm:p-8 lg:p-7">
                <h3 className="text-[1.35rem] font-semibold text-white">Fast, the Honest Way</h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-white/65">
                  The goal is to get you to results before frustration wins —
                  without shortcuts. Efficient work beats extra work every time.
                </p>
              </div>
            </article>
          </Reveal>

          {/* Bottom two small cards */}
          <Reveal delay={0.12} className="h-full min-h-0">
            <div className="grid h-full min-h-0 grid-cols-2 gap-4">
              <article className="flex h-full min-h-[210px] flex-col items-center justify-center rounded-[26px] bg-dark-card2 p-6 text-center lg:min-h-0">
                <span className="mb-4 flex h-11 w-11 items-center justify-center">
                  <Bone className="h-7 w-7 text-white" strokeWidth={1.6} />
                </span>
                <h3 className="text-[1.15rem] font-semibold text-white">Injuries End Programs</h3>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-white/60">
                  Sloppy reps are how people get hurt and disappear for six
                  weeks. Precision keeps you in the gym long enough to change.
                </p>
              </article>

              <article className="relative flex h-full min-h-[210px] flex-col items-center justify-center overflow-hidden rounded-[26px] p-6 text-center lg:min-h-0">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url(/images/classic/svc-nutrition.jpg)" }}
                />
                <div className="absolute inset-0 bg-black/55" />
                <span className="relative mb-4 flex h-11 w-11 items-center justify-center">
                  <AvocadoIcon className="h-7 w-7 text-white" />
                </span>
                <h3 className="relative text-[1.15rem] font-semibold text-white">Meal Protocols Included</h3>
                <p className="relative mt-2 text-[0.88rem] leading-relaxed text-white/70">
                  Custom per-meal fat, protein and carb targets, set to how many
                  meals a day you actually eat.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
