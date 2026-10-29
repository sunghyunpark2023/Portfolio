import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Trophy, 
  GraduationCap, 
  ChevronRight, 
  Sparkles,
  Briefcase,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { CAREER_JOURNEY_STEPS, PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';

interface CareerJourneySectionProps {
  onOpenDetail: (project: ProjectItem) => void;
}

export const CareerJourneySection: React.FC<CareerJourneySectionProps> = ({ onOpenDetail }) => {
  // 인턴십 2개 (01: 달바, 02: 프렌트립)
  const internSteps = CAREER_JOURNEY_STEPS.filter(s => s.track === 'intern');
  const [activeStepId, setActiveStepId] = useState<string>('01');

  const activeIntern = internSteps.find(s => s.step === activeStepId) || internSteps[0];
  const activeProject = PROJECTS.find(p => p.id === activeIntern.primaryProjectId) || PROJECTS[0];

  const handleOpenDetail = (projectId: string) => {
    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
    onOpenDetail(project);
  };

  // 나머지 4개 프로젝트 인덱스 항목
  const otherProjects = [
    {
      id: 'kakao-together-funding',
      num: '03',
      name: '카카오 같이가치 크라우드펀딩 PM',
      highlight: '참여자 200% 달성',
      badge: '펀딩 기획'
    },
    {
      id: 'sulwhasoo-rebranding',
      num: '04',
      name: '설화수 리브랜딩 성과 분석',
      highlight: '100명 설문 · 우수 보고서',
      badge: '전략 분석'
    },
    {
      id: 'bgf-retail-pocketcu',
      num: '05',
      name: 'BGF리테일 포켓CU 활성화 전략',
      highlight: '현장 VoC · 우수상',
      badge: '산학협력'
    },
    {
      id: 'social-innov-youth-booth',
      num: '06',
      name: '사회혁신축제 청년 참여형 부스 총괄',
      highlight: '방문객 150% 달성',
      badge: '오프라인 기획'
    }
  ];

  return (
    <section id="career-journey" className="space-y-8 relative">
      {/* Section Header: Image 1 Services-Style with Marker Accent */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-2">
          {/* Eyebrow Label with decorative yellow rays */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-wider text-[#71717a] uppercase">
              ( 02 ) Professional Experience
            </span>
            <span className="text-[#d4d4dc]">·</span>
            <span className="text-xs font-semibold text-[#166534] bg-[#f0fdf4] border border-[#dcfce7] px-2.5 py-0.5 rounded-full">
              현장 & 비즈니스 실무
            </span>
          </div>

          {/* Marker Title with hand-drawn aesthetic ray accents */}
          <div className="relative inline-block">
            {/* Hand-drawn yellow sunburst rays (Inspired by Image 1) */}
            <div className="absolute -top-3 -left-4 text-amber-400 select-none pointer-events-none">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="2" y1="12" x2="6" y2="12" />
              </svg>
            </div>
            
            <h2 className="font-marker text-3xl sm:text-4xl md:text-5xl text-[#111113] tracking-wide inline-block">
              INTERNSHIP
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#52525b] max-w-2xl leading-relaxed break-keep font-medium">
            책상 위 가설에 머무르지 않고, 현장에서 직접 고객과 파트너사를 만나 성과를 낸 2번의 인턴십 경험입니다.
          </p>
        </div>

        {/* Quick Guide Pill */}
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-[#71717a] bg-white border border-[#e6e6ec] px-3.5 py-1.5 rounded-full shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>인덱스 클릭 시 상세 내용 미리보기 전환</span>
        </div>
      </div>

      {/* Main Grid: Left Index Menu (Image 2) + Right Spotlight & Sticky Note (Image 1) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* ================= (A) Left Side: Index Menu Card (Image 2 Inspired) ================= */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#ffffff] rounded-3xl border border-[#e6e6ec] p-5 sm:p-6 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06)] relative overflow-hidden">
            
            {/* Header: Index Directory */}
            <div className="flex items-center justify-between pb-4 mb-3 border-b border-[#f0f0f3]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold tracking-wider text-[#71717a] uppercase">
                  Index / Experience Directory
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#8e8e99] bg-[#f4f4f6] px-2 py-0.5 rounded-md">
                우선순위 순
              </span>
            </div>

            {/* Part 1: Top Priority - 2 Internships */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-[#8e8e99] tracking-wider px-2 uppercase font-mono">
                Primary Internships
              </div>

              {internSteps.map((item) => {
                const isSelected = activeStepId === item.step;
                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStepId(item.step)}
                    className={`w-full text-left group flex items-center justify-between p-3.5 rounded-2xl transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#111113] text-white shadow-md'
                        : 'bg-[#fafafc] hover:bg-[#f4f4f6] text-[#111113]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Priority Index Number */}
                      <span className={`font-mono text-sm sm:text-base font-bold shrink-0 ${
                        isSelected ? 'text-amber-400' : 'text-[#8e8e99] group-hover:text-[#111113]'
                      }`}>
                        0{item.step}
                      </span>

                      {/* Title & Role */}
                      <div className="min-w-0">
                        <div className={`text-sm sm:text-base font-bold truncate leading-snug ${
                          isSelected ? 'text-white' : 'text-[#111113]'
                        }`}>
                          {item.company}
                        </div>
                        <div className={`text-xs truncate ${
                          isSelected ? 'text-zinc-300' : 'text-[#71717a]'
                        }`}>
                          {item.role.split('·')[0]}
                        </div>
                      </div>
                    </div>

                    {/* Right Impact Tag & Chevron */}
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        isSelected 
                          ? 'bg-white/20 text-white' 
                          : 'bg-[#f0fdf4] text-[#166534] border border-[#dcfce7]'
                      }`}>
                        {item.step === '01' ? '150% 달성' : '회신율 9%'}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                        isSelected ? 'text-white' : 'text-[#8e8e99]'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Part 2: Quick Jump Projects Index */}
            <div className="pt-4 mt-4 border-t border-[#f0f0f3] space-y-2">
              <div className="flex items-center justify-between px-2">
                <span className="text-[11px] font-bold text-[#8e8e99] tracking-wider uppercase font-mono">
                  4 Key Projects
                </span>
                <span className="text-[10px] text-[#8e8e99]">클릭 시 팝업 열람</span>
              </div>

              <div className="space-y-1.5">
                {otherProjects.map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => handleOpenDetail(proj.id)}
                    className="w-full text-left group flex items-center justify-between p-2.5 rounded-xl hover:bg-[#f4f4f6] transition-all cursor-pointer text-[#3f3f46] hover:text-[#111113]"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-xs font-semibold text-[#8e8e99] group-hover:text-[#111113] shrink-0">
                        {proj.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold truncate group-hover:font-bold">
                        {proj.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-[10px] font-medium text-[#71717a] bg-[#f4f4f6] px-2 py-0.5 rounded-md hidden sm:inline">
                        {proj.highlight}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#8e8e99] group-hover:text-[#111113] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Footer Tip */}
            <div className="mt-4 pt-3 border-t border-[#f0f0f3] flex items-center justify-between text-[11px] text-[#8e8e99]">
              <span className="font-mono">Total 6 Practical Records</span>
              <span className="text-[#111113] font-semibold">선택 인턴십 우측 표시 중</span>
            </div>

          </div>
        </div>

        {/* ================= (B) Right Side: Spotlight Showcase (Image 1 Style) ================= */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Selected Internship Spotlight Card */}
          <div className="bg-[#ffffff] rounded-3xl border border-[#e6e6ec] hover:border-[#111113]/40 p-6 sm:p-7 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.06)] transition-all space-y-5">
            
            {/* Top Bar with Thumbnail & Basic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              
              {/* Photo Thumbnail */}
              <div className="sm:col-span-5 relative h-44 sm:h-48 rounded-2xl overflow-hidden bg-[#f4f4f6] border border-[#e6e6ec]">
                <img
                  src={activeIntern.image}
                  alt={activeIntern.company}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.triedFallback) {
                      target.dataset.triedFallback = 'true';
                      if (activeIntern.step === '02') {
                        target.src = 'https://raw.githubusercontent.com/sunghyunpark2023/Portfolio/7deb590fc85cfc81d337111d6d25dfc0488265a1/%ED%94%84%EB%A6%BD%20%EB%A1%9C%EA%B3%A0.jpeg';
                      } else {
                        target.src = 'https://raw.githubusercontent.com/sunghyunpark2023/Portfolio/d829a104140c8ac9c6bcec4aa1973816e59f6e67/%EB%8B%AC%EB%B0%94.avif';
                      }
                    }
                  }}
                  className="w-full h-full object-cover object-center filter brightness-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[11px] font-mono font-bold bg-white text-[#111113] px-2.5 py-0.5 rounded-full shadow-xs">
                    인턴 0{activeIntern.step}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[11px] font-mono text-white/80 block">{activeIntern.period}</span>
                  <span className="text-xs font-bold truncate block">{activeIntern.company}</span>
                </div>
              </div>

              {/* Title & Key Highlight Ribbon */}
              <div className="sm:col-span-7 space-y-3">
                <div className="space-y-1">
                  <div className="text-xs font-mono font-semibold text-[#8e8e99]">
                    {activeIntern.period} · {activeIntern.badge}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#111113] tracking-tight leading-snug">
                    {activeIntern.company}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-[#4b5563]">
                    {activeIntern.role}
                  </div>
                </div>

                {/* Highlight Trophy Box */}
                <div className="bg-[#f0fdf4] border border-[#dcfce7] rounded-xl p-3 flex items-start gap-2.5">
                  <Trophy className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold text-[#166534] uppercase font-mono">핵심 성과</div>
                    <div className="text-sm font-bold text-[#15803d] leading-snug break-keep">
                      {activeIntern.metrics}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Summary */}
            <div className="space-y-1.5 pt-1">
              <span className="text-xs font-mono font-bold text-[#71717a] uppercase tracking-wider block">
                실무 핵심 요약
              </span>
              <p className="text-sm sm:text-base text-[#27272a] leading-relaxed break-keep font-medium">
                {activeIntern.summary}
              </p>
            </div>

            {/* Core Learning Quote */}
            <div className="bg-[#f8f9fa] border-l-3 border-[#111113] rounded-r-2xl p-4 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#52525b]">
                <GraduationCap className="w-4 h-4 text-[#111113] shrink-0" />
                <span>체득한 핵심 역량 (Core Learning)</span>
              </div>
              <div className="text-xs sm:text-sm text-[#111113] font-medium leading-relaxed">
                “{activeIntern.learningSnippet}”
              </div>
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-4 border-t border-[#e6e6ec] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#8e8e99]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>개인 기여도 100% · 가설 수립 및 현장 실행</span>
              </div>

              <button
                type="button"
                onClick={() => handleOpenDetail(activeIntern.primaryProjectId)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111113] hover:bg-black text-white text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.02]"
              >
                <span>인턴십 상세 문제해결 과정 보기</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
