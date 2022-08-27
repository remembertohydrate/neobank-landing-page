import MainLayout from "@/components/layouts/MainLayout";
import FAQ from "@/components/sections/FAQ";
import InvestorBenefits from "@/components/sections/InvestorBenefits";
import InvestorsHero from "@/components/sections/InvestorsHero";

export default function Investors() {
  return (
    <MainLayout title="NeoBank" meta="The best Bank for your necessities!">
      <main className="w-100%">
        <InvestorsHero />
        <InvestorBenefits />
        <FAQ />
      </main>
    </MainLayout>
  );
}
