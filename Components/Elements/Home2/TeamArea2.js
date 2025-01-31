import React from "react";
import Link from "next/link";

export default function TeamArea2() {
  const teamMembers = [
    {
      image: "/img/team/member1.jpg",
      name: "Miranda H. Halim",
      designation: "Founder",
    },
    {
      image: "/img/team/member2.jpg",
      name: "N. Uddin",
      designation: "Chairman",
    },
    {
      image: "/img/team/member3.jpg",
      name: "Mark Billah",
      designation: "Designer",
    },
    {
      image: "/img/team/member4.jpg",
      name: "Andreu Salim",
      designation: "Developer",
    },
  ];

  return (
    // Team area start
    <div className="team_area pt-110 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xxl-12 text-center">
            <div className="section_title mb-50">
              <span className="sub_title sub_title_2">Volenteers</span>
              <h3 className="title title_2">Our Volenteers</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-xxl-3 col-xl-4 col-lg-4 col-sm-6 text-center">
              <div className="single_team mb-30">
                <Link href="/volunteer-details" className="img_effect_white">
                  <img src={member.image} alt={member.name} />
                </Link>
                <span className="designation">{member.designation}</span>
                <h5 className="member_name">
                  <Link href="/volunteer-details" className="team_title_link">
                    {member.name}
                  </Link>
                </h5>
                <div className="member_social">
                  <Link href="#" className="facebook" >

                      <i className="fab fa-facebook-f"></i>

                  </Link>
                  <Link href="#" className="twitter">

                      <i className="fab fa-twitter"></i>

                  </Link>
                  <Link href="#" className="behance">

                      <i className="fab fa-behance"></i>

                  </Link>
                  <Link href="#" className="youtube">

                      <i className="fab fa-youtube"></i>

                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    //Team area end
  );
}
