import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import SupportArea from "../Components/Elements/Home/SupportArea";
import FeaturedArea from "../Components/Elements/Home/FeaturedArea";
import NewsFeed from "../Components/Elements/Home/NewsFeed";
import CausesArea from "../Components/Elements/Home/CausesArea";
import AboutArea from "../Components/Elements/Home/AboutArea";
import HeadArea from "../Components/Elements/Home/HeadArea";
import AllOverPakistan from "../Components/Elements/Home/AllOverPakistan";
import HelplineProject from "../Components/Elements/Home/HelplineProject";
import WayToDonate from "../Components/Elements/Home/WayToDonate";
import { HelplineData } from "../pages/api/data";
import Meta from "../Components/SEO/Meta";
import Educations from "../Components/Elements/Home/Educations";
import Header from "../Components/Elements/Home/Header";

const data = {
  Water: "Recent development",
  waterprojects: "Latest Cause",
};

export default function Home() {
  const cause = HelplineData.homeCauses;
  return (
    <>
      <Meta
        title="Helpline Welfare Organization - Supporting Communities Across Pakistan"
        description="Join Helpline Welfare Organization in our mission to provide support through disaster relief, family welfare, and community development projects across Pakistan. Make a difference today."
        keywords="welfare organization, charity pakistan, disaster relief, family welfare, community support, donations, zakat, sadqa, welfare projects"
      />
      <Layout1>
        <main>
          {/* <HeadArea /> */}
          <Header />
          <Educations />
          <AboutArea />
          <AllOverPakistan />
          <CausesArea causes={cause} data={data} />
          <SupportArea />
          <HelplineProject />
          <WayToDonate />
          <NewsFeed />
        </main>
      </Layout1>
    </>
  );
}
