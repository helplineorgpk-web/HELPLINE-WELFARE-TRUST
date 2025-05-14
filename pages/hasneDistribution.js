import React from "react";
import { HelplineData } from "../pages/api/data";
import HasneDistribution from "../Components/Elements/Hasne/HasneDistribution";
export default function HasneDistribute() {
  const data = HelplineData.HelplineHasneData;
  return <HasneDistribution data={data} />;
}
