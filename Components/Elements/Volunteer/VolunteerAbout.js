import React from "react";

export default function VolunteerAbout() {
  return (
    <div className="about_single_area about-bg pt-205 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="about_team_img pr-20">
              <div className="about_signle_img">
                <img
                  src="/img/about/Picture1.png"
                  alt="img"
                  height={500}
                  width={500}
                  className="big_single"
                />
                <img
                  src="/img/about/Picture5.png"
                  alt="img"
                  height={300}
                  width={350}
                  className="small_single"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about_wrapper pl-30">
              <div className="section_title">
                <span className="sub_title sub_title_2">
                  Why You Should Become a Volunteer?
                </span>
                <h3 className="title title_2">
                  Together We Serve, Together We Grow.
                </h3>
              </div>
              <p className="mb-40 n_mb20">
                Volunteering is a rewarding way to give back to your community,
                make a meaningful impact, and grow personally and
                professionally. By dedicating your time and skills, you not only
                help others but also enrich your own life in countless ways.
                Here's why volunteering matters:
              </p>

              <ul className="about_list about_single_list">
                <li>Make a Difference</li>
                <li>Build Connections</li>
                <li>Develop Skills</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
