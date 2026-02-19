"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/lib/content";

function renderLabel(label: string, disabled?: boolean) {
  if (!disabled) return label;
  const cleaned = label.replace(" (Coming Soon)", "");
  return (
    <span className="flex flex-col items-end leading-tight">
      <span className="whitespace-nowrap">{cleaned}</span>
      <span className="text-[10px] text-white/50">(Coming Soon)</span>
    </span>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 z-30 w-full">
      <div className="mx-auto flex w-full max-w-6xl items-start justify-between gap-8 px-6 py-6">
        <Link href="/" className="flex items-center text-white">
          <Image
            src="/assets/logo.png"
            alt="Museum of Ocean Science"
            width={260}
            height={260}
            className="h-40 w-40 object-contain logo-right-edge-fade"
            priority
          />
        </Link>
        <div className="relative -mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="group inline-flex h-14 w-14 items-center justify-center text-white/80 hover:text-white"
            style={{ fontFamily: "var(--font-display)" }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <span className="text-3xl leading-none">×</span>
            ) : (
              <span className="text-3xl leading-none">☰</span>
            )}
          </button>
          {open && (
            <div className="absolute right-full mr-px top-4 z-40 w-max rounded-xl border border-white/25 bg-black/45 px-3 py-3 text-right text-white/95 backdrop-blur">
              <div className="flex flex-col gap-2">
                {navigation.map((item) =>
                  item.disabled ? (
                    <span
                      key={item.label}
                      className="font-display text-[12px] tracking-[0.12em] text-white/60 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]"
                      style={{ fontFamily: "var(--font-display)" }}
                      aria-disabled
                    >
                      {renderLabel(item.label, true)}
                    </span>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="font-display text-[12px] tracking-[0.12em] text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)] hover:text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                      onClick={() => setOpen(false)}
                    >
                      {renderLabel(item.label, false)}
                    </Link>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
