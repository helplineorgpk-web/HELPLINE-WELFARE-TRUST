import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/CentralExectiveCommittee.module.css";

export default function AboutTeam() {
  const team = HelplineData.team;

  const executives = team.filter((member) =>
    ["Chairman"].includes(member.designation)
  );

  const ADMIN_SUPPORT = team.filter((member) =>
    ["Managing Trustee", "President"].includes(member.designation)
  );

  const hrManagement = team.filter((member) =>
    ["Vice President", "General Secretary", "Finance Secretary"].includes(
      member.designation
    )
  );

  const Adviser = team.filter((member) =>
    [
      "Education Advisor",
      "Advisor",
      "Media Consultant",
      "Technology Consultant",
      "Marketing Consultant",
      "Director Quran Academy"
    ].includes(member.designation)
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
        <h1>Central Executive Committee</h1>
      </div>
      {renderTeamSection(executives, "Chairman")}
      {renderTeamSection(ADMIN_SUPPORT, "")}
      {renderTeamSection(hrManagement, "")}
      {renderTeamSection(Adviser, "Advisors / Consultants")}
    </div>
  );
}
