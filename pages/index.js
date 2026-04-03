import React from "react";
import dynamic from "next/dynamic";
import Layout1 from "../Components/Layout/Layout1";
import AllOverPakistan from "../Components/Elements/Home/AllOverPakistan";
const MonthlyPrograms = dynamic(
  () => import("../Components/Elements/Home/MonthlyPrograms"),
  { ssr: false }
);
const BlogsSection = dynamic(
  () => import("../Components/Elements/Home/BlogsSection"),
  { ssr: false }
);
import { HelplineData } from "../pages/api/data";
import Meta from "../Components/SEO/Meta";
import Educations from "../Components/Elements/Home/Educations";
import Header from "../Components/Elements/Home/Header";
import PowerOfFive from "../Components/Elements/Home/PowerOfFive";
const GlobalGoals = dynamic(
  () => import("../Components/Elements/Home/GlobalGoals"),
  { ssr: false }
);
const NewsFeed = dynamic(() => import("../Components/Elements/Home/NewsFeed"), {
  ssr: false,
});

const data = {
  Water: "Recent development",
  waterprojects: "Latest Cause",
};

export default function Home({ cause }) {
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
          <AllOverPakistan /> 
          <PowerOfFive />
          <Educations />
          <GlobalGoals />
          {/* <AboutArea /> */}
          {/* <CausesArea causes={cause} data={data} />
          <SupportArea />  */}
          {/* <ZakatInformationHub /> */}
          <MonthlyPrograms />
          {/* <HelplineProject /> */}
          {/* <WayToDonate /> */}
          <NewsFeed />
          <BlogsSection />
        </main>
      </Layout1>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      cause: HelplineData.homeCauses,
    },
    revalidate: 3600,
  };
}
