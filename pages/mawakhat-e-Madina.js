import React from "react";
import Layout1 from "../Components/Layout/Layout1";
import MawakhatHeader from "../Components/Elements/mawakhat-e-madina/MawakhatHeader.js";
import VideoSection from "../Components/Elements/mawakhat-e-madina/videosection.js";
import CardsSection from "../Components/Elements/mawakhat-e-madina/CardsSection.js";

export default function mawakhateMadina() {
  return (
    <Layout1>
      <div style={{ marginTop: "240px" }}>
        <MawakhatHeader />
        <VideoSection />
        <CardsSection />
        
      </div>
    </Layout1>
  );
}
