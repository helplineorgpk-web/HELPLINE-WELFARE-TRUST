import React, { useMemo } from "react";
import Head from "next/head";
import CampaignHeroHeader from "../Components/Elements/Campaign/CampaignHeroHeader";
import Layout2 from "../Components/Layout/Layout2";
import Videos from "../Components/Elements/media/Videos";

export default function VideosPage() {
  const primaryCta = useMemo(
    () => ({ href: "/campaigns", label: "EXPLORE CAMPAIGNS" }),
    []
  );
  const secondaryCta = useMemo(
    () => ({ href: "/volunteer", label: "BECOME A VOLUNTEER" }),
    []
  );

  return (
    <>
      <Head>
        <title>Videos - Helpline</title>
        <meta name="description" content="Watch videos about Helpline's projects and initiatives" />
      </Head>
      <Layout2>
        <CampaignHeroHeader
          label="MEDIA CENTER"
          title="VIDEOS"
          subtitle="Watch project highlights, field activities, and impact stories from Helpline Welfare Trust."
          primaryCta={primaryCta}
          secondaryCta={secondaryCta}
          videoTitle="Helpline Project Highlights"
        />
        <div style={{ minHeight: "100vh", background: "#fff" }}>
          <Videos />
        </div>
      </Layout2>
    </>
  );
}
