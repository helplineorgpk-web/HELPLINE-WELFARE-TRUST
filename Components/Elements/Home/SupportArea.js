import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SupportArea() {
  return (
    <>
      <div className="support_area mtm-294 pb-90">
        <div className="support_area mtm-294 pb-90">
          <div className="container">
            <div className="support_bg white-bg">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                  <div className="support_images_active swiper-container dots_style">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={2}
                      slidesPerView={1}
                      autoplaydisableoninteraction={"false"}
                      loop={true}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                    >
                      <SwiperSlide className="support_img_single img_effect_white">
                        <Link href="/volunteer">
                          <a>
                            <img src="/img/bg/support3.jpg" alt="img" />
                          </a>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className="support_img_single img_effect_white">
                        <Link href="/volunteer">
                          <a>
                            <img src="/img/bg/support4.jpg" alt="img" />
                          </a>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className="support_img_single img_effect_white">
                        <Link href="/volunteer">
                          <a>
                            <img src="/img/bg/support6.jpg" alt="img" />
                          </a>
                        </Link>
                      </SwiperSlide>
                      <SwiperSlide className="support_img_single img_effect_white">
                        <Link href="/volunteer">
                          <a>
                            <img src="/img/bg/support7.jpg" alt="img" />
                          </a>
                        </Link>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 d-flex align-items-center">
                  <div className="support_wrapper">
                    <div className="section_title">
                      <span className="sub_title">
                        <i className="fal fa-users"></i> Join Us
                      </span>
                      <h3 className="title">
                        Become a volunteer to save children
                      </h3>
                    </div>
                    <p className="mb-45">
                      NewLook unlike many traditional plastic surgery centers in
                      San Diego, are industry-recognized experts in a wide
                      variety of cosmetic procedures.
                    </p>
                    <Link href="/volunteer">
                      <a className="g_btn theme1_bg to_right2 i_right rad-30 p-45">
                        Apply Here<i className="fal fa-long-arrow-right"></i>
                        <span></span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-80">
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12">
              <div className="section_title mb-55">
                <span className="sub_title">
                  <i className="fal fa-heart"></i>Why Choose Us
                </span>
                <h3 className="title">The perfect help</h3>
              </div>
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                  <div className="choose_single_card theme-2 p-rel mb-30">
                    <div className="choose_abs theme-2">
                      <i className="flaticon-map"></i>
                    </div>
                    <span className="card_number">01</span>
                    <div className="choose_card_content">
                      <h5 className="choose_card_title">Places to get lost</h5>
                      <p>
                        Charity is the largest global for crowdfunding community
                        with connecting nonprofits.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                  <div className="choose_single_card p-rel theme-3 mb-30">
                    <div className="choose_abs theme-3">
                      <i className="flaticon-user"></i>
                    </div>
                    <span className="card_number clr-theme-3">02</span>
                    <div className="choose_card_content">
                      <h5 className="choose_card_title">Free Refuge Shelter</h5>
                      <p>
                        Lorem ipsum dolor sit ametco bns ectetur adi pisicing
                        elit sed do eiusmod tempor incid.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12 d-flex align-items-center text-center">
              <div
                className="single-support p-rel ml-50 mb-30"
                style={{ background: "url(/img/bg/support_bg.jpg)" }}
              >
                <form action="#">
                  <div className="support-wrapper p-rel">
                    <h4 className="support_title">Support Us</h4>
                    <p className="mb-35 opacity_6">
                      Charity is the largest global for crowdfunding For those
                      who wish to join hands with us in creating a brighter
                      tomorrow, we offer a seamless path to philanthropy. We
                      invite you to become a part of our journey, and work
                      together to build a society where hope, equity, and
                      opportunity flourish for all. Join us in embracing the
                      spirit of Mawakhath-e-Madina and turning it into a living
                      legacy of transformation.
                    </p>
                    <div className="donar_section support_currency d-sm-flex d-inline-block justify-content-center">
                      <button
                        type="submit"
                        className="g_btn curr_btn rad-30 ml-10"
                      >
                        Donate<span></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
