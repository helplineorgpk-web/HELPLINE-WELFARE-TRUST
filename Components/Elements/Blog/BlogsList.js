import React from "react";
import Link from "next/link";
import { blogsData } from "../../../data/blogsData";

export default function BlogsList() {
  return (
    <>
      <style jsx>{`
        .blogs_list_area {
          background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
          padding: 80px 0;
        }

        /* Blog Cards Grid */
        .blogs_grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .blog_card_modern {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #f1f5f9;
          height: 100%;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .blog_card_modern:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        .blog_image_wrap {
          position: relative;
          overflow: hidden;
          height: 240px;
        }

        .blog_image_wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog_card_modern:hover .blog_image_wrap img {
          transform: scale(1.1);
        }

        .category_badge_modern {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          color: #1e293b;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .blog_card_body {
          padding: 1.75rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .blog_title_modern {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          color: #1e293b;
          margin: 0 0 0.75rem 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog_title_modern a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .blog_title_modern a:hover {
          color: #06b6d4;
        }

        .blog_excerpt_modern {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #64748b;
          margin: 0 0 1rem 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        .blog_meta_modern {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .meta_info {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .meta_info span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .read_more_btn {
          color: #06b6d4;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .read_more_btn:hover {
          color: #0891b2;
          gap: 0.75rem;
        }

        /* Sidebar */
        .sidebar_modern {
          position: sticky;
          top: 100px;
        }

        .sidebar_widget_modern {
          background: #ffffff;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
          border: 1px solid #f1f5f9;
        }

        .widget_title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .search_form {
          display: flex;
          gap: 0.5rem;
        }

        .search_input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 0.875rem;
          transition: all 0.3s ease;
        }

        .search_input:focus {
          outline: none;
          border-color: #06b6d4;
          box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
        }

        .search_btn {
          padding: 0.75rem 1.25rem;
          background: #06b6d4;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search_btn:hover {
          background: #0891b2;
        }

        .popular_post {
          display: flex;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .popular_post:last-child {
          border-bottom: none;
        }

        .popular_post_img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .popular_post_content {
          flex: 1;
        }

        .popular_post_title {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0 0 0.5rem 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .popular_post_title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .popular_post_title a:hover {
          color: #06b6d4;
        }

        .popular_post_date {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .category_list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .category_list li {
          padding: 0.75rem 0;
          border-bottom: 1px solid #f1f5f9;
        }

        .category_list li:last-child {
          border-bottom: none;
        }

        .category_list a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .category_list a:hover {
          color: #06b6d4;
          padding-left: 0.5rem;
        }

        .category_list a::after {
          content: "→";
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .category_list a:hover::after {
          opacity: 1;
        }

        .tags_cloud {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tag_item {
          background: #f8fafc;
          color: #64748b;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.75rem;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .tag_item:hover {
          background: #06b6d4;
          color: white;
          border-color: #06b6d4;
          transform: translateY(-2px);
        }

        @media (max-width: 992px) {
          .blogs_grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }

          .sidebar_modern {
            position: relative;
            top: 0;
            margin-top: 3rem;
          }
        }

        @media (max-width: 768px) {
          .blogs_grid {
            grid-template-columns: 1fr;
          }

          .blog_image_wrap {
            height: 200px;
          }
        }
      `}</style>
      <div className="blogs_list_area">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7">
              <div className="blogs_grid">
                {blogsData.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.id}`}
                    style={{ textDecoration: "none", display: "block" }}
                  >
                    <article className="blog_card_modern">
                      <div className="blog_image_wrap">
                        <img src={blog.image} alt={blog.title} />
                        <span className="category_badge_modern">
                          {blog.category}
                        </span>
                      </div>
                      <div className="blog_card_body">
                        <h3 className="blog_title_modern">
                          <Link href={`/blog/${blog.id}`}>
                            {blog.title}
                          </Link>
                        </h3>
                        <p className="blog_excerpt_modern">{blog.excerpt}</p>
                        <div className="blog_meta_modern">
                          <div className="meta_info">
                            <span>
                              <i className="fal fa-eye"></i>
                              {blog.views}
                            </span>
                            <span>
                              <i className="fal fa-calendar-alt"></i>
                              {blog.date}
                            </span>
                          </div>
                          <Link href={`/blog/${blog.id}`} className="read_more_btn">
                            Read More
                            <i className="fal fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5">
              <div className="sidebar_modern">
                <div className="sidebar_widget_modern">
                  <h4 className="widget_title">Search</h4>
                  <form className="search_form">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="search_input"
                    />
                    <button type="submit" className="search_btn">
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                </div>

                <div className="sidebar_widget_modern">
                  <h4 className="widget_title">Popular Posts</h4>
                  {blogsData.map((blog) => (
                    <div key={blog.id} className="popular_post">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="popular_post_img"
                      />
                      <div className="popular_post_content">
                        <h5 className="popular_post_title">
                          <Link href={`/blog/${blog.id}`}>
                            {blog.title}
                          </Link>
                        </h5>
                        <div className="popular_post_date">
                          <i className="fal fa-calendar-alt"></i> {blog.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sidebar_widget_modern">
                  <h4 className="widget_title">Categories</h4>
                  <ul className="category_list">
                    <li>
                      <Link href="/blogs?category=Education">Education</Link>
                    </li>
                    <li>
                      <Link href="/blogs?category=Water">Water</Link>
                    </li>
                    <li>
                      <Link href="/blogs?category=Healthcare">Healthcare</Link>
                    </li>
                  </ul>
                </div>

                <div className="sidebar_widget_modern">
                  <h4 className="widget_title">Tags</h4>
                  <div className="tags_cloud">
                    {blogsData[0]?.keywords
                      ?.split(", ")
                      .slice(0, 12)
                      .map((keyword, index) => (
                        <Link
                          key={index}
                          href={`/blogs?search=${keyword}`}
                          className="tag_item"
                        >
                          {keyword}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

