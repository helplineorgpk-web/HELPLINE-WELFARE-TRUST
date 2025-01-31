import React from "react";
import VideoPopUp from "../VideoPopUp";
import { useState } from "react";
import Link from "next/link";

export default function BlogCauseDetails() {
  const [isShow, setShow] = useState(false);
  return (
    <div className="blog_details_area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-7">
            <div className="blog_area mb-40">
              <div className="blog_image_wrapper mb-40">
                <div className="blog_image">
                  <Link href="/blog-details" className="w_img">
                    <img src="/img/news/blog_image.jpg" alt="img" />
                  </Link>
                  <div className="admin_meta has_abs">
                    <Link href="/blog-details" className="blog_cat">
                      Business
                    </Link>
                    <div className="blog_admin">
                      <Link href="/volunteer-details" className="text-dark">
                        <img src="/img/news/admin.jpg" alt="img" />
                      </Link>
                      <Link href="/volunteer-details" className="admin_by">
                        By Hetmayer
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog_content">
                  <h4 className="blog_title">
                    <Link href="/blog-details" className="text-dark">
                      Become a monthly giver and save a child’s life today
                    </Link>
                  </h4>
                  <p>
                    Novia&apos;s spaciously two bedroom apartments are perfect
                    for families and even business partners. Look out into the
                    Manhattan skyline from the open fully equipped kitchen.
                  </p>
                  <div className="blog_meta has_border_top">
                    <Link href="#" className="eye sep">
                      <i className="fal fa-eye"></i>100 Views
                    </Link>
                    <Link href="#" className="comments sep">
                      <i className="fal fa-comments"></i>30 Comments
                    </Link>
                    <Link href="#" className="calendar">
                      <i className="fal fa-calendar-alt"></i>24 March 2022
                    </Link>
                  </div>
                </div>
              </div>

              <div className="blog_video_wrapper mb-40">
                <div className="blog_image">
                  <Link href="/blog-details" className="w_img">
                    <img src="/img/news/blog_video.jpg" alt="img" />
                  </Link>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => setShow(true)}
                    className="video_play has_abs"
                  >
                    <i className="fal fa-play"></i>
                  </div>
                  <div className="admin_meta has_abs">
                    <Link href="/blog-details" className="blog_cat">
                      Medical
                    </Link>
                    <div className="blog_admin">
                      <Link href="/volunteer-details" className="text-dark">
                        <img src="/img/news/admin.jpg" alt="img" />
                      </Link>
                      <Link href="/volunteer-details" className="admin_by">
                        By Mark
                      </Link>
                    </div>
                  </div>
                  {isShow && (
                    <VideoPopUp
                      setShow={() => setShow(false)}
                      src={"https://www.youtube.com/embed/LiydZUP8__I"}
                    />
                  )}
                </div>
                <div className="blog_content">
                  <h4 className="blog_title">
                    <Link href="/blog-details" className="text-dark">
                      What takes an online fundraising site from good to great?
                    </Link>
                  </h4>
                  <p>
                    Novia&apos;s spaciously two bedroom apartments are perfect
                    for families and even business partners. Look out into the
                    Manhattan skyline from the open fully equipped kitchen.
                  </p>
                  <div className="blog_meta has_border_top">
                    <Link href="#" className="eye sep">
                      <i className="fal fa-eye"></i>150 Views
                    </Link>
                    <Link href="#" className="comments sep">
                      <i className="fal fa-comments"></i>20 Comments
                    </Link>
                    <Link href="#" className="calendar">
                      <i className="fal fa-calendar-alt"></i>24 March 2021
                    </Link>
                  </div>
                </div>
              </div>

              <div className="blog_image_wrapper mb-40">
                <div className="blog_image">
                  <Link href="/blog-details" className="w_img">
                    <img src="/img/news/blog_image2.jpg" alt="img" />
                  </Link>
                  <div className="admin_meta has_abs">
                    <Link href="/blog-details" className="blog_cat">
                      Education
                    </Link>
                    <div className="blog_admin">
                      <Link href="/volunteer-details" className="text-dark">
                        <img src="/img/news/admin.jpg" alt="img" />
                      </Link>
                      <Link href="/volunteer-details" className="admin_by">
                        By Salim
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog_content">
                  <h4 className="blog_title">
                    <Link href="/blog-details" className="text-dark">
                      Themepure always offers for everybody to enrich knowledge by
                      yourself
                    </Link>
                  </h4>
                  <p>
                    Novia&apos;s spaciously two bedroom apartments are perfect
                    for families and even business partners. Look out into the
                    Manhattan skyline from the open fully equipped kitchen.
                  </p>
                  <div className="blog_meta has_border_top">
                    <Link href="#" className="eye sep">
                      <i className="fal fa-eye"></i>300 Views
                    </Link>
                    <Link href="#" className="comments sep">
                      <i className="fal fa-comments"></i>30 Comments
                    </Link>
                    <Link href="#" className="calendar">
                      <i className="fal fa-calendar-alt"></i>21 March 2022
                    </Link>
                  </div>
                </div>
              </div>

              <div className="blog_audio_wrapper mb-40">
                <div className="blog_audio_img">
                  <Link href="/blog-details" className="w_img">
                    <img src="/img/news/blog_audio.jpg" alt="img" />
                  </Link>
                  <Link href="/blog-details" className="audio_logo_abs">
                    <img src="/img/news/audio_logo.png" alt="" />
                  </Link>
                </div>
                <div className="blog_content">
                  <h4 className="blog_title">
                    <Link href="/blog-details" className="text-dark">
                      How to Survive a Recession When the Future Feels Uncertain
                    </Link>
                  </h4>
                  <p>
                    Novia&apos;s spaciously two bedroom apartments are perfect
                    for families and even business partners. Look out into the
                    Manhattan skyline from the open fully equipped kitchen.
                  </p>
                  <div className="blog_meta has_border_top">
                    <Link href="#" className="eye sep">
                      <i className="fal fa-eye"></i>100 Views
                    </Link>
                    <Link href="#" className="comments sep">
                      <i className="fal fa-comments"></i>30 Comments
                    </Link>
                    <Link href="#" className="calendar">
                      <i className="fal fa-calendar-alt"></i>14 March 2022
                    </Link>
                  </div>
                </div>
              </div>

              <div className="blog_noimg_wrapper mb-40">
                <div className="blog_content noimg_content">
                  <h4 className="blog_title">
                    <Link href="/blog-details" className="text-dark">
                      All People can help others but can not do normally for a
                      social restriction
                    </Link>
                  </h4>
                  <p>
                    Novia&apos;s spaciously two bedroom apartments are perfect
                    for families and even business partners. Look out into the
                    Manhattan skyline from the open fully equipped kitchen.
                  </p>
                  <div className="blog_meta has_border_top">
                    <Link href="#" className="eye sep">
                      <i className="fal fa-eye"></i>100 Views
                    </Link>
                    <Link href="#" className="comments sep">
                      <i className="fal fa-comments"></i>30 Comments
                    </Link>
                    <Link href="#" className="calendar">
                      <i className="fal fa-calendar-alt"></i>24 March 2022
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="blog_blockquote_wrapper bg_cover mb-40"
                data-background="/img/news/blog_quote.jpg"
              >
                <div className="blog_blockquote_content">
                  <i className="fas fa-quote-left"></i>
                  <h4 className="blog_title">
                    <Link href="/blog-details" className="text-dark">
                      Dharma Home Suites at Novia offers fully plain furnished
                    </Link>
                  </h4>
                </div>
              </div>

              <div className="page_pagination text-center mt-10">
                <Link href="#" className="text-dark">
                  <i className="fal fa-chevron-double-left"></i>
                </Link>
                <Link href="#" className="text-dark">
                  1
                </Link>
                <Link href="#" className="current text-dark">
                  2
                </Link>
                <Link href="#" className="text-dark">
                  1
                </Link>
                <Link href="#" className="text-dark">
                  ...
                </Link>
                <Link href="#" className="text-dark">
                  10
                </Link>
                <Link href="#" className="text-dark">
                  <i className="fal fa-chevron-double-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5">
            <div className="blog_sidebar_wrapper pl-15 mb-40">
              <div className="sidebar_widget has_border about_widget mb-40">
                <div className="sidebar_title">
                  <h4 className="sidebar_title_text has_border">
                    <span className="theme-1"></span>About Me
                  </h4>
                </div>
                <div className="about_widget_content text-center">
                  <div className="widget_about_img">
                    <Link href="/volunteer-details" className="text-dark">
                      <img src="/img/news/blog_person.jpg" alt="img" />
                    </Link>
                  </div>

                  <h6 className="about_person_title">
                    <Link href="/volunteer-details" className="text-dark">
                      Rosalina D. Willaimson
                    </Link>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consect etur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <div className="widget_social">
                    <Link href="#" className="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#" className="twitter">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#" className="behance">
                      <i className="fab fa-behance"></i>
                    </Link>
                    <Link href="#" className="linkedin">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link href="#" className="youtube">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="sidebar_widget has_border search_widget mb-40">
                <div className="sidebar_title">
                  <h4 className="sidebar_title_text has_border">
                    <span className="theme-1"></span>Search Here
                  </h4>
                </div>
                <div className="search_widget_content">
                  <form action="#">
                    <input type="text" placeholder="Search your keyword..." />
                    <button type="submit">
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div className="sidebar_widget has_border feed_widget mb-40">
                <div className="sidebar_title">
                  <h4 className="sidebar_title_text has_border">
                    <span className="theme-1"></span>Popular Feeds
                  </h4>
                </div>
                <div className="feed_widget_content">
                  <div className="single_feed_widget has_border">
                    <div className="feed_widget_img">
                      <Link href="/blog-details" className="text-dark">
                        <img src="/img/news/blog_feed1.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="feed_widget_text">
                      <h5 className="feed_widget_title theme-1">
                        <Link href="/blog-details" className="text-dark">
                          How to improve knowledge for myself
                        </Link>
                      </h5>
                      <Link href="#" className="feed_widget_date theme-1">
                        <i className="fal fa-calendar-alt"></i>24th March 2022
                      </Link>
                    </div>
                  </div>
                  <div className="single_feed_widget has_border">
                    <div className="feed_widget_img">
                      <Link href="/blog-details" className="text-dark">
                        <img src="/img/news/blog_feed2.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="feed_widget_text">
                      <h5 className="feed_widget_title theme-1">
                        <Link href="/blog-details" className="text-dark">
                          Everybody needs to know how to help myself
                        </Link>
                      </h5>
                      <Link href="#" className="feed_widget_date theme-1">
                        <i className="fal fa-calendar-alt"></i>24th March 2022
                      </Link>
                    </div>
                  </div>
                  <div className="single_feed_widget has_border">
                    <div className="feed_widget_img">
                      <Link href="/blog-details" className="text-dark">
                        <img src="/img/news/blog_feed3.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="feed_widget_text">
                      <h5 className="feed_widget_title theme-1">
                        <Link href="/blog-details" className="text-dark">
                          Good foods available on behalf of fundraise
                        </Link>
                      </h5>
                      <Link href="#" className="feed_widget_date theme-1">
                        <i className="fal fa-calendar-alt"></i>24th Sep 2021
                      </Link>
                    </div>
                  </div>
                  <div className="single_feed_widget">
                    <div className="feed_widget_img">
                      <Link href="/blog-details" className="text-dark">
                        <img src="/img/news/blog_feed4.jpg" alt="img" />
                      </Link>
                    </div>
                    <div className="feed_widget_text">
                      <h5 className="feed_widget_title theme-1">
                        <Link href="/blog-details" className="text-dark">
                          Keep focus on you to find out yourself
                        </Link>
                      </h5>
                      <Link href="#" className="feed_widget_date theme-1">
                        <i className="fal fa-calendar-alt"></i>24th March 2022
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar_widget has_border categories_widget mb-40">
                <div className="sidebar_title">
                  <h4 className="sidebar_title_text has_border">
                    <span className="theme-1"></span>Categories
                  </h4>
                </div>
                <ul>
                  <li>
                    <Link href="#" className="text-dark">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-dark">
                      Consultant
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-dark">
                      Creative
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-dark">
                      UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-dark">
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="sidebar_widget has_border instagram_widget mb-40">
                <div className="sidebar_title">
                  <h4 className="sidebar_title_text has_border">
                    <span className="theme-1"></span>Instagram Feeds
                  </h4>
                </div>
                <div className="instagram_widget_img_wrapper">
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta1.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta2.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta3.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta4.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta5.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta6.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta7.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta8.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta9.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta10.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta11.jpg" alt="img" />
                  </Link>
                  <Link href="#" className="text-dark">
                    <img src="/img/news/insta12.jpg" alt="img" />
                  </Link>
                </div>
              </div>

              <div className="sidebar_widget has_border tagcloud_widget mb-40">
                <div className="sidebar_title">
                  <h4 className="sidebar_title_text has_border">
                    <span className="theme-1"></span>Tags
                  </h4>
                </div>
                <div className="tagcloud">
                  <Link href="#" className="text-dark">
                    Popular
                  </Link>
                  <Link href="#" className="text-dark">
                    Design
                  </Link>
                  <Link href="#" className="text-dark">
                    UX
                  </Link>
                  <Link href="#" className="text-dark">
                    UX
                  </Link>
                  <Link href="#" className="text-dark">
                    Usability
                  </Link>
                  <Link href="#" className="text-dark">
                    Develop
                  </Link>
                  <Link href="#" className="text-dark">
                    Icon
                  </Link>
                  <Link href="#" className="text-dark">
                    Icon
                  </Link>
                  <Link href="#" className="text-dark">
                    Business
                  </Link>
                  <Link href="#" className="text-dark">
                    Consult
                  </Link>
                  <Link href="#" className="text-dark">
                    Kit
                  </Link>
                  <Link href="#" className="text-dark">
                    Kit
                  </Link>
                  <Link href="#" className="text-dark">
                    Keyboard
                  </Link>
                  <Link href="#" className="text-dark">
                    Mouse
                  </Link>
                  <Link href="#" className="text-dark">
                    Tech
                  </Link>
                  <Link href="#" className="text-dark">
                    Tech
                  </Link>
                </div>
              </div>

              <div className="sidebar_widget has_border addverise_widget mb-40">
                <div className="sidebar_title">
                  <h4 className="sidebar_title_text has_border">
                    <span className="theme-1"></span>Sponsor Adds
                  </h4>
                </div>
                <div className="advertise_img">
                  <Link href="/blog-details" className="text-dark">
                    <img src="/img/news/blog_add.jpg" alt="img" />
                  </Link>
                  <div className="advertise_abs">
                    <span>270x240</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
