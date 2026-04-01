import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import BlogCauseDetails from "../Components/Elements/Blog/BlogCauseDetails";
import Layout2 from "../Components/Layout/Layout2";

export default function Blog() {
  return (
    <Layout2>
      <AboutBreadCumb
        title="Blog"
        description="News, stories from the field, program highlights, and updates on how Helpline Welfare Trust is serving communities across Pakistan."
        backgroundImage="/img/Campaigns/Blog.webp"
      />
      <BlogCauseDetails />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600,
  };
}
