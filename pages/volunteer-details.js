import React, { useState, useEffect } from "react";
import Layout2 from "../Components/Layout/Layout2";
import VolunteerDetailsArea from "../Components/Elements/VolunteerDetails/VolunteerDetailsArea";
import VolunteerDetailsTeam from "../Components/Elements/VolunteerDetails/VolunteerDetailsTeam";
import { useRouter } from "next/router";
import { HelplineData } from "../pages/api/data";

export default function VolunteerDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [volunteer, setVolunteer] = useState(null);

  useEffect(() => {
    if (id) {
      const foundVolunteer = HelplineData.team.find(
        (member) => member.id === parseInt(id, 10)
      );
      setVolunteer(foundVolunteer || null);
    }
  }, [id]);

  if (!volunteer) {
    return <p>Loading volunteer details...</p>;
  }

  return (
    <Layout2>
      <VolunteerDetailsArea />
      <VolunteerDetailsTeam
        name={volunteer.name}
        designation={volunteer.designation}
        image={volunteer.image}
      />
    </Layout2>
  );
}
