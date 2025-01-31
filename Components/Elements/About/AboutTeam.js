import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import { useRouter } from "next/router";

export default function AboutTeam() {
  const team = HelplineData.team;
  const router = useRouter();

  const handleNavigation = (member) => {
    router.push({
      pathname: "/volunteer-details",
      query: { id: member.id },
    });
  };

  return (
    <div className="team_area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section_title text-center mb-60">
                <span className="sub_title sub_title_2">Team Area </span>
                <h3 className="title title_2">About Our Team</h3>
              </div>
            </div>
          </div>
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
                  <Link
                    href={{
                      pathname: "/volunteer-details",
                      query: { id: member.id },
                    }}
                  >
                    {member.name}
                  </Link>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
