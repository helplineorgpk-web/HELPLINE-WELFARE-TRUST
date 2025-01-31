import React from "react";
import Link from "next/link";

export default function IconBox() {
  return (
    <>
      {/* <!-- Icon Box area start --> */}
      <div className="icon_box_area gray-bg pt-120 pb-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <Link href="/cause" className="icon_box_link">
                <i className="flaticon-lotus-flower"></i>
                <h5>Community & Culture</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </Link>
            </div>
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
              <Link href="/cause" className="icon_box_link">
                <i className="flaticon-dumbbell"></i>
                <h5>Sports & Fitness</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </Link>
            </div>
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <Link href="/cause-details" className="icon_box_link">
                <i className="flaticon-creativity"></i>
                <h5>Creative Ideas</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Icon Box area end -->  */}
    </>
  );
}
