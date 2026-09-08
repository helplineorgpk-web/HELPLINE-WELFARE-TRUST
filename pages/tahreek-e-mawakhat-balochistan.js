import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Meta from "../Components/SEO/Meta";
import SocialCapitalHeader from "../Components/Elements/SocialCapital/SocialCapitalHeader";
import TahreekMawakhatBalochistanDetail from "../Components/Elements/SocialCapital/TahreekMawakhatBalochistanDetail";

export default function TahreekEMawakhatBalochistanPage() {
  return (
    <Layout2>
      <Meta
        title="Tahreek-e-Mawakhat Balochistan | Helpline Welfare Trust"
        description="Helpline Welfare Trust has adopted Masjid and Madrassa Anwar-ul-Quran in Bhit Gaaj, Khuzdar, Balochistan. Join us as we raise a Mawakhat Community through solar power, clean water, tree plantation, and Al-Kitab education for 80 children."
        keywords="Tahreek e Mawakhat Balochistan, Anwar-ul-Quran, Bhit Gaaj, Khuzdar, Helpline Welfare Trust, Al-Kitab Education System"
      />
      <SocialCapitalHeader
        sectionName="Tahreek-e-Mawakhat Balochistan"
        heading={"Tahreek-e-Mawakhat\nBalochistan"}
        description="In Bhit Gaaj, Khuzdar, Helpline has adopted Masjid and Madrassa Anwar-ul-Quran. From this remote valley we will raise a Mawakhat Community of light, water, trees, and learning."
        image="/img/mainimagefullsize.png"
      />
      <TahreekMawakhatBalochistanDetail />
    </Layout2>
  );
}
