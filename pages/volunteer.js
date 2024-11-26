import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import VolunteerAbout from "../Components/Elements/Volunteer/VolunteerAbout";
import VolunteerBreadCrumb from "../Components/Elements/Volunteer/VolunteerBreadCrumb";
import VolunteerTeamArea from "../Components/Elements/Volunteer/VolunteerTeamArea";
import NewsFeed from "../Components/Elements/Home/NewsFeed";

export default function volunteer() {
  return (
    <Layout2>
      <VolunteerBreadCrumb />
      <VolunteerAbout />
      <VolunteerTeamArea />
      <NewsFeed />
    </Layout2>
  );
}
