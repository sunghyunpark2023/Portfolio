import React from 'react';
import { Mail, Printer, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TopBarProps {
  onOpenContact: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenContact }) => {
  return (
    <header className="bg-[#fbfbfa]/90 backdrop-blur-md border-b border-[#e6e6ec] py-3.5 px-4 sm:px-6 md:px-8 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Name & Role */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#111113] text-white flex items-center justify-center font-bold text-xs tracking-wider font-mono shadow-xs">
            SH
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold text-[#111113] tracking-tight">
              {PERSONAL_INFO.name} <span className="text-xs font-normal text-[#8e8e99] font-mono">/ {PERSONAL_INFO.englishName}</span>
            </div>
            <div className="text-xs text-[#52525b] hidden sm:block">
              오프라인 영업관리 & AMD (신입)
            </div>
          </div>
        </div>

        {/* Right: Status Indicator & Contact Button */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Status Indicator matching reference's • Available for freelance */}
          <div className="hidden sm:inline-flex items-center gap-2 text-xs font-medium text-[#52525b] px-3 py-1 rounded-full bg-[#f4f4f6] border border-[#e6e6ec]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-mono tracking-tight text-[#27272a]">2026 신입 상시 지원 가능</span>
          </div>

          <button
            onClick={() => window.print()}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#71717a] hover:text-[#111113] transition-colors cursor-pointer no-print font-medium"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PDF 저장</span>
          </button>
          
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#111113] hover:bg-black rounded-full transition-all cursor-pointer shadow-xs hover:shadow-sm group"
          >
            <span>연락처</span>
            <span className="text-[11px] group-hover:translate-x-0.5 transition-transform">➔</span>
          </button>
        </div>
      </div>
    </header>
  );
};
