import React from "react";
import { useState } from "react";
import VideoPopUp from "../VideoPopUp";
import Link from "next/link";

export default function MissionAbout() {
  const [isShow, setShow] = useState(false);
  return (
    <div className="about_single_area pt-120 pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="about_signle_video mb-40">
              <div className="img_effect_white about_video_image_wrapper">
                <Link href="/event">

                    <img src="/img/causes/mission.jpg" alt="img" />

                </Link>
              </div>

              <a
                onClick={setShow}
                style={{ cursor: "pointer" }}
                className="video_icon"
              >
                <i className="fal fa-play"></i>
              </a>
            </div>
            {isShow && (
              <VideoPopUp
                setShow={() => setShow(false)}
                src="https://www.youtube.com/embed/SsDAXkU1BiU?controls=1&rel=0&playsinline=0&modestbranding=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fhelpline.org.pk&widgetid=1"
              />
            )}
          </div>
          <div className="col-xl-6">
            <div className="about_wrapper pl-50 mb-40">
              <div className="section_title mb-30">
                <span className="sub_title sub_title_2">Work Program</span>
                <h6 className="title title_2 no_br">
                  Rebuilding Communities Together
                </h6>
              </div>
              <p className="mb-55">
                We are committed to creating lasting change by providing
                sustainable solutions that uplift communities in need. Through
                affordable housing, access to clean water, and quality
                education, we strive to empower individuals and families,
                helping them regain stability and hope for a better future.
                Let’s join hands with compassion, collaboration, and dedication
                to create a world where every life is valued and every community
                thrives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
