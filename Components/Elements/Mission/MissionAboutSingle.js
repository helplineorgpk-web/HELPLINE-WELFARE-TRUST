import React from "react";
import Link from "next/link";

export default function MissionAboutSingle() {
  return (
    <div className="about_single_area about_subscribe pt-105 pb-120">
      <img src="/img/bg/animatedimg.jpg" alt="img" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 offset-xl-6 col-md-10 offset-md-1">
            <div className="about_wrapper subscribe_mission pl-50">
              <div className="section_title">
                <Link href="#">
                  <a className="sub_title sub_title_2">
                    Helpline’s Primary Objective{" "}
                  </a>
                </Link>
                <h3 className="title title_2 text_white">
                  Health, Healing, and Hope.
                </h3>
              </div>
              <p className="mb-45">
                We are dedicated to improving the health and well-being of
                underserved communities by providing essential healthcare
                services. From building medical facilities to offering free
                treatments and health education, we strive to ensure access to
                quality care for every individual. With compassion, commitment,
                and collaboration, we work tirelessly to restore health and
                dignity, empowering people to lead healthier, happier lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
