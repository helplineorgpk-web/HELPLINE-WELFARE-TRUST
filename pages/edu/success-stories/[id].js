import React from "react";
import Head from "next/head";
import Layout2 from "../../../Components/Layout/Layout2";
import EducationSuccessStoryDetail from "../../../Components/Elements/Education/EducationSuccessStoryDetail";
import {
  getEducationSuccessStoryById,
  EDUCATION_SUCCESS_STORY_IDS,
} from "../../../data/educationSuccessStoriesData";

export default function EducationSuccessStoryPage({ story }) {
  return (
    <Layout2>
      <Head>
        <title>{story.seoTitle}</title>
        <meta name="description" content={story.seoDescription} />
      </Head>
      <EducationSuccessStoryDetail story={story} />
    </Layout2>
  );
}

export async function getStaticPaths() {
  return {
    paths: EDUCATION_SUCCESS_STORY_IDS.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const story = getEducationSuccessStoryById(params.id);
  if (!story) {
    return { notFound: true };
  }
  return {
    props: { story },
    revalidate: 86400,
  };
}
