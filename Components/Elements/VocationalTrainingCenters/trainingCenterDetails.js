import React from "react";
import styles from "../../../public/css/TrainingCenterDetails.module.css";
import Image from "next/image";

export default function TrainingCenterDetails() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Training Center Details</h1>
      <p className={styles.description}>
        Helpline operates six vocational training centers where women,
        particularly mothers of our students, learn stitching and embroidery,
        enabling them to earn a livelihood. To further support these families,
        Helpline distributes poultry buckets containing five chickens, livestock
        such as goats and heifers, and stitching machines to graduates of our
        training programs.
      </p>

      <section className={styles.imageGallery}>
        <Image
          src={"/img/orphanage/PHOTO-2025-02-19-11-59-36.jpg"}
          alt="Training Center"
          width={500}
          height={300}
          className={styles.image}
        />
        <Image
          src={"/img/orphanage/PHOTO-2025-02-19-11-59-36(1).jpg"}
          alt="Training Center"
          width={500}
          height={300}
          className={styles.image}
        />
      </section>

      <p className={styles.description}>
        We plan to add another Vocational Training Center, and the building is
        now complete. We need equipment and furniture for 10 special courses
        designed for the students of Al-Kitab School. Your support in this
        regard would be greatly appreciated.
      </p>

      <section className={styles.imageGallery}>
        <Image
          src={"/img/orphanage/01(1).jpg"}
          alt="Training"
          width={500}
          height={300}
          className={styles.image}
        />
        <Image
          src={"/img/orphanage/PHOTO-2025-02-19-12-04-35.jpg"}
          alt="Training"
          width={500}
          height={300}
          className={styles.image}
        />
        <Image
          src={"/img/orphanage/03(1).jpg"}
          alt="Training"
          width={500}
          height={300}
          className={styles.image}
        />
        <Image
          src={"/img/orphanage/04.jpg"}
          alt="Training"
          width={500}
          height={300}
          className={styles.image}
        />
        <Image
          src={"/img/orphanage/02.jpg"}
          alt="Training"
          width={500}
          height={300}
          className={styles.image}
        />
      </section>

      <div className={styles.videoWrapper}>
        <video controls className={styles.video}>
          <source
            src="/img/orphanage/VIDEO-2025-02-19-12-04-34.mp4"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
