import React from "react";
import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer>
        <div
          className="footer_top_area footer_default_area p-rel bg_cover"
          style={{ background: "url(/img/footer/www.png)" }}
        >
          <div className="footer_top_wrapper p-rel">
            <div className="container">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-7 col-md-7 col-sm-7">
                  <div className="footer_widget mb-50">
                    <div className="footer_widget_title mb-30">
                      <h4 className="footer_title">About Us</h4>
                    </div>
                    <p className="mb-25">
                      Education, Health, Clean Water, Disaster Management,
                      Rashion Program, Blood Donation, Islamic Activity
                    </p>
                    <div className="footer_locate_link theme-1">
                      <ul>
                        <li>
                          <Link href="/tel:+92-42-35110164">
                            <a
                              style={{
                                display: "flex",
                                alignItems: "center",
                                // justifyContent: "space-between",
                              }}
                            >
                              <p>
                                <i className="fal fa-phone"></i>
                                <strong>Phone:</strong>
                              </p>
                              <div>
                                +92-42-35157374
                                <br />
                                +92-42-35110164
                              </div>
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/mailto:info@helpline.org.pk">
                            <a>
                              <i className="fal fa-envelope"></i>
                              <strong>Email:</strong>info@helpline.org.pk
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-5 col-sm-5">
                  <div className="footer_widget mb-50 pl_37">
                    <div className="footer_widget_title mb-30">
                      <h4 className="footer_title">Our Pages</h4>
                    </div>
                    <div className="footer_links theme-1">
                      <ul>
                        <li>
                          <Link href="/">
                            <a>Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/videos">
                            <a>Media</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/volunteer">
                            <a>Volunteer</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/mission">
                            <a>Mission</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/edu">
                            <a>Education</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/health">
                            <a>Health</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/islamicactivity">
                            <a>Islamic Activity</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/qurbani">
                            <a>Qurbani Program</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/masjid">
                            <a>Masjid Program</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-5 col-sm-5">
                  <div className="footer_widget mb-50 pl_17">
                    <div className="footer_widget_title mb-30">
                      <h4 className="footer_title">Causes</h4>
                    </div>
                    <div className="footer_links theme-1">
                      <ul>
                        <li>
                          <Link href="/cause">
                            <a>Water</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause">
                            <a>Education</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause">
                            <a>Medicine</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause">
                            <a>Medical</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause">
                            <a>Fresh Food</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause">
                            <a>Shelter</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause">
                            <a>Refuse Camp</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause">
                            <a>Donation</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause">
                            <a>Blood Donation</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-7 col-md-7 col-sm-7">
                  <div className="footer_widget footer_news mb-50">
                    <div className="footer_widget_title mb-30">
                      <h4 className="footer_title">News Feeds</h4>
                    </div>
                    <div className="footer_news_content">
                      <div className="single_fnews d-flex mb-30">
                        <div className="fnews_img">
                          <Link href="/blog-details">
                            <a>
                              <img src="/img/footer/fnews1.jpg" alt="img" />
                            </a>
                          </Link>
                        </div>

                        <div className="fnews_content">
                          <div className="fnews_meta">
                            <Link href="/blog-details">
                              <a className="fnews_author theme-1 sep">
                                Charity
                              </a>
                            </Link>
                            <span className="fnews_date">August 22th,2021</span>
                          </div>
                          <h5 className="fnews_title theme-1">
                            <Link href="/blog-details">
                              <a>Tips How to repair you by myself</a>
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="single_fnews d-flex mb-30">
                        <div className="fnews_img">
                          <Link href="/blog-details">
                            <a>
                              <img src="/img/footer/fnews2.jpg" alt="img" />
                            </a>
                          </Link>
                        </div>

                        <div className="fnews_content">
                          <div className="fnews_meta">
                            <Link href="/blog-details">
                              <a className="fnews_author theme-1 sep">
                                Charity
                              </a>
                            </Link>
                            <span className="fnews_date">August 22th,2021</span>
                          </div>
                          <h5 className="fnews_title theme-1">
                            <Link href="/blog-details">
                              <a>Tips How to keep yourself good health</a>
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="single_fnews d-flex mb-30">
                        <div className="fnews_img">
                          <Link href="/blog-details">
                            <a>
                              <img src="/img/footer/fnews3.jpg" alt="img" />
                            </a>
                          </Link>
                        </div>

                        <div className="fnews_content">
                          <div className="fnews_meta">
                            <Link href="/blog-details">
                              <a className="fnews_author theme-1 sep">
                                Charity
                              </a>
                            </Link>
                            <span className="fnews_date">August 22th,2021</span>
                          </div>
                          <h5 className="fnews_title theme-1">
                            <Link href="/blog-details">
                              <a>make you happy by yourself</a>
                            </Link>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_copyright_area ">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 text-center">
                <p>
                  Design by{" "}
                  <strong>
                    <Link href="https://www.codeviztech.com/">
                      <a target="_blank">CodeViz Technology</a>
                    </Link>
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
