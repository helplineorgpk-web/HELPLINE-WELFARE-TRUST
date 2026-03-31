import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import Layout2 from "../Components/Layout/Layout2";
import RealChangeSection from "../Components/Elements/OurImpact/RealChangeSection";
import ImpactStatsSection from "../Components/Elements/OurImpact/ImpactStatsSection";

const PRIMARY_HEALTHCARE_STATS = [
  { value: "26/1,000", label: "Under-5 mortality rate reduced" },
  { value: "22/1,000", label: "Infant mortality rate (IMR) reduced" },
  { value: "0", label: "Maternal Deaths" },
  { value: "98%", label: "of Children (under 2) are fully immunized" },
  { value: "263,095", label: "Individuals impacted by healthcare services" },
  { value: "61", label: "Medical Camps Installed" },
  { value: "37,585", label: "Households provided Primary Healthcare Services" },
  { value: "100%", label: "Antenatal care provided to the expecting mother" },
  { value: "98%", label: "of Births Conducted by Skilled Birth attendants" },
  { value: "90%", label: "of Children (under 5) monitored for growth" },
  { value: "92%", label: "of Women of Reproductive age are immunized against TT" },
  { value: "66,973", label: "Patients treated" },
];

const WASH_STATS = [
  { value: "38", label: "Committees formed of SE & WASH" },
  { value: "6", label: "Solar-Powered Water Filtration Plants Installed" },
  { value: "88", label: "Hand Pumps Installed" },
  { value: "98%", label: "of the Population with Access to Improved Water Sources in Helpline Welfare Trust Program Areas" },
  { value: "38", label: "Latrines Constructed" },
  { value: "90", label: "Compost Bins Provided to 30 HHs" },
  { value: "14,870", label: "Trees Planted" },
];

const EDUCATION_STATS = [
  { value: "274+", label: "Schools opened so far" },
  { value: "185+", label: "Children Enrolled" },
  { value: "4000+", label: "Participants Completed Adult Literacy Course" },
  { value: "2300+", label: "Teachers Trained" },
  { value: "43+", label: "Schools are currently running across Pakistan" },
  { value: "7205", label: "Students Enrolled" },
  { value: "63%", label: "Girls' Enrolment Ensured" },
  { value: "100%", label: "Digitally Connected Schools" },
];

const SOCIAL_CAPITAL_STATS = [
  { value: "239", label: "Participants trained in technical/vocational skills training" },
  { value: "158", label: "Families Supported to grow food (Kitchen Gardening)" },
  { value: "240", label: "Goats/Sheep Assets transfer for Entrepreneurs livestock (Goat/Sheep Sets)" },
  { value: "130", label: "Micro Enterprises Established" },
  { value: "93", label: "Employable skills for youth at the local Institute" },
  { value: "717", label: "Farmers trained in Climate Smart Agriculture" },
  { value: "224", label: "Kissan Cards issued to farmers" },
  { value: "150", label: "Animal breed improvement (artificial Insemination)" },
  { value: "602", label: "Families provided Ramadan food packages" },
  { value: "346", label: "Families distributed meat through the Qurbani Project" },
];

export default function OurImpactPage() {
  return (
    <Layout2>
      <AboutBreadCumb
        title="Our Impact"
        description="These key stats reflect our commitment to empowering communities across Pakistan. Each number tells a story of hope, growth, and lasting impact created through your support."
        backgroundImage="/img/Campaigns/About.webp"
      />
      <RealChangeSection />
      <ImpactStatsSection
        title="Primary Healthcare"
        underlineColor="teal"
        stats={PRIMARY_HEALTHCARE_STATS}
      />
      <ImpactStatsSection
        title="Sustainable Environment"
        underlineColor="blue"
        stats={WASH_STATS}
      />
      <ImpactStatsSection
        title="Education & Literacy"
        underlineColor="teal"
        stats={EDUCATION_STATS}
      />
      <ImpactStatsSection
        title="Social Welfare Development"
        underlineColor="teal"
        stats={SOCIAL_CAPITAL_STATS}
      />
    </Layout2>
  );
}
