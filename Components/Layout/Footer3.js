import React from "react";
import Link from "next/link";

export default function Footer3() {
  return (
    <>
      <footer>
        <div className="footer_top_area footer_area_3">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-3 col-lg-7 col-md-7 col-sm-7">
                <div className="footer_widget mb-50">
                  <div className="footer_widget_title mb-30">
                    <h4 className="footer_title">About Us</h4>
                  </div>
                  <p className="mb-25">
                    Because it does not spend hours selling to customers,
                    maintaining a brick and mortar stores, or paying for a
                    commissions, Carify Auto Center can run more with in
                    efficiently than a traditional.
                  </p>
                  <div className="footer_locate_link theme-1">
                    <ul>
                      <li>
                        <Link href="/tel:09994022717" className="footer-link">
                          <i className="fal fa-phone"></i>
                          <strong>Phone:</strong>09994022717
                        </Link>
                      </li>
                      <li>
                        <Link href="/mailto:info@helpline.org.pk" className="footer-link">
                          <i className="fal fa-envelope"></i>
                          <strong>Email:</strong>info@helpline.org.pk
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
                  <div className="footer_links w_half theme-1">
                    <ul>
                      <li>
                        <Link href="/" className="footer-link">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="footer-link">
                          Terms & condition
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="footer-link">
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="footer-link">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="footer-link">
                          News Insights
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="footer-link">
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq" className="footer-link">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link href="/volunteer" className="footer-link">
                          Team
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
                  <div className="footer_links w_half theme-1">
                    <ul>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Water
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Shelter
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Refuse Camp
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Medicine
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Donation
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Medical
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Blood Donation
                        </Link>
                      </li>
                      <li>
                        <Link href="/cause" className="footer-link">
                          Fresh Food
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
                          <img src="/img/footer/fnews1.jpg" alt="img" />
                        </Link>
                      </div>

                      <div className="fnews_content">
                        <div className="fnews_meta">
                          <Link href="/blog-details" className="footer-link">
                            Charity
                          </Link>
                          <span className="fnews_date">August 22th,2021</span>
                        </div>
                        <h5 className="fnews_title theme-1">
                          <Link href="/blog-details" className="footer-link">
                            Tips How to repair you by myself
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="single_fnews d-flex mb-30">
                      <div className="fnews_img">
                        <Link href="/blog-details">
                          <img src="/img/footer/fnews2.jpg" alt="img" />
                        </Link>
                      </div>

                      <div className="fnews_content">
                        <div className="fnews_meta">
                          <Link href="/blog-details" className="footer-link">
                            Charity
                          </Link>
                          <span className="fnews_date">August 22th,2021</span>
                        </div>
                        <h5 className="fnews_title theme-1">
                          <Link href="/blog-details" className="footer-link">
                            Tips How to keep yourself good health
                          </Link>
                        </h5>
                      </div>
                    </div>
                    <div className="single_fnews d-flex mb-30">
                      <div className="fnews_img">
                        <Link href="/blog-details">
                          <img src="/img/footer/fnews3.jpg" alt="img" />
                        </Link>
                      </div>

                      <div className="fnews_content">
                        <div className="fnews_meta">
                          <Link href="/blog-details" className="footer-link">
                            Charity
                          </Link>
                          <span className="fnews_date">August 22th,2021</span>
                        </div>
                        <h5 className="fnews_title theme-1">
                          <Link href="/blog-details" className="footer-link">
                            Tips How to make you happy by yourself
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
        <div className="footer_copyright_area">
          <div className="container">
            <div className="row">
              <div className="col-xxl-12 text-center">
                <p>
                  Design by{" "}
                  <strong>
                    <Link href="https://www.codeviztech.com/" className="footer-link">
                      CodeViz Technology
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
