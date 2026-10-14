import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  Globe, 
  Award, 
  MapPin, 
  Mail, 
  ArrowRight, 
  Printer, 
  Sparkles,
  Camera,
  RotateCcw,
  Upload
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileAboutSectionProps {
  onOpenContact: () => void;
  onExploreCareer: () => void;
}

const STORAGE_KEY = 'user_custom_profile_image';

export const ProfileAboutSection: React.FC<ProfileAboutSectionProps> = ({ 
  onOpenContact, 
  onExploreCareer 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // 사용자가 직접 업로드한 사진이 있으면 불러오고, 없으면 기본 사진 사용
  const [profileImg, setProfileImg] = useState<string>(PERSONAL_INFO.portraitImage);
  const [hasCustomImg, setHasCustomImg] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setProfileImg(saved);
        setHasCustomImg(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setProfileImg(result);
        setHasCustomImg(true);
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch {
          // ignore storage quota error if image is large
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleResetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setProfileImg(PERSONAL_INFO.portraitImage);
    setHasCustomImg(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="profile-about" className="space-y-6">
      
      {/* Main Grid: 좌측 (프로필 사진 + 절반 크기 소개 문구) / 우측 (이력 및 학력 사항 4가지 + 하단 이동 버튼들) */}
      <div className="bg-[#ffffff] rounded-3xl border border-[#eae8e1] p-6 sm:p-8 md:p-9 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-9 items-start">
          
          {/* ===================== 좌측 영역 (col-span-4 / col-span-5) ===================== */}
          {/* 프로필 사진 + 직접 사진 업로드 기능 + 크기 절반으로 줄인 소개 문구 */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* 직접 사진 업로드 가능한 프로필 사진 영역 */}
            <div className="space-y-2">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group relative w-full max-w-[260px] mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-[#f0eee6] border-2 border-[#eae8e1] hover:border-[#1a1a1a] shadow-xs cursor-pointer transition-all"
                title="클릭하여 내 사진 직접 업로드"
              >
                <div className="aspect-[3/4] w-full relative">
                  <img
                    src={profileImg}
                    alt="박성현 프로필"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* 사진 위 호버 시 표시되는 업로드 오버레이 */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white p-3 text-center">
                    <Camera className="w-6 h-6 text-white" />
                    <span className="text-xs font-bold leading-tight">
                      내 사진 직접 업로드<br />(클릭해서 변경)
                    </span>
                  </div>
                </div>

                {/* 숨겨진 파일 인풋 */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {/* 사진 업로드 버튼 / 초기화 버튼 */}
              <div className="flex items-center justify-between max-w-[260px] mx-auto lg:mx-0 px-1 text-xs">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1 text-[#555] hover:text-[#1a1a1a] font-semibold cursor-pointer py-1"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{hasCustomImg ? '사진 다시 변경' : '내 사진 직접 올리기'}</span>
                </button>

                {hasCustomImg && (
                  <button
                    type="button"
                    onClick={handleResetImage}
                    className="inline-flex items-center gap-1 text-[#8a8880] hover:text-[#b3261e] font-medium cursor-pointer py-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>기본으로 복원</span>
                  </button>
                )}
              </div>
            </div>

            {/* 프로필 사진 바로 밑에 소개 문구 (요청대로 폰트 크기 절반으로 축소) */}
            <div className="space-y-2 pt-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f4f2eb] border border-[#e5e2d8] text-[11px] font-semibold text-[#555]">
                <Sparkles className="w-3 h-3 text-[#e68a00]" />
                <span>{PERSONAL_INFO.role}</span>
              </div>

              {/* 폰트 크기를 기존 24px에서 절반(text-xs sm:text-sm) 수준으로 줄인 소개 문구 */}
              <h1 className="text-xs sm:text-sm font-bold text-[#1a1a1a] tracking-tight leading-snug break-keep">
                데이터와 현장의 목소리에서 진짜 문제를 정의하고,<br className="hidden sm:inline" />{' '}
                <span className="text-[#666] font-semibold">
                  유연한 실행으로 성과를 증명하는 비즈니스 실행가, 박성현입니다.
                </span>
              </h1>

              <p className="text-[11px] sm:text-xs text-[#71706c] leading-relaxed break-keep">
                {PERSONAL_INFO.subIntro}
              </p>
            </div>

          </div>


          {/* ===================== 우측 영역 (col-span-8) ===================== */}
          {/* 이력 및 학력 사항 (Credentials & Education) 4가지 + 하단 이동 버튼들 (여백 해소) */}
          <div className="lg:col-span-8 space-y-5 pt-1 lg:pt-0 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* 섹션 헤더 */}
              <div className="pb-3 border-b border-[#eae8e1] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#8a8880] uppercase tracking-wider block">
                    Credentials & Education
                  </span>
                  <h2 className="text-base sm:text-lg font-black text-[#1a1a1a] tracking-tight">
                    이력 및 학력 사항
                  </h2>
                </div>
                <span className="text-xs text-[#71706c] font-medium hidden sm:inline">
                  학력 · 어학 · 자격 · 글로벌 경험
                </span>
              </div>

              {/* 4대 핵심 이력 그리드 (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* 1. 학력 (Education) */}
                <div className="bg-[#faf9f5] rounded-2xl border border-[#eae8e1] p-4 sm:p-5 space-y-2 shadow-2xs hover:border-[#b8b6b0] transition-colors flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8a8880] uppercase tracking-wider">
                      <GraduationCap className="w-4 h-4 text-[#1a1a1a]" />
                      <span>01. 학력</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#1a1a1a] leading-snug break-keep">
                      한양대학교
                    </div>
                    <div className="text-xs text-[#444] leading-relaxed break-keep">
                      경영학부 · 중국경제통상학과<br />
                      <span className="text-[#71706c] text-[11px] font-medium">복수전공</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-[#eae8e1] space-y-0.5">
                    <div className="text-xs font-bold text-[#1a1a1a]">
                      학점 <strong className="font-mono text-sm text-[#1a1a1a]">4.14</strong> / 4.50
                    </div>
                    <div className="text-[11px] text-[#8a8880]">
                      2020.03 ~ 2026.08 졸업
                    </div>
                  </div>
                </div>

                {/* 2. 어학 역량 (Languages) */}
                <div className="bg-[#faf9f5] rounded-2xl border border-[#eae8e1] p-4 sm:p-5 space-y-2 shadow-2xs hover:border-[#b8b6b0] transition-colors flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8a8880] uppercase tracking-wider">
                      <Globe className="w-4 h-4 text-[#1a1a1a]" />
                      <span>02. 어학 역량</span>
                    </div>
                    <div className="space-y-1.5">
                      <div>
                        <span className="text-[11px] font-bold text-[#71706c] block">영어</span>
                        <div className="text-xs sm:text-sm font-bold text-[#1a1a1a]">
                          TOEIC 980점 <span className="text-[11px] font-normal text-[#8a8880]">(만점권)</span>
                        </div>
                        <div className="text-xs font-semibold text-[#555]">
                          OPIc IH
                        </div>
                      </div>
                      <div className="pt-1.5 border-t border-[#eae8e1]">
                        <span className="text-[11px] font-bold text-[#71706c] block">중국어</span>
                        <div className="text-xs sm:text-sm font-bold text-[#1a1a1a]">
                          신 HSK 5급 <span className="text-[11px] font-normal text-[#8a8880]">(217점)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#71706c] pt-1">
                    글로벌 비즈니스 실무 소통 가능
                  </div>
                </div>

                {/* 3. 자격 및 직무 교육 (Certifications) */}
                <div className="bg-[#faf9f5] rounded-2xl border border-[#eae8e1] p-4 sm:p-5 space-y-2 shadow-2xs hover:border-[#b8b6b0] transition-colors flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8a8880] uppercase tracking-wider">
                      <Award className="w-4 h-4 text-[#1a1a1a]" />
                      <span>03. 자격 및 직무 교육</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm font-bold text-[#1a1a1a] leading-tight">
                        GAIQ · ADsP
                      </div>
                      <div className="text-xs text-[#555]">
                        화장품성분평가사 1급
                      </div>
                      <div className="text-xs text-[#71706c] break-keep">
                        코멘토 뷰티 BM 직무 부트캠프 수료
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-[#8a8880] pt-1.5 border-t border-[#eae8e1]">
                    데이터 분석 및 화장품 BM 실무 역량
                  </div>
                </div>

                {/* 4. 글로벌 경험 (Global Experience) */}
                <div className="bg-[#faf9f5] rounded-2xl border border-[#eae8e1] p-4 sm:p-5 space-y-2 shadow-2xs hover:border-[#b8b6b0] transition-colors flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#8a8880] uppercase tracking-wider">
                      <MapPin className="w-4 h-4 text-[#1a1a1a]" />
                      <span>04. 글로벌 경험</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#1a1a1a] leading-snug break-keep">
                      독일 튀빙겐 대학교
                    </div>
                    <div className="text-xs text-[#555] leading-relaxed break-keep">
                      교환학생 연수
                    </div>
                    <div className="text-xs text-[#71706c] break-keep">
                      한국어 학습 AG 프로그램 참여
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-[#8a8880] pt-1.5 border-t border-[#eae8e1]">
                    2024.03 ~ 2024.08 (독일)
                  </div>
                </div>

              </div>
            </div>

            {/* ===================== 이력 사항 밑 액션 버튼들 (여백 해소 & 동선 최적화) ===================== */}
            <div className="pt-4 border-t border-[#eae8e1] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onExploreCareer}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] hover:bg-black text-white text-xs sm:text-sm font-bold rounded-2xl transition-all cursor-pointer shadow-xs group"
              >
                <span>인턴십 경험(Career Journey) 보기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#f0eee6] hover:bg-[#eae8e1] text-[#1a1a1a] text-xs sm:text-sm font-bold rounded-2xl transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>연락처 확인</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-white border border-[#eae8e1] hover:bg-[#f9f8f5] text-[#71706c] hover:text-[#1a1a1a] text-xs font-semibold rounded-2xl transition-colors cursor-pointer no-print"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PDF 인쇄</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
