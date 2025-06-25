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
        actualName={cause.ActualName}
        detail2={cause.detail2}
        detail3={cause.detail3}
        history={cause.history}
      />
    </Layout2>
  );
}
