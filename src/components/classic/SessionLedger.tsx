"use client";

import { useState } from "react";

const TOTAL_SESSIONS = 10;
const CYCLE_DAYS = 30;

/**
 * Interactive demo of the package balance / check-in system — the copy
 * doc's signature "ledger" element, restyled for the classic design.
 * Shared by the desktop and mobile experiences: pure client state, no
 * scroll coupling, so it is safe inside GSAP panels and sticky stacks.
 */
export function SessionLedger() {
  const [used, setUsed] = useState(0);
  const [dayOffset, setDayOffset] = useState(0);

  const remaining = TOTAL_SESSIONS - used;
  const daysLeft = Math.max(0, CYCLE_DAYS - dayOffset);
  const message =
    used === 0
      ? ""
      : remaining === 0
        ? "Package complete. Time to renew."
        : `Checked in — ${remaining} session${remaining === 1 ? "" : "s"} left.`;

  const checkIn = () => {
    setUsed((u) => Math.min(TOTAL_SESSIONS, u + 1));
    setDayOffset((d) => Math.min(CYCLE_DAYS, d + 3));
  };

  const reset = () => {
    setUsed(0);
    setDayOffset(0);
  };

  return (
    <div className="rounded-3xl bg-[#141414] p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-6">
        <div>
          <p className="text-[0.82rem] font-medium uppercase tracking-[0.08em] text-white/50">
            Sessions Remaining
          </p>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-[3.4rem] font-semibold leading-none text-[#c01d18] tabular-nums sm:text-[4rem]">
              {remaining}
            </span>
            <span className="max-w-[110px] text-[0.82rem] leading-snug text-white/55">
              of {TOTAL_SESSIONS} in this cycle
            </span>
          </div>
        </div>
        <div className="min-w-[210px] flex-1 sm:max-w-[320px]">
          <p className="text-[0.82rem] font-medium uppercase tracking-[0.08em] text-white/50">
            Cycle Expires
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#c01d18] transition-[width] duration-500"
              style={{ width: `${(daysLeft / CYCLE_DAYS) * 100}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-[0.8rem] text-white/55">
            <span>
              {daysLeft} day{daysLeft === 1 ? "" : "s"} left
            </span>
            <span>{used} used</span>
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {Array.from({ length: TOTAL_SESSIONS }, (_, i) => {
          const isUsed = i < used;
          return (
            <div
              key={i}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border text-[0.85rem] transition-all duration-300 sm:h-11 sm:w-11 ${
                isUsed
                  ? "-rotate-6 scale-90 border-[#c01d18] bg-[#c01d18]/15 text-[#ff5a54] opacity-80"
                  : "border-white/20 text-white/75"
              }`}
            >
              {isUsed ? "✕" : i + 1}
            </div>
          );
        })}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={checkIn}
          disabled={remaining === 0}
          className="flex min-h-[44px] items-center justify-center rounded-full bg-[#c01d18] px-6 text-[0.95rem] font-medium text-white transition-[transform,background-color,opacity] hover:scale-[1.03] hover:bg-[#a91814] disabled:scale-100 disabled:opacity-40 disabled:hover:bg-[#c01d18]"
        >
          Check In
        </button>
        <button
          type="button"
          onClick={reset}
          className="flex min-h-[44px] items-center justify-center rounded-full border border-white/20 px-6 text-[0.95rem] font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
        >
          Reset Demo
        </button>
        <span className="min-h-[1.2em] text-[0.88rem] text-[#ff5a54]">{message}</span>
      </div>

      <p className="mt-5 text-[0.8rem] text-white/40">
        Interactive demo — this is how your package balance works after you buy.
        Check in at the door, watch the balance update.
      </p>
    </div>
  );
}
