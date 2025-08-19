import React from "react";
import { useRouter } from "next/router";
import { HelplineData } from "../pages/api/data";
import CauseBreadCrumb from "../Components/Elements/Cause-Details/CauseBreadCrumb";
import CauseDetailsArea from "../Components/Elements/Cause-Details/CauseDetailsArea";
import Layout2 from "../Components/Layout/Layout2";

export default function CauseDetails() {
  const router = useRouter();
  const { id } = router.query;

  const allCauses = [...HelplineData.causes];
  const cause = allCauses.find((item) => item.id === parseInt(id));

  if (!cause) {
    return (
      <Layout2>
        <p>Loading...</p>
      </Layout2>
    );
  }

  return (
    <Layout2>
      <CauseBreadCrumb actualName={cause.ActualName} title={cause.desc} />
      <CauseDetailsArea
        title={cause.desc}
        image={cause.img}
        category={cause.category}
        detail={cause.description}
        img1={cause.img1}
        img2={cause.img2}
        img3={cause.img3}
        img4={cause.img4}
        img5={cause.img5}
        img6={cause.img6}
        img7={cause.img7}
        img8={cause.img8}
        actualName={cause.ActualName}
        detail2={cause.detail2}
        detail3={cause.detail3}
        historyTitle={cause.historyTitle}
        upgradeTitle={cause.UpgradeTitle}
        futureTitle={cause.FutureTitle}
        detail4={cause.detail4}
        link={cause.link}
        link1={cause.link1}
        link2={cause.link2}
        link3={cause.link3}

      />
    </Layout2>
  );
}
