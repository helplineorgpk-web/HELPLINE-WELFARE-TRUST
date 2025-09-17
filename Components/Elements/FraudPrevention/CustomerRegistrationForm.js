import React, { useState } from 'react';
import styles from './CustomerRegistrationForm.module.css';

const CustomerRegistrationForm = ({ onRegistrationSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    mobile: '',
    email: '',
    dateOfBirth: '',
    address: '',
    cnicNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer Name is required';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile Number is required';
    } else {
      const mobileRegex = /^(\+92|0)?[0-9]{10}$/;
      if (!mobileRegex.test(formData.mobile.replace(/\s/g, ''))) {
        newErrors.mobile = 'Invalid mobile number format';
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    // CNIC validation
    if (!formData.cnicNumber.trim()) {
      newErrors.cnicNumber = 'CNIC number is required';
    } else {
      const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
      if (!cnicRegex.test(formData.cnicNumber)) {
        newErrors.cnicNumber = 'Invalid CNIC format. Use format: 12345-1234567-1';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/customer-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          ipAddress: window.location.hostname // In production, get real IP
        })
      });

      const result = await response.json();

      if (result.success) {
        alert('Customer registered successfully!');
        if (onRegistrationSuccess) {
          onRegistrationSuccess(result.customer);
        }
      } else {
        alert(`Registration failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Customer Registration</h2>
        <p className={styles.subtitle}>
          Please provide the following information to register for secure payments
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="customerName" className={styles.label}>
              Customer Name *
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.customerName ? styles.inputError : ''}`}
              placeholder="Enter full name"
            />
            {errors.customerName && (
              <span className={styles.errorText}>{errors.customerName}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mobile" className={styles.label}>
              Mobile Number *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.mobile ? styles.inputError : ''}`}
              placeholder="+92 300 1234567"
            />
            {errors.mobile && (
              <span className={styles.errorText}>{errors.mobile}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              placeholder="customer@example.com"
            />
            {errors.email && (
              <span className={styles.errorText}>{errors.email}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="dateOfBirth" className={styles.label}>
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address" className={styles.label}>
              Address *
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className={`${styles.textarea} ${errors.address ? styles.inputError : ''}`}
              placeholder="Enter complete address"
              rows="3"
            />
            {errors.address && (
              <span className={styles.errorText}>{errors.address}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cnicNumber" className={styles.label}>
              CNIC Number *
            </label>
            <input
              type="text"
              id="cnicNumber"
              name="cnicNumber"
              value={formData.cnicNumber}
              onChange={handleInputChange}
              className={`${styles.input} ${errors.cnicNumber ? styles.inputError : ''}`}
              placeholder="12345-1234567-1"
            />
            {errors.cnicNumber && (
              <span className={styles.errorText}>{errors.cnicNumber}</span>
            )}
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              onClick={onCancel}
              className={styles.cancelButton}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Register Customer'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerRegistrationForm;
