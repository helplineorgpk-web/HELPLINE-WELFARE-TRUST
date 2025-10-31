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
    if (categories?.HouseConstructions) {
      return "House Constructions";
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
            Our Clean Water Projects
          </h3>
          <p style={{
            textAlign: "center",
            color: "#2c3e50",
            lineHeight: 1.8,
            maxWidth: "1400px",
            margin: "0 auto",
            fontSize: "1.1rem"
          }}>
Helpline Welfare Trust – Clean Water Project<br/><br/>
Alhamdulillah, Helpline Welfare Trust has been relentlessly working to ensure that every family in Pakistan has access to one of life’s most basic needs — clean water. Through the grace of Allah and the support of kind-hearted donors, we have successfully installed over 2,000 water pumps across various underprivileged and remote regions of Pakistan, where clean water was once a distant dream. From the scorching deserts of Balochistan to the neglected villages of Sindh, Punjab, and Khyber Pakhtunkhwa, our teams have reached deep into communities that were forced to rely on contaminated or unsafe water sources.<br/><br/>
Each water pump installed is more than just a source of water — it is a source of life, health, and hope. For countless families, this initiative means no more long walks under the burning sun to fetch water, no more diseases caused by unsafe water, and no more children missing school just to help their mothers carry heavy buckets from faraway wells. Every drop of clean water that flows through these pumps is a testament to compassion, unity, and faith — a reminder that even the smallest act of kindness can transform lives.<br/><br/>
Our mission is clear and deeply rooted in our belief: a clean and healthy Pakistan is possible when we stand together for humanity. Helpline Welfare Trust continues to expand its clean water initiatives, installing solar-powered tube wells, filtration plants, and hand pumps — all free of cost — to serve the poor and needy. This project is not just about water; it is about dignity, equality, and a better future for generations to come.<br/><br/>
With every pump we install, we move one step closer to our vision — a Pakistan where no child suffers from thirst, where every drop of water brings blessings, and where compassion flows as freely as the water we provide.
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
