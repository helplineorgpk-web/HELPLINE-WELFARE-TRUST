import React from "react";
import ContactBreadCrumb from "../Components/Elements/Contact/ContactBreadCrumb";
import ContactGetInTouch from "../Components/Elements/Contact/ContactGetInTouch";
import ContactGMap from "../Components/Elements/Contact/ContactGMap";
import Layout2 from "../Components/Layout/Layout2";

export default function appeals() {
  return (
    <Layout2>
      <ContactBreadCrumb />
      <ContactGetInTouch />
      <ContactGMap />
    </Layout2>
  );
}
