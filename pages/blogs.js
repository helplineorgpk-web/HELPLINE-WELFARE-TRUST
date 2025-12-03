import React from "react";
import BlogBreadCrumb from "../Components/Elements/Blog/BlogBreadCrumb";
import BlogsList from "../Components/Elements/Blog/BlogsList";
import Layout2 from "../Components/Layout/Layout2";

export default function Blogs() {
  return (
    <Layout2>
      <BlogBreadCrumb />
      <BlogsList />
    </Layout2>
  );
}

