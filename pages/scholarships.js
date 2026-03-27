import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import ScholarshipsHeader from "../Components/Elements/Scholarships/ScholarshipsHeader";
import ScholarshipsPurpose from "../Components/Elements/Scholarships/ScholarshipsPurpose";
import ScholarshipsHowItWorks from "../Components/Elements/Scholarships/ScholarshipsHowItWorks";
import ScholarshipsBecomeSponsor from "../Components/Elements/Scholarships/ScholarshipsBecomeSponsor";
import ScholarshipsFAQ from "../Components/Elements/Scholarships/ScholarshipsFAQ";

export default function ScholarshipsPage() {
  return (
    <Layout2>
      <ScholarshipsHeader />
      <ScholarshipsHowItWorks />
      <ScholarshipsPurpose />
      <ScholarshipsBecomeSponsor />
      <ScholarshipsFAQ />
    </Layout2>
  );
}
