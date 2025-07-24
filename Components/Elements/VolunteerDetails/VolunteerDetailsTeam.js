import React from "react";
import Link from "next/link";

export default function VolunteerDetailsTeam({ member }) {
  if (!member) return null;

  const { name, designation, image, socialLinks = [] } = member;

  const progressData = [
    { title: "Work Progress", value: 90, theme: "theme-1" },
    { title: "Design Remain", value: 62, theme: "theme-2" },
    { title: "UX Process", value: 77, theme: "theme-6" },
    { title: "Substince Donation", value: 88, theme: "theme-1" },
    { title: "Donation Progress", value: 72, theme: "theme-2" },
    { title: "Hospital Bill", value: 92, theme: "theme-6" },
  ];
  return (
    <div className="team_single_area pt-120 pb-90">
      <div className="container">
        <div className="row align-items-center mb-80">
          <div className="col-xxl-5 col-xl-5 col-lg-5">
            <div className="team_single_img">
              <Link href="/volunteer-details" className="img_effect_white">
                <img src={image} alt="img" />
              </Link>
            </div>
          </div>
          <div className="col-xxl-7 col-xl-7 col-lg-7">
            <div className="team_single_info_wrapper pl-50">
              <div className="section_title">
                <span className="sub_title sub_title_2">{designation}</span>
                <h3 className="title title_2">
                  <Link href="/volunteer-details" className="team_title_link">
                    {name}
                  </Link>
                </h3>
              </div>
              <p className="mb-40">
                {member.description ||
                  `${name} serves as ${designation} at Helpline NGO, contributing to our mission of serving humanity and making a positive impact in our community.`}
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <div className="team_person_info">
                    {member.phone && (
                      <Link href={`tel:${member.phone}`}>
                        <strong>Phone:</strong> {member.phone}
                      </Link>
                    )}
                    {member.email && (
                      <Link href={`mailto:${member.email}`}>
                        <strong>Email:</strong> {member.email}
                      </Link>
                    )}
                    {member.workingArea && (
                      <Link href="#">
                        <strong>Working Area:</strong> {member.workingArea}
                      </Link>
                    )}
                    {member.nationality && (
                      <Link href="#">
                        <strong>Nationality:</strong> {member.nationality}
                      </Link>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="team_person_info">
                    {member.website && (
                      <Link href={member.website}>
                        <strong>Website:</strong> {member.website}
                      </Link>
                    )}
                    {member.linkedin && (
                      <Link href={member.linkedin}>
                        <strong>LinkedIn:</strong> {member.linkedin}
                      </Link>
                    )}
                    {member.address && (
                      <Link href="#">
                        <strong>Address:</strong> {member.address}
                      </Link>
                    )}
                    <div className="team_info_social">
                      {socialLinks.map((link, index) => (
                        <Link
                          key={index}
                          href={link.url}
                          className={link.platform}
                        >
                          <i className={link.icon}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <h3>Message</h3>
            {member.detailedDescription && (
              <div className="team_person_description mb-50">
                <p>{member.detailedDescription}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
