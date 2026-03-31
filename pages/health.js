import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import { HelplineData } from "../pages/api/data";
import HealthHeader from "../Components/Elements/Health/HealthHeader";
import HealthCommunityLed from "../Components/Elements/Health/HealthCommunityLed";
import HealthWomenChildren from "../Components/Elements/Health/HealthWomenChildren";
import HealthImpact from "../Components/Elements/Health/HealthImpact";
import HealthSuccessStories from "../Components/Elements/Health/HealthSuccessStories";
import CauseRecentCause from "../Components/Elements/Cause/CauseRecentCause";

const data = {
  Medical: "Medical",
};
export default function health() {
  const cause = HelplineData.causes;
  return (
    <Layout2>
      <HealthHeader
        content={HelplineData.HelplineHealthData}
        image="/img/Campaigns/Medical.webp"
      />
      <HealthCommunityLed />
      <HealthWomenChildren />
      <HealthImpact />
      <HealthSuccessStories />
      <CauseRecentCause
        categories={data}
        causes={cause}
        sectionTitle="Our Healthcare Projects"
        sectionDescription={
          <>
            Helpline Welfare Trust &ndash; Healthcare Program<br /><br />
            Alhamdulillah, Helpline Welfare Trust has been working tirelessly to bring quality healthcare to
            the most underserved communities across Pakistan. Through the grace of Allah and the generosity
            of our donors, we have established community health centers, mobile medical camps, and maternal
            &amp; child health programs reaching hundreds of thousands of families in remote areas of Sindh,
            Punjab, Balochistan, and Khyber Pakhtunkhwa.<br /><br />
            Each medical camp and health center is more than a facility &mdash; it is a lifeline for
            families who have never had access to a doctor, a vaccination, or prenatal care. Our trained
            community health workers go door to door, ensuring that every pregnant woman receives antenatal
            care, every child is immunized, and every family is educated on hygiene, nutrition, and disease
            prevention.<br /><br />
            Our mission is rooted in the belief that healthcare is a fundamental right, not a privilege.
            Helpline Welfare Trust continues to expand its health programs &mdash; from primary healthcare
            services and early detection screenings to reproductive health education and skilled birth
            attendance &mdash; all provided free of cost to those who need it most.<br /><br />
            With every life saved and every community reached, we move closer to our vision &mdash; a
            Pakistan where no mother dies in childbirth, no child suffers from preventable disease, and
            every family has access to the care they deserve.
          </>
        }
      />
    </Layout2>
  );
}
