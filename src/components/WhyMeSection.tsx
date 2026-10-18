import React from 'react';
import { 
  Sparkles, 
  Target, 
  RefreshCw, 
  MessageSquare, 
  ShieldCheck, 
  HeartHandshake, 
  HelpCircle, 
  Mail, 
  ArrowRight,
  Repeat
} from 'lucide-react';
import { MINDSET_PILLARS, PEOPLE_EXPERIENCES, FUTURE_ASPIRATION } from '../data/portfolioData';

interface WhyMeSectionProps {
  onOpenContact: () => void;
}

export const WhyMeSection: React.FC<WhyMeSectionProps> = ({ onOpenContact }) => {
  // 4대 Pillar 순환 루프 아이콘 매핑 (문제 정의 -> 관찰과 소통 -> 유연한 피보팅 & 실행력 -> 회복탄력성과 성장 의지)
  const icons = [Target, MessageSquare, RefreshCw, ShieldCheck];
  const nextStepHints = ['01 ➔ 02', '02 ➔ 03', '03 ➔ 04', '04 ➔ 01 순환'];

  return (
    <section id="why-me" className="space-y-8">
      {/* 1. Section Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#8e8e99] tracking-tight">
            ( 04 ) Why me?
          </span>
          <span className="text-[#d4d4dc]">·</span>
          <span className="text-xs font-mono text-[#71717a]">핵심 직무 역량 & 일하는 태도</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111113] tracking-tight">
          Why me?
        </h2>
        <p className="text-sm sm:text-base text-[#52525b] leading-relaxed break-keep">
          책상 위 생각에 머무르지 않고, 현장의 이야기와 데이터로 진짜 문제를 찾아 해결해 온 4가지 일하는 원칙입니다.
        </p>
      </div>

      {/* 2. 4대 일하는 원칙 (선순환 Cycle 구조 도식화) */}
      <div className="space-y-4">
        {/* 순환 프로세스 흐름 안내 바 */}
        <div className="bg-[#ffffff] border border-[#e6e6ec] rounded-2xl p-3.5 sm:p-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 font-bold text-[#111113]">
              <Repeat className="w-4 h-4 text-[#d97706]" />
              <span className="font-semibold">신입 박성현이 일하는 4단계 원칙</span>
            </div>
            {/* 순환 단계 칩 */}
            <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs font-medium text-[#71717a]">
              <span className="px-2.5 py-1 rounded-md bg-[#f4f4f6] text-[#111113] font-semibold">01. 문제 정의</span>
              <span className="text-[#bbb]">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-[#f4f4f6] text-[#111113] font-semibold">02. 경청과 소통</span>
              <span className="text-[#bbb]">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-[#f4f4f6] text-[#111113] font-semibold">03. 유연한 대처와 실행</span>
              <span className="text-[#bbb]">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-[#f4f4f6] text-[#111113] font-semibold">04. 실패를 배움으로</span>
              <span className="text-[#bbb]">➔</span>
              <span className="px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800 font-bold inline-flex items-center gap-1">
                <Repeat className="w-3.5 h-3.5" />
                <span>선순환</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4개 Pillar 카드 그리드 (가독성 높은 폰트와 크기) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MINDSET_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            const isLast = idx === MINDSET_PILLARS.length - 1;

            return (
              <div
                key={pillar.number}
                className="bg-[#ffffff] rounded-2xl border border-[#e6e6ec] p-5 shadow-2xs hover:border-[#111113]/40 transition-all flex flex-col justify-between space-y-4 group relative"
              >
                <div className="space-y-3">
                  {/* 카드 상단: 아이콘 + 번호 + 순환 힌트 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-[#f4f4f6] text-[#111113] group-hover:bg-[#111113] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#71717a]">
                        STEP {pillar.number}
                      </span>
                    </div>

                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#f4f4f6] text-[#52525b]">
                      {nextStepHints[idx]}
                    </span>
                  </div>

                  {/* 제목 & 서브타이틀 */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#111113] tracking-tight">
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-mono text-[#8e8e99] block mt-0.5">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* 해시태그 */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {pillar.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-xs bg-[#f4f4f6] border border-[#e6e6ec] text-[#52525b] px-2 py-0.5 rounded-md font-medium"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* 핵심 질문 */}
                  <div className="bg-[#f8f9fa] border border-[#e6e6ec] rounded-xl p-3 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-semibold text-[#18181b] leading-snug break-keep">
                      "{pillar.question}"
                    </p>
                  </div>

                  {/* 핵심 설명 */}
                  <p className="text-xs sm:text-sm text-[#3f3f46] leading-relaxed break-keep">
                    {pillar.description}
                  </p>
                </div>

                {/* 하단 순환 표시 */}
                <div className="pt-3 border-t border-[#e6e6ec] flex items-center justify-between text-xs font-semibold text-[#71717a]">
                  <span>{isLast ? '01. 문제 정의로 선순환' : '다음 단계로 연결'}</span>
                  <span className="text-sm font-bold text-[#111113] group-hover:translate-x-0.5 transition-transform">
                    {isLast ? '↺' : '➔'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Giver & Learner 마인드 + Future Vision 통합 배치 */}
      <div className="bg-[#ffffff] rounded-3xl border border-[#e6e6ec] p-6 sm:p-8 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-7">
        {/* 상단 헤더 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e6e6ec]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#d97706] bg-amber-50 border border-amber-200/80 px-3 py-0.5 rounded-full">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Giver & Learner 마인드 · 협업 태도</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#111113] tracking-tight">
              배울 땐 누구보다 겸손하게, 나눌 땐 아낌없이 나누는 협업 태도
            </h3>
          </div>
          <span className="text-xs text-[#71717a] max-w-xs break-keep">
            동료의 수고를 덜어주는 사람이 될 때 비로소 조직의 속도와 완성도가 높아집니다.
          </span>
        </div>

        {/* 경험 2가지 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PEOPLE_EXPERIENCES.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-[#fbfbfa] border border-[#e6e6ec] rounded-2xl p-5 sm:p-6 space-y-3.5 flex flex-col justify-between hover:border-[#111113]/40 transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[#8e8e99] font-mono">
                  <span className="font-semibold text-[#111113]">{exp.role}</span>
                  <span>{exp.period}</span>
                </div>

                {/* 경험명 */}
                <h4 className="text-lg sm:text-[18px] font-bold text-[#111113] leading-snug break-keep tracking-tight">
                  {exp.title}
                </h4>

                {/* 내용과 배운점을 종합한 요약 */}
                <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed break-keep font-medium">
                  {exp.summary}
                </p>
              </div>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#e6e6ec]">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] font-mono bg-[#f4f4f6] text-[#71717a] px-2 py-0.5 rounded-md font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Future Vision 최종 다짐 & 연락처 CTA 통합 박스 (Inspired by dark card in reference) */}
        <div className="bg-[#0f0f12] text-white rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 shadow-md relative overflow-hidden">
          <div className="space-y-2.5">
            <span className="text-[11px] font-mono text-[#8e8e99] uppercase tracking-wider block">
              ( Future Vision )
            </span>
            <blockquote className="text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {FUTURE_ASPIRATION.quote}
            </blockquote>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-[#a1a1aa] max-w-xl leading-relaxed break-keep">
              {FUTURE_ASPIRATION.visionText}
            </p>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0f0f12] hover:bg-[#f4f4f6] text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer shadow-sm shrink-0 group"
            >
              <span>연락처 확인</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

