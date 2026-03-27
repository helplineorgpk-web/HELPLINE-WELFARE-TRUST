import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import SocialCapitalHeader from "../Components/Elements/SocialCapital/SocialCapitalHeader";
import SocialCapitalVDO from "../Components/Elements/SocialCapital/SocialCapitalVDO";
import SocialCapitalDriveChange from "../Components/Elements/SocialCapital/SocialCapitalDriveChange";
import SocialCapitalStats from "../Components/Elements/SocialCapital/SocialCapitalStats";
import SocialCapitalStories from "../Components/Elements/SocialCapital/SocialCapitalStories";
import ITLabs from "../Components/Elements/ITLabs/ITLabs";
import VocationalTrainingIntroPrograms from "../Components/Elements/VocationalTrainingCenters/VocationalTrainingIntroPrograms";

const WASH_DONATION_CAUSES = [
  {
    id: "Clean Water Access",
    label: "Clean Water Access",
    amounts: [
      { value: "5000", label: "Provide clean water support 5,000 PKR" },
      { value: "10000", label: "Install community water solution 10,000 PKR" },
    ],
  },
  {
    id: "Health & Hygiene",
    label: "Health & Hygiene",
    amounts: [
      { value: "3000", label: "Support hygiene kits 3,000 PKR" },
      { value: "8000", label: "Support healthcare and hygiene drive 8,000 PKR" },
    ],
  },
];

export default function SustainableEnvironmentWash() {
  return (
    <Layout2>
      <div className="sustainable-environment-page">
        <SocialCapitalHeader
          layout="donation"
          image="/img/Campaigns/Environment.jpg"
          donationTitle="Support Sustainable Environment"
          donationSubtitle="Help families with water, hygiene, and health support"
          donationCauses={WASH_DONATION_CAUSES}
        />
        <SocialCapitalVDO />
        <SocialCapitalDriveChange />
        <SocialCapitalStats />
        <SocialCapitalStories />
        <VocationalTrainingIntroPrograms />
        <ITLabs />
      </div>

      <style jsx global>{`
        .sustainable-environment-page button,
        .sustainable-environment-page .btn,
        .sustainable-environment-page [class*="btn"],
        .sustainable-environment-page [class*="button"],
        .sustainable-environment-page [class*="learnMore"],
        .sustainable-environment-page [class*="enroll"] {
          background-color: #f15b43 !important;
          border-color: #f15b43 !important;
          color: #fff !important;
        }

        .sustainable-environment-page button:hover,
        .sustainable-environment-page .btn:hover,
        .sustainable-environment-page [class*="btn"]:hover,
        .sustainable-environment-page [class*="button"]:hover,
        .sustainable-environment-page [class*="learnMore"]:hover,
        .sustainable-environment-page [class*="enroll"]:hover {
          background-color: #f15b43 !important;
          border-color: #f15b43 !important;
          color: #fff !important;
        }
      `}</style>

    </Layout2>
  );
}
