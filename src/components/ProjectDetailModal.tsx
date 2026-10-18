import React, { useEffect } from 'react';
import { 
  X, 
  Briefcase, 
  PieChart, 
  FileText, 
  Trophy, 
  Lightbulb,
  GraduationCap,
  ExternalLink
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onTagClick?: (tag: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onTagClick
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl bg-[#ffffff] rounded-3xl shadow-2xl border border-[#e6e6ec] overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Top Minimal Header */}
        <div className="px-6 sm:px-8 py-4 border-b border-[#e6e6ec] bg-[#fbfbfa] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#71717a] truncate pr-4">
            <span className="font-semibold text-[#111113] bg-[#f4f4f6] px-3 py-1 rounded-full text-xs">{project.badge}</span>
            <span>·</span>
            <span className="font-semibold text-[#111113] truncate">{project.organization}</span>
            <span>·</span>
            <span className="font-mono text-xs text-[#8e8e99] shrink-0">{project.period}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#71717a] hover:text-[#111113] hover:bg-[#f4f4f6] rounded-full transition-colors cursor-pointer shrink-0"
            aria-label="팝업 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Split: 좌측 이미지 / 우측 Role, Contribution(%), How I thought, What I did, Result, What I learned */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* 좌측: 실제 프로젝트 사진 및 주요 메트릭 (Left Column - Compact Image Size) */}
            <div className="md:col-span-5 space-y-5">
              <div className="rounded-2xl overflow-hidden border border-[#eae8e1] bg-[#f5f4ee] shadow-xs">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      target.src = 'https://raw.githubusercontent.com/sunghyunpark2023/Portfolio/d829a104140c8ac9c6bcec4aa1973816e59f6e67/%EB%8B%AC%EB%B0%94.avif';
                    }
                  }}
                  className="w-full h-48 sm:h-52 md:h-56 object-cover object-center filter brightness-[1.02]"
                />
              </div>

              {/* Title & Organization Info in Left Panel */}
              <div className="space-y-1.5">
                <div className="text-xs sm:text-sm font-bold text-[#71706c] tracking-wide">
                  {project.organization}
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#1a1a1a] tracking-tight leading-snug">
                  {project.title}
                </h2>
              </div>

              {/* Highlight Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 bg-[#faf9f5] border border-[#eae8e1] rounded-2xl">
                      <div className="text-[11px] text-[#8a8880] font-semibold">{m.label}</div>
                      <div className="text-lg sm:text-xl font-bold text-[#1a1a1a] font-mono tabular-nums">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((t, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (onTagClick) onTagClick(t);
                        onClose();
                      }}
                      className="text-xs text-[#71706c] bg-[#f5f4ee] hover:bg-[#eae8e1] px-3 py-1 rounded-full transition-colors cursor-pointer font-medium"
                    >
                      #{t}
                    </button>
                  ))}
                </div>
              )}

              {/* 카카오 같이가치 등 외부 프로젝트 링크 바로가기 */}
              {project.externalLink && (
                <div className="pt-2">
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#fee500] hover:bg-[#fedd00] text-[#191919] font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-xs border border-[#ecd200]"
                  >
                    <span>카카오 같이가치 모금함 바로가기</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>

            {/* 우측: Role / Contribution(%) / How I thought / What I did / Result / What I learned (Right Column - Larger Readable Fonts) */}
            <div className="md:col-span-7 space-y-6">
              
              {/* 1. Role (담당 역할) */}
              <div className="space-y-1 pb-4 border-b border-[#f0eee6]">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 text-[#8a8880]" />
                  <span>Role (담당 역할)</span>
                </div>
                <div className="text-lg sm:text-xl font-bold text-[#1a1a1a]">
                  {project.role}
                </div>
                <div className="text-xs sm:text-sm text-[#71706c]">
                  {project.organization} · {project.period}
                </div>
              </div>

              {/* 2. Contribution (%) (담당 기여도) */}
              <div className="space-y-3 pb-5 border-b border-[#f0eee6]">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                  <PieChart className="w-4 h-4 text-[#8a8880]" />
                  <span>Contribution (%) (담당 기여도)</span>
                </div>
                <div className="space-y-3 pt-1">
                  {project.contributions.map((c, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex justify-between text-xs sm:text-sm text-[#333]">
                        <span className="font-semibold">{c.area}</span>
                        <span className="font-mono font-bold text-[#1a1a1a] tabular-nums">{c.percentage}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-[#f0eee6] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#1a1a1a] rounded-full transition-all duration-700" 
                          style={{ width: `${c.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. 어떤 방식으로 생각했는가 (How I Thought) */}
              <div className="space-y-2 pb-5 border-b border-[#f0eee6]">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-[#e68a00]" />
                  <span>어떤 방식으로 생각했는가 (How I Thought)</span>
                </div>
                <div className="bg-[#fffdfa] border border-[#f5ebd9] rounded-2xl p-5 space-y-3 text-sm sm:text-base">
                  <p className="text-[#333] leading-relaxed font-normal break-keep [text-wrap:pretty]">
                    {project.thoughtProcess}
                  </p>
                  <div className="pt-3 border-t border-[#f5ebd9] grid grid-cols-1 gap-2.5 text-xs sm:text-sm">
                    <div className="break-keep [text-wrap:pretty]">
                      <span className="font-bold text-[#b3261e] mr-2">[문제 배경]</span>
                      <span className="text-[#555]">{project.problem}</span>
                    </div>
                    <div className="break-keep [text-wrap:pretty]">
                      <span className="font-bold text-[#995c00] mr-2">[현장 인사이트]</span>
                      <span className="text-[#555]">{project.insight}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. What I did ; 어떤 경험을 했는지 압축적으로 소개 */}
              <div className="space-y-2 pb-5 border-b border-[#f0eee6]">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                  <FileText className="w-4 h-4 text-[#8a8880]" />
                  <span>What I did (어떤 경험을 했는지 압축 소개)</span>
                </div>
                <div className="bg-[#faf9f5] border border-[#eae8e1] rounded-2xl p-5">
                  <ul className="space-y-3 text-sm sm:text-base text-[#333] leading-relaxed list-disc list-outside pl-5">
                    {project.whatIDid.map((item, idx) => {
                      const match = item.match(/^\[(.*?)\]\s*(.*)$/);
                      return (
                        <li key={idx} className="marker:text-[#1a1a1a] break-keep [text-wrap:pretty]">
                          {match ? (
                            <>
                              <span className="font-bold text-[#1a1a1a] mr-1.5">[{match[1]}]</span>
                              <span>{match[2]}</span>
                            </>
                          ) : (
                            <span>{item}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* 5. Result (정량·정성 성과) */}
              <div className="space-y-2 pb-5 border-b border-[#f0eee6]">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1e4620] uppercase tracking-wider">
                  <Trophy className="w-4 h-4 text-[#1e4620]" />
                  <span>Result (증명한 성과)</span>
                </div>
                <div className="bg-[#f4fbf6] border border-[#d2ead6] rounded-2xl p-5">
                  <ul className="space-y-2 text-sm sm:text-base text-[#1e4620] font-semibold leading-relaxed list-disc list-outside pl-5">
                    {project.result.map((res, idx) => (
                      <li key={idx} className="marker:text-[#1e4620] break-keep [text-wrap:pretty]">
                        {res}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 6. What I Learned (이 경험을 통해 무엇을 배웠는가) */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1a1a1a] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#3366cc]" />
                  <span>이 경험을 통해 무엇을 배웠는가 (What I Learned)</span>
                </div>
                <div className="bg-[#f6f9fc] border border-[#d8e5f5] rounded-2xl p-5">
                  <p className="text-sm sm:text-base text-[#1a3a60] font-semibold leading-relaxed break-keep whitespace-pre-line [text-wrap:pretty]">
                    "{project.whatILearned.replace(/^["“”]|["“”]$/g, '')}"
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#f0eee6] bg-[#faf9f5] flex items-center justify-between shrink-0">
          <span className="text-xs text-[#8a8880]">
            ESC 키나 바깥 배경을 누르면 닫힙니다
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#1a1a1a] hover:bg-black text-white text-xs sm:text-sm font-bold rounded-2xl transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
