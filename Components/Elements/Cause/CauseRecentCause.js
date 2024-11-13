import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CauseRecentCause({ categories, causes }) {
  const [filter, setFilter] = useState("");
  const [projects, setProjects] = useState(causes || []);
  const router = useRouter();

  useEffect(() => {
    console.log("causes:", causes);
    console.log("filter:", filter);

    const filtered =
      filter === ""
        ? causes
        : causes?.filter((c) =>
            c.category.some((cat) => cat.toLowerCase() === filter.toLowerCase())
          );
    setProjects(filtered || []);
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
                      filter === categories.HouseConstructions ? "active" : ""
                    }`}
                    onClick={() => setFilter(categories.HouseConstructions)}
                  >
                    {categories.HouseConstructions}
                  </button>
                  <button
                    className={`nav-link ${
                      filter === categories.Water ? "active" : ""
                    }`}
                    onClick={() => setFilter(categories.Water)}
                  >
                    {categories.Water}
                  </button>
                  <button
                    className={`nav-link ${
                      filter === categories.Education ? "active" : ""
                    }`}
                    onClick={() => setFilter(categories.Education)}
                  >
                    {categories.Education}
                  </button>
                  {categories.Medical && (
                    <button
                      className={`nav-link ${
                        filter === categories.Medical ? "active" : ""
                      }`}
                      onClick={() => setFilter(categories.Medical)}
                    >
                      {categories.Medical}
                    </button>
                  )}
                  {categories.Food && (
                    <button
                      className={`nav-link ${
                        filter === categories.Food ? "active" : ""
                      }`}
                      onClick={() => setFilter(categories.Food)}
                    >
                      {categories.Food}
                    </button>
                  )}
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
              {projects?.length > 0 ? (
                projects.map((item, i) => (
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
                ))
              ) : (
                <p>No projects found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
