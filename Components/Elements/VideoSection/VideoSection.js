import React from "react";
import styles from "../../../public/css/VideoSection.module.css";
import Image from "next/image";
const VideoSection = () => {
  return (
    <>
      <section className={styles.videoSection}>
        <div className="container">
          <div className={styles.videoWrapper}>
            <div className={styles.contentBox}>
              <h2>
                Helpline : Hazaro bacho ki muft taleem | Jahan Numa | Haroon Ur
                Rasheed | Suno News HD
              </h2>
              <h3>Akhlaq ul Rehman General Secretary Helpline</h3>
              <p>
                Helpline Social Welfare Organization stands as a beacon of
                compassion and resilience, dedicated to uplifting the lives of
                those in need.
              </p>
              <p>
                Operating within flood-affected areas of Pakistan, the
                organization's unwavering commitment to change is evident
                through its remarkable initiative of constructing new houses for
                the displaced. By sheltering families who have lost their homes
                to natural disasters, Helpline not only offers physical
                protection but also fosters a renewed sense of hope.
              </p>
              <p>
                Beyond bricks and mortar, this organization recognizes that
                sustenance is equally vital, exemplified by its provision of
                monthly food assistance to these families. By addressing the
                issue of food insecurity head-on, Helpline mitigates the
                pressing concerns that often accompany displacement.
              </p>
            </div>
            <div className={styles.videoContainer}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/Sb8MdjQeRY8"
                title="Helpline : Hazaro bacho ki muft taleem | Jahan Numa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoFrame}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.interviewSection}>
        <div className="container">
          <div className={styles.interviewWrapper}>
            <div className={styles.interviewContent}>
              <h2>
                An Interview with Helpline Management (General Secretary & GM
                Admin) Conducted by Khudi
              </h2>
              <p>
                In this insightful interview conducted by Khudi, we gain a
                comprehensive understanding of Mian Akhlaq ur Rehman's role as
                the General Secretary of Helpline. The dialogue sheds light on
                his responsibilities and the organization's overarching mission.
              </p>
              <p>
                Through this exchange, we delve into the inner workings of
                Helpline and explore the motivations and aspirations that drive
                its dedicated team. Akhlaq ur Rehman's perspectives, shared
                during this conversation, offer valuable insights into the
                organization's efforts to make a positive impact and provide
                assistance to those in need. This interview serves as a valuable
                source of information and inspiration for those interested in
                the work of Helpline and its commitment to serving the
                community.
              </p>
            </div>
            <div className={styles.videoContainer}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1d4tp4am58A"
                title="An Interview with Mian Akhlaq ur Rehman"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoFrame}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
