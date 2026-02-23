import React from "react";
import Logo from "./Logo";
import Marquee from "./Marquee";
import { FOOTER, AUTHOR } from "../siteContent";

const footerPhrases = FOOTER.phrases;

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-dark-900">
      {/* Footer marquee */}
      <Marquee items={footerPhrases} speed={25} size="md" />

      <div className="py-10 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-10 opacity-80" />
          </div>

          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} {AUTHOR.copyright}
          </p>

          <div className="flex gap-3">
            {FOOTER.socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-gray-400 transition-all duration-300 hover:border-white/15 hover:text-text-primary hover:bg-white/5"
                >
                  <Icon size={14} color="currentColor" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
