import React from "react";
import Link from "next/link";

export default function SliderArea() {
  return (
    <section className="slider_area">
      <div className="img_topleft">
        <img data-depth="1" src="/img/slider/topok.png" alt="img" />
      </div>
      <div className="img_topright">
        <img data-depth="1.3" src="/img/slider/righttop.png" alt="img" />
      </div>
      <div className="img_bottomleft">
        <img data-depth="1.5" src="/img/slider/bottomleft.png" alt="img" />
      </div>
      <div className="slider_active">
        <div className="single_slider slider_height p-rel d-flex align-items-center align-items-md-end">
          <div className="img_bottomright">
            <img
              data-depth="0.8"
              src="/img/slider/qwerty-Photoroom.png"
              alt="img"
            />
          </div>
          <div
            className=""
            style={{
              marginLeft: "40px",
              position: "absolute",
              top: 300,
            }}
          >
            <div className="">
              <div className="">
                <div className="">
                  <div className="slider_text text_overlay">
                    <h2 className="slider_title">
                      <span>Empowering</span> <br /> Communities
                    </h2>
                    <div className="slider_button">
                      <Link href="/cause" className="slider_btn">
                        Education
                      </Link>
                      <Link href="/cause" className="slider_btn">
                        Water
                      </Link>
                      <Link href="/cause" className="slider_btn">
                        Medical
                      </Link>
                      <Link href="/donation" className="g_btn hbtn_1 to_right1 rad-30 nav-donate-btn">
                        Donate Now<span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
