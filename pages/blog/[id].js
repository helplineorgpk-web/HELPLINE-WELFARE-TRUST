import React from "react";
import { useRouter } from "next/router";
import { blogsData } from "../../data/blogsData.js";
import BlogDetailsBreadCrumb from "../../Components/Elements/BlogDetails/BlogDetailsBreadCrumb";
import BlogDetailsContent from "../../Components/Elements/BlogDetails/BlogDetailsContent";
import Layout2 from "../../Components/Layout/Layout2";

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return (
      <Layout2>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <p>Loading...</p>
        </div>
      </Layout2>
    );
  }

  // Find blog by id or slug
  const blog = blogsData.find(
    (item) => item.id === parseInt(id) || item.slug === id
  );

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
      <BlogDetailsBreadCrumb title={blog.title} />
      <BlogDetailsContent blog={blog} />
    </Layout2>
  );
}

