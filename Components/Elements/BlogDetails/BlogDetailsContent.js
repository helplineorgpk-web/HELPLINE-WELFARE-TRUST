import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function BlogDetailsContent({ blog }) {
  if (!blog) return null;

  const sidebarRef = useRef(null);
  const parentRef = useRef(null);
  const blogContentRef = useRef(null);
  const [sidebarStyle, setSidebarStyle] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current || !parentRef.current || !blogContentRef.current) return;

      const sidebar = sidebarRef.current;
      const parent = parentRef.current;
      const blogContent = blogContentRef.current;

      const scrollY = window.scrollY;
      const sidebarRect = sidebar.getBoundingClientRect();
      const blogContentRect = blogContent.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      
      const sidebarHeight = sidebar.offsetHeight;
      const blogContentTop = blogContentRect.top + scrollY;

      const blogContentBottom = blogContentRect.bottom + scrollY;
      
      const parentTop = parentRect.top + scrollY;
      
      const sidebarInitialTop = sidebarRect.top + scrollY - parentTop;
      
      const stickyStart = blogContentTop - 20;
      
      const stickyEnd = blogContentBottom - sidebarHeight - 20;

      if (scrollY >= stickyStart && scrollY <= stickyEnd) {
        setSidebarStyle({
          position: 'fixed',
          top: '20px',
          width: sidebarRect.width + 'px'
        });
      } else if (scrollY > stickyEnd) {
        const absoluteTop = blogContentBottom - sidebarHeight - parentTop;
        
        setSidebarStyle({
          position: 'absolute',
          top: Math.max(0, absoluteTop) + 'px',
          width: sidebarRect.width + 'px'
        });
      } else {
        setSidebarStyle({});
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const paragraphs = blog.fullContent ? blog.fullContent.split('\n\n') : [];

  return (
    <div className="blog_details_area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-7">
            <div ref={blogContentRef} className="blog_details_wrapper has_border mb-40">
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

                <div className="support_box mt-50 mb-40" style={{
                  background: '#f6f6f6',
                  padding: '40px',
                  borderRadius: '16px',
                  border: '2px solid #f3f3f3'
                }}>
                  <h4 className="mb-30" style={{ fontSize: '28px', fontWeight: '600', color: '#1a1a1a' }}>
                    How Can You Support Us
                  </h4>
                  <div className="support_options">
                    <div className="row">
                      <div className="col-md-6 mb-20">
                        <div className="support_item" style={{
                          background: '#fff',
                          padding: '20px',
                          borderRadius: '8px',
                          marginBottom: '15px',
                          border: '1px solid #e8e8e8'
                        }}>
                          <h6 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                            Support a Student
                          </h6>
                          <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                            <strong>2,200 PKR</strong> per month
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="support_item" style={{
                          background: '#fff',
                          padding: '20px',
                          borderRadius: '8px',
                          marginBottom: '15px',
                          border: '1px solid #e8e8e8'
                        }}>
                          <h6 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                            Support a Family (Ration)
                          </h6>
                          <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                            <strong>7,000 PKR</strong> per month
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="support_item" style={{
                          background: '#fff',
                          padding: '20px',
                          borderRadius: '8px',
                          marginBottom: '15px',
                          border: '1px solid #e8e8e8'
                        }}>
                          <h6 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                            Set of 5 Hens
                          </h6>
                          <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                            <strong>5,000 PKR</strong>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="support_item" style={{
                          background: '#fff',
                          padding: '20px',
                          borderRadius: '8px',
                          marginBottom: '15px',
                          border: '1px solid #e8e8e8'
                        }}>
                          <h6 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                            Set of 4 Goats
                          </h6>
                          <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                            3 Females, 1 Male - <strong>120,000 PKR</strong>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="support_item" style={{
                          background: '#fff',
                          padding: '20px',
                          borderRadius: '8px',
                          marginBottom: '15px',
                          border: '1px solid #e8e8e8'
                        }}>
                          <h6 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                            One Cow Heifer
                          </h6>
                          <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                            <strong>75,000 PKR</strong>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="support_item" style={{
                          background: '#fff',
                          padding: '20px',
                          borderRadius: '8px',
                          marginBottom: '15px',
                          border: '1px solid #e8e8e8'
                        }}>
                          <h6 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                            Kitchen Garden
                          </h6>
                          <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                            Fertilizer & Seeds - <strong>15,000 PKR</strong>
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 mb-20">
                        <div className="support_item" style={{
                          background: '#fff',
                          padding: '20px',
                          borderRadius: '8px',
                          marginBottom: '15px',
                          border: '1px solid #e8e8e8'
                        }}>
                          <h6 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: '#1a1a1a' }}>
                            Adopt Orphan Children in Gaza
                          </h6>
                          <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                            <strong>10,000 PKR</strong> per month per child
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="skill_development_section mt-30">
                      <h5 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '20px', color: '#1a1a1a' }}>
                        Vocational Training Center (VTC) - Skill Development Programs
                      </h5>
                      <div className="row">
                        <div className="col-md-6 mb-15">
                          <div className="support_item" style={{
                            background: '#fff',
                            padding: '15px',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            border: '1px solid #e8e8e8'
                          }}>
                            <h6 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#1a1a1a' }}>
                              UPS Repair Mechanic
                            </h6>
                            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                              <strong>807,000 PKR</strong>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6 mb-15">
                          <div className="support_item" style={{
                            background: '#fff',
                            padding: '15px',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            border: '1px solid #e8e8e8'
                          }}>
                            <h6 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#1a1a1a' }}>
                              Mobile Phone Repairing
                            </h6>
                            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                              <strong>750,400 PKR</strong>
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6 mb-15">
                          <div className="support_item" style={{
                            background: '#fff',
                            padding: '15px',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            border: '1px solid #e8e8e8'
                          }}>
                            <h6 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#1a1a1a' }}>
                              Motor Winder
                            </h6>
                            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                              <strong>1.3 Million PKR</strong>
                            </p>
                          </div>
                        </div>
              
                        <div className="col-md-6 mb-15">
                          <div className="support_item" style={{
                            background: '#fff',
                            padding: '15px',
                            borderRadius: '8px',
                            marginBottom: '10px',
                            border: '1px solid #e8e8e8'
                          }}>
                            <h6 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px', color: '#1a1a1a' }}>
                              Welder
                            </h6>
                            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                              <strong>1.5 Million PKR</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-20" style={{ 
                        background: '#fff', 
                        padding: '15px', 
                        borderRadius: '8px',
                        border: '1px solid #e8e8e8'
                      }}>
                        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                          <strong>VTC Monthly Expense:</strong> 1,300,000 PKR per month
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-30">
                    <Link href="/donation" className="g_btn" style={{
                      display: 'inline-block',
                      background: 'var(--clr-theme-1)',
                      color: '#fff',
                      borderRadius: '30px',
                      transition: 'all 0.3s'
                    }}>
                      Donate Now<span></span>
                    </Link>
                  </div>
                </div>

                <div className="row pb-20 mt-40">
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
            <div 
              ref={parentRef}
              className="blog_sidebar_wrapper pl-15 mb-40" 
              style={{ position: 'relative' }}
            >
              <div 
                ref={sidebarRef}
                className="sidebar_widget has_border about_widget mb-40"
                style={sidebarStyle}
              >
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

