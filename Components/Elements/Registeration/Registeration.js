import React from "react";
import { HelplineData } from "../../../pages/api/data";
import styles from "../../../public/css/Registration.module.css";
import { motion } from "framer-motion";

const Registration = () => {
  const pdfDocuments = HelplineData.pdfDocuments;

  const handleOpenPDF = (pdfUrl) => {
    window.open(pdfUrl, "noopener,noreferrer");
  };

  return (
    <section className={styles.registrationSection}>
      <h3 className={styles.heading}>Certificates</h3>
      <div className={styles.certificatesGrid}>
        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.heading}>Tax Exemption Certificate</h1>
          <div className={styles.buttonContainer}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                handleOpenPDF("/img/pdfs/TaxPayer-Registration-Certificate.pdf")
              }
            >
              <a className={`${styles.button} ${styles.primary}`}>2025-26</a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className={styles.heading}>FBR Registration</h1>
          <div className={styles.buttonContainer}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => handleOpenPDF("/img/pdfs/fbr.pdf")}
            >
              <a className={`${styles.button} ${styles.secondary}`}>
                FBR Certificate
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className={styles.heading}>PCP Certification</h1>
          <div className={styles.buttonContainer}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => handleOpenPDF("/img/pdfs/PCP-certificate1.pdf")}
            >
              <a className={`${styles.button} ${styles.tertiary}`}>
                PCP Certificate
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.container}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className={styles.heading}>Punjab Charity Commission</h1>
          <div className={styles.buttonContainer}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() =>
                handleOpenPDF("/img/pdfs/PunjabCherityCommission.pdf")
              }
            >
              <a className={`${styles.button} ${styles.quaternary}`}>2025-26</a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={`${styles.container} ${styles.auditContainer}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className={styles.heading}>Annual Audit Reports</h1>
        <div className={styles.auditButtonContainer}>
          {pdfDocuments.map((doc, index) =>
            doc.title !== "2020-24" ? (
              <motion.div
                key={doc.id}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => handleOpenPDF(doc.pdf)}
              >
                <a className={`${styles.button} ${styles.audit}`}>
                  {doc.title}
                </a>
              </motion.div>
            ) : null
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Registration;
