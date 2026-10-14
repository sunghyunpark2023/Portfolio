import React from 'react';
import { Mail, Printer, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface TopBarProps {
  onOpenContact: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenContact }) => {
  return (
    <header className="bg-[#faf9f5] border-b border-[#eae8e1] py-4 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Name Wordmark */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold text-xs tracking-wider">
            SH
          </div>
          <div>
            <div className="text-sm font-extrabold text-[#1a1a1a] tracking-tight">
              {PERSONAL_INFO.name} <span className="font-normal text-xs text-[#71706c]">({PERSONAL_INFO.englishName})</span>
            </div>
            <div className="text-[11px] text-[#8a8880] hidden sm:block">
              Business Strategy & Offline AMD Portfolio
            </div>
          </div>
        </div>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#555] hover:text-[#1a1a1a] bg-[#f0eee6] hover:bg-[#eae8e1] rounded-xl transition-colors cursor-pointer no-print"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>PDF 저장</span>
          </button>
          
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#1a1a1a] hover:bg-black rounded-xl transition-colors cursor-pointer shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>연락처</span>
          </button>
        </div>
      </div>
    </header>
  );
};
