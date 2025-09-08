import React, { useState } from 'react';
import styles from './UBLPaymentForm.module.css';

const UBLPaymentForm = ({ 
  onPaymentInitiated, 
  onPaymentCompleted, 
  onPaymentFailed,
  donationAmount = 0,
  donationType = 'General Donation',
  donorName = '',
  donorEmail = '',
  donorPhone = ''
}) => {
  const [formData, setFormData] = useState({
    amount: donationAmount,
    donorName: donorName,
    donorEmail: donorEmail,
    donorPhone: donorPhone,
    donationType: donationType,
    currency: 'PKR'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      setError('Please enter a valid donation amount');
      return false;
    }
    if (!formData.donorName.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.donorEmail.trim()) {
      setError('Please enter your email');
      return false;
    }
    if (!formData.donorPhone.trim()) {
      setError('Please enter your phone number');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Prepare payment data
      const paymentData = {
        action: 'register',
        amount: parseFloat(formData.amount),
        currency: formData.currency,
        orderName: `${formData.donationType} - ${formData.donorName}`,
        orderInfo: `Donation by ${formData.donorName} (${formData.donorEmail}) for ${formData.donationType}`,
        returnPath: `${window.location.origin}/payment/callback`,
        transactionHint: 'CPT:Y;VCC:Y;',
        language: 'en'
      };

      // Call registration API
      const response = await fetch('/api/ubl-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData)
      });

      const result = await response.json();

      if (result.success) {
        // Store payment data in session storage for callback
        const paymentData = {
          ...formData,
          transactionId: result.transactionId,
          orderId: result.orderId,
          timestamp: new Date().toISOString()
        };
        
        sessionStorage.setItem('paymentData', JSON.stringify(paymentData));
        
        // Also store pending transaction for callback fallback
        sessionStorage.setItem('pendingTransaction', JSON.stringify({
          transactionId: result.transactionId,
          orderId: result.orderId,
          amount: formData.amount,
          currency: formData.currency,
          donorInfo: {
            name: formData.donorName,
            email: formData.donorEmail,
            phone: formData.donorPhone,
            donationType: formData.donationType
          },
          timestamp: new Date().toISOString()
        }));

        // Call payment initiated callback
        if (onPaymentInitiated) {
          onPaymentInitiated({
            transactionId: result.transactionId,
            orderId: result.orderId,
            amount: formData.amount,
            currency: formData.currency
          });
        }

        // Redirect to payment portal
        redirectToPaymentPortal(result.paymentPortal, result.transactionId);
      } else {
        setError(result.error || 'Payment registration failed');
        if (onPaymentFailed) {
          onPaymentFailed(result.error);
        }
      }
    } catch (error) {
      console.error('Payment registration error:', error);
      setError('Network error. Please try again.');
      if (onPaymentFailed) {
        onPaymentFailed('Network error. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const redirectToPaymentPortal = (paymentPortalUrl, transactionId) => {
    // Create a form to submit to payment portal
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = paymentPortalUrl;
    form.target = '_self';

    // Add transaction ID as hidden field
    const transactionIdField = document.createElement('input');
    transactionIdField.type = 'hidden';
    transactionIdField.name = 'TransactionID';
    transactionIdField.value = transactionId;
    form.appendChild(transactionIdField);

    // Submit form
    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className={styles.paymentFormContainer}>
      <div className={styles.paymentForm}>
        <div className={styles.header}>
          <h3>Make a Donation</h3>
          <p>Support our cause with a secure online donation</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="donationType">Donation Type</label>
            <select
              id="donationType"
              name="donationType"
              value={formData.donationType}
              onChange={handleInputChange}
              required
            >
              <option value="General Donation">General Donation</option>
              <option value="Education Support">Education Support</option>
              <option value="Medical Aid">Medical Aid</option>
              <option value="Food Distribution">Food Distribution</option>
              <option value="Orphanage Support">Orphanage Support</option>
              <option value="Emergency Relief">Emergency Relief</option>
              <option value="Mosque Construction">Mosque Construction</option>
              <option value="Water Well">Water Well</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="amount">Donation Amount (PKR)</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              min="1"
              step="0.01"
              required
              placeholder="Enter amount"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="donorName">Full Name</label>
            <input
              type="text"
              id="donorName"
              name="donorName"
              value={formData.donorName}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="donorEmail">Email Address</label>
            <input
              type="email"
              id="donorEmail"
              name="donorEmail"
              value={formData.donorEmail}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="donorPhone">Phone Number</label>
            <input
              type="tel"
              id="donorPhone"
              name="donorPhone"
              value={formData.donorPhone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
            />
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Proceed to Payment'}
          </button>
        </form>

        <div className={styles.paymentInfo}>
          <div className={styles.securityInfo}>
            <h4>Secure Payment</h4>
            <p>Your payment is processed securely through UBL Pay powered by Etisalat Payment Gateway.</p>
          </div>
          
          <div className={styles.acceptedCards}>
            <h4>Accepted Payment Methods</h4>
            <div className={styles.cardLogos}>
              <img src="/img/payment/visa.png" alt="Visa" />
              <img src="/img/payment/mastercard.png" alt="Mastercard" />
              <img src="/img/payment/amex.png" alt="American Express" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UBLPaymentForm;
