import React, { useState } from "react";
import styles from "../../../public/css/Contact.module.css";
import UBLPaymentForm from "../Payment/UBLPaymentForm";

export default function DonationDonationArea() {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleDonateNow = (amount = 0) => {
    setSelectedAmount(amount);
    setShowPaymentForm(true);
  };

  const handlePaymentInitiated = (paymentData) => {
    console.log('Payment initiated:', paymentData);
  };

  const handlePaymentCompleted = (paymentData) => {
    console.log('Payment completed:', paymentData);
    setShowPaymentForm(false);
  };

  const handlePaymentFailed = (error) => {
    console.error('Payment failed:', error);
  };

  return (
    <div className={styles.donationArea}>
      <div className="container">
        {/* Online Donation Section */}
        <div className={styles.onlineDonation}>
          <h3 className={styles.bankHeading}>ONLINE DONATION</h3>
          <div className={styles.bankContent}>
            <p>Make a secure online donation using your credit or debit card. Your donation will be processed securely through UBL Pay.</p>
            
            <div className={styles.quickAmounts}>
              <h4>Quick Donation Amounts</h4>
              <div className={styles.amountButtons}>
                <button onClick={() => handleDonateNow(100)} className={styles.amountBtn}>PKR 100</button>
                <button onClick={() => handleDonateNow(250)} className={styles.amountBtn}>PKR 250</button>
                <button onClick={() => handleDonateNow(500)} className={styles.amountBtn}>PKR 500</button>
                <button onClick={() => handleDonateNow(1000)} className={styles.amountBtn}>PKR 1,000</button>
                <button onClick={() => handleDonateNow(0)} className={styles.amountBtn}>Custom Amount</button>
              </div>
            </div>

            <div className={styles.paymentProvider}>
              <p>Powered by</p>
              <div className={styles.providerLogos}>
                <img src="/img/payment/ubl-pay-logo.png" alt="UBL Pay" className={styles.ublLogo} />
                <img src="/img/payment/visa-mastercard.png" alt="Visa Mastercard" className={styles.cardLogos} />
              </div>
            </div>
          </div>
        </div>

        {/* Bank Details Section */}
        <div className={styles.bankDetails}>
          <h3 className={styles.bankHeading}>BANK TRANSFER DETAILS</h3>
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

        {/* Image Section */}
        <div className="row align-items-center">
          <div className="col-12">
            <div className={styles.imageWrapper}>
              <img
                src="/img/causes/cause16.jpg"
                alt="Donation Image 1"
                className={styles.image}
              />
              <img
                src="/img/causes/cause3.jpg"
                alt="Donation Image 2"
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment Form Modal */}
      {showPaymentForm && (
        <div className={styles.paymentModal}>
          <div className={styles.paymentModalContent}>
            <div className={styles.paymentModalHeader}>
              <h3>Make a Donation</h3>
              <button 
                onClick={() => setShowPaymentForm(false)}
                className={styles.closeButton}
              >
                ×
              </button>
            </div>
            <UBLPaymentForm
              donationAmount={selectedAmount}
              onPaymentInitiated={handlePaymentInitiated}
              onPaymentCompleted={handlePaymentCompleted}
              onPaymentFailed={handlePaymentFailed}
            />
          </div>
        </div>
      )}
    </div>
  );
}
