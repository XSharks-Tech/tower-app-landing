import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BaseSection from "@/components/sections/BaseSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import InsideSection from "@/components/sections/InsideSection";
import BotAISection from "@/components/sections/BotAISection";
import BelongingSection from "@/components/sections/BelongingSection";
import AuthoritySection from "@/components/sections/AuthoritySection";
import OfferSection from "@/components/sections/OfferSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <BenefitsSection />
      <BaseSection />
      <ComparisonSection />
      <InsideSection />
      <BotAISection />
      <BelongingSection />
      <AuthoritySection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
