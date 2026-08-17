import React from "react";
import Head from "next/head";
import Layout2 from "../../../Components/Layout/Layout2";
import LivelihoodSuccessStoryDetail from "../../../Components/Elements/Livelihood/LivelihoodSuccessStoryDetail";
import {
  getLivelihoodSuccessStoryById,
  LIVELIHOOD_SUCCESS_STORY_IDS,
} from "../../../data/livelihoodSuccessStoriesData";

export default function LivelihoodSuccessStoryPage({ story }) {
  return (
    <Layout2>
      <Head>
        <title>{story.seoTitle}</title>
        <meta name="description" content={story.seoDescription} />
      </Head>
      <LivelihoodSuccessStoryDetail story={story} />
    </Layout2>
  );
}

export async function getStaticPaths() {
  return {
    paths: LIVELIHOOD_SUCCESS_STORY_IDS.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const story = getLivelihoodSuccessStoryById(params.id);
  if (!story) {
    return { notFound: true };
  }
  return {
    props: { story },
    revalidate: 86400,
  };
}
