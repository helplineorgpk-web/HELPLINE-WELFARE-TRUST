import React from "react";
import Image from "next/image";
import rashan1 from "../../../public/img/causes/rashan1.jpeg";
import styles from "../../../public/css/RashanPage.module.css";

export default function Rashan() {
  return (
    <div className={styles.rashanpage}>
      <section className={styles.rashanintro}>
        <div className={styles.container}>
          <div className="container">
            <div className={styles.row}>
              <div className={styles.colmd6}>
                <h2 className={styles.sectiontitle}>Rashan Program</h2>
                <div className={styles.line}></div>
                <p>
                  As per latest survay, 45% of Pakistan's population living
                  bellow the poverty line. The most effected segment of our
                  society is those women and children who have extremly megar
                  income and our unable to have basic food.Helpline has develope
                  a comprihensive program, augmented by a strong varification
                  process to support such Families by avoiding them basic food.
                </p>
                <p>
                  Helpline, with the help of our worthy doners, has been
                  distributing rashan packages in all the provinces of Pakistan since 1992. The packages include
                  Atta, Ghee, Rice, Sugar, Daal, and tea. 
                </p>
              </div>

              <div className={styles.colmd6}>
                <Image
                  src={rashan1}
                  alt="Rashan Program"
                  className={styles.imgfluid}
                  layout="responsive"
                  width={100}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
