import React from "react";
import { Code2, Heart } from "lucide-react";

export default function DeveloperFooter() {
  return (
    <footer className="relative py-20 px-6 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#000000] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Elegant divider line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#a6b1ff] to-transparent mb-16" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 gradient-text-shine">
              The Collectors' Dimension
            </h3>
            <p className="text-gray-400/90 text-sm font-light tracking-wide">
              Where passion meets collectibility
            </p>
          </div>

          {/* IMPORTANT: Developer credit - DO NOT REMOVE OR MODIFY */}
          <div className="flex items-center gap-4 text-gray-400">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
            <div className="flex flex-col items-center md:items-end gap-2 group">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 group-hover:text-[#a6b1ff] transition-colors duration-300" />
                <span className="text-sm">Developed by</span>
              </div>
              <a
                href="#"
                className="relative font-bold text-xl text-white transition-all duration-300"
              >
                {/* CH monogram placeholder - optional subtle logo */}
                <span className="relative z-10 hover:gradient-text-shine transition-all duration-500">
                  Chloe Hung
                </span>
                {/* Soft pastel glow on hover */}
                <span className="absolute inset-0 blur-xl bg-gradient-to-r from-[#a6b1ff] via-[#c7aff8] to-[#ffb585] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              </a>
              <p className="text-xs text-gray-500 tracking-wide">
                Creative Developer & Shopify Expert
              </p>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/20" />
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <span>© 2024 The Collectors' Dimension</span>
            <span className="text-white/20">•</span>
            <span>All rights reserved</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span>Crafted with</span>
            <Heart className="w-4 h-4 text-[#ffb585] fill-current glow-pulse" />
            <span>for collectors worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}