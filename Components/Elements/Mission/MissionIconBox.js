import React from "react";
import Link from "next/link";

export default function MissionIconBox() {
  return (
    <div className="icon_box_area pt-120 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <Link href="/cause" className="icon_box_link">
              <i className="flaticon-graduation-cap"></i>
              <h5>Family & Education</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </Link>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <Link href="/cause" className="icon_box_link">
              <i className="flaticon-care"></i>
              <h5>Charity & Causes</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </Link>
          </div>
          <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
            <Link href="/contact" className="icon_box_link">
              <i className="flaticon-creativity"></i>
              <h5>Conference & Ideas</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
