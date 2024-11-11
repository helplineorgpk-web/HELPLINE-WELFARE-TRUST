import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { HelplineData } from "../../../pages/api/data";

export default function CauseRecentCause() {
  const causes = HelplineData.causes;
  const [filter, setFilter] = useState("");
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const filtered =
      filter === ""
        ? causes
        : causes.filter((c) =>
            c.category.some((cat) => cat.toLowerCase() === filter.toLowerCase())
          );
    setProjects(filtered);
  }, [filter, causes]);

  const handleNavigation = (item) => {
    router.push({
      pathname: `/cause-details`,
      query: { id: item.id },
    });
  };

  return (
    <section className="causes_area gray-bg pt-120 pb-85">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 text-center">
            <div className="cause_button_wrapper mb-25">
              <nav>
                <div className="nav tab_buttons" id="nav-tab" role="tablist">
                  <button
                    className={`nav-link ${filter === "" ? "active" : ""}`}
                    onClick={() => setFilter("")}
                  >
                    All Categories
                  </button>
                  <button
                    className={`nav-link ${
                      filter === "House Constructions" ? "active" : ""
                    }`}
                    onClick={() => setFilter("House Constructions")}
                  >
                    House Constructions
                  </button>
                  <button
                    className={`nav-link ${filter === "water" ? "active" : ""}`}
                    onClick={() => setFilter("water")}
                  >
                    Water
                  </button>
                  <button
                    className={`nav-link ${
                      filter === "education" ? "active" : ""
                    }`}
                    onClick={() => setFilter("education")}
                  >
                    Education
                  </button>
                  <button
                    className={`nav-link ${
                      filter === "medical" ? "active" : ""
                    }`}
                    onClick={() => setFilter("medical")}
                  >
                    Medical
                  </button>
                  <button
                    className={`nav-link ${filter === "food" ? "active" : ""}`}
                    onClick={() => setFilter("food")}
                  >
                    Food
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="row">
              {projects.map((item, i) => (
                <div
                  className="col-xxl-4 col-xl-4 col-lg-4 col-md-6"
                  key={item.id}
                >
                  <div className="single_cause mb-30">
                    <div className="single_cause_img_wrapper">
                      <div
                        className="single_cause_img w_img img_effect_white"
                        onClick={() => handleNavigation(item)}
                      >
                        <Link href={{}}>
                          <a>{item.img}</a>
                        </Link>
                      </div>
                      <div className="progress cause_progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: `${item.progressData}%` }}
                          aria-valuenow={item.progressData}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span>{item.progressData}%</span>
                        </div>
                      </div>
                    </div>
                    <div className="single_cause_content">
                      <div className="single_cause">
                        <span className="sub_title">{item.category}</span>
                        <h3 className="title">
                          <Link href={{}}>
                            <a>{item.desc}</a>
                          </Link>
                        </h3>
                        <span className="sub_title">{item.adopted}</span>
                      </div>
                      <div className="single_cause_meta">
                        <div className="single_meta d-inline-block">
                          <span className="meta_text clr_theme1">
                            <i className="fal fa-globe"></i> Goal
                          </span>
                          <span className="meta_price clr_theme1">
                            ${item.goal}
                          </span>
                        </div>
                        <div className="single_meta d-inline-block">
                          <span className="meta_text clr_theme2">
                            <i className="fal fa-users"></i> Raised
                          </span>
                          <span className="meta_price clr_theme2">
                            ${item.raised}
                          </span>
                        </div>
                        <div className="single_meta d-inline-block">
                          <span className="meta_text clr_theme3">
                            <i className="fal fa-reply"></i> To go
                          </span>
                          <span className="meta_price clr_theme3">
                            ${item.toGo}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cause_button text-center mt-10 mb-30">
            <Link href="/cause">
              <a className="cause_btn g_btn to_right1 rad-30">
                Load More <i className="far fa-plus"></i> <span></span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
