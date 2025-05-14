import React, { useState } from 'react';
import styles from '../public/css/Enroll.module.css';

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleBackground}>
        <h1 className={styles.title}>Enroll in Our Program</h1>
        <p className={styles.subtitle}>Take the first step towards your digital future</p>
      </div>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="course">Select Course</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course</option>
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="data-science">Data Science</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Additional Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default EnrollForm;
