import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Layout2 from "../Components/Layout/Layout2";
import IqbaliyatDetail from "../Components/Elements/Home/IqbaliyatDetail";

export default function IqbaliyatPage() {
  return (
    <Layout2>
      <NextSeo
        title="اقبالیات | Helpline Welfare"
        description="علامہ محمد اقبال کی شخصیت، فلسفۂ خودی، شاعری، تعلیمی و معاشرتی نظریات اور قومی خدمات پر جامع تحقیقی مواد۔"
        canonical="https://helplinewelfare.org/iqbaliyat"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <IqbaliyatDetail />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
