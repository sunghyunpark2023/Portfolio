import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { NavigationTabs, MainSectionId } from './components/NavigationTabs';
import { ProfileAboutSection } from './components/ProfileAboutSection';
import { CareerJourneySection } from './components/CareerJourneySection';
import { SelectedWorksSection } from './components/SelectedWorksSection';
import { WhyMeSection } from './components/WhyMeSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { ProjectItem } from './types/portfolio';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainSectionId>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleSelectTab = (tab: MainSectionId) => {
    setActiveTab(tab);
    if (tab !== 'all') {
      const element = document.getElementById(tab);
      if (element) {
        const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white font-sans">
      {/* 1. Clean Top Header */}
      <TopBar onOpenContact={() => setContactModalOpen(true)} />

      {/* 2. Sticky Tab Navigation (Profile & About / Career Journey / Selected Works / Why Me?) */}
      <NavigationTabs
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* 3. Main Content Container strictly keeping the 4 core sections */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16 space-y-20">
        
        {/* Section 1: Profile & About */}
        {(activeTab === 'all' || activeTab === 'profile-about') && (
          <div id="profile-about" className="scroll-mt-24">
            <ProfileAboutSection
              onOpenContact={() => setContactModalOpen(true)}
              onExploreCareer={() => handleSelectTab('career-journey')}
            />
          </div>
        )}

        {/* Section 2: Career Journey */}
        {(activeTab === 'all' || activeTab === 'career-journey') && (
          <div id="career-journey" className="scroll-mt-24">
            <CareerJourneySection
              onOpenDetail={(project) => setSelectedProject(project)}
            />
          </div>
        )}

        {/* Section 3: Selected Works */}
        {(activeTab === 'all' || activeTab === 'selected-works') && (
          <div id="selected-works" className="scroll-mt-24">
            <SelectedWorksSection
              onOpenDetail={(project) => setSelectedProject(project)}
            />
          </div>
        )}

        {/* Section 4: Why Me? */}
        {(activeTab === 'all' || activeTab === 'why-me') && (
          <div id="why-me" className="scroll-mt-24">
            <WhyMeSection
              onOpenContact={() => setContactModalOpen(true)}
            />
          </div>
        )}

      </main>

      {/* 4. Footer */}
      <Footer onOpenContact={() => setContactModalOpen(true)} />

      {/* 5. Comprehensive Experience Popup Modal */}
      {/* Left: Real Project Image, Metrics / Right: Role, Contribution %, How I Thought, What I did, Result, What I Learned */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 6. Contact Quick Modal (Email & Phone Copy) */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      {/* 7. Floating Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-30 p-3.5 rounded-full bg-white/95 backdrop-blur-xs border border-[#eae8e1] shadow-lg hover:bg-white text-[#555] hover:text-[#1a1a1a] transition-all no-print cursor-pointer"
        title="맨 위로 이동"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}
