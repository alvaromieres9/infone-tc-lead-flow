
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { IntroSection } from '@/components/IntroSection';
import { ValuePropSection } from '@/components/ValuePropSection';
import { PilotSection } from '@/components/PilotSection';
import { UrgencySection } from '@/components/UrgencySection';
import { CTASection } from '@/components/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-inter">
      <HeroSection />
      <ProblemSection />
      <IntroSection />
      <ValuePropSection />
      <PilotSection />
      <UrgencySection />
      <CTASection />
    </div>
  );
};

export default Index;
