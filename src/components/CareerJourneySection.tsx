import React from 'react';
import { 
  ArrowUpRight, 
  Briefcase, 
  Trophy, 
  GraduationCap, 
  Layers
} from 'lucide-react';
import { CAREER_JOURNEY_STEPS, PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface CareerJourneySectionProps {
  onOpenDetail: (project: ProjectItem) => void;
}

export const CareerJourneySection: React.FC<CareerJourneySectionProps> = ({ onOpenDetail }) => {
  const handleStepClick = (projectId: string) => {
    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
    onOpenDetail(project);
  };

  // 인턴 경험 2개만 엄선
  const internSteps = CAREER_JOURNEY_STEPS.filter(s => s.track === 'intern');

  return (
    <section id="career-journey" className="space-y-8">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edebe4] text-xs sm:text-sm font-semibold text-[#1a1a1a]">
          <Briefcase className="w-4 h-4 text-[#1a1a1a]" />
          <span>Career Journey · 인턴십 실무 경험</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight break-keep">
          현장과 비즈니스 실무에서 증명한 2번의 인턴 경험
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#555] max-w-3xl leading-relaxed break-keep">
          뷰티 오프라인 유통 채널(달바글로벌)과 B2B 플랫폼 제휴(프렌트립)에서 직접 발로 뛰며 고객과 파트너사의 문제를 해결한 핵심 인턴 경험입니다. 카드를 누르시면 상세 역할, 기여도(%), 세부 문제 해결 과정을 담은 팝업을 확인하실 수 있습니다.
        </p>
      </div>

      {/* 2번의 인턴 경험 카드 리스트 (가독성 & 줄바꿈 최적화) */}
      <div className="space-y-6">
        {internSteps.map((item) => (
          <div
            key={item.step}
            onClick={() => handleStepClick(item.primaryProjectId)}
            className="bg-[#ffffff] rounded-3xl border border-[#eae8e1] hover:border-[#b8b6b0] p-6 sm:p-8 shadow-xs hover:shadow-md transition-all group cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
              
              {/* (1) 좌측: 썸네일 이미지 + 바로 밑에 주요 성과 */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between space-y-3">
                {/* 썸네일 이미지 */}
                <div className="rounded-2xl overflow-hidden bg-[#f0eee6] relative h-48 sm:h-52 w-full border border-[#eae8e1] shadow-2xs shrink-0">
                  <img
                    src={item.image}
                    alt={item.company}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-mono font-bold bg-white/95 text-[#1a1a1a] px-3 py-1 rounded-full shadow-xs">
                      인턴 0{item.step}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white text-xs font-semibold truncate">
                    {item.company}
                  </div>
                </div>

                {/* 썸네일 이미지 바로 밑에 [주요 성과] */}
                <div className="bg-[#f4fbf6] border border-[#d2ead6] rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1e4620]">
                    <Trophy className="w-4 h-4 text-[#1e4620] shrink-0" />
                    <span>주요 성과</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#1e4620] leading-snug break-keep">
                    {item.metrics}
                  </p>
                </div>
              </div>

              {/* (2) 우측: 경험명 / 경험 내용 요약 / 배운점 / '자세히 보기' */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between space-y-4">
                
                <div className="space-y-4">
                  {/* 상단 메타 & 태그 */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-[#8a8880]">
                        {item.period}
                      </span>
                      <span className="text-[#eae8e1]">·</span>
                      <span className="text-xs font-semibold bg-[#faf9f5] border border-[#eae8e1] px-3 py-0.5 rounded-full text-[#555]">
                        {item.badge}
                      </span>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#1a1a1a] group-hover:underline">
                      <span>자세히 보기</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* 1. 경험명 (글씨 크기 및 가독성 확보) */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-black text-[#1a1a1a] tracking-tight group-hover:text-black leading-snug break-keep [text-wrap:pretty]">
                      {item.company}
                    </h3>
                    <div className="text-sm sm:text-base font-bold text-[#444] break-keep [text-wrap:pretty]">
                      {item.role}
                    </div>
                  </div>

                  {/* 2. 경험 내용 요약 */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#8a8880] uppercase tracking-wider block">
                      경험 내용 요약
                    </span>
                    <p className="text-sm sm:text-base text-[#333] leading-relaxed break-keep [text-wrap:pretty]">
                      {item.summary}
                    </p>
                  </div>

                  {/* 3. 배운점 */}
                  <div className="bg-[#f6f9fc] border border-[#d8e5f5] rounded-2xl p-4 sm:p-5 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1a3a60]">
                      <GraduationCap className="w-4 h-4 text-[#3366cc] shrink-0" />
                      <span>배운점</span>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-[#2a4d77] font-medium leading-relaxed break-keep whitespace-pre-line [text-wrap:pretty]">
                      "{item.learningSnippet}"
                    </p>
                  </div>
                </div>

                {/* 하단 Action: '자세히 보기' 적절한 위치 배치 */}
                <div className="pt-3 border-t border-[#f0eee6] flex items-center justify-between">
                  <span className="text-xs text-[#8a8880] break-keep">
                    클릭 시 Role · 기여도(%) · 문제 해결 과정 상세 확인
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1a1a1a] group-hover:bg-black text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    <span>자세히 보기</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
