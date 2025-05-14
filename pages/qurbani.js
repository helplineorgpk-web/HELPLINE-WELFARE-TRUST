import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Qurbani from "../Components/Elements/Qurbani/Qurbani";
import { qurbaniData } from "./api/qurbaniData";
import QurbaniHeader from "../Components/Elements/Qurbani/QurbaniHeader";

export default function QurbaniPage() {
  return (
    <Layout2>
      <QurbaniHeader />
      <Qurbani swiperData={qurbaniData} />
    </Layout2>
  );
}
