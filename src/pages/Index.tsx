
import { HeroSection } from '@/components/HeroSection';
import { TruthSection } from '@/components/TruthSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ExclusiveInviteSection } from '@/components/ExclusiveInviteSection';
import { UrgencySection } from '@/components/UrgencySection';
import { FinalCTASection } from '@/components/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <HeroSection />
      <TruthSection />
      <SolutionSection />
      <ExclusiveInviteSection />
      <UrgencySection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
