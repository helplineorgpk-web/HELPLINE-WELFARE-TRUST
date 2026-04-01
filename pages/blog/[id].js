import React from "react";
import { blogsData } from "../../data/blogsData.js";
import AboutBreadCumb from "../../Components/Elements/About/AboutBreadCumb";
import BlogDetailsContent from "../../Components/Elements/BlogDetails/BlogDetailsContent";
import Layout2 from "../../Components/Layout/Layout2";

export default function BlogDetail({ blog }) {
  if (!blog) {
    return (
      <Layout2>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>Blog not found</h2>
          <p>The requested blog post could not be found.</p>
        </div>
      </Layout2>
    );
  }

  return (
    <Layout2>
      <AboutBreadCumb
        title="Blog"
        description="News, stories from the field, program highlights, and updates on how Helpline Welfare Trust is serving communities across Pakistan."
        backgroundImage="/img/Campaigns/Blog.webp"
      />
      <BlogDetailsContent blog={blog} />
    </Layout2>
  );
}

export async function getStaticPaths() {
  const paths = blogsData.flatMap((item) => [
    { params: { id: String(item.id) } },
    { params: { id: item.slug } },
  ]);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const blog = blogsData.find(
    (item) => item.id === parseInt(id, 10) || item.slug === id
  );

  return {
    props: { blog: blog ?? null },
    revalidate: 3600,
  };
}

