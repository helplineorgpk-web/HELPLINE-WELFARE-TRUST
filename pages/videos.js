import React from "react";
import Head from "next/head";
import Layout2 from "../Components/Layout/Layout2";
import Videos from "../Components/Elements/media/Videos";

export default function VideosPage() {
  return (
    <>
      <Head>
        <title>Videos - Helpline</title>
        <meta name="description" content="Watch videos about Helpline's projects and initiatives" />
      </Head>
      <Layout2>
        <div style={{ minHeight: "100vh", background: "#fff" }}>
          <Videos />
        </div>
      </Layout2>
    </>
  );
}
