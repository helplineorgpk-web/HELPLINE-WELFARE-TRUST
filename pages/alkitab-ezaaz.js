import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Layout2 from "../Components/Layout/Layout2";
import AlkitabEzaazDetail from "../Components/Elements/Home/AlkitabEzaazDetail";

export default function AlkitabEzaazPage() {
  return (
    <Layout2>
      <NextSeo
        title="الکتاب کا اعزاز | Helpline Welfare"
        description="الکتاب کے طلبہ کا قومی اعزاز — وہ لمحہ جب مفت تعلیم فخر بن جاتی ہے۔ ویڈیو اور تفصیل دیکھیں۔"
        canonical="https://helplinewelfare.org/alkitab-ezaaz"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AlkitabEzaazDetail />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
