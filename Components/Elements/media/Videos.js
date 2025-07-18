import React from "react";
import styles from "../../../public/css/Videos.module.css";

const videoData = [
  {
    id: 1,
    videoId: "SsDAXkU1BiU",
    title: "YouTube video player 1",
  },
  {
    id: 2,
    videoId: "qIWgzMfnCYk",
    title: "YouTube video player 2",
  },
  {
    id: 3,
    videoId: "SG9EJl9oihQ",
    title: "YouTube video player 3",
  },
  {
    id: 4,
    videoId: "icydKjkJhXs",
    title: "Qurbani - Eid UL Azha Message 2019",
  },
  {
    id: 5,
    videoId: "o2bU86CxKWQ",
    title: "Qubani Program by Pak Helpline",
  },
  {
    id: 6,
    videoId: "e1DF3RJT1xA",
    title: "Distribution of 500 Rations to Deserving Families",
  },
  {
    id: 7,
    videoId: "p9N0r1P-RYQ",
    title: "YouTube video player 1",
  },
  {
    id: 8,
    videoId: "5xZLbU1bYGI",
    title: "YouTube video player 2",
  },
  {
    id: 9,
    videoId: "8RAQOETPHhk",
    title: "YouTube video player 3",
  },
  {
    id: 10,
    videoId: "Zed6wEaHiag",
    title: "Qurbani - Eid UL Azha Message 2019",
  },
  {
    id: 11,
    videoId: "qYl8uuP5rd0",
    title: "Qubani Program by Pak Helpline",
  },
  {
    id: 12,
    videoId: "jedMB4nbdjE",
    title: "Distribution of 500 Rations to Deserving Families",
  },
  {
    id: 13,
    videoId: "T0AQTnVL4jc",
    title: "Qurbani - Eid UL Azha Message 2019",
  },
  {
    id: 14,
    videoId: "-WjRhXXI75Y",
    title: "Qubani Program by Pak Helpline",
  },
  {
    id: 15,
    videoId: "0FArIwxbYOQ",
    title: "Distribution of 500 Rations to Deserving Families",
  },
];

function Videos() {
  return (
    <div className={styles.container}>
      <div className={styles.videogrid}>
        {videoData.map((video) => (
          <div className={styles.videoitem} key={video.id}>
            <h3 className={styles.videoTitle}>{video.title}</h3>
            <div className={styles.videowrapper}>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
