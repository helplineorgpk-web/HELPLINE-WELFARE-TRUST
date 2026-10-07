import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Layout2 from "../Components/Layout/Layout2";
import KamyabPakistanDetail from "../Components/Elements/Home/KamyabPakistanDetail";

export default function KamyabPakistanPage() {
  return (
    <Layout2>
      <NextSeo
        title="کامیاب پاکستان پروگرام | قومی و فلاحی پروگرامز | Helpline Welfare"
        description="کامیاب پاکستان پروگرام — مواخاتِ مدینہ کے نظریہ فلاحی نظام پر مبنی اٹھارہ قومی و فلاحی پروگرامز: تعلیم، صحت، روزگار، صاف پانی، رہائش اور کردار سازی۔"
        canonical="https://helplinewelfare.org/kamyab-pakistan"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <KamyabPakistanDetail />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
