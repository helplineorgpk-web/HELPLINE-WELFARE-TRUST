"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./VolunteerPageSection.module.css";

const EMAILJS_SERVICE_ID = "service_cb00nwp";
const EMAILJS_TEMPLATE_ID = "template_2m4dd8r";
const EMAILJS_PUBLIC_KEY = "E2G6lzak44zoyL3Hy";

const STEPS = [
  "Visit our website and complete the online volunteer application with your details and areas of interest.",
  "Select the department or cause you're passionate about—education, health, environment, events, or community outreach.",
  "Join our orientation to understand Helpline's mission, values, and your role as a volunteer.",
  "Based on your skills and preferences, you'll be assigned to a project or location where your help is most needed.",
  "Begin your journey as a changemaker—contribute your time, skills, and energy to help uplift communities.",
  "Upon completion, receive a volunteer certificate and stay connected for future opportunities and events.",
];

export default function VolunteerPageSection() {
  const [phoneWhatsApp, setPhoneWhatsApp] = useState("");
  const [email, setEmail] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [universityDepartment, setUniversityDepartment] = useState("");
  const [skills, setSkills] = useState("");
  const [skillsToLearn, setSkillsToLearn] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("");
  const [city, setCity] = useState("");
  const [workPreference, setWorkPreference] = useState("");
  const [portfolioLink, setPortfolioLink] = useState("");
  const [whyJoin, setWhyJoin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    const finalMessage = `
Volunteer application

Personal Details:
- Phone / WhatsApp: ${phoneWhatsApp}
- Email: ${email}
- Current Status: ${currentStatus}
- University / Department: ${universityDepartment}
- Skills: ${skills}
- Skills to Learn: ${skillsToLearn}
- Hours Available Per Week: ${hoursPerWeek}
- City: ${city}
- On-site or Remote Preference: ${workPreference}
- Portfolio Link: ${portfolioLink || "N/A"}

Why They Want to Join:
${whyJoin}
    `.trim();

    const templateParams = {
      to_name: "Helpline",
      name: "Volunteer Applicant",
      email,
      phone: phoneWhatsApp,
      time: new Date().toLocaleString(),
      message: finalMessage,
    };

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
          toast.success("Your volunteer form has been submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          setPhoneWhatsApp("");
          setEmail("");
          setCurrentStatus("");
          setUniversityDepartment("");
          setSkills("");
          setSkillsToLearn("");
          setHoursPerWeek("");
          setCity("");
          setWorkPreference("");
          setPortfolioLink("");
          setWhyJoin("");
        },
        () => {
          setSubmitted(false);
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
                <label className={styles.label} htmlFor="phoneWhatsApp">Phone / WhatsApp</label>
                <input
                  id="phoneWhatsApp"
                  type="tel"
                  className={styles.input}
                  placeholder="Enter Phone / WhatsApp"
                  value={phoneWhatsApp}
                  onChange={(e) => setPhoneWhatsApp(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div>
                <label className={styles.label} htmlFor="currentStatus">Current Status</label>
                <input
                  id="currentStatus"
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Student, Employed, Freelancer"
                  value={currentStatus}
                  onChange={(e) => setCurrentStatus(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="universityDepartment">University / Department</label>
                <input
                  id="universityDepartment"
                  type="text"
                  className={styles.input}
                  placeholder="Enter University / Department"
                  value={universityDepartment}
                  onChange={(e) => setUniversityDepartment(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className={styles.label} htmlFor="skills">Skills</label>
              <textarea
                id="skills"
                className={styles.textarea}
                placeholder="List your current skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                required
              />
            </div>

            <div>
              <label className={styles.label} htmlFor="skillsToLearn">Skills They Want to Learn</label>
              <textarea
                id="skillsToLearn"
                className={styles.textarea}
                placeholder="Mention skills you want to learn"
                value={skillsToLearn}
                onChange={(e) => setSkillsToLearn(e.target.value)}
                required
              />
            </div>

            <div className={styles.row}>
              <div>
                <label className={styles.label} htmlFor="hoursPerWeek">Hours Available Per Week</label>
                <input
                  id="hoursPerWeek"
                  type="number"
                  className={styles.input}
                  placeholder="Enter Hours Per Week"
                  min="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(e.target.value)}
                  required
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
            </div>

            <div>
              <label className={styles.label} htmlFor="workPreference">On-site or Remote Preference</label>
              <select
                id="workPreference"
                className={`${styles.input} ${styles.select}`}
                value={workPreference}
                onChange={(e) => setWorkPreference(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Either">Either</option>
              </select>
            </div>

            <div>
              <label className={styles.label} htmlFor="portfolioLink">Portfolio Link (if any)</label>
              <input
                id="portfolioLink"
                type="url"
                className={styles.input}
                placeholder="Enter Portfolio URL"
                value={portfolioLink}
                onChange={(e) => setPortfolioLink(e.target.value)}
              />
            </div>

            <div>
              <label className={styles.label} htmlFor="whyJoin">Why They Want to Join</label>
              <textarea
                id="whyJoin"
                className={styles.textarea}
                placeholder="Tell us why you want to join"
                value={whyJoin}
                onChange={(e) => setWhyJoin(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
            {submitted && (
              <p className={styles.intro}>
                Thank you! Your volunteer form has been submitted successfully.
              </p>
            )}
          </form>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
}
