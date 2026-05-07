import React, { useState, useEffect, useMemo, useRef } from 'react';
import styles from './UBLPaymentForm.module.css';

const FALLBACK_PRESET_AMOUNTS = [1000, 2500, 2200, 11000, 22000];
const EMPTY_PRESET_AMOUNTS = [];

const DEFAULT_DONATION_TYPES = [
  'General Donation',
  'Education Support',
  'Medical Aid',
  'Food Distribution',
  'Orphanage Support',
  'Emergency Relief',
  'Mosque Construction',
  'Water Well',
];

const PAYMENT_METHODS = {
  ONLINE: 'online',
  MANUAL: 'manual',
  CASH: 'cash',
};

const PAYMENT_METHOD_OPTIONS = [
  { id: PAYMENT_METHODS.ONLINE, title: 'Online (card)' },
  { id: PAYMENT_METHODS.MANUAL, title: 'Bank transfer' },
  { id: PAYMENT_METHODS.CASH, title: 'Cash pickup' },
];

const HELPLINE_CONTACTS = [
  { label: 'Head Office', value: '+92-42-3515 7374', tel: '+924235157374' },
  { label: 'Donation Hotline', value: '+92 321 4388352', tel: '+923214388352' },
  { label: 'WhatsApp', value: '+92 321 4388352', tel: '+923214388352' },
];

const BANK_DETAILS = {
  accountTitle: 'Helpline Welfare Organization',
  bankName: 'United Bank Limited',
  accountNumber: '063563501118170',
  iban: 'PK69UNIL0112063501118170',
};

const VIEWS = {
  FORM: 'form',
  MANUAL: 'manual',
  CASH: 'cash',
  PLEDGE_SUCCESS: 'pledgeSuccess',
};

