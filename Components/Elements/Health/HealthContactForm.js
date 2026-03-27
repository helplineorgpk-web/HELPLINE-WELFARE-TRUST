import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./HealthContactForm.module.css";

export default function HealthContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      emailName: email.split("@")[0],
      email,
      message: `From Health Page Contact Form\nSubject: ${subject}\n\n${message}`,
      purpose: subject || "Health Inquiry",
    };

    try {
      await emailjs.send(
        "service_cb00nwp",
        "template_2m4dd8r",
        templateParams,
        "E2G6lzak44zoyL3Hy"
      );
      toast.success("Your request has been submitted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS Error:", err);
      try {
        const apiResponse = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: "info@helpline.org.pk",
            subject: `Health Page: ${subject || "General Inquiry"}`,
            name,
            email,
            message,
          }),
        });

        if (apiResponse.ok) {
          toast.success("Your request has been submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          throw new Error("API route failed");
        }
      } catch (apiErr) {
        console.error("API Route Error:", apiErr);
        toast.error(
          "Submission failed. Please try again later or contact us directly.",
          { position: "top-right", autoClose: 5000 }
        );
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name"
            className={styles.input}
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Your email"
            className={styles.input}
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            className={styles.input}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Your message (optional)"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
}
