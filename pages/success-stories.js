import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import Layout2 from "../Components/Layout/Layout2";
import FeaturedStoryCard from "../Components/Elements/SuccessStories/FeaturedStoryCard";
import MoreSuccessStories from "../Components/Elements/SuccessStories/MoreSuccessStories";

export default function SuccessStoriesPage() {
  return (
    <Layout2>
      <AboutBreadCumb
        title="Success Stories"
        description="Our success stories highlight the impact of our programs and the lives transformed through our work."
        backgroundImage="/img/Campaigns/About.jpg"
      />
      <FeaturedStoryCard />
      <MoreSuccessStories />
    </Layout2>
  );
}
