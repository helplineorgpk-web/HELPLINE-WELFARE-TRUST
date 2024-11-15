import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function CausesArea({ causes, data }) {
  return (
    <section
      className="causes_area grey-bg pt-105 pb-385"
      style={{ backgroundImage: "url(/img/causes/cause_map.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 text-center">
            <div className="section_title mb-45">
              <span className="sub_title">
                <i className="fal fa-heart"></i>
                {data.Water}
              </span>
              <h3 className="title">{data.waterprojects}</h3>
            </div>
          </div>
        </div>
        <div className="swiper-container cause_container_active">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
          >
            {causes.map((cause) => (
              <SwiperSlide className="single_cause mb-30" key={cause.id}>
                <div className="single_cause_img img_effect_white p-rel">
                  <Link href="/cause-details">
                    <a>{cause.img}</a>
                  </Link>
                  <div
                    className="progress_wrapper"
                    style={{ backgroundColor: cause.color }}
                  >
                    <div
                      className="progress_circle"
                      data-percentage={cause.progressData}
                    >
                      <span className="progress-left">
                        <span className="progress-bar"></span>
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar"></span>
                      </span>
                      <div className="progress-value">
                        <div>{cause.progressData}%</div>
                      </div>
                    </div>
                    <span>{cause.category[0]}</span>
                  </div>
                </div>
                <div className="single_cause_content single_cause_content_2">
                  <div className="single_cause">
                    <h3 className="title">
                      <Link href="/cause-details">
                        <a>{cause.desc}</a>
                      </Link>
                    </h3>
                  </div>
                  <div className="single_cause_meta">
                    <div className="single_meta d-inline-block">
                      <span className="meta_text clr_theme1">
                        <i className="fal fa-globe"></i> Goal
                      </span>
                      <span className="meta_price clr_theme1">
                        ${cause.goal}
                      </span>
                    </div>
                    <div className="single_meta d-inline-block">
                      <span className="meta_text clr_theme2">
                        <i className="fal fa-users"></i> Raised
                      </span>
                      <span className="meta_price clr_theme2">
                        ${cause.raised}
                      </span>
                    </div>
                    <div className="single_meta d-inline-block">
                      <span className="meta_text clr_theme3">
                        <i className="fal fa-reply"></i> To go
                      </span>
                      <span className="meta_price clr_theme3">
                        ${cause.toGo}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
