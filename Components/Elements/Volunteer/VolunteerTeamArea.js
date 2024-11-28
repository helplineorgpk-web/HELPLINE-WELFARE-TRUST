import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import { useRouter } from "next/router";

export default function VolunteerTeamArea() {
  const team = HelplineData.team;

  return (
    <div className="team_area pt-110 pb-90">
      <div className="container">
        <div className="row">
          {team.map((member) => (
            <div
              key={member.id}
              className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center"
            >
              <div className="single_team mb-30">
                <div className="team_thumb img_effect_white">
                  <a>
                    <img src={member.image} alt={member.name} />
                  </a>
                </div>
                <span className="designation">{member.designation}</span>
                <h5 className="member_name">
                  <a>{member.name}</a>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
