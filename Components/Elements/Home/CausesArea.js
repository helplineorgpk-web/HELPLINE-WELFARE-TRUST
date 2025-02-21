import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../public/css/WayToDonate.module.css";
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
              <div className="flex flex-2 flex-3 flex-4 mb-30" key={item.id}>
                <div className="single_cause mb-30">
                  <div className="single_cause_img img_effect_white p-rel">
                    <div onClick={() => handleNavigation(item)}>
                      <Link href={{}}>{item.img}</Link>
                    </div>
                  </div>
                  <div className="single_cause_content single_cause_content_2">
                    <div className="single_cause">
                      <span>{item.category[0]}</span>
                      <h3 className="title">
                        <Link href="/cause-details">{item.desc}</Link>
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
            <Link
              href="/cause"
              className="g_btn theme1_bg to_right2 i_right rad-30 p-45"
            >
              See More<i className="fal fa-long-arrow-right"></i>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
