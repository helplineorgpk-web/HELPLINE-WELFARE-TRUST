import React, { useMemo } from "react";
import CampaignHeroHeader from "../Components/Elements/Campaign/CampaignHeroHeader";
import Layout2 from "../Components/Layout/Layout2";
import Images from "../Components/Elements/media/Images";

export default function images() {
  const primaryCta = useMemo(
    () => ({ href: "/campaigns", label: "EXPLORE CAMPAIGNS" }),
    []
  );
  const secondaryCta = useMemo(
    () => ({ href: "/volunteer", label: "JOIN AS VOLUNTEER" }),
    []
  );

  return (
    <Layout2>
      <CampaignHeroHeader
        label="MEDIA CENTER"
        title="IMAGES GALLERY"
        subtitle="Explore moments from Helpline Welfare Trust projects, campaigns, and community activities across Pakistan."
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        videoTitle="Helpline Community Moments"
      />
      <Images />
    </Layout2>
  );
}
