import React, { useMemo } from "react";
import CampaignHeroHeader from "../Components/Elements/Campaign/CampaignHeroHeader";
import Layout2 from "../Components/Layout/Layout2";
import ZakatContent from "../Components/Elements/Zakat/ZakatContent";
import ZakatCalculator from "../Components/Elements/Zakat/ZakatCalculator";
import Meta from "../Components/SEO/Meta";

export default function Zakat() {
  const primaryCta = useMemo(
    () => ({ href: "/donation", label: "GIVE ZAKAT NOW" }),
    []
  );
  const secondaryCta = useMemo(
    () => ({ href: "/campaigns", label: "VIEW CAMPAIGNS" }),
    []
  );

  return (
    <>
      <Meta
        title="Zakat Information Hub | Helpline Welfare Organization"
        description="Learn about Zakat—calculation, eligibility, and how to give your Zakat through Helpline. Support education, healthcare, and welfare for the poor and deserving in Pakistan."
        keywords="zakat, zakat calculation, zakat pakistan, give zakat, zakat donation, helpline zakat, nisab, sadaqah"
      />
      <Layout2>
        <CampaignHeroHeader
          label="ISLAMIC GIVING"
          title="ZAKAT CALCULATOR"
          subtitle="Calculate your Zakat with confidence and support deserving families through Helpline Welfare Trust."
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          videoTitle="How Your Zakat Changes Lives"
        />
        <ZakatCalculator />
        <ZakatContent />
      </Layout2>
    </>
  );
}
