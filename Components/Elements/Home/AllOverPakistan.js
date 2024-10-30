import React, { useEffect, useState } from "react";

const statsData = [
  { id: 1, title: "Beneficiaries", target: 256202 },
  { id: 2, title: "Donors", target: 587 },
  { id: 3, title: "Supporters", target: 1256 },
  { id: 4, title: "Volunteers", target: 10480 },
  { id: 5, title: "Reformers", target: 98 },
  { id: 6, title: "Offices", target: 7 },
];

const StatItem = ({ title, target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 5);

    const updateCount = () => {
      start = Math.ceil(start + increment);
      if (start < target) {
        setCount(start);
        setTimeout(updateCount, 10);
      } else {
        setCount(target);
      }
    };

    updateCount();
  }, [target]);

  return (
    <div style={styles.col}>
      <div style={styles.statItem}>
        <h3 style={styles.count}>{count.toLocaleString()}</h3>
        <p style={styles.title}>{title}</p>
        <a href="#" style={styles.viewLink}>
          View
        </a>
      </div>
    </div>
  );
};

const AllOverPakistan = () => {
  return (
    <section style={styles.ctaArea}>
      <div style={styles.container}>
        <h2 style={styles.heading}>HELPLINE in All Over Pakistan</h2>
        <div style={styles.row}>
          {statsData.map((stat) => (
            <StatItem key={stat.id} title={stat.title} target={stat.target} />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  ctaArea: {
    background:
      "linear-gradient(135deg, rgba(48, 65, 88, 0.8), rgba(76, 161, 175, 0.8)), url(/img/featureEvent/fevent_bg.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "60px 0",
    borderRadius: "8px",
    textAlign: "center",
  },
  container: {
    maxWidth: "900px",
    margin: "auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    color: "#f8f9fa",
    marginBottom: "1.5rem",
    textTransform: "uppercase",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  col: {
    flex: "1 1 30%",
    marginBottom: "1.5rem",
    padding: "10px",
  },
  statItem: {
    background: "#fff",
    borderRadius: "8px",
    padding: "25px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "center",
  },
  count: {
    fontSize: "2.2rem",
    color: "#333",
    fontWeight: "600",
    marginBottom: "0.5rem",
  },
  title: {
    color: "#666",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  viewLink: {
    display: "inline-block",
    fontSize: "0.9rem",
    color: "#4ca1af",
    textDecoration: "none",
    border: "1px solid #4ca1af",
    padding: "6px 12px",
    borderRadius: "20px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};

styles.statItemHover = {
  ...styles.statItem,
  transform: "translateY(-8px)",
  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
};

styles.viewLinkHover = {
  ...styles.viewLink,
  backgroundColor: "#4ca1af",
  color: "#fff",
};

export default AllOverPakistan;
