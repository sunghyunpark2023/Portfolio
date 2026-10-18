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
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#8e8e99] tracking-tight">
            ( 02 ) Career Journey
          </span>
          <span className="text-[#d4d4dc]">·</span>
          <span className="text-xs font-mono text-[#71717a]">인턴십 실무 경험</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111113] tracking-tight break-keep">
          2번의 인턴 경험
        </h2>
        <p className="text-xs sm:text-sm text-[#71717a] max-w-3xl leading-relaxed break-keep">
          뷰티 오프라인 유통 채널(달바글로벌)과 B2B 플랫폼 제휴(프렌트립)에서 직접 발로 뛰며 고객과 파트너사의 문제를 해결한 핵심 인턴 경험입니다. 카드를 누르시면 상세 역할, 기여도(%), 세부 문제 해결 과정을 담은 팝업을 확인하실 수 있습니다.
        </p>
      </div>

      {/* 2번의 인턴 경험 카드 리스트 (Editorial Design) */}
      <div className="space-y-6">
        {internSteps.map((item) => (
          <div
            key={item.step}
            onClick={() => handleStepClick(item.primaryProjectId)}
            className="bg-[#ffffff] rounded-3xl border border-[#e6e6ec] hover:border-[#111113]/40 p-6 sm:p-8 transition-all hover:shadow-[0_16px_36px_-12px_rgba(0,0,0,0.06)] group cursor-pointer"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-7 sm:gap-9 items-stretch">
              
              {/* (1) 좌측: 썸네일 이미지 + 바로 밑에 주요 성과 */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between space-y-3">
                {/* 썸네일 이미지 */}
                <div className="rounded-2xl overflow-hidden bg-[#f4f4f6] relative h-48 sm:h-56 w-full border border-[#e6e6ec] shrink-0">
                  <img
                    src={item.image}
                    alt={item.company}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        if (item.step === '02') {
                          target.src = 'https://raw.githubusercontent.com/sunghyunpark2023/Portfolio/7deb590fc85cfc81d337111d6d25dfc0488265a1/%ED%94%84%EB%A6%BD%20%EB%A1%9C%EA%B3%A0.jpeg';
                        } else {
                          target.src = 'https://raw.githubusercontent.com/sunghyunpark2023/Portfolio/d829a104140c8ac9c6bcec4aa1973816e59f6e67/%EB%8B%AC%EB%B0%94.avif';
                        }
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-mono font-bold bg-white/95 text-[#111113] px-3 py-1 rounded-full shadow-xs">
                      인턴 0{item.step}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white text-xs font-semibold truncate">
                    {item.company}
                  </div>
                </div>

                {/* 썸네일 이미지 바로 밑에 [주요 성과] */}
                <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#166534]">
                    <Trophy className="w-3.5 h-3.5 text-[#166534] shrink-0" />
                    <span>주요 성과</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#15803d] leading-snug break-keep">
                    {item.metrics}
                  </p>
                </div>
              </div>

              {/* (2) 우측: 경험명 / 경험 내용 요약 / 배운점 / '자세히 보기' */}
              <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between space-y-4">
                
                <div className="space-y-4">
                  {/* 상단 메타 & 태그 */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono text-[#8e8e99]">
                        {item.period}
                      </span>
                      <span className="text-[#d4d4dc]">·</span>
                      <span className="font-medium text-[#71717a] bg-[#f4f4f6] px-2.5 py-0.5 rounded-full text-[11px]">
                        {item.badge}
                      </span>
                    </div>

                    <div className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-[#111113] group-hover:translate-x-0.5 transition-transform">
                      <span>자세히 보기</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* 1. 경험명 */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#111113] tracking-tight group-hover:text-black leading-snug break-keep [text-wrap:pretty]">
                      {item.company}
                    </h3>
                    <div className="text-sm sm:text-base font-semibold text-[#52525b] break-keep [text-wrap:pretty]">
                      {item.role}
                    </div>
                  </div>

                  {/* 2. 경험 내용 요약 */}
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-[#71717a] uppercase tracking-wider block">
                      Summary
                    </span>
                    <p className="text-sm sm:text-base text-[#27272a] leading-relaxed break-keep [text-wrap:pretty]">
                      {item.summary}
                    </p>
                  </div>

                  {/* 3. 배운점 (Editorial Quote Block) */}
                  <div className="bg-[#f8f9fa] border-l-2 border-[#111113] rounded-r-2xl p-4 sm:p-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#52525b]">
                      <GraduationCap className="w-4 h-4 text-[#111113] shrink-0" />
                      <span>배운 점 (Core Learning)</span>
                    </div>
                    <div className="text-sm sm:text-base text-[#111113] font-medium leading-relaxed space-y-1">
                      {item.learningSnippet.split('\n').map((line, idx, arr) => (
                        <p key={idx} className="break-keep [text-wrap:pretty]">
                          {idx === 0 ? `“${line}` : `${line}${idx === arr.length - 1 ? '”' : ''}`}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 하단 Action: '자세히 보기' */}
                <div className="pt-3 border-t border-[#e6e6ec] flex items-center justify-between">
                  <span className="text-xs text-[#8e8e99] break-keep font-mono">
                    Role · 기여도(%) · 문제 해결 과정 상세
                  </span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#111113] group-hover:bg-black text-white text-xs font-semibold rounded-full transition-all cursor-pointer shadow-xs group-hover:shadow-sm"
                  >
                    <span>자세히 보기</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
