import React from "react";
import { NextSeo } from "next-seo";
import Layout2 from "../Components/Layout/Layout2";
import FieldMapDetail from "../Components/Elements/Home/FieldMapDetail";

export default function MawakhatTownFieldMapPage() {
  return (
    <Layout2>
      <NextSeo
        title="Mawakhat Town, Rana Town Field Map | Helpline Welfare"
        description="Field map of Mawakhat Town and Rana Town — the villages, the Al Kitab school, the route along Hardosohal Road, and nearby landmarks."
        canonical="https://helplinewelfare.org/mawakhat-town-field-map"
      />
      <FieldMapDetail />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
