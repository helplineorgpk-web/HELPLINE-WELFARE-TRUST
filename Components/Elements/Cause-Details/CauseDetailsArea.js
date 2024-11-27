import React from "react";
import Link from "next/link";
export default function CauseDetailsArea({
  title,
  image,
  category,
  detail,
  img1,
  img2,
}) {
  return (
    <div className="cause_details_area pt-120 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-7">
            <div className="single_details_wrapper mb-40">
              <div className="single_details_img">{image}</div>
              <div className="single_details_content">
                <div className="single_donation_content single_border pb-45 mb-45">
                  <div className="section_title">
                    <Link href="#">
                      <a className="sub_title_details line_h2_2">{category}</a>
                    </Link>
                  </div>
                  <h4 className="details_title">{title}</h4>
                  <p>{detail}</p>
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
                    <a>
                      <img src="/img/slider/ceo.png" alt="img" />
                    </a>
                  </Link>
                  <span className="check_sign">
                    <i className="fal fa-check"></i>
                  </span>
                </div>
                <div className="person_designation widget_mb25">
                  <h5 className="person_nam f_size24">
                    <Link href="/volunteer-details">
                      <a>Muhammad Iqbal Khan</a>
                    </Link>
                  </h5>
                  <span className="person_surname">Founder,Helpline Co.</span>
                </div>
                <div className="feature_buttons widget_buttons">
                  <Link href="/donation">
                    <a className="g_btn hbtn_1 to_right1 i_left rad-30">
                      <i className="fal fa-heart"></i>Donate Now<span></span>
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="reply_btn theme-2">
                      <i className="fal fa-reply"></i>
                    </a>
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
