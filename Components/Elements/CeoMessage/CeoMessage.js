import React from "react";
import styles from "../../../public/css/CeoMessage.module.css";
import Link from "next/link";

const ChairmanMessage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chairmansection}>
        <div className={styles.chairmanname}>
          <h4
            className={styles.chairmanheading}
            style={{ textDecoration: "underline" }}
          >
            CHAIRMAN MESSAGE
          </h4>
          <h5 className={styles.chairmanposition}>
            Muhammad Aslam Khan Kakkarh
          </h5>
        </div>
        <div className={styles.chairmanmessage}>
          <div className={styles.chairmanimage}>
            {/* <img src="img/team/ceo.png" alt="Chairman" />s */}
          </div>
          <div className={styles.messagecontent}>
            <p>
              I believe that Allah Almighty has assigned to every person
              generally and a Muslim particularly the duty of serving other
              fellow human being. We, at Helpline®, aspire to perform that very
              duty. As a part of team since 2003, it gives me immense pleasure
              to see Helpline® growing and approaching people all over Pakistan.
              I am in a state of continuous learning from day one being part of
              Helpline and have learnt important lessons such as;
              <br />
            </p>
            <p>
              <ul>
                <li>What is the purpose of mankind?</li>
                <li>What is the meaning of Fikr-e-Falah-e-Insaniyat?</li>
                <li>
                  What is the role of a believer in Allah Almighty being a
                  member of a Society?
                </li>
                <li>And how can we serve each other?</li>
              </ul>
            </p>

            <p>
              At Helpline®, we care for all people from all communities and
              religions; we care for deserving students, orphans, widows,
              patients, destitute and it’s our passion to work for their
              betterment. We believe in a society where we have to help each
              other, to have a dignified & respectable life for each and every
              person. I welcome your idea, guidance, suggestions, and your
              efforts contributing to make Helpline® a much better human welfare
              organization. Come & join us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;
