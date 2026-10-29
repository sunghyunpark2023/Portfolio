import React, { useState } from 'react';
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

  // 카드 뒤집기 (Flip) 상태 관리: 기본 앞면(첫 번째 사진), 클릭 시 뒷면(두 번째 사진)
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const handleToggleFlip = (number: string) => {
    setFlippedCards((prev: Record<string, boolean>) => ({
      ...prev,
      [number]: !prev[number]
    }));
  };

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
        <h2 className="font-marker text-3xl sm:text-4xl md:text-5xl text-[#111113] tracking-wide inline-block">
          WHY ME?
        </h2>
        <p className="text-sm sm:text-base text-[#52525b] leading-relaxed break-keep font-medium">
          책상 위 생각에 머무르지 않고, 현장의 이야기와 데이터로 진짜 문제를 찾아 해결해 온 4가지 일하는 원칙입니다.
        </p>
      </div>

      {/* 2. 4대 일하는 원칙 (선순환 Cycle 구조 도식화 & 3D Flip Card) */}
      <div className="space-y-4">
        {/* 순환 프로세스 흐름 안내 바 */}
        <div className="bg-[#ffffff] border border-[#e6e6ec] rounded-2xl p-3.5 sm:p-4 shadow-2xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 font-bold text-[#111113]">
              <Repeat className="w-4 h-4 text-[#d97706]" />
              <span className="font-semibold">4단계의 업무 원칙</span>
              <span className="text-xs font-medium text-[#8e8e99] ml-1 hidden md:inline">
                (카드를 클릭하면 상세 질문과 원칙이 뒤집혀 나타납니다)
              </span>
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

        {/* 4개 Pillar 3D Flip 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MINDSET_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];
            const isLast = idx === MINDSET_PILLARS.length - 1;
            const isFlipped = !!flippedCards[pillar.number];

            return (
              <div
                key={pillar.number}
                className="[perspective:1000px] h-[280px] sm:h-[295px] select-none"
              >
                <div
                  onClick={() => handleToggleFlip(pillar.number)}
                  className={`relative w-full h-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] cursor-pointer group`}
                  style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                  title="클릭하여 앞/뒷면 전환"
                >
                  {/* ================= (A) 앞면 (첫 번째 사진 내용) ================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#ffffff] rounded-2xl border border-[#e6e6ec] group-hover:border-[#111113] p-5 shadow-2xs group-hover:shadow-md transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* 상단: 아이콘 + STEP 01 + 순환 뱃지 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-xl bg-[#f4f4f6] text-[#111113] group-hover:bg-[#111113] group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono font-bold text-[#71717a]">
                            STEP {pillar.number}
                          </span>
                        </div>

                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-[#f4f4f6] text-[#52525b] border border-[#e6e6ec]">
                          {nextStepHints[idx]}
                        </span>
                      </div>

                      {/* 제목 & 영문 서브타이틀 */}
                      <div className="space-y-0.5">
                        <h3 className="text-lg sm:text-xl font-bold text-[#111113] tracking-tight group-hover:text-black">
                          {pillar.title}
                        </h3>
                        <span className="text-xs font-mono text-[#8e8e99] block font-medium">
                          {pillar.subtitle}
                        </span>
                      </div>

                      {/* 해시태그 키워드 */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {pillar.keywords.map((kw, i) => (
                          <span
                            key={i}
                            className="text-xs bg-[#f4f4f6] border border-[#e6e6ec] text-[#52525b] px-2.5 py-1 rounded-md font-medium"
                          >
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 카드 하단 뒤집기 힌트 */}
                    <div className="pt-3 border-t border-[#f0f0f3] flex items-center justify-between text-xs text-[#8e8e99]">
                      <span className="group-hover:text-[#111113] transition-colors font-medium">
                        질문 & 실천 원칙 보기
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#f4f4f6] group-hover:bg-[#111113] group-hover:text-white transition-all flex items-center gap-1">
                        <span>뒤집기</span>
                        <span>↺</span>
                      </span>
                    </div>
                  </div>

                  {/* ================= (B) 뒷면 (두 번째 사진 내용) ================= */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#ffffff] rounded-2xl border-2 border-[#111113]/80 p-5 shadow-md flex flex-col justify-between">
                    <div className="space-y-3.5">
                      {/* 핵심 질문 박스 (두 번째 사진 상단 질문 박스 형태) */}
                      <div className="bg-[#f8f9fa] border border-[#e6e6ec] rounded-xl p-3.5 flex items-start gap-2.5">
                        <HelpCircle className="w-4 h-4 text-[#d97706] shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm font-bold text-[#18181b] leading-snug break-keep">
                          "{pillar.question}"
                        </p>
                      </div>

                      {/* 핵심 설명 문구 (두 번째 사진 본문) */}
                      <p className="text-xs sm:text-sm text-[#3f3f46] leading-relaxed break-keep font-medium">
                        {pillar.description}
                      </p>
                    </div>

                    {/* 하단 순환 연결 표시 (두 번째 사진 하단 바 형태) */}
                    <div className="pt-3 border-t border-[#e6e6ec] flex items-center justify-between text-xs font-semibold text-[#71717a]">
                      <span className="text-[#111113]">
                        {isLast ? '01. 문제 정의로 선순환' : '다음 단계로 연결'}
                      </span>
                      <span className="text-sm font-bold text-[#111113]">
                        {isLast ? '↺' : '➔'}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Future Vision 최종 다짐 & 연락처 CTA 통합 박스 (선명한 노란색 #ffe812) */}
      <div className="bg-[#ffe812] text-[#111113] rounded-3xl p-6 sm:p-8 md:p-10 space-y-6 shadow-sm border border-[#eed400] relative overflow-hidden">
        <div className="space-y-2.5">
          <span className="text-[11px] font-mono text-[#524900] font-bold uppercase tracking-wider block">
            ( FUTURE VISION )
          </span>
          <blockquote className="text-sm sm:text-base md:text-xl lg:text-2xl font-extrabold tracking-tight text-[#111113] whitespace-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FUTURE_ASPIRATION.quote}
          </blockquote>
        </div>

        <div className="pt-4 border-t border-[#e2c900] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#27272a] font-medium max-w-xl leading-relaxed break-keep">
            {FUTURE_ASPIRATION.visionText}
          </p>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#111113] text-white hover:bg-black text-xs sm:text-sm font-bold rounded-full transition-all cursor-pointer shadow-sm shrink-0 group"
          >
            <span>연락처 확인</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

