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
    <section id="why-me" className="space-y-10">
      {/* 1. Section Header: 'Why me?' 로 수정 */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edebe4] text-xs sm:text-sm font-semibold text-[#1a1a1a]">
          <Sparkles className="w-4 h-4 text-[#e68a00]" />
          <span>Why Me? · 핵심 직무 역량 & 일하는 태도</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
          Why me?
        </h2>
        <p className="text-sm sm:text-base text-[#555] max-w-3xl leading-relaxed break-keep">
          책상 앞 기획서에 머무르지 않고, 현장의 목소리(VoC)와 데이터를 통해 진짜 문제를 찾고 해결해 온 4단계 선순환 프로세스입니다.
        </p>
      </div>

      {/* 2. 4대 일하는 원칙 (선순환 Cycle 구조 도식화) */}
      <div className="space-y-4">
        {/* 순환 프로세스 흐름 안내 바 */}
        <div className="bg-[#ffffff] border border-[#eae8e1] rounded-2xl p-3.5 sm:p-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 font-bold text-[#1a1a1a]">
              <Repeat className="w-4 h-4 text-[#e68a00]" />
              <span>4단계 선순환 실행 사이클 (Agile Cycle)</span>
            </div>
            {/* 순환 단계 칩 */}
            <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-[11px] font-semibold text-[#555]">
              <span className="px-2.5 py-1 rounded-lg bg-[#f5f4ee] text-[#1a1a1a] font-bold">01. 문제 정의</span>
              <span className="text-[#bbb]">➔</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#f5f4ee] text-[#1a1a1a] font-bold">02. 관찰과 소통</span>
              <span className="text-[#bbb]">➔</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#f5f4ee] text-[#1a1a1a] font-bold">03. 유연한 피보팅 & 실행력</span>
              <span className="text-[#bbb]">➔</span>
              <span className="px-2.5 py-1 rounded-lg bg-[#f5f4ee] text-[#1a1a1a] font-bold">04. 회복탄력성과 성장의지</span>
              <span className="text-[#bbb]">➔</span>
              <span className="px-2 py-1 rounded-lg bg-[#fff8eb] border border-[#f5ebd9] text-[#b36b00] font-bold inline-flex items-center gap-1">
                <Repeat className="w-3 h-3" />
                <span>지속적 순환</span>
              </span>
            </div>
          </div>
        </div>

        {/* 4개 Pillar 카드 그리드 (실제 프로젝트 적용 사례 제외, 해시태그 제목 밑 유지, 순환 연결) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MINDSET_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            const isLast = idx === MINDSET_PILLARS.length - 1;

            return (
              <div
                key={pillar.number}
                className="bg-[#ffffff] rounded-3xl border border-[#eae8e1] p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group relative"
              >
                <div className="space-y-3.5">
                  {/* 카드 상단: 아이콘 + 번호 + 순환 힌트 */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-2xl bg-[#f5f4ee] text-[#1a1a1a] group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#8a8880]">
                        STEP {pillar.number}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#f5f4ee] text-[#71706c] font-semibold">
                      {nextStepHints[idx]}
                    </span>
                  </div>

                  {/* 제목 & 서브타이틀 */}
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#1a1a1a] tracking-tight">
                      {pillar.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#8a8880] block mt-0.5">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* 해시태그 (요청대로 필러 제목 밑에 바로 배치) */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5 pb-1">
                    {pillar.keywords.map((kw, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-[#f5f4ee] border border-[#e8e6df] text-[#555] px-2 py-0.5 rounded-md font-medium"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* 핵심 질문 */}
                  <div className="bg-[#faf9f5] border border-[#f0eee6] rounded-2xl p-3 flex items-start gap-2">
                    <HelpCircle className="w-3.5 h-3.5 text-[#e68a00] shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-[#333] leading-snug break-keep">
                      "{pillar.question}"
                    </p>
                  </div>

                  {/* 상세 설명 */}
                  <p className="text-xs sm:text-sm text-[#555] leading-relaxed break-keep">
                    {pillar.description}
                  </p>
                </div>

                {/* 하단 순환 표시 (마지막 필러는 01로 재순환 표시) */}
                <div className="pt-3 border-t border-[#f0eee6] flex items-center justify-between text-[11px] font-semibold text-[#8a8880]">
                  <span>{isLast ? '01. 문제 정의로 선순환' : '다음 단계로 연결'}</span>
                  <span className="text-xs font-bold text-[#1a1a1a] group-hover:translate-x-0.5 transition-transform">
                    {isLast ? '↺ Loop' : '➔'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Giver & Learner 마인드 + Future Aspiration 통합 배치 */}
      {/* 요청: Giver/Learner 마인드 경험명 폰트 2pt 확대, 내용+배운점 3줄 이내 요약, 
          Future Aspiration 자리에 배치하며 최종 다짐 문구 연결 */}
      <div className="bg-[#ffffff] rounded-3xl border border-[#eae8e1] p-6 sm:p-8 md:p-9 shadow-xs space-y-7">
        {/* 상단 헤더 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#f0eee6]">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e68a00] bg-[#fffaf0] border border-[#fbe5c5] px-3 py-1 rounded-full">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Giver & Learner 마인드 · Future Aspiration</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] tracking-tight">
              배울 땐 누구보다 겸손하게, 나눌 땐 아낌없이 나누는 협업 태도
            </h3>
          </div>
          <span className="text-xs sm:text-sm text-[#71706c] max-w-xs break-keep">
            동료의 수고를 덜어주는 사람이 될 때 비로소 조직의 속도와 완성도가 높아집니다.
          </span>
        </div>

        {/* 경험 2가지 카드: 경험명 폰트 2pt 키움 (text-lg sm:text-[18px]), 내용과 배운점 종합 3줄 이내 요약 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PEOPLE_EXPERIENCES.map((exp, idx) => (
            <div 
              key={idx} 
              className="bg-[#faf9f5] border border-[#eae8e1] rounded-2xl p-5 sm:p-6 space-y-3.5 flex flex-col justify-between hover:border-[#b8b6b0] transition-colors"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[#8a8880]">
                  <span className="font-bold text-[#1a1a1a]">{exp.role}</span>
                  <span className="font-mono">{exp.period}</span>
                </div>

                {/* 경험명: 기존 text-base(16px) 대비 2pt 키운 text-lg sm:text-[18px] */}
                <h4 className="text-lg sm:text-[18px] font-black text-[#1a1a1a] leading-snug break-keep tracking-tight">
                  {exp.title}
                </h4>

                {/* 내용과 배운점을 종합한 최대 3줄 이내 요약 */}
                <p className="text-xs sm:text-sm text-[#444] leading-relaxed break-keep font-medium">
                  {exp.summary}
                </p>
              </div>

              {/* 태그 */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#f0eee6]">
                {exp.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[11px] bg-[#f5f4ee] text-[#555] px-2 py-0.5 rounded-md font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Future Aspiration 최종 다짐 & 연락처 CTA 통합 박스 */}
        <div className="bg-[#1a1a1a] text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="space-y-3">
            <span className="text-[11px] font-mono font-bold text-white/60 uppercase tracking-widest block">
              Future Aspiration & Vision
            </span>
            <blockquote className="text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-snug break-keep text-white">
              {FUTURE_ASPIRATION.quote}
            </blockquote>
          </div>

          <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed break-keep">
              {FUTURE_ASPIRATION.visionText}
            </p>

            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#1a1a1a] hover:bg-[#f0eee6] text-xs sm:text-sm font-black rounded-xl transition-colors cursor-pointer shadow-sm shrink-0"
            >
              <Mail className="w-4 h-4 text-[#1a1a1a]" />
              <span>연락처 확인 (이메일 · 전화번호)</span>
              <ArrowRight className="w-4 h-4 text-[#1a1a1a]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

