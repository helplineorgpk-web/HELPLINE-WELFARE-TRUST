import React from 'react';
import styles from '../public/css/LearnMore.module.css';

const LearnMore = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleBackground}>
        <h1 className={styles.title}>About Our IT Labs</h1>
        <p className={styles.subtitle}>Discover our comprehensive training programs</p>
      </div>

      <div className={styles.content}>
        <section className={styles.section}>
          <h2>Our Programs</h2>
          <div className={styles.programGrid}>
            <div className={styles.programCard}>
              <h3>Web Development</h3>
              <p>Master modern web technologies and frameworks to build responsive and dynamic websites.</p>
              <ul>
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js and Next.js</li>
                <li>Backend Development</li>
                <li>Database Management</li>
              </ul>
            </div>

            <div className={styles.programCard}>
              <h3>Digital Marketing</h3>
              <p>Learn to create and execute effective digital marketing strategies.</p>
              <ul>
                <li>SEO and SEM</li>
                <li>Social Media Marketing</li>
                <li>Content Marketing</li>
                <li>Analytics and Reporting</li>
              </ul>
            </div>

            <div className={styles.programCard}>
              <h3>Graphic Design</h3>
              <p>Develop creative skills and master industry-standard design tools.</p>
              <ul>
                <li>Adobe Creative Suite</li>
                <li>UI/UX Design</li>
                <li>Brand Identity Design</li>
                <li>Digital Illustration</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Why Choose Us?</h2>
          <div className={styles.features}>
            <div className={styles.feature}>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of experience.</p>
            </div>
            <div className={styles.feature}>
              <h3>Hands-on Projects</h3>
              <p>Build real-world projects to enhance your portfolio.</p>
            </div>
            <div className={styles.feature}>
              <h3>Career Support</h3>
              <p>Get guidance for job placement and career advancement.</p>
            </div>
            <div className={styles.feature}>
              <h3>Flexible Learning</h3>
              <p>Choose from online, hybrid, or in-person learning options.</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Success Stories</h2>
          <div className={styles.testimonials}>
            <div className={styles.testimonial}>
              <p>"The program helped me transition into tech and land my dream job."</p>
              <cite>- Sarah Johnson, Web Developer</cite>
            </div>
            <div className={styles.testimonial}>
              <p>"Excellent curriculum and supportive learning environment."</p>
              <cite>- Michael Chen, Digital Marketing Specialist</cite>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LearnMore;
