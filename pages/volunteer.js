import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import VolunteerAbout from "../Components/Elements/Volunteer/VolunteerAbout";
import VolunteerBreadCrumb from "../Components/Elements/Volunteer/VolunteerBreadCrumb";
import NewsFeed from "../Components/Elements/Home/NewsFeed";
import JoinAsVolunteer from "../pages/joinAsVolunteer";

export default function volunteer() {
  return (
    <Layout2>
      <VolunteerBreadCrumb />
      <VolunteerAbout />
      <JoinAsVolunteer />
      {/* <VolunteerTeamArea /> */}
      {/* <NewsFeed /> */}
    </Layout2>
  );
}
