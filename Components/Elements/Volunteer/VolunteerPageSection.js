"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./VolunteerPageSection.module.css";

const STEPS = [
  "Visit our website and complete the online volunteer application with your details and areas of interest.",
  "Select the department or cause you're passionate about—education, health, environment, events, or community outreach.",
  "Join our orientation to understand Helpline's mission, values, and your role as a volunteer.",
  "Based on your skills and preferences, you'll be assigned to a project or location where your help is most needed.",
  "Begin your journey as a changemaker—contribute your time, skills, and energy to help uplift communities.",
  "Upon completion, receive a volunteer certificate and stay connected for future opportunities and events.",
];

export default function VolunteerPageSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [aboutYourself, setAboutYourself] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalMessage = `
Volunteer application

Personal Details:
- First Name: ${firstName}
- Last Name: ${lastName}
- Age: ${age}
- Gender: ${gender}
- Address: ${address}
- Country: ${country}
- Zip Code: ${zipCode}
- City: ${city}
- State: ${state}

About Yourself:
${aboutYourself}
    `.trim();

    const templateParams = {
      to_name: "Helpline",
      from_name: `${firstName} ${lastName}`.trim(),
      from_email: "",
      message: finalMessage,
    };

    emailjs
      .send(
        "service_sn43jtj",
        "template_2m4dd8r",
        templateParams,
        "E2G6lzak44zoyL3Hy"
      )
      .then(
        () => {
          toast.success("Your volunteer form has been submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setFirstName("");
          setLastName("");
          setAge("");
          setGender("");
          setAddress("");
          setCountry("");
          setZipCode("");
          setCity("");
          setState("");
          setAboutYourself("");
        },
        () => {
          toast.error("Submission failed. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.guide}>
          <h2 className={styles.title}>How to Become a Volunteer at Helpline</h2>
          <p className={styles.intro}>
            Here is the step by step guide to join Helpline as a volunteer and serve the community.
          </p>
          <ol className={styles.steps}>
            {STEPS.map((text, i) => (
              <li key={i} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <p className={styles.stepText}>{text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className={styles.formBox}>
          <h3 className={styles.formTitle}>Submit the Volunteer Form</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div>
                <label className={styles.label} htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  className={styles.input}
                  placeholder="Enter First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  className={styles.input}
                  placeholder="Enter Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <label className={styles.label} htmlFor="age">Age</label>
                <input
                  id="age"
                  type="number"
                  className={styles.input}
                  placeholder="Enter Age"
                  min="16"
                  max="120"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  className={`${styles.input} ${styles.select}`}
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="address">Address</label>
              <textarea
                id="address"
                className={styles.textarea}
                placeholder="Enter Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div>
              <label className={styles.label} htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                className={styles.input}
                placeholder="Enter Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>

            <div className={styles.row3}>
              <div>
                <label className={styles.label} htmlFor="zipCode">Zip Code</label>
                <input
                  id="zipCode"
                  type="text"
                  className={styles.input}
                  placeholder="Enter Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  className={styles.input}
                  placeholder="Enter City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="state">State</label>
                <input
                  id="state"
                  type="text"
                  className={styles.input}
                  placeholder="Enter State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="aboutYourself">About Yourself</label>
              <textarea
                id="aboutYourself"
                className={styles.textarea}
                placeholder="Tell us something about yourself"
                value={aboutYourself}
                onChange={(e) => setAboutYourself(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}
