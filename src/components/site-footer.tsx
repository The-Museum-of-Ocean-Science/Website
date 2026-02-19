import Image from "next/image";
import Link from "next/link";

import { navigation } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12 text-sm text-white/70">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">Museum of Ocean Science</div>
          <p className="max-w-sm text-white/70">
            An open-data climate research lab bridging the gap in ocean science.
          </p>
          <p className="text-xs text-white/50">© 2026 Museum of Ocean Science. All rights reserved.</p>
        </div>
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">Navigate</div>
          <div className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-xs uppercase tracking-[0.3em] text-white/50">Contact</div>
          <div className="space-y-2 text-white/70">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Email</p>
            <p className="text-sm">info@museumofoceansience.com</p>
            <p className="pt-2 text-xs uppercase tracking-[0.3em] text-white/50">Location</p>
            <p className="text-sm">Global</p>
          </div>
          <div className="pt-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5">
              <Image
                src="/assets/linkedin-logo.png"
                alt="LinkedIn"
                width={18}
                height={18}
                className="h-4 w-4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
