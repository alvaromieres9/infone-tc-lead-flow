
import { HeroSection } from '@/components/HeroSection';
import { TruthSection } from '@/components/TruthSection';
import { SolutionSection } from '@/components/SolutionSection';
import { ExclusiveInviteSection } from '@/components/ExclusiveInviteSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      <HeroSection />
      <TruthSection />
      <SolutionSection />
      <ExclusiveInviteSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
};

export default Index;
