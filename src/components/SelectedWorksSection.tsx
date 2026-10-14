import React, { useState, useMemo } from 'react';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Trophy, 
  Flame,
  BarChart3,
  Sparkles
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
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edebe4] text-xs sm:text-sm font-semibold text-[#1a1a1a]">
          <FolderGit2 className="w-4 h-4 text-[#1a1a1a]" />
          <span>Selected Works · 주요 프로젝트 & 전략 리서치</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight break-keep">
          온오프라인 캠페인 기획 / 데이터 기반 전략 제안
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#555] max-w-3xl leading-relaxed break-keep">
          인턴십 외에도 카카오 같이가치 펀딩 PM, 사회혁신축제 부스 기획 운영, 설화수 및 BGF리테일 산학협력 등 문제 정의와 실행을 통해 성과를 거둔 프로젝트들을 모았습니다. 카드를 클릭하시면 상세 팝업이 열립니다.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {filterTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#1a1a1a] text-white shadow-xs'
                  : 'bg-[#ffffff] text-[#555] hover:text-[#1a1a1a] hover:bg-[#f0eee6] border border-[#eae8e1]'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid: 2 Columns with High Readability and Line-break Control */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onOpenDetail(project)}
            className="bg-[#ffffff] rounded-3xl border border-[#eae8e1] hover:border-[#b8b6b0] p-6 sm:p-7 shadow-xs hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              {/* Compact Thumbnail Image */}
              <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-[#f0eee6] border border-[#eae8e1]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#1a1a1a] bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full shadow-xs">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-white/90 bg-black/45 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
                    {project.period}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                  <div className="text-xs font-medium text-white/80">{project.organization}</div>
                  <div className="text-sm font-semibold">{project.role}</div>
                </div>
              </div>

              {/* Title (Enhanced Font Size & Korean Line Break) */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1a1a1a] tracking-tight group-hover:underline leading-snug break-keep [text-wrap:pretty]">
                {project.title}
              </h3>

              {/* Concise Summary with Line Break */}
              <p className="text-xs sm:text-sm text-[#444] leading-relaxed break-keep line-clamp-3 [text-wrap:pretty]">
                {project.thoughtProcess}
              </p>

              {/* Key Result Highlight Box */}
              <div className="bg-[#f4fbf6] border border-[#d2ead6] rounded-2xl p-3.5 flex items-start gap-2.5">
                <Trophy className="w-4 h-4 text-[#1e4620] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm font-bold text-[#1e4620] leading-snug break-keep [text-wrap:pretty]">
                  {project.result[0]}
                </div>
              </div>
            </div>

            {/* Card Footer: Detail Trigger Button ('자세히 보기') */}
            <div className="pt-3 border-t border-[#f0eee6] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-[#71706c] font-medium break-keep">
                기여도 <strong className="text-[#1a1a1a] font-mono">{project.contributions[0]?.percentage || 80}%</strong>
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1a1a1a] group-hover:bg-black text-white rounded-xl font-bold text-xs transition-colors cursor-pointer shadow-xs"
              >
                <span>자세히 보기</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
