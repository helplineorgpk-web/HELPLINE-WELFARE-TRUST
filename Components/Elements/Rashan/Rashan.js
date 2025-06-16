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
                  Helpline distributed every year a wide range of rashan among
                  the needy families and individuals. From every passing year,
                  our organization is moving ahead and trying to improve the
                  basic needs and conditions of the poor people where about in
                  Pakistan.
                </p>
                <p>
                  The major contribution in food packages is distributing to
                  poor families and disabled persons registered in this office.
                  The packages include Atta, Ghee, Rice, Sugar, Daal, and tea.
                  In other cities, a cash amount is sent according to their
                  demand. Helpline has been distributing rashan packages since
                  1992.
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
