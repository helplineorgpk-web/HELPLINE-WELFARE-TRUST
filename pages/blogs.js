import React from "react";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import BlogsList from "../Components/Elements/Blog/BlogsList";
import Layout2 from "../Components/Layout/Layout2";

export default function Blogs() {
  return (
    <Layout2>
      <AboutBreadCumb
        title="Blog"
        description="News, stories from the field, program highlights, and updates on how Helpline Welfare Trust is serving communities across Pakistan."
        backgroundImage="/img/Campaigns/Blog.webp"
      />
      <BlogsList />
    </Layout2>
  );
}

