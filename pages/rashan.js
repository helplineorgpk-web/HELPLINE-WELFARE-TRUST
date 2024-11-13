import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import Header from "../Components/Elements/Header/Header";
import Rashan from "../Components/Elements/Rashan/Rashan";

export default function Images() {
  const img = "/img/causes/cause24.jpg";

  return (
    <Layout2>
      <Header background={img} Detail={"Rashan"} datainfo={"Rashan Program"} />
      <Rashan />
    </Layout2>
  );
}
