import React from "react";
import Head from "next/head";
import Layout2 from "../../Components/Layout/Layout2";
import GulNazStoryDetail from "../../Components/Elements/SuccessStories/GulNazStoryDetail";
import { GUL_NAZ_STORY } from "../../Components/Elements/SuccessStories/featuredStoryData";

export default function GulNazStoryPage() {
  return (
    <Layout2>
      <Head>
        <title>{GUL_NAZ_STORY.seoTitle}</title>
        <meta name="description" content={GUL_NAZ_STORY.seoDescription} />
      </Head>
      <GulNazStoryDetail />
    </Layout2>
  );
}
