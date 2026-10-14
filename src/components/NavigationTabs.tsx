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
    { id: 'career-journey' as MainSectionId, label: 'Career Journey', icon: Layers, badge: '02' },
    { id: 'selected-works' as MainSectionId, label: 'Selected Works', icon: FolderGit2, badge: '03' },
    { id: 'why-me' as MainSectionId, label: 'Why Me?', icon: ShieldCheck, badge: '04' }
  ];

  return (
    <div className="sticky top-0 z-40 bg-[#faf9f5]/90 backdrop-blur-md border-y border-[#eae8e1] py-3 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1a1a1a] text-white shadow-xs'
                    : 'bg-[#ffffff] text-[#555] hover:text-[#1a1a1a] hover:bg-[#f0eee6] border border-[#eae8e1]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8a8880]'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#f0eee6] text-[#71706c]'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Hint */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#71706c] shrink-0 font-medium">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#1e4620]" />
          <span>카드를 클릭하시면 '자세히 보기' 팝업이 열립니다</span>
        </div>
      </div>
    </div>
  );
};
