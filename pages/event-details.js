import { useState, useEffect } from "react";
import Layout2 from "../Components/Layout/Layout2";
import EventDetsailBreadCrumb from "../Components/Elements/EventDetails/EventDetsailBreadCrumb";
import EventCauseDetail from "../Components/Elements/EventDetails/EventCauseDetail";
import { useRouter } from "next/router";
import { HelplineData } from "../pages/api/data";
export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [causes, setCauses] = useState(null);
  useEffect(() => {
    if (id) {
      const foundCause = HelplineData.causes.find(
        (item) => item.id === parseInt(id, 10)
      );
      setCauses(foundCause || null);
    }
  }, [id]);

  if (!causes) {
    return <p>Loading cause details...</p>;
  }
  const cause = HelplineData.causes.find((item) => item.id === parseInt(id));
  return (
    <Layout2>
      <EventDetsailBreadCrumb desc={cause.desc} />
      <EventCauseDetail
        title={cause.desc}
        image={cause.img}
        goal={cause.goal}
        raised={cause.raised}
        toGo={cause.toGo}
        category={cause.category}
        dates={cause.date}
      />
    </Layout2>
  );
}
