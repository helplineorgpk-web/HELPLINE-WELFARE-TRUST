import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/CentralExectiveCommittee.module.css";

export default function EducationWing() {
  const team = HelplineData.team;
  const regionalHeads = team.filter((member) =>
    [
      "Regional Head (Sindh)",
      "Regional Head (North)",
      "Regional Head (South)",
    ].includes(member.designation)
  );

  const renderTeamSection = (members, title) => (
    <div className={styles.teamSection}>
      <div className={styles.teamGrid}>
        {members.map((member) => (
          <div key={member.id} className={styles.teamCard}>
            <div className={styles.imageContainer}>
              <img src={member.image} alt={member.name} />
            </div>
            <div className={styles.cardContent}>
              <h3>{member.name}</h3>
              <p style={{ color: "#071BB3", fontSize: "1.2rem" }}>
                {member.designation}
              </p>

              <Link
                href={{
                  pathname: "/volunteer-details",
                  query: { id: member.id },
                }}
              >
                <button className={styles.viewProfileButton}>
                  <span>View Profile</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        background: "rgb(254 252 243)",
        padding: "4rem 2rem",
        textAlign: "center",
        borderTop: "4px solid red",
        borderBottom: "4px solid red",
      }}
    >
      <div className={styles.mainHeader}>
        <h1>Reagional Heads</h1>
      </div>
      {renderTeamSection(regionalHeads, "Reagional Heads")}
    </div>
  );
}
