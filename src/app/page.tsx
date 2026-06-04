import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ProgramContentSection } from "@/components/sections/ProgramContentSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LivretSection } from "@/components/sections/LivretSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <TransformationSection />
      <AudienceSection />
      <ProgramContentSection />
      <MethodSection />
      <AboutSection />
      <LivretSection />
      <OfferSection />
      <FAQSection />
      <FooterSection />
      <StickyMobileCTA />
    </main>
  );
}
