import React from "react";

export default function AboutFeatureArea() {
  return (
    //about feature area start
    <div className="about_features_area soft-grey-2 ">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="section_title text-center mb-60">
              <span className="sub_title sub_title_2">Why Choose Us</span>
              <h3 className="title title_2">The perfect help</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="choose_single_card theme-2 p-rel bg-white mb-30">
              <div className="choose_abs theme-2">
                <i className="flaticon-map"></i>
              </div>
              <span className="card_number">01</span>
              <div className="choose_card_content">
                <h5 className="choose_card_title">Empowering Education</h5>
                <p>
                  Delivering quality education to underprivileged communities,
                  fostering a brighter future for children and youth across
                  Pakistan.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="choose_single_card p-rel theme-3 bg-white mb-30">
              <div className="choose_abs theme-3">
                <i className="flaticon-user"></i>
              </div>
              <span className="card_number clr-theme-3">02</span>
              <div className="choose_card_content">
                <h5 className="choose_card_title">Accessible Healthcare</h5>
                <p>
                  Bridging the healthcare gap by providing medical services,
                  maternal care, and health awareness to underserved
                  populations.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="choose_single_card p-rel theme-4 bg-white mb-30">
              <div className="choose_abs theme-4">
                <i className="flaticon-flower"></i>
              </div>
              <span className="card_number clr-theme-4">03</span>
              <div className="choose_card_content">
                <h5 className="choose_card_title">Food & Shelter</h5>
                <p>
                  Ensuring access to safe drinking water and sanitation
                  facilities, improving lives and reducing health risks in
                  vulnerable communities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-sm-6">
            <div className="choose_single_card p-rel theme-5 bg-white mb-30">
              <div className="choose_abs theme-5">
                <i className="flaticon-water-drop"></i>
              </div>
              <span className="card_number clr-theme-5">04</span>
              <div className="choose_card_content">
                <h5 className="choose_card_title">Clean Water Initiatives</h5>
                <p>
                  Promoting sustainability through tree planting, awareness, and
                  climate action initiatives to protect natural resources.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row d-none">
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
            <div className="about_feature_wrapper mb-30">
              <div className="about_feature_icon">
                <i className="flaticon-charity"></i>
                <span className="card_number feature_number theme-1">01</span>
              </div>
              <div className="about_feature_text">
                <h5 className="about_feature_title theme-1">
                  Environmental Stewardship
                </h5>
                <p>
                  Driving sustainability through tree plantation campaigns,
                  awareness programs, and initiatives that combat climate change
                  and preserve natural resources.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
            <div className="about_feature_wrapper mb-30">
              <div className="about_feature_icon">
                <i className="flaticon-healthcare"></i>
                <span className="card_number feature_number theme-2">02</span>
              </div>
              <div className="about_feature_text">
                <h5 className="about_feature_title theme-2">Food & Shelter</h5>
                <p>
                  Lorem ipsum dolor sit amet, cons ectetur adi pisicing elit,
                  sed do eiusmod tempor incid.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
            <div className="about_feature_wrapper mb-30">
              <div className="about_feature_icon">
                <i className="flaticon-health-check"></i>
                <span className="card_number feature_number theme-2">03</span>
              </div>
              <div className="about_feature_text">
                <h5 className="about_feature_title theme-2">
                  Medicine & Medical
                </h5>
                <p>
                  Neque porro quisquam est, qui dol orem ipsum quia dolor sit
                  amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
            <div className="about_feature_wrapper mb-30">
              <div className="about_feature_icon">
                <i className="flaticon-graduated"></i>
                <span className="card_number feature_number theme-3">04</span>
              </div>
              <div className="about_feature_text">
                <h5 className="about_feature_title theme-3">Basic Education</h5>
                <p>
                  Duis aute irure dolor in reprehe nderit in voluptate velit
                  esse cillum dolore eu fugiat nulla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //about feature area end
  );
}
