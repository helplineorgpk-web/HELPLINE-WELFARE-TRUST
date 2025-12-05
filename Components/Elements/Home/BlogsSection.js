import React from "react";
import Link from "next/link";
import { blogsData } from "../../../data/blogsData";

export default function BlogsSection() {
  const blogPosts = blogsData.slice(0, 3);

  return (
    <>
      <style jsx>{`
        .blogs_section_area {
          background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
          position: relative;
          overflow: hidden;
        }
        
        .blogs_section_area::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e2e8f0, transparent);
        }

        /* Section Header */
        .section_header {
          position: relative;
          margin-bottom: 4rem;
        }

        .section_badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #06b6d4;
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
        }

        .section_title {
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .section_subtitle {
          font-size: 1.125rem;
          color: #64748b;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Blog Cards */
        .blog_card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.05),
            0 2px 4px -1px rgba(0, 0, 0, 0.03);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          border: 1px solid #f1f5f9;
          position: relative;
        }

        .blog_card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6);
          transform: scaleX(0);
          transition: transform 0.4s ease;
        }

        .blog_card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 25px 50px -12px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(255, 255, 255, 0.9);
        }

        .blog_card:hover::before {
          transform: scaleX(1);
        }

        /* Image Container */
        .blog_image_container {
          position: relative;
          overflow: hidden;
          height: 240px;
        }

        .blog_image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .blog_card:hover .blog_image {
          transform: scale(1.08);
        }

        .image_overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 60%,
            rgba(0, 0, 0, 0.4) 100%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .blog_card:hover .image_overlay {
          opacity: 1;
        }

        /* Category Badge */
        .category_badge {
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
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .category_badge:hover {
          background: white;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        /* Card Content */
        .card_content {
          padding: 1.75rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .blog_title {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          color: #1e293b;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog_title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .blog_title a:hover {
          color: #06b6d4;
        }

        .blog_excerpt {
          font-size: 0.875rem;
          line-height: 1.6;
          color: #64748b;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }

        /* Meta Information */
        .blog_meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid #f1f5f9;
          margin-top: auto;
        }

        .meta_left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .author_avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
          background: #e2e8f0;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .author_info {
          display: flex;
          flex-direction: column;
        }

        .author_name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1e293b;
        }

        .post_date {
          font-size: 0.75rem;
          color: #94a3b8;
        }

        .read_time {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: #94a3b8;
          background: #f8fafc;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }

        /* CTA Button */
        .cta_button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          color: white;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 4px 15px rgba(6, 182, 212, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .cta_button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .cta_button:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 25px rgba(6, 182, 212, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .cta_button:hover::before {
          left: 100%;
        }

        .cta_button i {
          transition: transform 0.3s ease;
        }

        .cta_button:hover i {
          transform: translateX(4px);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .section_title {
            font-size: 2.25rem;
          }
          
          .section_subtitle {
            font-size: 1rem;
          }
          
          .blog_image_container {
            height: 200px;
          }
          
          .card_content {
            padding: 1.5rem;
          }
          
          .blog_title {
            font-size: 1.125rem;
          }
          
          .cta_button {
            padding: 0.875rem 1.75rem;
          }
        }

        @media (max-width: 480px) {
          .section_header {
            margin-bottom: 3rem;
          }
          
          .section_title {
            font-size: 1.875rem;
          }
          
          .blog_meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
        }

        /* Animation */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .blog_card {
          animation: fadeInUp 0.6s ease-out;
        }

        .blog_card:nth-child(1) { animation-delay: 0.1s; }
        .blog_card:nth-child(2) { animation-delay: 0.2s; }
        .blog_card:nth-child(3) { animation-delay: 0.3s; }

        /* Make entire card clickable */
        .blog_card_link {
          text-decoration: none;
          display: block;
          height: 100%;
          color: inherit;
        }

        .blog_card_link:hover {
          text-decoration: none;
          color: inherit;
        }
      `}</style>

      <section className="blogs_section_area pt-120 pb-120">
        <div className="container">
          {/* Section Header */}
          <div className="row">
            <div className="col-12">
              <div className="section_header text-center mb-60">
                <span className="section_badge">
                  <i className="fal fa-newspaper"></i> Latest Updates
                </span>
                <h1 className="section_title">Our Latest Blogs</h1>
                <p className="section_subtitle">
                  Discover insightful articles, stories, and updates from our community work and initiatives
                </p>
              </div>
            </div>
          </div>

          {/* Blog Cards */}
          <div className="row g-4">
            {blogPosts.map((blog) => (
              <div
                key={blog.id}
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12"
              >
                <Link href={`/blog/${blog.id}`} className="blog_card_link">
                  <article className="blog_card">
                    <div className="blog_image_container">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="blog_image"
                      />
                      <div className="image_overlay"></div>
                      <span className="category_badge" style={{ pointerEvents: 'none' }}>
                        {blog.category}
                      </span>
                    </div>
                    
                    <div className="card_content">
                      <h3 className="blog_title">
                        {blog.title}
                      </h3>
                      
                      <p className="blog_excerpt">
                        {blog.excerpt}
                      </p>

                      <div className="blog_meta">
                        <div className="meta_left">
                          <div className="author_info">
                            <span className="author_name">
                              {blog.author || "Helpline Team"}
                            </span>
                            <span className="post_date">
                              {blog.date || "Recently"}
                            </span>
                          </div>
                        </div>
                        
                        <div className="read_time">
                          <i className="fal fa-clock"></i>
                          <span>5 min read</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12 text-center mt-60">
              <Link href="/blogs" className="cta_button">
                Explore All Articles
                <i className="fal fa-long-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}