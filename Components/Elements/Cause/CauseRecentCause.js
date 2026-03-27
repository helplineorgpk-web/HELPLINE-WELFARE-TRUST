import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../public/css/WayToDonate.module.css";
import Image from "next/image";
const DEFAULT_SECTION_TITLE = "Our Clean Water Projects";
const DEFAULT_SECTION_DESCRIPTION = (
  <>
    Helpline Welfare Trust – Clean Water Project<br/><br/>
    Alhamdulillah, Helpline Welfare Trust has been relentlessly working to ensure that every family in Pakistan has access to one of life's most basic needs — clean water. Through the grace of Allah and the support of kind-hearted donors, we have successfully installed over 2,000 water pumps across various underprivileged and remote regions of Pakistan, where clean water was once a distant dream. From the scorching deserts of Balochistan to the neglected villages of Sindh, Punjab, and Khyber Pakhtunkhwa, our teams have reached deep into communities that were forced to rely on contaminated or unsafe water sources.<br/><br/>
    Each water pump installed is more than just a source of water — it is a source of life, health, and hope. For countless families, this initiative means no more long walks under the burning sun to fetch water, no more diseases caused by unsafe water, and no more children missing school just to help their mothers carry heavy buckets from faraway wells. Every drop of clean water that flows through these pumps is a testament to compassion, unity, and faith — a reminder that even the smallest act of kindness can transform lives.<br/><br/>
    Our mission is clear and deeply rooted in our belief: a clean and healthy Pakistan is possible when we stand together for humanity. Helpline Welfare Trust continues to expand its clean water initiatives, installing solar-powered tube wells, filtration plants, and hand pumps — all free of cost — to serve the poor and needy. This project is not just about water; it is about dignity, equality, and a better future for generations to come.<br/><br/>
    With every pump we install, we move one step closer to our vision — a Pakistan where no child suffers from thirst, where every drop of water brings blessings, and where compassion flows as freely as the water we provide.
  </>
);

export default function CauseRecentCause({
  categories,
  causes,
  sectionTitle = DEFAULT_SECTION_TITLE,
  sectionDescription = DEFAULT_SECTION_DESCRIPTION,
  initialFilter = "",
}) {
  const router = useRouter();
  const categoryKeys = Object.keys(categories || {});
  const hasSingleCategory = categoryKeys.length <= 1;

  const [filter, setFilter] = useState(() => {
    if (initialFilter) {
      return initialFilter;
    }
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
    if (categories?.Livelihood) {
      return "Livelihood";
    }
    if (categories?.HouseConstructions) {
      return "House Constructions";
    }
    return "";
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (router.isReady && router.query.category) {
      const categoryParam = router.query.category;
      const validCategories = Object.values(categories || {});
      if (validCategories.includes(categoryParam)) {
        setFilter(categoryParam);
      }
    }
  }, [router.isReady, router.query.category, categories]);

  useEffect(() => {
    const filtered =
      filter === ""
        ? (causes || [])
        : (causes || []).filter((c) =>
            c.category?.some((cat) => cat.toLowerCase() === filter.toLowerCase())
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
        <div className={styles.sectionIntro}>
          <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
          <div className={styles.sectionDescription}>
            {sectionDescription}
          </div>
        </div>
        {!hasSingleCategory && (
          <div className="row">
            <div className="col-xxl-12 text-center">
              <div className="cause_button_wrapper mb-25">
                <nav>
                  <div className="nav tab_buttons" id="nav-tab" role="tablist">
                    {categoryKeys.map((key) => (
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
        )}


        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className={styles.home_card}>
              {projects?.length > 0 ? (
                projects.map((item) => (
                  <article className={styles.cardWrapper} key={item.id}>
                    <div className={styles.single_cause}>
                      <div className={styles.imgWrap}>
                        {item.adopted === "Adopted" && (
                          <span className={styles.adoptedTag}>Adopted</span>
                        )}
                        <Link
                          href={{ pathname: "/cause-details", query: { id: item.id } }}
                          className={styles.imgLink}
                        >
                          <Image
                            src={item.img}
                            fill
                            sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                            className={styles.cardImg}
                            alt={item.desc || item.ActualName || "School"}
                          />
                        </Link>
                      </div>
                      <div className={styles.single_cause_content}>
                        <div className={styles.title_area}>
                          {item.category?.[0] && (
                            <span className={styles.categoryPill}>{item.category[0]}</span>
                          )}
                          <h3 className={styles.cardSchoolName}>
                            <Link href={{ pathname: "/cause-details", query: { id: item.id } }}>
                              {item.desc}
                            </Link>
                          </h3>
                        </div>
                        <p className={styles.single_cause_meta}>
                          {item.detail}
                        </p>
                        <Link
                          href={{ pathname: "/cause-details", query: { id: item.id } }}
                          className={styles.seeMoreBtn}
                          style={{ "--btn-color": item.color || "#f15b43" }}
                        >
                          See More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
