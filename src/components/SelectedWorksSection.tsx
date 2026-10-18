import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Trophy, 
  Flame,
  BarChart3,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface SelectedWorksSectionProps {
  onOpenDetail: (project: ProjectItem) => void;
}

type FilterCategory = 'all' | 'campaign' | 'strategy';

export const SelectedWorksSection: React.FC<SelectedWorksSectionProps> = ({ onOpenDetail }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  // Career Journey의 인턴 경험을 제외한 나머지 핵심 프로젝트 (캠페인 총괄 & 전략 리서치)
  const nonInternProjects = useMemo(() => {
    return PROJECTS.filter(p => p.category === 'campaign' || p.category === 'strategy');
  }, []);

  const filterTabs = [
    { id: 'all' as FilterCategory, label: '전체 프로젝트 (4)', icon: FolderGit2 },
    { id: 'campaign' as FilterCategory, label: '캠페인 & 부스 총괄 (2)', icon: Flame },
    { id: 'strategy' as FilterCategory, label: '전략 리서치 & 산학협력 (2)', icon: BarChart3 }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return nonInternProjects;
    return nonInternProjects.filter(p => p.category === activeFilter);
  }, [activeFilter, nonInternProjects]);

  return (
    <section id="selected-works" className="space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#8e8e99] tracking-tight">
            ( 03 ) Selected Works
          </span>
          <span className="text-[#d4d4dc]">·</span>
          <span className="text-xs font-mono text-[#71717a]">주요 프로젝트 & 전략 리서치</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111113] tracking-tight break-keep">
          4번의 프로젝트
        </h2>
        <p className="text-xs sm:text-sm text-[#71717a] max-w-3xl leading-relaxed break-keep">
          인턴십 외에도 카카오 같이가치 펀딩 PM, 사회혁신축제 부스 기획 운영, 설화수 및 BGF리테일 산학협력 등 문제 정의와 실행을 통해 성과를 거둔 프로젝트들을 모았습니다. 카드를 클릭하시면 상세 팝업이 열립니다.
        </p>
      </div>

      {/* Filter Tabs (Sleek Segmented Control) */}
      <div className="flex items-center gap-1.5 p-1 bg-[#f4f4f6] border border-[#e6e6ec] rounded-full w-fit max-w-full overflow-x-auto no-scrollbar">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#111113] text-white shadow-xs'
                  : 'text-[#71717a] hover:text-[#111113]'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid: 2 Columns Gallery (Inspired by Projects in reference) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenDetail(project)}
            className="bg-[#ffffff] rounded-3xl border border-[#e6e6ec] hover:border-[#111113]/40 p-6 sm:p-7 transition-all hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.06)] group cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              {/* Cinematic Thumbnail Image */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#f4f4f6] border border-[#e6e6ec]">
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
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 filter brightness-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#111113] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-white/95 bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    {project.period}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <div className="text-[11px] font-mono text-white/80">{project.organization}</div>
                  <div className="text-sm font-semibold">{project.role}</div>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-extrabold text-[#111113] tracking-tight group-hover:text-black leading-snug break-keep [text-wrap:pretty]">
                {project.title}
              </h3>

              {/* 핵심 역량 키워드 (#태그) */}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 py-0.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#f4f4f6] border border-[#e6e6ec] text-[#52525b]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Key Result Highlight Box */}
              <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-3.5 flex items-start gap-2.5">
                <Trophy className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base font-bold text-[#15803d] leading-snug break-keep [text-wrap:pretty]">
                  {project.result[0]}
                </div>
              </div>
            </div>

            {/* Card Footer: Detail Trigger Button ('자세히 보기' & '링크') */}
            <div className="pt-3 border-t border-[#e6e6ec] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#71717a] font-medium break-keep">
                기여도 <strong className="text-[#111113] font-mono">{project.contributions[0]?.percentage || 80}%</strong>
              </span>
              <div className="flex items-center gap-2">
                {project.externalLink && (
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#fee500] hover:bg-[#fedd00] text-[#191919] rounded-full font-bold text-xs transition-colors cursor-pointer shadow-xs border border-[#ecd200]"
                    title="카카오 같이가치 모금함 링크 바로가기"
                  >
                    <span>링크</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#111113] group-hover:bg-black text-white rounded-full font-semibold text-xs transition-colors cursor-pointer shadow-xs"
                >
                  <span>자세히 보기</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
