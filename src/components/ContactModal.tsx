import React, { useState } from 'react';
import { X, Mail, Phone, Copy, Check, ExternalLink, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-[#e6e6ec] overflow-hidden z-10 p-6 sm:p-7 space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-[#e6e6ec]">
          <div>
            <span className="text-[10px] font-mono text-[#8e8e99] uppercase tracking-wider block">Get in touch</span>
            <h3 className="text-lg font-bold text-[#111113]">
              연락하기 (Contact)
            </h3>
            <p className="text-xs text-[#71717a]">
              {PERSONAL_INFO.name} ({PERSONAL_INFO.englishName})
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8e8e99] hover:text-[#111113] hover:bg-[#f4f4f6] rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Contact items */}
        <div className="space-y-3">
          {/* Email */}
          <div className="p-3.5 bg-[#f8f9fa] border border-[#e5e7eb] rounded-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-[#6b7280] uppercase font-semibold">이메일</div>
                <div className="text-xs font-mono font-medium text-[#111827] truncate">
                  {PERSONAL_INFO.email}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleCopyEmail}
                className="p-1.5 text-[#5f6368] hover:text-[#1a73e8] hover:bg-white rounded-md transition-colors"
                title="이메일 복사"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-1.5 text-[#5f6368] hover:text-[#1a73e8] hover:bg-white rounded-md transition-colors"
                title="메일 발송하기"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="p-3.5 bg-[#f8f9fa] border border-[#e5e7eb] rounded-xl flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-[#6b7280] uppercase font-semibold">휴대전화</div>
                <div className="text-xs font-mono font-medium text-[#111827]">
                  {PERSONAL_INFO.phone}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={handleCopyPhone}
                className="p-1.5 text-[#5f6368] hover:text-[#1a73e8] hover:bg-white rounded-md transition-colors"
                title="연락처 복사"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/-/g, '')}`}
                className="p-1.5 text-[#5f6368] hover:text-[#1a73e8] hover:bg-white rounded-md transition-colors"
                title="전화 걸기"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Message for Recruiter */}
        <div className="p-3 bg-[#e8f0fe]/60 border border-[#d2e3fc] rounded-xl text-xs text-[#174ea6] leading-relaxed">
          언제든 커피챗이나 채용 관련 문의를 환영합니다. 빠른 회신을 위해 이메일이나 문자로 먼저 연락주시면 감사하겠습니다.
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 bg-[#1a73e8] hover:bg-[#1557b0] text-white text-xs font-semibold rounded-xl transition-colors"
        >
          확인
        </button>
      </div>
    </div>
  );
};
