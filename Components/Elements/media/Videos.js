import React from "react";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/Videos.module.css";
function Videos() {
  const videoData = HelplineData.videoData;

  return (
    <div className={styles.videogallery}>
      {videoData.map((video) => (
        <iframe
          key={video.id}
          className="elementor-video"
          allowFullScreen=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title={video.title}
          src={video.src}
        ></iframe>
      ))}
    </div>
  );
}

export default Videos;
