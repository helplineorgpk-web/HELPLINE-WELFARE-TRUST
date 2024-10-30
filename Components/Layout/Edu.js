import React from "react";
import styles from "../../public/css/Edu.module.css";

function Edu() {
  return (
    <section className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>HELPLINE EDUCATION</h1>
          <button className={styles.supportButton}>SUPPORTING APPEAL</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.videoWrapper}>
          <iframe
            className={styles.videoIframe}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your_video_id"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.desContainer}>
          <h2 className={styles.heading}>Helpline Education System</h2>
          <p className={styles.description}>
            Being a developing country, Pakistan has suffered the most from
            different turmoil and plunged further deep in the fields of
            education and advancement. Approximately 25 million children are
            illiterate and the rest mostly are being imparted directionless
            education. Economical development, unless coupled with social
            development, cannot achieve desired progress in society. Helpline
            firmly believes that education is the most important means to
            achieve economic as well as social development. It is, therefore,
            actively engaged in providing quality education to underprivileged
            children in remote areas of Punjab and Sindh. The Helpline is
            running a system of 15 government schools along with 6 own schools
            across the country benefiting about 6000 students. Free education،
            daily lunch،Free Bags and free shoes are provided to the children in
            these schools. Apart from this, Technical Education Centers have
            been set up within the schools where women can learn sewing and
            embroidery for free. The total annual cost of this helpline
            educational project is Rs 54,697,938/-.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Edu;
