import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Layout2 from "../Components/Layout/Layout2";
import UnionCouncil23Detail from "../Components/Elements/Home/UnionCouncil23Detail";

export default function UnionCouncil23Page() {
  return (
    <Layout2>
      <NextSeo
        title="یونین کونسل 23 کے گاؤں | Helpline Welfare"
        description="مواخاتِ مدینہ کے نظام کی عملی تعمیر و تدبیر — یونین کونسل 23 کے گاؤں کے سرکاری و پرائیویٹ سکولوں اور سکول نہ جانے والے بچوں کی تفصیل۔"
        canonical="https://helplinewelfare.org/union-council-23"
      />
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <UnionCouncil23Detail />
    </Layout2>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 86400,
  };
}
