import { MonitorPlay, ArrowRight } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * The Academy — online training & education, from the copy doc. Lives at
 * the end of the dark services panel, after Reviews.
 */
export function Academy() {
  return (
    <div id="academy" className="mx-auto max-w-content-classic px-5 pt-24 pb-8 sm:pt-32 lg:px-6">
      <SectionHeading
        label="The Academy"
        subtitle="Built for people who can't get to the floor — and for anyone who wants the technique reference between sessions."
      >
        Train With Me <span className="text-[#c01d18]">From Anywhere</span>
      </SectionHeading>

      <div className="mx-auto mt-12 grid max-w-[1088px] gap-4 lg:grid-cols-2">
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-3xl bg-[#141414] p-7 sm:p-8">
            <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06]">
              <MonitorPlay className="h-5 w-5 text-white" strokeWidth={1.7} />
            </span>
            <h3 className="text-[1.4rem] font-semibold text-white">
              Online Training &amp; Education
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-white/60">
              The full library: movement demonstrations broken down the way
              they're coached in person, programming you can follow week to
              week, and the nutrition structure that makes the training work.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <article className="flex h-full flex-col rounded-3xl bg-[#141414] p-7 sm:p-8">
            <h3 className="text-[1.4rem] font-semibold text-white">
              Two Ways to Train Online
            </h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-white/60">
              <span className="font-medium text-white/85">Follow Along</span> —
              pre-recorded sessions you train alongside, every movement
              demonstrated the way it gets coached in person.{" "}
              <span className="font-medium text-white/85">Hold My Hand</span> —
              live virtual training with real-time coaching and corrections.
            </p>
            <div className="mt-auto pt-6">
              <a
                href="#pricing"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#c01d18] px-6 text-[0.95rem] font-medium text-white transition-[transform,background-color] hover:scale-[1.03] hover:bg-[#a91814]"
              >
                See the Online Packages
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </div>
  );
}
