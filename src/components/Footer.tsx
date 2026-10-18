import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="mt-24 border-t border-[#e6e6ec] bg-[#ffffff] py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#111113]">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-[#8e8e99]">
              / {PERSONAL_INFO.englishName}
            </span>
          </div>
          <p className="text-xs text-[#71717a] max-w-md leading-relaxed">
            "{PERSONAL_INFO.headline}"
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#71717a] pt-1">
            <span className="flex items-center gap-1.5 font-mono">
              <Mail className="w-3.5 h-3.5 text-[#8e8e99]" />
              {PERSONAL_INFO.email}
            </span>
            <span className="text-[#d4d4dc]">·</span>
            <span className="flex items-center gap-1.5 font-mono">
              <Phone className="w-3.5 h-3.5 text-[#8e8e99]" />
              {PERSONAL_INFO.phone}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-[#8e8e99] hidden sm:inline">
            © 2026 Park Sung Hyun
          </span>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 bg-[#111113] hover:bg-black text-white text-xs font-semibold rounded-full transition-all cursor-pointer shadow-xs"
          >
            연락하기
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 bg-[#f4f4f6] hover:bg-[#eaeaea] text-[#71717a] hover:text-[#111113] rounded-full transition-colors cursor-pointer"
            title="맨 위로 이동"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
