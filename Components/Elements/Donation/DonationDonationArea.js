import React, { useState } from "react";
import styles from "../../../public/css/Contact.module.css";
import emailjs from "emailjs-com";

export default function DonationDonationArea() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Help Line",
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_rllrreu",
        "template_xm5hpkn",
        templateParams,
        "MIBYbIcXK2xnIWlrP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
        }
      );
  };

  return (
    <div className={styles.donationArea}>
      <div className="container">
        <div className={styles.bankDetails}>
          <h3 className={styles.bankHeading}>HELPLINE BANK ACCOUNT DETAILS</h3>
          <div className={styles.bankContent}>
            <p>
              <strong>UBL to UBL:</strong> 063501118170
            </p>
            <p>
              <strong>IBAN:</strong> PK69UNIL0112063501118170
            </p>
            <p>
              <strong>Other Bank to UBL:</strong> 063563501118170
            </p>
            <p>
              <strong>Bank:</strong> UBL C Block Model Town, Lahore
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-xxl-6 col-xl-6 col-lg-5">
            <div className={styles.imageWrapper}>
              <img
                src="/img/causes/cause16.jpg"
                alt="Donation Image"
                className={styles.image}
              />
            </div>
          </div>

          <div className="col-xxl-6 col-xl-6 col-lg-7">
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2 className={styles.heading}>Contact Us</h2>
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Your Name"
                required
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
              />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <input
                type="tel"
                name="phone"
                value={phone}
                placeholder="Phone Number"
                required
                onChange={(e) => setPhone(e.target.value)}
                className={styles.input}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
              />
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
