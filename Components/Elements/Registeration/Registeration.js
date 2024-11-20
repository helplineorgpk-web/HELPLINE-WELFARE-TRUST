import React from "react";
import { HelplineData } from "../../../pages/api/data";
const Registration = (content) => {
  console.log("first", content);
  const pdfDocuments = HelplineData.pdfDocuments;

  const handleOpenPDF = (pdfUrl) => {
    window.open(pdfUrl, "noopener,noreferrer");
  };
  return (
    <section>
      <div style={styles.container}>
        <h1 style={styles.heading}>Tax Exemption Certificate</h1>
        <div style={styles.buttonContainer}>
          <div
            onClick={() =>
              handleOpenPDF("/img/pdfs/TaxPayer-Registration-Certificate.pdf")
            }
          >
            <a className="g_btn hbtn_1 to_right1 rad-30">
              2020-24<span></span>
            </a>
          </div>
        </div>
      </div>
      <div style={styles.container}>
        <h1 style={styles.heading}>Annual Reports</h1>
        <div style={styles.buttonContainer}>
          {pdfDocuments.map((doc) =>
            doc.title !== "2020-24" ? (
              <div key={doc.id} onClick={() => handleOpenPDF(doc.pdf)}>
                <a className="g_btn hbtn_1 to_right1 rad-30" target="_blank">
                  {doc.title}
                  <span></span>
                </a>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Registration;

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    fontSize: "28px",
    color: "#333",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
};
