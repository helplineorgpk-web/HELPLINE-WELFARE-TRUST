import React from "react";
import styles from "../../../public/css/DigiSkills.module.css";

export default function DigiSkills() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Free IT Courses for Students</h1>
        <p>
          Learn valuable skills and earn through freelancing with free courses
          from DigiSkills and PSDF.
        </p>
      </header>

      <section className={styles.programSection}>
        <h2>DigiSkills Training Program</h2>
        <div className={styles.programDetails}>
          <p>
            <strong>What is DigiSkills?</strong> DigiSkills is Pakistan’s first
            online training program to empower youth with in-demand skills for
            the freelance market. The courses are in a mix of Urdu-English for
            accessibility.
          </p>
          <p>
            <strong>Why join?</strong> Enhance your skills and earn through
            freelancing. Learning these skills will enable you to become part of
            the rapidly growing freelance market. The program is completely
            free!
          </p>
          <p>
            <strong>Is this a Government program?</strong> Yes, DigiSkills is an
            initiative of the Government of Pakistan spearheaded by the Ministry
            of IT & Telecom through Ignite – National Technology Fund and
            executed by Virtual University of Pakistan.
          </p>
          <p>
            <strong>When do enrollments open?</strong> Enrollments for Batch-05
            opened on 5th June 2023. Enrollment is on a first-come, first-served
            basis.
          </p>
          <p>
            <strong>When do classes start?</strong> Classes for Batch-05 started
            on 4th July 2023.
          </p>
          <p>
            <strong>Do I have to pay?</strong> No, the program is absolutely
            free! Just sign up and enroll in your preferred courses.
          </p>
        </div>

        <h3>Courses Offered:</h3>
        <ul className={styles.courseList}>
          <li>Freelancing (Mandatory for first-time trainees)</li>
          <li>E-Commerce Management</li>
          <li>Creative Writing</li>
          <li>Graphic Design</li>
          <li>QuickBooks</li>
          <li>WordPress</li>
          <li>AutoCAD</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Digital Marketing</li>
          <li>Digital Literacy</li>
          <li>Virtual Assistant</li>
          <li>Affiliate Marketing</li>
          <li>Communication & Soft Skills</li>
          <li>Video Editing, Animation & Vlogging</li>
          <li>Data Analytics & Business Intelligence</li>
        </ul>

        <h3>Frequently Asked Questions</h3>
        <div className={styles.faqSection}>
          <p>
            <strong>What are the technical requirements?</strong> You need a
            stable internet connection and a desktop, laptop, or Android phone.
            You can also download the DigiSkills app from{" "}
            <a
              href="https://play.google.com/store/apps/details?id=pk.digiskills.lms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play Store
            </a>
            .
          </p>
          <p>
            <strong>Where is this training conducted?</strong> All training is
            online through the DigiSkills Learning Management System (LMS). You
            can access videos, materials, and course content at your convenience
            from home or office.
          </p>
          <p>
            <strong>What is the certification process?</strong> Trainees must
            score at least 50% to earn an e-Certificate. The score breakdown is:
            60% for video watching, 25% for quizzes, and 15% for hands-on
            exercises.
          </p>
          <p>
            <strong>How many courses can I enroll in?</strong> You can take a
            maximum of two courses per batch. Since there are 15 courses, you
            can complete all of them across 8 batches.
          </p>
          <p>
            <strong>How do I study?</strong> All videos and materials are
            available on the LMS. You can self-pace your learning or follow the
            timetable provided.
          </p>
          <p>
            <strong>What if I need help?</strong> Coaches are available to
            respond to queries via:
            <ul>
              <li>Discussion boards on LMS</li>
              <li>Online support through the LMS</li>
              <li>Call: 0304-111-1570</li>
            </ul>
          </p>
          <p>
            <strong>How to contact specific course coaches?</strong> Call
            0304-1111570 and use the extension number:
            <ul>
              <li>Freelancing: 1</li>
              <li>Virtual Assistant: 2</li>
              <li>Digital Marketing: 3</li>
              <li>Affiliate Marketing: 4</li>
              <li>Creative Writing: 6</li>
              <li>Graphic Design: 9</li>
              <li>SEO: 10</li>
              <li>QuickBooks: 13</li>
              <li>Data Analytics: 15</li>
              {/* Add all other courses */}
            </ul>
          </p>
          <p>
            <strong>Can I access previous course materials?</strong> You can
            access videos and exercises of previously enrolled courses under "My
            Previous Courses" in LMS. However, other content like handouts is
            unavailable after the batch ends.
          </p>
          <p>
            <strong>What about freelancing guidance?</strong> Coaches provide
            guidance for creating profiles and bidding for projects on
            freelancing platforms.
          </p>
        </div>
      </section>

      <section className={styles.psdfSection}>
        <h2>Punjab Skills Development Fund (PSDF)</h2>
        <p>
          PSDF is the largest skills development fund in Pakistan, offering
          demand-driven training programs to youth in various trades.
        </p>
        <address>
          <strong>Contact:</strong>
          <br />
          1st Floor, Centro 81-A, B-II, Gulberg III, Off M.M.Alam Rd, Lahore,
          Pakistan
          <br />
          Phone: (+92) 42 35752190
        </address>
      </section>
    </div>
  );
}
