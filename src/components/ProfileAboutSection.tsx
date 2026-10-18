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
  Upload,
  Phone
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
          // ignore storage quota error
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
      {/* Main Card: 좌측 (프로필 사진 + 업로드 기능 + 신입 소개) / 우측 (이력 및 학력 사항 4가지 + 하단 이동 버튼들) */}
      <div className="bg-[#ffffff] rounded-3xl border border-[#e6e6ec] p-6 sm:p-8 md:p-10 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* ===================== 좌측 영역 (col-span-4) ===================== */}
          {/* 프로필 사진 + 사진 변경 기능 + 신입 직무 소개 문구 */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* 프로필 사진 박스 */}
            <div className="space-y-2">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="group relative w-full max-w-[270px] mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-[#f4f4f6] border border-[#e6e6ec] hover:border-[#111113] shadow-xs cursor-pointer transition-all"
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
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white p-3 text-center">
                    <Camera className="w-5 h-5 text-white" />
                    <span className="text-xs font-semibold leading-tight">
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
              <div className="flex items-center justify-between max-w-[270px] mx-auto lg:mx-0 px-1 text-xs">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-1.5 text-[#52525b] hover:text-[#111113] font-medium cursor-pointer py-1 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>{hasCustomImg ? '사진 다시 변경' : '내 사진 직접 올리기'}</span>
                </button>

                {hasCustomImg && (
                  <button
                    type="button"
                    onClick={handleResetImage}
                    className="inline-flex items-center gap-1 text-[#8e8e99] hover:text-rose-600 font-medium cursor-pointer py-1 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>기본으로 복원</span>
                  </button>
                )}
              </div>
            </div>

            {/* 프로필 사진 바로 밑: 신입 지원자 소개 (가독성 높은 폰트와 크기) */}
            <div className="space-y-3 pt-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f4f6] text-xs font-semibold text-[#3f3f46]">
                <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                <span>{PERSONAL_INFO.role}</span>
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#111113] tracking-tight">
                  {PERSONAL_INFO.name}
                  <span className="text-sm sm:text-base font-normal text-[#71717a] ml-2">
                    {PERSONAL_INFO.englishName}
                  </span>
                </h1>
              </div>

              <p className="text-sm sm:text-base text-[#27272a] leading-relaxed break-keep font-medium">
                {PERSONAL_INFO.headline}
              </p>

              <p className="text-xs sm:text-sm text-[#52525b] leading-relaxed break-keep">
                {PERSONAL_INFO.welcomeSub}
              </p>

              {/* 연락처 정보 */}
              <div className="pt-3 border-t border-[#e6e6ec] text-xs sm:text-sm text-[#52525b] space-y-1.5">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Mail className="w-4 h-4 text-[#71717a]" />
                  <span className="font-mono">{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <Phone className="w-4 h-4 text-[#71717a]" />
                  <span className="font-mono">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
            </div>

          </div>


          {/* ===================== 우측 영역 (col-span-8) ===================== */}
          {/* 이력 및 학력 사항 (Credentials & Education) 4가지 + 하단 이동 버튼들 */}
          <div className="lg:col-span-8 space-y-6 pt-1 lg:pt-0 flex flex-col justify-between">
            
            <div className="space-y-4">
              {/* 섹션 헤더 */}
              <div className="pb-3 border-b border-[#e6e6ec] flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#71717a] font-semibold tracking-tight block">
                    ( 01 ) Credentials & Education
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-[#111113] tracking-tight">
                    이력 및 학력 사항
                  </h2>
                </div>
                <span className="text-xs text-[#71717a] hidden sm:inline font-medium">
                  학력 · 어학 · 자격 · 글로벌 경험
                </span>
              </div>

              {/* 4대 핵심 이력 그리드 (2x2) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. 학력 (Education) */}
                <div className="bg-[#fbfbfa] rounded-2xl border border-[#e6e6ec] p-5 space-y-3 hover:border-[#111113]/40 transition-colors flex flex-col justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#71717a]">
                      <GraduationCap className="w-4 h-4 text-[#111113]" />
                      <span>01. 학력</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#111113] leading-snug break-keep">
                      한양대학교
                    </div>
                    <div className="text-sm text-[#3f3f46] leading-relaxed break-keep">
                      경영학부 · 중국경제통상학과<br />
                      <span className="text-[#52525b] text-xs font-semibold px-2 py-0.5 rounded-md bg-[#f4f4f6] inline-block mt-1">복수전공</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#e6e6ec] space-y-1">
                    <div className="text-sm font-semibold text-[#111113]">
                      학점 <strong className="font-bold text-base text-[#111113]">4.15</strong> <span className="text-[#71717a] text-xs font-normal">/ 4.50</span>
                    </div>
                    <div className="text-xs text-[#71717a]">
                      2020.03 ~ 2026.08 졸업
                    </div>
                    <div className="text-xs text-[#8e8e99]">
                      상원고등학교 인문계열 졸업
                    </div>
                  </div>
                </div>

                {/* 2. 어학 역량 (Languages) */}
                <div className="bg-[#fbfbfa] rounded-2xl border border-[#e6e6ec] p-5 space-y-3 hover:border-[#111113]/40 transition-colors flex flex-col justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#71717a]">
                      <Globe className="w-4 h-4 text-[#111113]" />
                      <span>02. 어학 역량</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-[#71717a] block font-medium">영어</span>
                        <div className="text-sm sm:text-base font-bold text-[#111113]">
                          TOEIC 980점 <span className="text-xs font-normal text-[#52525b]">(만점권)</span>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-[#3f3f46]">
                          OPIc IH
                        </div>
                      </div>
                      <div className="pt-2 border-t border-[#e6e6ec]">
                        <span className="text-xs text-[#71717a] block font-medium">중국어</span>
                        <div className="text-sm sm:text-base font-bold text-[#111113]">
                          신 HSK 5급 <span className="text-xs font-normal text-[#52525b]">(217점)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#52525b] pt-2 border-t border-[#e6e6ec] font-medium">
                    글로벌 비즈니스 실무 소통 가능
                  </div>
                </div>

                {/* 3. 자격 및 직무 교육 (Certifications) */}
                <div className="bg-[#fbfbfa] rounded-2xl border border-[#e6e6ec] p-5 space-y-3 hover:border-[#111113]/40 transition-colors flex flex-col justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#71717a]">
                      <Award className="w-4 h-4 text-[#111113]" />
                      <span>03. 자격 및 직무 교육</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-sm sm:text-base font-bold text-[#111113] leading-tight">
                        GAIQ · ADsP
                      </div>
                      <div className="text-xs sm:text-sm text-[#3f3f46] font-medium">
                        화장품성분평가사 1급
                      </div>
                      <div className="text-xs text-[#52525b] break-keep pt-1 leading-relaxed">
                        코멘토 뷰티 BM 직무 부트캠프 수료 (2025.08 ~ 2025.09)
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-[#71717a] pt-2 border-t border-[#e6e6ec] font-medium">
                    데이터 분석 및 뷰티 실무 역량 보유
                  </div>
                </div>

                {/* 4. 글로벌 경험 (Global Experience) */}
                <div className="bg-[#fbfbfa] rounded-2xl border border-[#e6e6ec] p-5 space-y-3 hover:border-[#111113]/40 transition-colors flex flex-col justify-between group">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#71717a]">
                      <MapPin className="w-4 h-4 text-[#111113]" />
                      <span>04. 글로벌 경험</span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#111113] leading-snug break-keep">
                      독일 튀빙겐 대학교
                    </div>
                    <div className="text-sm text-[#3f3f46] leading-relaxed break-keep">
                      교환학생 연수
                    </div>
                    <div className="text-xs text-[#52525b] break-keep leading-relaxed">
                      한국어 학습 동아리(AG) 멘토링 참여
                    </div>
                  </div>
                  <div className="text-xs text-[#71717a] pt-2 border-t border-[#e6e6ec]">
                    2024.03 ~ 2024.08 (독일)
                  </div>
                </div>

              </div>
            </div>

            {/* 하단 액션 버튼들 */}
            <div className="pt-5 border-t border-[#e6e6ec] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={onExploreCareer}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#111113] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer shadow-xs group"
              >
                <span>2번의 인턴 경험(Career Journey) 보기</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#f4f4f6] hover:bg-[#eaeaea] text-[#111113] text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>연락처 확인</span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white border border-[#e6e6ec] hover:border-[#111113] text-[#52525b] hover:text-[#111113] text-xs font-medium rounded-full transition-colors cursor-pointer no-print"
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
