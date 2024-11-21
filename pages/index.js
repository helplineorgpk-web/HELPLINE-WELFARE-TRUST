import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import SupportArea from "../Components/Elements/Home/SupportArea";
import FeaturedArea from "../Components/Elements/Home/FeaturedArea";
import NewsFeed from "../Components/Elements/Home/NewsFeed";
import CausesArea from "../Components/Elements/Home/CausesArea";
import AboutArea from "../Components/Elements/Home/AboutArea";
import SliderArea from "../Components/Elements/Home/SliderArea";
import CTAArea from "../Components/Elements/Home/CTAArea";
import AllOverPakistan from "../Components/Elements/Home/AllOverPakistan";
import HelplineProject from "../Components/Elements/Home/HelplineProject";
import WayToDonate from "../Components/Elements/Home/WayToDonate";
import { HelplineData } from "../pages/api/data";

const data = {
  Water: "House Construction",
  waterprojects: "Latest Cause",
};
export default function Home() {
  const cause = HelplineData.causes;
  return (
    <>
      <Layout1>
        <main>
          <SliderArea />
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
