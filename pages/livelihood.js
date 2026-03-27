import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import LivelihoodHeader from "../Components/Elements/Livelihood/LivelihoodHeader";
import LivelihoodStats from "../Components/Elements/Livelihood/LivelihoodStats";
import LivelihoodContent from "../Components/Elements/Livelihood/LivelihoodContent";
import LivelihoodDisasterReliefTopics from "../Components/Elements/Livelihood/LivelihoodDisasterReliefTopics";
import LivelihoodSuccessStories from "../Components/Elements/Livelihood/LivelihoodSuccessStories";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";

const data = {
  Livelihood: "Livelihood",
};

export default function livelihood() {
  const cause = HelplineData.causes;
  const livelihoodProjectCards = cause.filter((item) =>
    item.category?.some((cat) =>
      [
        "House Constructions",
        "Water",
        "Education",
        "Medical",
      ].includes(cat)
    )
  );

  const livelihoodProjectCategories = {
    HouseConstructions: "House Constructions",
  };

  return (
    <Layout2>
      <LivelihoodHeader
        image="/img/Campaigns/Food.jpg"
      />
      <LivelihoodStats />
      <LivelihoodContent />
      <LivelihoodDisasterReliefTopics />
     
      <LivelihoodSuccessStories />
      <CauseRecentCause
        categories={data}
        causes={cause}
        sectionTitle="Our Livelihood & Food Security Projects"
        sectionDescription={
          <>
            Helpline Welfare Trust &ndash; Livelihood &amp; Food Security Program<br /><br />
            Alhamdulillah, Helpline Welfare Trust has been working to empower communities
            across Pakistan by providing sustainable livelihood opportunities and ensuring
            food security for the most vulnerable families. Through vocational training,
            microenterprise support, kitchen gardening, climate-smart agriculture, and
            livestock distribution, we help families build self-reliance and break free
            from the cycle of poverty.<br /><br />
            In disaster-affected areas, our model follows a clear pathway:
            Rescue &rarr; Relief &rarr; Rehabilitation, especially for earthquake and flood
            emergencies. During Flood Response 2010, Helpline provided emergency food,
            shelter, and medical support, then moved into long-term rehabilitation,
            including the construction of 100+ houses. In Flood Response 2022, the team
            again delivered rescue coordination and relief supplies, followed by
            rehabilitation and construction support with 40+ houses for vulnerable
            families.<br /><br />
            Each program is designed to create lasting impact &mdash; equipping individuals
            with the skills, tools, and resources they need to earn a dignified living,
            feed their families, and contribute to their communities. From training women
            in tailoring and carpentry to distributing poultry sets and supporting
            small-scale farming, every initiative brings families closer to independence.<br /><br />
            Our mission is rooted in the belief that every family deserves the opportunity
            to thrive. Helpline Welfare Trust continues to expand its livelihood and food
            security programs &mdash; reaching more communities, empowering more youth and
            women, and building stronger, self-sustaining villages across Pakistan.
          </>
        }
      />
       <CauseRecentCause
        categories={livelihoodProjectCategories}
        causes={livelihoodProjectCards}
        initialFilter="House Constructions"
        sectionTitle="Construction & Disaster Response Projects"
        sectionDescription={
          <>
            Explore our field projects across House Constructions, Water, Education,
            and Medical support for vulnerable communities.
          </>
        }
      />
    </Layout2>
  );
}
