import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Flame,
  BarChart3,
  Sparkles,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface SelectedWorksSectionProps {
  onOpenDetail: (project: ProjectItem) => void;
}

type FilterCategory = 'all' | 'campaign' | 'strategy';

export const SelectedWorksSection: React.FC<SelectedWorksSectionProps> = ({ onOpenDetail }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

  // Career Journey의 인턴 경험을 제외한 나머지 4개 핵심 프로젝트
  const nonInternProjects = useMemo(() => {
    return PROJECTS.filter(p => p.category === 'campaign' || p.category === 'strategy');
  }, []);

  const filterTabs = [
    { id: 'all' as FilterCategory, label: '전체 (4)', icon: FolderGit2 },
    { id: 'campaign' as FilterCategory, label: '캠페인 & 부스 총괄 (2)', icon: Flame },
    { id: 'strategy' as FilterCategory, label: '전략 리서치 (2)', icon: BarChart3 }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return nonInternProjects;
    return nonInternProjects.filter(p => p.category === activeFilter);
  }, [activeFilter, nonInternProjects]);

  return (
    <section id="selected-works" className="space-y-8 relative">
      {/* Section Header: Image 1 Style with Marker Brush Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div className="space-y-2">
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-wider text-[#71717a] uppercase">
              ( 03 ) Selected Portfolio
            </span>
            <span className="text-[#d4d4dc]">·</span>
            <span className="text-xs font-semibold text-[#166534] bg-[#f0fdf4] border border-[#dcfce7] px-2.5 py-0.5 rounded-full">
              4번의 프로젝트
            </span>
          </div>

          {/* Marker Title with Downward Arrow (Image 1 Style) */}
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-marker text-3xl sm:text-4xl md:text-5xl text-[#111113] tracking-wide inline-block">
              SELECTED PROJECTS
            </h2>
            <span className="text-xl sm:text-2xl font-bold select-none text-[#111113] hidden sm:inline-block animate-bounce">
              ↓
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#52525b] max-w-2xl leading-relaxed break-keep font-medium">
            소비자 데이터를 기반으로 온/오프라인 캠페인을 기획하고, 브랜드 맞춤 전략을 제안한 핵심 프로젝트입니다.
          </p>
        </div>

        {/* Filter Segmented Control (Right Aligned like 'SEE ALL' in Image 1) */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-[#e6e6ec] rounded-full shadow-xs shrink-0 self-start md:self-end">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
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
      </div>

      {/* Projects Grid: Framed Studio Windows (Image 1 Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenDetail(project)}
            className="bg-[#ffffff] rounded-3xl border border-[#e6e6ec] hover:border-[#111113] p-5 sm:p-6 transition-all hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.08)] group cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              
              {/* Window-Style Card Header (Top Bar like Image 1) */}
              <div className="flex items-center justify-between gap-3 pb-1 border-b border-[#f4f4f6]">
                <div className="min-w-0">
                  <span className="text-[11px] font-mono font-semibold text-[#8e8e99] block truncate">
                    {project.organization}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#111113] tracking-tight truncate group-hover:text-black">
                    {project.title}
                  </h3>
                </div>

                <div className="shrink-0 flex items-center gap-1.5">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#f4f4f6] border border-[#e6e6ec] group-hover:bg-[#111113] group-hover:text-white transition-all flex items-center gap-1">
                    <span>Open Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Cinematic Thumbnail Image Preview */}
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-[#f4f4f6] border border-[#e6e6ec]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      if (project.id === 'sulwhasoo-rebranding') {
                        target.src = 'https://raw.githubusercontent.com/sunghyunpark2023/Portfolio/ba7fe3e31d447f7605223abb3eafd82d116bdbb6/%EC%84%A4%ED%99%94%EC%88%98.png';
                      } else if (project.id === 'bgf-retail-pocketcu') {
                        target.src = 'https://raw.githubusercontent.com/sunghyunpark2023/Portfolio/ce09900308c6a6405ca81934e6addc188d0fdd2a/CU.jpg';
                      } else if (project.id === 'harang-crowdfunding') {
                        target.src = 'https://raw.githubusercontent.com/sunghyunpark2023/Portfolio/1c132133bbcb58600b665cb5ea5705f48e5f508f/%EC%B9%B4%EC%B9%B4%EC%98%A4%20%EA%B0%99%EC%9D%B4%EA%B0%80%EC%B9%98.jpeg';
                      } else if (project.id === 'frip-internship') {
                        target.src = '/frip_logo.jpeg';
                      } else if (project.id === 'dalba-internship') {
                        target.src = '/dalba.avif';
                      }
                    }
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 filter brightness-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                
                {/* Floating Period Badge (우측 상단 기간 표시) */}
                <div className="absolute top-3 right-3 flex items-center justify-end">
                  <span className="text-[11px] font-mono text-white/95 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full shadow-xs">
                    {project.period}
                  </span>
                </div>

                {/* 하단 역할 및 기여도 안내 */}
                <div className="absolute bottom-3 left-3.5 right-3.5">
                  <div className="text-xs sm:text-sm font-bold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] tracking-tight flex flex-wrap items-center gap-1.5 leading-snug">
                    <span>{project.role}</span>
                    <span className="text-white/90 font-medium text-xs">
                      (기여도 {project.id === 'bgf-retail-pocketcu' ? 30 : (project.contributions[0]?.percentage || 80)}%)
                    </span>
                  </div>
                </div>
              </div>

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


            </div>

            {/* Card Footer: Detail Trigger Button ('자세히 보기' & '링크') */}
            <div className="pt-3 border-t border-[#e6e6ec] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#71717a] font-medium break-keep">
                기여도 <strong className="text-[#111113] font-mono">{project.id === 'bgf-retail-pocketcu' ? 30 : (project.contributions[0]?.percentage || 80)}%</strong>
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
