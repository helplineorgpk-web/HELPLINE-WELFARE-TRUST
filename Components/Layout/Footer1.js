import React from "react";
import Link from "next/link";
import style from "../../public/css/Footer.module.css";
import Image from "next/image";
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
              <div className={style.cityContainer}>
                <div className={style.ourPresence}>Our Sponsors</div>
                <Image
                  src="/img/sponser/izharlogo.png"
                  alt="Our Supporters"
                  height={40}
                  width={80}
                  className={style.image}
                />
                <Image
                  src="/img/sponser/Henkel-Logo.png"
                  alt="Our Supporters"
                  height={40}
                  width={80}
                  className={style.image}
                />
                <Image
                  src="/img/sponser/asia-poultry-feeds-logo.png"
                  alt="Our Supporters"
                  height={40}
                  width={80}
                  className={style.image}
                />
                <Image
                  src="/img/sponser/Servis_logo.png"
                  alt="Our Supporters"
                  height={40}
                  width={80}
                  className={style.image}
                />
                <Image
                  src="/img/sponser/nestle.png"
                  alt="Our Supporters"
                  height={40}
                  width={80}
                  className={style.image}
                />
                <Image
                  src="/img/sponser/shafilogo.png"
                  alt="Our Supporters"
                  height={40}
                  width={80}
                  className={style.image}
                />
                <Image
                  src="/img/sponser/mughalsteel.png"
                  alt="Our Supporters"
                  height={40}
                  width={80}
                  className={style.image}
                />
                <Link href="/supporters" className={style.seeMore}>
                  See More
                </Link>
              </div>
              <div className={style.cityContainer}>
                <div className={style.ourPresence}>Our Presence</div>
                <div className={style.city}>
                  <p className={style.cityName}>Lahore</p>
                  <p className={style.cityName}>Karachi</p>
                  <p className={style.cityName}>Hyderabad</p>
                  <p className={style.cityName}>Gojra</p>
                  <p className={style.cityName}>Bahawalpur</p>
                  <p className={style.cityName}>Abbottabad</p>
                </div>
                <Link href="/ourPresence" className={style.seeMore}>
                  See More
                </Link>
              </div>
              <div className="row" style={{ marginTop: "40px" }}>
                <div className="col-xxl-3 col-xl-3 col-lg-7 col-md-7 col-sm-7">
                  <div className="footer_widget mb-50">
                    <div className="footer_widget_title mb-30">
                      <h4 className="footer_title">About Us</h4>
                    </div>
                    <p className="mb-25">
                      Education, Health, Clean Water, Disaster Management,
                      Rashion Program, Blood Donation, Islamic Activity
                    </p>
                    <div className="footer_locate_link">
                      <ul>
                        <li>
                          <Link
                            href="tel:+92-42-35157374"
                            className="footer-link"
                          >
                            <i className="fal fa-phone"></i>
                            <strong>Phone:</strong>
                            +92-42-35157374
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="mailto:info@helpline.org.pk"
                            className="footer-link"
                          >
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
                    <div className="footer_links theme-1">
                      <ul>
                        <li>
                          <Link href="/" className="footer-link">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href="/videos" className="footer-link">
                            Media
                          </Link>
                        </li>
                        <li>
                          <Link href="/volunteer" className="footer-link">
                            Volunteer
                          </Link>
                        </li>
                        <li>
                          <Link href="/mission" className="footer-link">
                            Mission
                          </Link>
                        </li>
                        <li>
                          <Link href="/edu" className="footer-link">
                            Education
                          </Link>
                        </li>
                        <li>
                          <Link href="/health" className="footer-link">
                            Health
                          </Link>
                        </li>
                        <li>
                          <Link href="/islamicactivity" className="footer-link">
                            Islamic Activity
                          </Link>
                        </li>
                        <li>
                          <Link href="/qurbani" className="footer-link">
                            Qurbani Program
                          </Link>
                        </li>
                        <li>
                          <Link href="/masjid" className="footer-link">
                            Masjid Program
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
                          <Link href="/cause" className="footer-link">
                            Water
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause" className="footer-link">
                            Education
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause" className="footer-link">
                            Medicine
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause" className="footer-link">
                            Medical
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause" className="footer-link">
                            Fresh Food
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause" className="footer-link">
                            Shelter
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause" className="footer-link">
                            Refuse Camp
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause" className="footer-link">
                            Donation
                          </Link>
                        </li>
                        <li>
                          <Link href="/cause" className="footer-link">
                            Blood Donation
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
                          <Link
                            href="https://www.instagram.com/helplineorg/?utm_source=qr"
                            className="footer-link"
                          >
                            <img src="/img/news/news1.png" alt="img" />
                          </Link>
                        </div>

                        <div className="fnews_content">
                          <div className="fnews_meta">
                            <Link
                              href="https://www.instagram.com/helplineorg/?utm_source=qr"
                              className="footer-link"
                            >
                              Charity
                            </Link>
                            <span className="fnews_date">August 22th,2021</span>
                          </div>
                          <h5 className="fnews_title theme-1">
                            <Link
                              href="https://www.instagram.com/helplineorg/?utm_source=qr"
                              className="footer-link"
                            >
                              Equipping young learners with bags shoes and
                              cloths.
                            </Link>
                          </h5>
                        </div>
                      </div>
                      <div className="single_fnews d-flex mb-30">
                        <div className="fnews_img">
                          <Link
                            href="https://www.instagram.com/helplineorg/?utm_source=qr"
                            className="footer-link"
                          >
                            <img src="/img/news/news2.png" alt="img" />
                          </Link>
                        </div>

                        <div className="fnews_content">
                          <div className="fnews_meta">
                            <Link
                              href="https://www.instagram.com/helplineorg/?utm_source=qr"
                              className="footer-link"
                            >
                              Charity
                            </Link>
                            <span className="fnews_date">August 22th,2021</span>
                          </div>
                          <h5 className="fnews_title theme-1">
                            <Link
                              href="https://www.instagram.com/helplineorg/?utm_source=qr"
                              className="footer-link"
                            >
                              Medical: Health is fundamental right not a
                              privilege.
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
        {/* <div className="footer_copyright_area ">
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
        </div> */}
      </footer>
    </>
  );
}
