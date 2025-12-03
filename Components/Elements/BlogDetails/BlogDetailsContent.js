import React from "react";
import Link from "next/link";

export default function BlogDetailsContent({ blog }) {
  if (!blog) return null;

  // Split fullContent into paragraphs
  const paragraphs = blog.fullContent ? blog.fullContent.split('\n\n') : [];

  return (
    <div className="blog_details_area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-7">
            <div className="blog_details_wrapper has_border mb-40">
              <div className="blog_details_content">
                <div className="blog_category mb-20">
                  <Link href={`/blogs?category=${blog.category}`} className="blog_cat theme-1">
                    {blog.category}
                  </Link>
                </div>
                <h4 className="blog_title">{blog.title}</h4>
                <div className="blog_meta mb-25">
                  <Link href="#" className="eye sep">
                    <i className="fal fa-eye"></i>
                    {blog.views} Views
                  </Link>
                  <Link href="#" className="comments sep">
                    <i className="fal fa-comments"></i>
                    {blog.comments} Comments
                  </Link>
                  <Link href="#" className="calendar">
                    <i className="fal fa-calendar-alt"></i>
                    {blog.date}
                  </Link>
                </div>
                
                <div className="blog_details_img mb-45">
                  <img src={blog.image} alt={blog.title} />
                </div>

                <div className="blog_content">
                  {paragraphs.map((paragraph, index) => {
                    if (paragraph.trim() === '') return null;
                    
                    // Check if paragraph starts with a number (like "1. ", "2. ", etc.)
                    if (/^\d+\.\s/.test(paragraph.trim())) {
                      return (
                        <div key={index} className="mb-20">
                          <p>{paragraph}</p>
                        </div>
                      );
                    }
                    
                    return (
                      <p key={index} className="mb-20">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="row pb-20">
                  <div className="col-xl-6 col-sm-6">
                    <div className="details_tag">
                      <h5 className="details_title mb-25">Related Tags</h5>
                      <div className="tagcloud tagcloud-sm">
                        {blog.keywords && blog.keywords.split(', ').slice(0, 5).map((keyword, index) => (
                          <Link key={index} href={`/blogs?search=${keyword}`} className="theme-1">
                            {keyword}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-sm-6">
                    <div className="details_social text-end">
                      <h5 className="details_title mb-25">Social Share</h5>
                      <div className="social_share">
                        <Link href="#" className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#" className="twitter">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="#" className="linkedin">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link href="#" className="pinterest">
                          <i className="fab fa-pinterest-p"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5">
            <div className="blog_sidebar_wrapper pl-15 mb-40">
              <div className="sidebar_widget has_border about_widget mb-40">
                <div className="sidebar_title">
                  <h4 className="sidebar_title_text has_border">
                    <span className="theme-1"></span>About Author
                  </h4>
                </div>
                <div className="about_widget_content text-center">
                  <div className="widget_about_img">
                    <img src={ "/img/logo/logo.png"} alt={blog.author} />
                  </div>
                  <h6 className="about_person_title">{blog.author}</h6>
                  <p>
                    Contributing writer sharing insights and updates from Helpline Welfare Organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

