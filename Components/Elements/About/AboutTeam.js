import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/AboutTeam.module.css";

export default function AboutTeam() {
  const team = HelplineData.team;
  const executives = team.filter((member) =>
    ["Chief Executive Officer", "GM (Admin & HR)", "GM (Education)"].includes(
      member.designation
    )
  );
  const ADMIN_SUPPORT = team.filter((member) =>
    [
      "Manager Purchases",
      "Manager Admin & Support",
      "Manager Welfare & Health",
      "Manager Transport",
    ].includes(member.designation)
  );
  const hrManagement = team.filter((member) =>
    ["Senior Manager Accounts", "Manager Accounts"].includes(member.designation)
  );

  const mediaTeam = team.filter((member) =>
    ["Manager Media", "Manager Media", "Media Executive"].includes(
      member.designation
    )
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
    <div className={styles.teamContainer}>
      <div className={styles.mainHeader}>
        <h1>Our Team</h1>
      </div>
      {renderTeamSection(executives, "Team Executives")}
      {renderTeamSection(ADMIN_SUPPORT, "Admin & Support")}
      {renderTeamSection(hrManagement, "Finance")}
      {renderTeamSection(mediaTeam, "Media & Technology")}
    </div>
  );
}
