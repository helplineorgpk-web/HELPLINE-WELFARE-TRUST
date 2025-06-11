
import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/CentralExectiveCommittee.module.css";

export default function FriendsReformers() {
  const team = HelplineData.team;

  const FriendsReformers = team.filter((member) =>
    ["Friend"].includes(member.designation)
  );

  const renderTeamSection = (members, title) => (
    <div className={styles.teamSection}>
      <div className={styles.sectionHeader}>
        <h2>{title}</h2>
      </div>
      <div className={styles.teamGrid}>
        {members.map((member) => (
          <div key={member.id} className={styles.teamCard}>
            <div className={styles.imageContainer}>
              <img src={member.image} alt={member.name} />
              <div className={styles.cardOverlay}></div>
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
    <div style={{
      background: "#E5F0FD",
      padding: "4rem 2rem",
      textAlign: "center",
    }}>
      <div className={styles.mainHeader}>
        <h1>Friends/Reformers</h1>
      </div>
      {renderTeamSection(FriendsReformers, "Friends")}
    </div>
  );
}
