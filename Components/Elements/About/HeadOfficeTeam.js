import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/CentralExectiveCommittee.module.css";

export default function HeadOfficeTeam() {
  const team = HelplineData.team;

  const gmMarketing = ["GM Administration", "GM Marketing"]
    .map((designation) => team.find((member) => member.designation === designation))
    .filter(Boolean);

  const adminSupport = team.filter((member) =>
    [
      "Senior Manager Purchases",
      "Manager Welfare & Health",
      "Senior Manager Accounts",
      "Junior Manager Accounts",
    ].includes(member.designation)
  );

  const mediaTeam = team.filter((member) =>
    ["Software Developer", "Media Executive"].includes(member.designation)
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
        background: "rgb(246 243 254)",
        padding: "4rem 2rem",
        textAlign: "center",
        borderTop: "4px solid red",
        borderBottom: "4px solid red",
      }}
    >
      <div className={styles.mainHeader}>
        <h1>Head Office Team</h1>
      </div>
      {renderTeamSection(gmMarketing, "GM Marketing")}
      {renderTeamSection(adminSupport, "Finance Admin & Support", "Finance")}
      {renderTeamSection(mediaTeam, "Media & Technology")}
    </div>
  );
}
