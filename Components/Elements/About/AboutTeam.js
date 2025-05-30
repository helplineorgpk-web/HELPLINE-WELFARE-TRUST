import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/AboutTeam.module.css";

export default function AboutTeam() {
  const team = HelplineData.team;

  const executives = team.filter((member) =>
    [
      "Managing Trustee",
      "GM (Admin & HR)",
      "GM (Education)",
      "Administrator KMC",
    ].includes(member.designation)
  );

  const adminSupport = team.filter((member) =>
    [
      "Manager Purchases",
      "Manager Admin & Support",
      "Manager Welfare & Health",
      "Manager Transport",
    ].includes(member.designation)
  );

  const regionalHeads = team.filter((member) =>
    ["Chairperson", "Reagional Heads"].includes(member.designation)
  );

  const financeTeam = team.filter((member) =>
    ["Senior Manager Accounts", "Manager Accounts"].includes(member.designation)
  );

  const mediaTeam = team.filter((member) =>
    ["Manager Media", "Media Executive"].includes(member.designation)
  );

  const renderTeamSection = (members, title) =>
    members.length > 0 && (
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
                <p>{member.designation}</p>
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
      {renderTeamSection(regionalHeads, "Reagional Heads")}
      <div className={styles.mainHeader}>
        <h1>Head Office Team</h1>
      </div>
      {renderTeamSection(executives, "Team Executives")}
      {renderTeamSection(adminSupport, "Admin & Support")}
      {renderTeamSection(financeTeam, "Finance")}
      {renderTeamSection(mediaTeam, "Media & Technology")}
    </div>
  );
}
