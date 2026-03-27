import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import AboutBreadCumb from "../Components/Elements/About/AboutBreadCumb";
import { HelplineData } from "../pages/api/data";
import Registeration from "../Components/Elements/Registeration/Registeration";
export default function registration() {
  return (
    <Layout2>
      <AboutBreadCumb
        title="Registration"
        description="Complete your registration to connect with Helpline programs and opportunities."
        backgroundImage="/img/Campaigns/Registration.jpg"
      />
      <Registeration content={HelplineData.HelplineregistrationData.pdf} />
    </Layout2>
  );
}
