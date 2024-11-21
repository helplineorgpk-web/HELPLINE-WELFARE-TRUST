import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CauseRecentCause({ categories, causes }) {
  const [filter, setFilter] = useState(() => {
    if (categories?.AllCategories) {
      return "";
    }
    if (categories?.Education) {
      return "Education";
    }
    if (categories?.Aqiqah) {
      return "Aqiqah";
    }
  });

  const [projects, setProjects] = useState([]);

  const router = useRouter();

  useEffect(() => {
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
                  {Object.keys(categories || {}).map((key) => (
                    <button
                      key={key}
                      className={`nav-link ${
                        (categories[key] === "All Categories" &&
                          filter === "") ||
                        filter === categories[key]
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        setFilter(
                          categories[key] === "All Categories"
                            ? ""
                            : categories[key]
                        )
                      }
                    >
                      {categories[key]}
                    </button>
                  ))}
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