const UBLPaymentForm = ({
  onPaymentInitiated,
  onPaymentCompleted,
  onPaymentFailed,
  donationAmount = 0,
  donationType = 'General Donation',
  donorName = '',
  donorEmail = '',
  donorPhone = '',
  presetAmounts = EMPTY_PRESET_AMOUNTS,
  amount: legacyAmount,
  cause: legacyCause,
}) => {
  const resolvedAmount =
    donationAmount ||
    (typeof legacyAmount === 'number' || typeof legacyAmount === 'string'
      ? legacyAmount
      : 0);
  const resolvedType =
    (donationType && donationType !== 'General Donation'
      ? donationType
      : legacyCause) ||
    donationType ||
    'General Donation';

  const [formData, setFormData] = useState({
    amount: resolvedAmount,
    donorName: donorName,
    donorEmail: donorEmail,
    donorPhone: donorPhone,
    donationType: resolvedType,
    currency: 'PKR',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      donationType: resolvedType,
      amount: resolvedAmount || prev.amount,
    }));
  }, [resolvedType, resolvedAmount]);

  const donationTypeOptions = useMemo(() => {
    const incoming = (formData.donationType || '').trim();
    if (incoming && !DEFAULT_DONATION_TYPES.includes(incoming)) {
      return [incoming, ...DEFAULT_DONATION_TYPES];
    }
    return DEFAULT_DONATION_TYPES;
  }, [formData.donationType]);

  const donationPresetAmounts = useMemo(() => {
    const source =
      Array.isArray(presetAmounts) && presetAmounts.length
        ? presetAmounts
        : FALLBACK_PRESET_AMOUNTS;
    const sanitized = source
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value) && value > 0);
    return sanitized.length ? sanitized : FALLBACK_PRESET_AMOUNTS;
  }, [presetAmounts]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isMonthlyDonation, setIsMonthlyDonation] = useState(false);
  const [showCustomAmountInput, setShowCustomAmountInput] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(PAYMENT_METHODS.ONLINE);
  const [view, setView] = useState(VIEWS.FORM);
  const [pledgeReference, setPledgeReference] = useState('');
  const [copyNotice, setCopyNotice] = useState('');
  const customAmountInputRef = useRef(null);

  const parsedAmount = Number(formData.amount);
  const isPresetSelected =
    Number.isFinite(parsedAmount) && donationPresetAmounts.includes(parsedAmount);
  const amountButtons = useMemo(() => {
    if (!Number.isFinite(parsedAmount) || parsedAmount <= 0) {
      return donationPresetAmounts;
    }

    if (donationPresetAmounts.includes(parsedAmount)) {
      return [
        parsedAmount,
        ...donationPresetAmounts.filter((value) => value !== parsedAmount),
      ];
    }

    return [
      parsedAmount,
      ...donationPresetAmounts.filter((value) => value !== parsedAmount),
    ];
  }, [donationPresetAmounts, parsedAmount]);

  useEffect(() => {
    const nextAmount = Number(resolvedAmount);
    if (!Number.isFinite(nextAmount) || nextAmount <= 0) {
      setShowCustomAmountInput(false);
      return;
    }
    setShowCustomAmountInput(!donationPresetAmounts.includes(nextAmount));
  }, [resolvedAmount, donationPresetAmounts]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePresetAmountClick = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount: amount,
    }));
    setShowCustomAmountInput(false);
    setError('');
  };

  const handleCustomAmountToggle = () => {
    setShowCustomAmountInput(true);
    setFormData((prev) => ({
      ...prev,
      amount: isPresetSelected ? '' : prev.amount,
    }));
    setTimeout(() => customAmountInputRef.current?.focus(), 0);
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

  const generatePledgeReference = () => {
    const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
    const ts = Date.now().toString().slice(-5);
    return `HWO-${ts}-${rand}`;
  };

  const persistPledge = (method) => {
    const reference = generatePledgeReference();
    const pledgeData = {
      ...formData,
      isMonthlyDonation,
      paymentMethod: method,
      reference,
      timestamp: new Date().toISOString(),
    };
    try {
      sessionStorage.setItem('donationPledge', JSON.stringify(pledgeData));
    } catch (storageError) {
      // Non-fatal: sessionStorage may be unavailable in some browsers.
    }
    setPledgeReference(reference);
    return reference;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    if (paymentMethod === PAYMENT_METHODS.MANUAL) {
      setView(VIEWS.MANUAL);
      return;
    }

    if (paymentMethod === PAYMENT_METHODS.CASH) {
      setView(VIEWS.CASH);
      return;
    }

    await initiateOnlinePayment();
  };

  const initiateOnlinePayment = async () => {
    setIsLoading(true);

    try {
      const paymentData = {
        action: 'register',
        amount: parseFloat(formData.amount),
        currency: formData.currency,
        orderName: ` ${formData.donorName}`,
        orderInfo: `Donation by ${formData.donorName} (${formData.donorEmail}) for ${formData.donationType}${
          isMonthlyDonation ? ' [Monthly]' : ''
        }`,
        returnPath: `${window.location.origin}/payment/callback`,
        transactionHint: 'CPT:Y;VCC:Y;',
        language: 'en',
      };

      const response = await fetch('/api/ubl-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData),
      });

      const result = await response.json();

      if (result.success) {
        const storedPaymentData = {
          ...formData,
          isMonthlyDonation,
          transactionId: result.transactionId,
          orderId: result.orderId,
          timestamp: new Date().toISOString(),
        };

        sessionStorage.setItem('paymentData', JSON.stringify(storedPaymentData));
        sessionStorage.setItem(
          'pendingTransaction',
          JSON.stringify({
            transactionId: result.transactionId,
            orderId: result.orderId,
            amount: formData.amount,
            currency: formData.currency,
            donorInfo: {
              name: formData.donorName,
              email: formData.donorEmail,
              phone: formData.donorPhone,
              donationType: formData.donationType,
              isMonthlyDonation,
            },
            timestamp: new Date().toISOString(),
          })
        );

        if (onPaymentInitiated) {
          onPaymentInitiated({
            transactionId: result.transactionId,
            orderId: result.orderId,
            amount: formData.amount,
            currency: formData.currency,
          });
        }

        redirectToPaymentPortal(result.paymentPortal, result.transactionId);
      } else {
        setError(result.error || 'Payment registration failed');
        if (onPaymentFailed) {
          onPaymentFailed(result.error);
        }
      }
    } catch (err) {
      console.error('Payment registration error:', err);
      setError('Network error. Please try again.');
      if (onPaymentFailed) {
        onPaymentFailed('Network error. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const redirectToPaymentPortal = (paymentPortalUrl, transactionId) => {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = paymentPortalUrl;
    form.target = '_self';

    const transactionIdField = document.createElement('input');
    transactionIdField.type = 'hidden';
    transactionIdField.name = 'TransactionID';
    transactionIdField.value = transactionId;
    form.appendChild(transactionIdField);

    document.body.appendChild(form);
    form.submit();
  };

  const handleConfirmManualTransfer = () => {
    persistPledge(PAYMENT_METHODS.MANUAL);
    setView(VIEWS.PLEDGE_SUCCESS);
    if (onPaymentCompleted) {
      onPaymentCompleted({ method: PAYMENT_METHODS.MANUAL });
    }
  };

  const handleConfirmCashPickup = () => {
    persistPledge(PAYMENT_METHODS.CASH);
    setView(VIEWS.PLEDGE_SUCCESS);
    if (onPaymentCompleted) {
      onPaymentCompleted({ method: PAYMENT_METHODS.CASH });
    }
  };

  const handleBackToForm = () => {
    setView(VIEWS.FORM);
  };

  const handleCopy = async (text, label) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const tmp = document.createElement('textarea');
        tmp.value = text;
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand('copy');
        document.body.removeChild(tmp);
      }
      setCopyNotice(`${label} copied`);
      setTimeout(() => setCopyNotice(''), 1800);
    } catch (copyError) {
      setCopyNotice('Unable to copy — please copy manually');
      setTimeout(() => setCopyNotice(''), 2200);
    }
  };

  const formattedAmount = useMemo(() => {
    const n = Number(formData.amount);
    if (!Number.isFinite(n) || n <= 0) return '';
    return n.toLocaleString('en-PK');
  }, [formData.amount]);

  const primaryCtaLabel = useMemo(() => {
    if (paymentMethod === PAYMENT_METHODS.MANUAL) return 'Continue to Bank Details';
    if (paymentMethod === PAYMENT_METHODS.CASH) return 'Continue to Cash Pickup';
    return 'Proceed to Payment';
  }, [paymentMethod]);

  return (
    <div className={styles.paymentFormContainer}>
      <div className={styles.paymentForm}>
        {view === VIEWS.FORM && (
          <>
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
                  {donationTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="amount">Donation Amount (PKR)</label>
                <div className={styles.amountButtons}>
                  {amountButtons.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className={`${styles.amountButton} ${
                        Number(formData.amount) === amount && !showCustomAmountInput
                          ? styles.amountButtonActive
                          : ''
                      }`}
                      onClick={() => handlePresetAmountClick(amount)}
                    >
                      Rs.{amount.toLocaleString('en-PK')}
                    </button>
                  ))}
                  <button
                    type="button"
                    className={`${styles.amountButton} ${styles.customAmountButton} ${
                      showCustomAmountInput ? styles.amountButtonActive : ''
                    }`}
                    onClick={handleCustomAmountToggle}
                  >
                    Other amount
                  </button>
                </div>
                {showCustomAmountInput ? (
                  <input
                    ref={customAmountInputRef}
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    min="1"
                    step="0.01"
                    required
                    placeholder="Enter custom amount"
                  />
                ) : (
                  <input type="hidden" name="amount" value={formData.amount || ''} />
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="donorName">Enter Your Name</label>
                <input
                  type="text"
                  id="donorName"
                  name="donorName"
                  value={formData.donorName}
                  onChange={handleInputChange}
                  required
                  maxLength={255}
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

              <div className={styles.formGroup}>
                <label className={styles.methodsLabel}>
                  Choose Payment Method
                </label>
                <div
                  className={styles.methodsGroup}
                  role="radiogroup"
                  aria-label="Payment method"
                >
                  {PAYMENT_METHOD_OPTIONS.map((option) => {
                    const isActive = paymentMethod === option.id;
                    return (
                      <label
                        key={option.id}
                        className={`${styles.methodCard} ${
                          isActive ? styles.methodCardActive : ''
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={option.id}
                          checked={isActive}
                          onChange={() => setPaymentMethod(option.id)}
                          className={styles.methodRadio}
                        />
                        <span className={styles.methodCardTitle}>
                          {option.title}
                        </span>
                        <span
                          className={styles.methodCardCheck}
                          aria-hidden="true"
                        />
                      </label>
                    );
                  })}
                </div>
              </div>

              {error && <div className={styles.errorMessage}>{error}</div>}

              {(paymentMethod === PAYMENT_METHODS.ONLINE ||
                paymentMethod === PAYMENT_METHODS.MANUAL) && (
                <label className={styles.consentCheck}>
                  <input
                    type="checkbox"
                    checked={isMonthlyDonation}
                    onChange={(e) => {
                      setIsMonthlyDonation(e.target.checked);
                    }}
                  />
                  <span>Make this a monthly donation</span>
                </label>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : primaryCtaLabel}
              </button>
            </form>
          </>
        )}

        {view === VIEWS.MANUAL && (
          <div className={styles.stageView}>
            <button
              type="button"
              className={styles.backLink}
              onClick={handleBackToForm}
            >
              <span aria-hidden="true">&larr;</span> Back
            </button>
            <div className={styles.stageHeader}>
              <span className={styles.stageEyebrow}>Step 2 of 2</span>
              <h3>Transfer to our UBL Account</h3>
              <p>
                Please transfer{' '}
                <strong>
                  PKR {formattedAmount || formData.amount}
                </strong>{' '}
                to the account below via online banking, JazzCash, Easypaisa, or
                at any bank branch. Use your name as the payment reference.
              </p>
            </div>

            <div className={styles.bankCard}>
              <div className={styles.bankCardRow}>
                <span className={styles.bankCardLabel}>Account Title</span>
                <span className={styles.bankCardValue}>
                  {BANK_DETAILS.accountTitle}
                </span>
              </div>
              <div className={styles.bankCardRow}>
                <span className={styles.bankCardLabel}>Bank Name</span>
                <span className={styles.bankCardValue}>
                  {BANK_DETAILS.bankName}
                </span>
              </div>
              <div className={styles.bankCardRow}>
                <span className={styles.bankCardLabel}>Account Number</span>
                <span className={styles.bankCardValue}>
                  <span className={styles.mono}>{BANK_DETAILS.accountNumber}</span>
                  <button
                    type="button"
                    className={styles.copyBtn}
                    onClick={() =>
                      handleCopy(BANK_DETAILS.accountNumber, 'Account number')
                    }
                  >
                    Copy
                  </button>
                </span>
              </div>
              <div className={styles.bankCardRow}>
                <span className={styles.bankCardLabel}>IBAN</span>
                <span className={styles.bankCardValue}>
                  <span className={styles.mono}>{BANK_DETAILS.iban}</span>
                  <button
                    type="button"
                    className={styles.copyBtn}
                    onClick={() => handleCopy(BANK_DETAILS.iban, 'IBAN')}
                  >
                    Copy
                  </button>
                </span>
              </div>

              <div className={styles.bankLogos} aria-label="Supported channels">
                <span className={styles.bankLogoChip}>
                  <img src="/img/payment/ubl-pay-logo.png" alt="UBL" />
                </span>
                <span className={styles.bankLogoChip}>
                  <img
                    src="/img/Campaigns/JazzCash_logo_(2025).png"
                    alt="JazzCash"
                  />
                </span>
                <span className={styles.bankLogoChip}>
                  <img
                    src="/img/Campaigns/EASYPAISA-New-Logo-Vector.svg-.png"
                    alt="Easypaisa"
                  />
                </span>
              </div>
            </div>

            {copyNotice && (
              <div className={styles.copyNotice}>{copyNotice}</div>
            )}

            <div className={styles.stageNote}>
              After transferring, please share a screenshot of the receipt on
              WhatsApp at{' '}
              <a href={`tel:${HELPLINE_CONTACTS[1].tel}`}>
                {HELPLINE_CONTACTS[1].value}
              </a>{' '}
              so we can confirm your donation and issue a receipt.
            </div>

            <div className={styles.stageActions}>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={handleBackToForm}
              >
                Change Method
              </button>
              <button
                type="button"
                className={styles.submitButton}
                onClick={handleConfirmManualTransfer}
              >
                I Have Transferred
              </button>
            </div>
          </div>
        )}

        {view === VIEWS.CASH && (
          <div className={styles.stageView}>
            <button
              type="button"
              className={styles.backLink}
              onClick={handleBackToForm}
            >
              <span aria-hidden="true">&larr;</span> Back
            </button>
            <div className={styles.stageHeader}>
              <span className={styles.stageEyebrow}>Step 2 of 2</span>
              <h3>Cash Pickup Service</h3>
              <p>
                Our team will collect your cash donation of{' '}
                <strong>PKR {formattedAmount || formData.amount}</strong> from
                your preferred location. Please call us on the numbers below to
                confirm when and where our representative should meet you.
              </p>
            </div>

            <div className={styles.contactList}>
              {HELPLINE_CONTACTS.map((contact) => (
                <a
                  key={`${contact.label}-${contact.tel}`}
                  href={`tel:${contact.tel}`}
                  className={styles.contactCard}
                >
                  <span className={styles.contactIcon} aria-hidden="true">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.85.6 2.81.73A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>
                  <span className={styles.contactMeta}>
                    <span className={styles.contactLabel}>{contact.label}</span>
                    <span className={styles.contactValue}>{contact.value}</span>
                  </span>
                  <span className={styles.contactCta}>Call</span>
                </a>
              ))}
            </div>

            <div className={styles.stageNote}>
              Please mention your full name and the donation amount when you
              call. Our representative will confirm the pickup time, location,
              and share an official receipt after collection.
            </div>

            <div className={styles.stageActions}>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={handleBackToForm}
              >
                Change Method
              </button>
              <button
                type="button"
                className={styles.submitButton}
                onClick={handleConfirmCashPickup}
              >
                I&apos;ve Made the Call
              </button>
            </div>
          </div>
        )}

        {view === VIEWS.PLEDGE_SUCCESS && (
          <div className={styles.stageView}>
            <div className={styles.successBadge} aria-hidden="true">
              <svg
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <div className={styles.stageHeader}>
              <h3>Thank You, {formData.donorName || 'Donor'}!</h3>
              <p>
                Your pledge of{' '}
                <strong>PKR {formattedAmount || formData.amount}</strong> has
                been recorded. Our team will contact you shortly at{' '}
                <strong>{formData.donorPhone}</strong> to confirm the details
                and share an official receipt.
              </p>
            </div>

            {pledgeReference && (
              <div className={styles.referenceCard}>
                <span className={styles.referenceLabel}>Reference ID</span>
                <span className={styles.referenceValue}>{pledgeReference}</span>
                <button
                  type="button"
                  className={styles.copyBtn}
                  onClick={() => handleCopy(pledgeReference, 'Reference ID')}
                >
                  Copy
                </button>
              </div>
            )}

            {copyNotice && (
              <div className={styles.copyNotice}>{copyNotice}</div>
            )}

            <div className={styles.stageActions}>
              <button
                type="button"
                className={styles.submitButton}
                onClick={handleBackToForm}
              >
                Done
              </button>
            </div>
          </div>
        )}

        {view === VIEWS.FORM && paymentMethod === PAYMENT_METHODS.ONLINE && (
          <div className={styles.paymentInfo}>
            <div className={styles.securityInfo}>
              <h4>Secure Payment</h4>
              <p>
                Your payment is processed securely through UBL Pay powered by
                Etisalat Payment Gateway.
              </p>
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
        )}
      </div>
    </div>
  );
};

export default UBLPaymentForm;
