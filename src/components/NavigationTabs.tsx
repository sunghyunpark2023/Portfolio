import React from 'react';
import { 
  Sparkles, 
  Layers, 
  FolderGit2, 
  User, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export type MainSectionId = 'all' | 'profile-about' | 'career-journey' | 'selected-works' | 'why-me';

interface NavigationTabsProps {
  activeTab: MainSectionId;
  onSelectTab: (tab: MainSectionId) => void;
}

export const NavigationTabs: React.FC<NavigationTabsProps> = ({ activeTab, onSelectTab }) => {
  const tabs = [
    { id: 'all' as MainSectionId, label: '전체 모아보기', icon: Layers, badge: 'All' },
    { id: 'profile-about' as MainSectionId, label: 'Profile & About', icon: User, badge: '01' },
    { id: 'career-journey' as MainSectionId, label: 'Internship', icon: Layers, badge: '02' },
    { id: 'selected-works' as MainSectionId, label: 'Selected Projects', icon: FolderGit2, badge: '03' },
    { id: 'why-me' as MainSectionId, label: 'Why Me?', icon: ShieldCheck, badge: '04' }
  ];

  return (
    <div className="sticky top-[57px] z-40 bg-[#fbfbfa]/90 backdrop-blur-md border-b border-[#e6e6ec] py-2.5 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#111113] text-white shadow-xs'
                    : 'text-[#63636e] hover:text-[#111113] hover:bg-[#f0f0f3]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'text-[#8e8e99]'
                  }`}
                >
                  ({tab.badge})
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Hint */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#8e8e99] shrink-0 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>카드 클릭 시 상세 모달 열람 가능</span>
        </div>
      </div>
    </div>
  );
};
