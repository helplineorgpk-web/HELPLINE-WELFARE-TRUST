import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Health from "../Components/Layout/Health";
import Health2 from "../Components/Layout/Health2";
import Health3 from "../Components/Layout/Health3";

export default function health() {
  return (
    <Layout2>
      <Health />
      <Health2 />
      <Health3 />
    </Layout2>
  );
}
