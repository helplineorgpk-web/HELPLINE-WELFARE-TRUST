import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import ZakatBreadCrumb from "../Components/Elements/Zakat/ZakatBreadCrumb";
import ZakatContent from "../Components/Elements/Zakat/ZakatContent";
import Meta from "../Components/SEO/Meta";

export default function Zakat() {
  return (
    <>
      <Meta
        title="Zakat Information Hub | Helpline Welfare Organization"
        description="Learn about Zakat—calculation, eligibility, and how to give your Zakat through Helpline. Support education, healthcare, and welfare for the poor and deserving in Pakistan."
        keywords="zakat, zakat calculation, zakat pakistan, give zakat, zakat donation, helpline zakat, nisab, sadaqah"
      />
      <Layout2>
        <ZakatBreadCrumb />
        <ZakatContent />
      </Layout2>
    </>
  );
}
