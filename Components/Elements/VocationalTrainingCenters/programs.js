import React from "react";
import styles from "./Programs.module.css";

const programsData = [
  {
    title: "UPS Repair Mechanic",
    description:
      "There are tremendous opportunities for skilled UPS technicians across Pakistan.",
    cost: "Rs. 807,000/-",
    image: "/img/programs/ups-repair-service.webp",
  },
  {
    title: "Domestic Tailoring",
    description:
      "Women across the country can be empowered through advanced training in this profession.",
    cost: "Rs. 942,000/-",
    image: "/img/programs/tailering.jpg",
  },
  {
    title: "Electrical Wiring Technician",
    description:
      "Experts in this trade have ample opportunities not only in Pakistan but also in Gulf countries and Europe.",
    cost: "Rs. 257,000/-",
    image: "/img/programs/wiringelectrician.jpg",
  },
  {
    title: "Electrician",
    description:
      "A trained electrician can significantly improve his family's standard of living through handsome earnings.",
    cost: "Rs. 2.08 million",
    image: "/img/programs/electrician.jpg",
  },
  {
    title: "Mobile Phone Repairing",
    description:
      "A skilled mobile technician can earn a handsome income anywhere in Pakistan.",
    cost: "Rs. 750,400/-",
    image: "/img/programs/mobilerepairing.jpg",
  },
  {
    title: "Motor Winder",
    description:
      "A skilled motor winder can become an important and respected professional, even in rural areas.",
    cost: "Rs. 1.3 million",
    image: "/img/programs/winding.jpg",
  },
  {
    title: "Plumber",
    description:
      "A skilled plumber equipped with modern tools has a bright future in Pakistan as well as abroad.",
    cost: "Rs. 641,000/-",
    image: "/img/programs/Plumber.jpg",
  },
  {
    title: "Welder",
    description:
      "Skilled welders have tremendous opportunities in the Gulf and Europe.",
    cost: "Rs. 1.5 million",
    image: "/img/programs/welder.jpg",
  },
  {
    title: "Home Appliances Repair",
    description:
      "Skilled individuals in this field can unlock numerous opportunities anywhere in Pakistan.",
    cost: "Rs. 1.3 million",
    image: "/img/programs/HomeApplianceRepair.webp",
  },
  {
    title: "Computer Lab",
    description:
      "A person skilled in modern AI tools can earn a fortune, even without formal employment.",
    cost: "Rs. 970,000/-",
    image: "/img/programs/computerlab.jpg",
  },
];

export default function Programs() {
  return (
    <div className={styles.programsContainer}>
      <h2 className={styles.programsTitle}>Skill-Based Workshop Programs</h2>

      <div className={styles.programsGrid}>
        {programsData.map((program, index) => (
          <div key={index} className={styles.programCard}>
            <img
              src={program.image}
              alt={program.title}
              className={styles.programImage}
            />

            <div className={styles.programContent}>
              <h3 className={styles.programTitle}>{program.title}</h3>
              <p className={styles.programDescription}>{program.description}</p>
              <div className={styles.programCost}>
                <span className={styles.costLabel}>Equipment Cost: </span>
                <span className={styles.costValue}>{program.cost}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
