import MainLayout from "@/components/layouts/MainLayout";
import HomeHero from "@/components/sections/HomeHero";
import HomeHowItWorks from "@/components/sections/HomeHowItWorks";
import CompanyBenefits from "@/components/sections/CompanyBenefits";
import FAQ from "@/components/sections/FAQ";
import InvestorBenefits from "@/components/sections/InvestorBenefits";

export default function Home() {
  return (
    <MainLayout title="NeoBank" meta="The best Bank for your necessities!">
      <main className="w-100%">
        <HomeHero />
        <HomeHowItWorks />
        <CompanyBenefits />
        <InvestorBenefits />
        <FAQ />
      </main>
    </MainLayout>
  );
}
