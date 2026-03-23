import HeroSection from "@/components/sections/HeroSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import PricingStepsSection from "@/components/sections/PricingStepsSection";
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
      {/* Red announcement banner */}
      <section className="w-full bg-red-600 py-3">
        <p className="text-center text-white font-extrabold text-lg md:text-xl tracking-widest uppercase">
          LANÇAMENTO EXCLUSIVO
        </p>
      </section>
      <HeroSection />
      <BenefitsSection />
      <AuthoritySection />
      <PricingStepsSection />
      <ComparisonSection />
      <InsideSection />
      <BotAISection />
      <BelongingSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;
