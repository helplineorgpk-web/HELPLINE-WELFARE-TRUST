import React from "react";
import styles from "../../public/css/Edu.module.css";

function Health() {
  return (
    <section className={styles.container}>
      <div className={styles.banner2}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>HELPLINE HEALTH</h1>
          <button className={styles.supportButton}>SUPPORTING APPEAL</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.desContainer}>
          <h2 className={styles.heading}>Helpline Health Projects</h2>
          <p className={styles.description2}>
            Pakistan has been listed by the World Health Organization (WHO) as
            one of 57 nations facing a severe shortage of health workers, and
            the country ranks 122nd globally in terms of the quality of its
            healthcare services. Tragically, Pakistan also has one of the
            highest rates of infant mortality in the world. <br /> <br />
            Helpline Social Welfare Foundation has established a nationwide
            network to ensure that people, regardless of their socio-economic
            status, have access to top-quality healthcare. This includes
            numerous hospitals, clinics, dispensaries, diagnostic centres, and
            blood banks, as well as mobile medical camps and ambulances.
            Notably, the foundation has implemented successful initiatives in
            remote and underdeveloped regions like Tharparkar in Sindh and
            Quetta in Balochistan.
            <br />
            <br /> The foundation’s efforts have proven particularly beneficial
            in underdeveloped areas like Tharparkar in Sindh and Quetta in
            Balochistan. These regions, which have traditionally been deprived
            of healthcare facilities, have benefited significantly from the
            foundation’s healthcare initiatives. By ensuring that people in
            remote and impoverished areas receive quality healthcare, the
            foundation has made a significant contribution towards improving the
            overall health of the nation and reducing the disparities between
            different segments of society.
          </p>
        </div>
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
      </div>
    </section>
  );
}

export default Health;
