import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import Layout2 from "../Components/Layout/Layout2";
import RealChangeSection from "../Components/Elements/OurImpact/RealChangeSection";
import ImpactOverviewSection from "../Components/Elements/OurImpact/ImpactOverviewSection";
import ImpactPillarsSection from "../Components/Elements/OurImpact/ImpactPillarsSection";
import ImpactStatsSection from "../Components/Elements/OurImpact/ImpactStatsSection";
import ImpactTimelineSection from "../Components/Elements/OurImpact/ImpactTimelineSection";
import ImpactCTASection from "../Components/Elements/OurImpact/ImpactCTASection";

const PRIMARY_HEALTHCARE_STATS = [
  { value: "939,129", label: "Healthcare Beneficiaries" },
  { value: "263,095", label: "Individuals Impacted by Healthcare Services" },
  { value: "66,973", label: "Patients Treated" },
  { value: "37,585", label: "Households Provided Primary Healthcare" },
  { value: "855+", label: "Medical Camps Organized" },
  { value: "61", label: "Medical Camps Installed" },
  { value: "1,000+", label: "Free Cataract Operations" },
  { value: "3,000+", label: "Free Medical Care Cases" },
  { value: "2", label: "Hospitals" },
  { value: "2", label: "Rehabilitation Hospitals" },
  { value: "1", label: "Mobile Dispensary" },
  { value: "1", label: "Ambulance" },
  { value: "3", label: "Free Meal Services" },
  { value: "0", label: "Maternal Deaths" },
  { value: "98%", label: "Children (under 2) Fully Immunized" },
  { value: "100%", label: "Antenatal Care for Expecting Mothers" },
  { value: "98%", label: "Births by Skilled Birth Attendants" },
  { value: "90%", label: "Children (under 5) Monitored for Growth" },
  { value: "92%", label: "Women Immunized Against TT" },
  { value: "26/1,000", label: "Under-5 Mortality Rate Reduced" },
  { value: "22/1,000", label: "Infant Mortality Rate (IMR) Reduced" },
];

const WASH_STATS = [
  { value: "986,815", label: "Trees Planted" },
  { value: "1,629", label: "Hand Pumps Installed" },
  { value: "33", label: "Solar-Powered Water Filtration Plants" },
  { value: "98%", label: "Population with Access to Improved Water Sources" },
  { value: "1,004", label: "Latrines Constructed" },
  { value: "608", label: "Housing Units Completed" },
  { value: "5", label: "Dams Constructed" },
  { value: "60", label: "Hand Washing Units" },
  { value: "49", label: "Water Chillers Installed" },
  { value: "156", label: "Solarized Housing Units" },
  { value: "38", label: "SE & WASH Committees Formed" },
  { value: "90", label: "Compost Bins Provided to Households" },
];

const EDUCATION_STATS = [
  { value: "274+", label: "Schools Opened So Far" },
  { value: "43+", label: "Schools Currently Running" },
  { value: "7,205", label: "Students Enrolled" },
  { value: "185+", label: "Children Enrolled (New Programs)" },
  { value: "4,000+", label: "Adult Literacy Course Graduates" },
  { value: "2,300+", label: "Teachers Trained" },
  { value: "63%", label: "Girls' Enrollment Ensured" },
  { value: "100%", label: "Digitally Connected Schools" },
  { value: "9", label: "Own Schools in Punjab" },
  { value: "15", label: "Adopted Schools" },
  { value: "1", label: "Orphanage Home" },
  { value: "1", label: "Vocational Training Center" },
];

const SOCIAL_WELFARE_STATS = [
  { value: "239", label: "Vocational Skills Training Participants" },
  { value: "130", label: "Micro Enterprises Established" },
  { value: "158", label: "Families Supported (Kitchen Gardening)" },
  { value: "240", label: "Goat/Sheep Asset Transfers" },
  { value: "93", label: "Youth with Employable Skills" },
  { value: "717", label: "Farmers Trained in Climate Smart Agriculture" },
  { value: "224", label: "Kissan Cards Issued to Farmers" },
  { value: "150", label: "Animal Breed Improvements (AI)" },
  { value: "602", label: "Ramadan Food Packages Distributed" },
  { value: "346", label: "Families Received Qurbani Meat" },
  { value: "12,000+", label: "Men & Women with Improved Livelihoods" },
  { value: "1,600+", label: "Village Development Organizations" },
];

const SOCIAL_CAPITAL_STATS = [
  { value: "332", label: "Village Development Organizations Formed" },
  { value: "5,050", label: "CBDRM Participants" },
  { value: "25,069", label: "CMST Training Participants" },
  { value: "533", label: "Advocacy & Human Rights Trainees" },
  { value: "4,433", label: "Sector Committee Capacity Building" },
  { value: "4,151", label: "Gender Mainstreaming & Women Empowerment" },
];

const REACH_STATS = [
  { value: "3.7M+", label: "Total Beneficiaries" },
  { value: "533K+", label: "Households Reached" },
  { value: "7K+", label: "Villages Served" },
  { value: "53", label: "Districts Covered" },
  { value: "86", label: "Tehsils" },
  { value: "917", label: "Union Councils" },
  { value: "8", label: "Regional Offices" },
  { value: "2M+", label: "Annual Expenditure (PKR)" },
];

export default function OurImpactPage() {
  return (
    <Layout2>
      <AboutBreadCumb
        title="Our Impact"
        description="These key stats reflect our commitment to empowering communities across Pakistan. Each number tells a story of hope, growth, and lasting impact created through your support."
        backgroundImage="/img/Campaigns/About.webp"
      />
      <ImpactOverviewSection />
      <RealChangeSection />
      <ImpactPillarsSection />
      <ImpactStatsSection
        title="Our Reach Across Pakistan"
        subtitle="From remote villages to urban centers, Helpline's programs span the length and breadth of the nation."
        underlineColor="teal"
        stats={REACH_STATS}
      />
      <ImpactStatsSection
        title="Primary Healthcare"
        subtitle="Combining immediate relief with preventive care — hospitals, camps, and mobile dispensaries bringing health to every doorstep."
        underlineColor="teal"
        variant="alt"
        stats={PRIMARY_HEALTHCARE_STATS}
      />
      <ImpactStatsSection
        title="Sustainable Environment & WASH"
        subtitle="Clean water, sanitation, and environmental restoration — building healthier, greener communities for generations."
        underlineColor="blue"
        stats={WASH_STATS}
      />
      <ImpactStatsSection
        title="Education & Literacy"
        subtitle="Opening schools, training teachers, and ensuring every child — especially girls — has access to quality education."
        underlineColor="teal"
        variant="alt"
        stats={EDUCATION_STATS}
      />
      <ImpactStatsSection
        title="Livelihood & Social Welfare"
        subtitle="Empowering families with skills, micro-enterprises, and agricultural support to break the cycle of poverty."
        underlineColor="teal"
        stats={SOCIAL_WELFARE_STATS}
      />
      <ImpactStatsSection
        title="Social Capital Development"
        subtitle="Building community leadership, disaster resilience, and women's empowerment at the grassroots level."
        underlineColor="blue"
        variant="alt"
        stats={SOCIAL_CAPITAL_STATS}
      />
      <ImpactTimelineSection />
      <ImpactCTASection />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
