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
  history,
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
                  <p>{detail2}</p>
                  <p>{detail3}</p>
                  <div className="feature_progress_wrapper mb-25 mt-35">
                    <div className="progress feature_progress"></div>
                  </div>
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
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-5">
            <div className="single_sidebar_wrapper pl-15 mb-40">
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
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link
                  href={{
                    pathname: '/history',
                    query: { history: JSON.stringify(history) },
                  }}
                  className="g_btn hbtn_1 to_right1 i_left rad-30"
                >
                  <i className="fal fa-clock"></i> Our History
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
