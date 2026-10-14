import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="mt-20 border-t border-[#eae8e1] bg-[#ffffff] py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="text-base font-extrabold text-[#1a1a1a]">
            {PERSONAL_INFO.name} ({PERSONAL_INFO.englishName})
          </div>
          <p className="text-xs text-[#71706c] max-w-md">
            "{PERSONAL_INFO.headline}"
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-[#555] pt-1">
            <span className="flex items-center gap-1 font-mono">
              <Mail className="w-3.5 h-3.5 text-[#8a8880]" />
              {PERSONAL_INFO.email}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1 font-mono">
              <Phone className="w-3.5 h-3.5 text-[#8a8880]" />
              {PERSONAL_INFO.phone}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="px-4 py-2 bg-[#1a1a1a] hover:bg-black text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            연락하기
          </button>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-[#f0eee6] hover:bg-[#eae8e1] text-[#555] hover:text-[#1a1a1a] rounded-xl transition-colors cursor-pointer"
            title="맨 위로 이동"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
