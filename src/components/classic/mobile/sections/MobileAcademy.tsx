import { MonitorPlay, ArrowRight } from "lucide-react";
import { ClassicMobileSectionHeading } from "../ClassicMobileSectionHeading";
import { ClassicMobileReveal } from "../ClassicMobileReveal";

/**
 * Mobile Academy — online training & education, from the copy doc.
 * Last block of the dark services panel, after Reviews.
 */
export function MobileAcademy() {
  return (
    <div id="academy" className="px-5 pb-16" style={{ paddingTop: "56px" }}>
      <ClassicMobileSectionHeading
        label="The Academy"
        subtitle="Built for people who can't get to the floor — and for anyone who wants the technique reference between sessions."
      >
        Train With Me <span className="cm-accent-text">From Anywhere</span>
      </ClassicMobileSectionHeading>

      <div className="mt-9 flex flex-col gap-3.5">
        <ClassicMobileReveal>
          <article className="rounded-3xl bg-[#141414] p-6">
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06]">
              <MonitorPlay className="h-5 w-5 text-white" strokeWidth={1.7} />
            </span>
            <h3 className="text-[1.25rem] font-semibold text-white">Online Training &amp; Education</h3>
            <p className="mt-2.5 text-[0.92rem] leading-relaxed text-white/60">
              The full library: movement demonstrations broken down the way they're coached in person, programming you
              can follow week to week, and the nutrition structure that makes the training work.
            </p>
          </article>
        </ClassicMobileReveal>

        <ClassicMobileReveal delay={60}>
          <article className="rounded-3xl bg-[#141414] p-6">
            <h3 className="text-[1.25rem] font-semibold text-white">Two Ways to Train Online</h3>
            <p className="mt-2.5 text-[0.92rem] leading-relaxed text-white/60">
              <span className="font-medium text-white/85">Follow Along</span> — pre-recorded sessions you train
              alongside, every movement demonstrated the way it gets coached in person.{" "}
              <span className="font-medium text-white/85">Hold My Hand</span> — live virtual training with real-time
              coaching and corrections.
            </p>
            <a
              href="#pricing"
              className="mt-5 inline-flex min-h-[46px] items-center gap-2 rounded-full bg-[#c01d18] px-6 text-[0.95rem] font-medium text-white active:bg-[#a91814]"
            >
              See the Online Packages
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>
        </ClassicMobileReveal>
      </div>
    </div>
  );
}
