import React from "react";
import Layout2 from "../../Components/Layout/Layout2";
import RashanHeader from "../../Components/Elements/Rashan/RashanHeader";
import Link from "next/link";
import Image from "next/image";
import Meta from "../../Components/SEO/Meta";

const monthlyProgramsData = {
  monthlyRashan: {
    title: "Monthly Rashan",
    description:
      "As per latest survey, a significant portion of Pakistan's population lives below the poverty line. Helpline runs a comprehensive Monthly Rashan Program to support deserving families with essential food supplies. With the help of our donors, we distribute rashan packages across all provinces. Each package includes Atta, Ghee, Rice, Sugar, Daal, and tea to help families meet their basic nutritional needs.",
    image: "/img/causes/cause24.jpg",
    link: "/rashan",
    cta: "Learn More & Donate",
  },
  monthlyMedical: {
    title: "Monthly Medical Projects",
    description:
      "Helpline Health Projects bring free medical care to underserved communities through regular medical camps, mobile health units, and partnerships with local facilities. Our monthly medical initiatives include general check-ups, essential medicines, eye care and cataract surgeries, and health awareness sessions—helping thousands of families access healthcare they would otherwise go without.",
    image: "/img/causes/cause13.jpg",
    link: "/health",
    cta: "View Medical Projects",
  },
  supportStudent: {
    title: "Support a Student",
    description:
      "Join Helpline to bring out-of-school children back to school. Our Support a Student campaign has succeeded in bringing over 2000 children into education whose families could not afford school. Your sponsorship covers tuition, books, uniforms, and supplies. Together we can build a brighter future for deserving students.",
    image: "/img/causes/School-1-scaled.jpg",
    link: "/student-support",
    cta: "Sponsor a Student",
  },
};

function MonthlyProgramCard({ data }) {
  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12 mb-4">
      <div
        className="single_cause white-bg"
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link href={data.link} className="img_effect_white d-block">
          <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
            <Image
              src={data.image}
              alt={data.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Link>
        <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#263b5d", marginBottom: "12px" }}>
            {data.title}
          </h3>
          <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
            {data.description}
          </p>
          <Link
            href={data.link}
            className="g_btn hbtn_1 to_right1 rad-30 nav-donate-btn"
            style={{ alignSelf: "flex-start" }}
          >
            {data.cta}
            <span></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function MonthlyProgramsPage() {
  return (
    <>
      <Meta
        title="Monthly Programs - Rashan, Medical & Student Support | Helpline Welfare"
        description="Support Helpline's monthly programs: Monthly Rashan for food aid, Monthly Medical Projects for healthcare, and Support a Student for education. Donate today."
        keywords="monthly rashan, monthly medical, support a student, helpline welfare, charity pakistan"
      />
      <Layout2>
        <RashanHeader
          background="/img/causes/cause24.jpg"
          Detail="Projects"
          datainfo="Monthly Programs"
        />
        <section className="pt-90 pb-90">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12 text-center">
                <span className="sub_title">
                  <i className="fal fa-calendar-alt"></i> Ongoing Support
                </span>
                <h2 className="section_title mt-2">Our Monthly Programs</h2>
                <p className="mt-3" style={{ maxWidth: "700px", margin: "1rem auto 0", color: "#555" }}>
                  Helpline runs regular monthly initiatives in food aid, healthcare, and education. Your support helps us reach more families every month.
                </p>
              </div>
            </div>
            <div className="row">
              <MonthlyProgramCard data={monthlyProgramsData.monthlyRashan} />
              <MonthlyProgramCard data={monthlyProgramsData.monthlyMedical} />
              <MonthlyProgramCard data={monthlyProgramsData.supportStudent} />
            </div>
          </div>
        </section>
      </Layout2>
    </>
  );
}
