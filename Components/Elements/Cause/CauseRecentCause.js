import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CauseRecentCause({ categories, causes }) {
  const [filter, setFilter] = useState(() => {
    if (categories?.AllCategories) {
      return "";
    }
    if (categories?.Water) {
      return "Water";
    }
    if (categories?.Education) {
      return "Education";
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
                  <div className="col-xxl-4 col-lg-4 col-md-6" key={item.id}>
                    <div className="single_cause mb-30">
                      <div className="single_cause_img_wrapper">
                        <div
                          className="single_cause_img w_img img_effect_white"
                          onClick={() => handleNavigation(item)}
                        >
                          <Link href={`/cause-details?id=${item.id}`}>
                            {item.img}
                          </Link>
                        </div>
                      </div>
                      <div className="single_cause_content">
                        <div className="single_cause">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontWeight: "bold",
                                color: item.color,
                              }}
                            >
                              {item.adopted}
                            </span>
                          </div>
                          <h3 className="title">
                            <Link href="#">{item.desc}</Link>
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
                            transition:
                              "transform 0.2s ease, box-shadow 0.2s ease",
                          }}
                        >
                          See More
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
