import React from 'react';
import { Mail, Phone, ArrowUp, Send, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="mt-28 border-t border-[#e6e6ec] bg-[#ffffff] pt-16 pb-12 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Creative "GOT SOMETHING IN MIND?" Callout (Inspired by Image 1) */}
        <div className="text-center space-y-4 relative py-6">
          
          {/* Hand-drawn blue curved doodle arrow on the right (like Image 1) */}
          <div className="hidden sm:block absolute right-16 md:right-28 top-4 text-sky-500 select-none pointer-events-none">
            <svg width="60" height="70" viewBox="0 0 60 70" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M 45 5 C 60 25, 45 45, 20 48" />
              <polyline points="30 42 18 48 26 58" />
            </svg>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-mono font-bold tracking-wider text-[#71717a] uppercase">
              Opportunity & Collaboration
            </span>
            <h3 className="font-marker text-3xl sm:text-4xl md:text-5xl text-[#111113] tracking-wide">
              GOT SOMETHING IN MIND?
            </h3>
          </div>

          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111113] hover:bg-black text-white font-bold text-sm sm:text-base rounded-2xl shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Get in touch (연락처 확인)</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="pt-8 border-t border-[#f0f0f3] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717a]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#111113]">{PERSONAL_INFO.name}</span>
            <span className="font-mono text-[#8e8e99]">({PERSONAL_INFO.englishName})</span>
            <span className="text-[#d4d4dc]">·</span>
            <span className="font-mono">{PERSONAL_INFO.email}</span>
            <span className="text-[#d4d4dc]">·</span>
            <span className="font-mono">{PERSONAL_INFO.phone}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#8e8e99]">
              © 2026 Park Sung Hyun. All rights reserved.
            </span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-[#f4f4f6] hover:bg-[#eaeaea] text-[#71717a] hover:text-[#111113] rounded-full transition-colors cursor-pointer"
              title="맨 위로 이동"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
