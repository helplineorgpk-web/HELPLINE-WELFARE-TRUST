import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../public/css/WayToDonate.module.css";
import Image from "next/image";
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
    if (categories?.OwnSchools) {
      return "Own School";
    }
    if (categories?.AdoptedSchools) {
      return "Adopted Schools";
    }
    if (categories?.Medical) {
      return "Medical";
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
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            textAlign: "center",
            fontWeight: 600,
            color: "#2c3e50"
          }}>
            Our Education Projects
          </h3>
          <p style={{
            textAlign: "center",
            color: "#2c3e50",
            lineHeight: 1.8,
            maxWidth: "900px",
            margin: "0 auto",
            fontSize: "1.1rem"
          }}>
            Helpline is engaged in various philanthropic activities all over
            Pakistan. Our main focus is QUALITY EDUCATION for under privileged
            children in remote rural areas of the country. We have devised
            "Al-Kitab Education System" which, besides imparting free quality
            education (Religious/Modern), encompasses the community development
            plans for the needy families of these students.
          </p>
        </div>
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
            <div className={styles.home_card}>
              {projects?.length > 0 ? (
                projects.map((item, i) => (
                  <div className={styles.flex} key={item.id}>
                    <div className={styles.single_cause}>
                      <div className={styles.img}>
                        <div onClick={() => handleNavigation(item)}>
                          <Image
                            src={item.img}
                            layout="responsive"
                            width={0}
                            height={0}
                            className={styles.img}
                          />
                        </div>
                      </div>
                      <div className={styles.single_cause_content}>
                        <div className={styles.title_area}>
                          <span>{item.category[0]}</span>
                          <h3 className={styles.title}>
                            <Link href="/cause-details">{item.desc}</Link>
                          </h3>
                        </div>
                        <div className={styles.single_cause_meta}>
                          {item.detail}
                        </div>
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
