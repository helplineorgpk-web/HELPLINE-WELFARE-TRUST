import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function CauseDetailsArea({
  title,
  image,
  category,
  detail,
  img1,
  img2,
  actualName,
  detail2,
  detail3,
  historyTitle,
  upgradeTitle,
  futureTitle,
  detail4,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  link,
  link1,
  link2,
  link3,
}) {
  return (
    <div className="cause_details_area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-7">
            <div className="single_details_wrapper mb-40">
              <div className="single_details_img">
                <Image src={image} alt="img" height={500} width={2000} />
              </div>
              <div className="single_details_content">
                <div className="single_donation_content single_border pb-45 mb-45">
                  <div className="section_title">
                    <Link href="#" className="sub_title_details line_h2_2">
                      {category}
                    </Link>
                  </div>
                  <h4 className="details_title">{actualName || title}</h4>
                  <p>{detail}</p>
                  <div style={{ textAlign: "center", margin: "2rem 0" }}>
                    {link && (
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "12px 24px",
                          backgroundColor: "#EB2525",
                          color: "white",
                          borderRadius: "6px",
                          textDecoration: "none",
                          fontWeight: 500,
                          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          transition: "background-color 0.2s",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor = "#D81D1D")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor = "#EB2525")
                        }
                      >
                        <svg
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Watch Video
                      </Link>
                    )}
                  </div>
                  {img1 && (
                    <div className="row mb-45">
                      <div className="col-6 w_img">
                        <img src={img1} alt="img" />
                      </div>
                      <div className="col-6 w_img">
                        <img src={img2} alt="img" />
                      </div>
                    </div>
                  )}
                  <h4 className="details_title">{historyTitle}</h4>
                  <p>{detail2}</p>
                  <div style={{ textAlign: "center", margin: "2rem 0" }}>
                    {link1 && (
                      <Link
                        href={link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "12px 24px",
                          backgroundColor: "#EB2525",
                          color: "white",
                          borderRadius: "6px",
                          textDecoration: "none",
                          fontWeight: 500,
                          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          transition: "background-color 0.2s",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor = "#D81D1D")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor = "#EB2525")
                        }
                      >
                        <svg
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Watch Video
                      </Link>
                    )}
                  </div>
                  {img3 && (
                    <div className="row mb-45">
                      <div className="col-6 w_img">
                        <img src={img3} alt="img" />
                      </div>
                      <div className="col-6 w_img">
                        <img src={img4} alt="img" />
                      </div>
                    </div>
                  )}

                  <h4 className="details_title">{upgradeTitle}</h4>

                  <p>{detail3}</p>
                  <div style={{ textAlign: "center", margin: "2rem 0" }}>
                    {link2 && (
                      <Link
                        href={link2}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "12px 24px",
                          backgroundColor: "#EB2525",
                          color: "white",
                          borderRadius: "6px",
                          textDecoration: "none",
                          fontWeight: 500,
                          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          transition: "background-color 0.2s",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor = "#D81D1D")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor = "#EB2525")
                        }
                      >
                        <svg
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Watch Video
                      </Link>
                    )}
                  </div>
                  {img5 && (
                    <div className="row mb-45">
                      <div className="col-6 w_img">
                        <img src={img5} alt="img" />
                      </div>
                      <div className="col-6 w_img">
                        <img src={img6} alt="img" />
                      </div>
                    </div>
                  )}
                  <h4 className="details_title">{futureTitle}</h4>

                  <p>{detail4}</p>
                  <div style={{ textAlign: "center", margin: "2rem 0" }}>
                    {link3 && (
                      <Link
                        href={link3}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "12px 24px",
                          backgroundColor: "#EB2525",
                          color: "white",
                          borderRadius: "6px",
                          textDecoration: "none",
                          fontWeight: 500,
                          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                          transition: "background-color 0.2s",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.backgroundColor = "#D81D1D")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.backgroundColor = "#EB2525")
                        }
                      >
                        <svg
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Watch Video
                      </Link>
                    )}
                  </div>
                  {img7 && (
                    <div className="row mb-45">
                      <div className="col-6 w_img">
                        <img src={img7} alt="img" />
                      </div>
                      <div className="col-6 w_img">
                        <img src={img8} alt="img" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5">
            <div className="single_sidebar_wrapper pl-15 mb-40">
              <div
                className="single_widget has_border person_widget text-center mb-40"
                style={{
                  position: "relative",
                  backgroundImage: "url('/img/about/DESERVING.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0 0 0 / 0.6)",
                    zIndex: 1,
                  }}
                ></div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <h5 style={{ color: "white" }}>Deserving Families of our Own Students</h5>
                  <div className="feature_buttons widget_buttons">
                    <Link
                      href="/communityCenter"
                      className="g_btn hbtn_1 to_right1 i_left rad-30"
                    >
                      <i className="fal fa-heart"></i>SEE LIST<span></span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="single_widget has_border person_widget text-center mb-40">
                <div className="widget_person_img">
                  <Link href="/volunteer-details">
                    <img src="/img/slider/ceo.png" alt="img" />
                  </Link>
                  <span className="check_sign">
                    <i className="fal fa-check"></i>
                  </span>
                </div>
                <div className="person_designation widget_mb25">
                  <h5 className="person_nam f_size24">
                    <Link
                      href="/volunteer-details"
                      className="person_nam f_size24"
                    >
                      Muhammad Iqbal Khan
                    </Link>
                  </h5>
                  <span className="person_surname">
                    Cheif Executive Officer.
                  </span>
                </div>
                <div className="feature_buttons widget_buttons">
                  <Link
                    href="/donation"
                    className="g_btn hbtn_1 to_right1 i_left rad-30"
                  >
                    <i className="fal fa-heart"></i>Donate Now<span></span>
                  </Link>
                  <Link href="#" className="reply_btn theme-2">
                    <i className="fal fa-reply"></i>
                  </Link>
                </div>
              </div>

              <div className="single_widget has_border post_widget mb-40">
                <div className="single_widget_title">
                  <h4 className="widget_title_text has_border">
                    Your Donation Use
                  </h4>
                </div>
                <div className="donor_post_wrapper">
                  <p>Your donations are transforming lives by supporting:</p>
                  <ul>
                    <li>
                      <strong>Education:</strong> Providing school supplies,
                      scholarships, and quality education for underprivileged
                      children.
                    </li>
                    <li>
                      <strong>Food Aid:</strong> Delivering meals to families in
                      need.
                    </li>
                    <li>
                      <strong>Disaster Relief:</strong> Offering emergency aid,
                      including shelter and food, during crises.
                    </li>
                    <li>
                      <strong>Community Growth:</strong> Funding clean water,
                      healthcare, and skills training initiatives.
                    </li>
                  </ul>
                  <p>Thank you for making a difference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
