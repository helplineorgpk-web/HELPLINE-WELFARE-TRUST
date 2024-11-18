import React from "react";
import { useRouter } from "next/router";
import { HelplineData } from "../pages/api/data";
import CauseBreadCrumb from "../Components/Elements/Cause-Details/CauseBreadCrumb";
import CauseDetailsArea from "../Components/Elements/Cause-Details/CauseDetailsArea";
import Layout2 from "../Components/Layout/Layout2";

export default function CauseDetails() {
  const router = useRouter();
  const { id } = router.query;

  const allCauses = [...HelplineData.causes, ...HelplineData.educationData];
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
      <CauseBreadCrumb desc={cause.desc} />
      <CauseDetailsArea
        title={cause.desc}
        image={cause.img}
        goal={cause.goal}
        raised={cause.raised}
        toGo={cause.toGo}
        category={cause.category}
      />
    </Layout2>
  );
}
