import React from "react";
import Link from "next/link";
import { HelplineData } from "../../../pages/api/data";
import { useRouter } from "next/router";

export default function VolunteerTeamArea() {
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
          {team.map((member) => (
            <div
              key={member.id}
              className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center"
            >
              <div className="single_team mb-30">
                <div
                  className="team_thumb img_effect_white"
                  onClick={() => handleNavigation(member)}
                >
                  <Link
                    href={{
                      pathname: "/volunteer-details",
                      query: { id: member.id },
                    }}
                  >
                    <a>
                      <img src={member.image} alt={member.name} />
                    </a>
                  </Link>
                </div>
                <span className="designation">{member.designation}</span>
                <h5 className="member_name">
                  <Link
                    href={{
                      pathname: "/volunteer-details",
                      query: { id: member.id },
                    }}
                  >
                    <a>{member.name}</a>
                  </Link>
                </h5>
                <div className="member_social">
                  {member.socialLinks.map((link, index) => (
                    <Link href={link.url} key={index}>
                      <a className={link.platform}>
                        <i className={link.icon}></i>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
