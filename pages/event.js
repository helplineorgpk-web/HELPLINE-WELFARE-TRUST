import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import EventsHeader from "../Components/Elements/Event/EventsHeader";
import EventsUpcoming from "../Components/Elements/Event/EventsUpcoming";
import EventsPast from "../Components/Elements/Event/EventsPast";

export default function Event() {
  return (
    <Layout2>
      <EventsHeader />
      <EventsUpcoming />
      <EventsPast />
    </Layout2>
  );
}
