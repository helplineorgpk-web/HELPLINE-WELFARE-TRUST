import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function CausesArea({ causes, data }) {
  const router = useRouter();
  const handleNavigation = (item) => {
    router.push({
      pathname: `/cause-details`,
      query: { id: item.id },
    });
  };
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
        <div className="row">
          {causes.map((item, index) =>
            index < 3 ? (
              <div
                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 mb-30"
                key={item.id}
              >
                <div className="single_cause mb-30">
                  <div className="single_cause_img img_effect_white p-rel">
                    <div onClick={() => handleNavigation(item)}>
                      <Link href={{}}>
                        <a>{item.img}</a>
                      </Link>
                    </div>
                    <div
                      className="progress_wrapper"
                      style={{ backgroundColor: item.color }}
                    >
                      <div
                        className="progress_circle"
                        data-percentage={item.progressData}
                      >
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">
                          <div>{item.progressData}%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="single_cause_content single_cause_content_2">
                    <div className="single_cause">
                      <span>{item.category[0]}</span>
                      <h3 className="title">
                        <Link href="/cause-details">
                          <a>{item.desc}</a>
                        </Link>
                      </h3>
                    </div>
                    <div className="single_cause_meta">{item.detail}</div>
                    <div
                      onClick={() => handleNavigation(item)}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: item.color,
                        color: "#fff",
                        textAlign: "center",
                        borderRadius: "5px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        marginTop: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                    >
                      See More
                    </div>
                  </div>
                </div>
              </div>
            ) : null
          )}
          <div style={{ textAlign: "center" }}>
            <Link href="/cause">
              <a className="g_btn theme1_bg to_right2 i_right rad-30 p-45">
                See More<i className="fal fa-long-arrow-right"></i>
                <span></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
