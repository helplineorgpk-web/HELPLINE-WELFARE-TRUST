import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout2 from '../../Components/Layout/Layout2';
import styles from './PaymentCallback.module.css';

const PaymentCallback = () => {
  const router = useRouter();
  const [paymentStatus, setPaymentStatus] = useState('processing');
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState('');
  const [debugInfo, setDebugInfo] = useState('');
  const hasProcessed = useRef(false);

  useEffect(() => {
    // Prevent multiple processing calls
    if (hasProcessed.current) {
      return;
    }

    hasProcessed.current = true;

    // Set a timeout to handle cases where payment processing takes too long
    const timeoutId = setTimeout(() => {
      if (paymentStatus === 'processing') {
        setError('Payment processing timeout. Please check your payment status or try again.');
        setPaymentStatus('failed');
      }
    }, 15000); // 15 second timeout (reduced from 30)

    const processPayment = async () => {
      try {
        // Enhanced TransactionID extraction with debugging
        const urlParams = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        
        // Try multiple ways to get TransactionID
        const transactionId = 
          urlParams.get('TransactionID') || 
          urlParams.get('transactionId') || 
          urlParams.get('transaction_id') ||
          hashParams.get('TransactionID') || 
          hashParams.get('transactionId') || 
          hashParams.get('transaction_id');

        // Debug information
        const debugData = {
          fullUrl: window.location.href,
          searchParams: Object.fromEntries(urlParams.entries()),
          hashParams: Object.fromEntries(hashParams.entries()),
          pathname: window.location.pathname,
          foundTransactionId: transactionId
        };
        
        setDebugInfo(JSON.stringify(debugData, null, 2));
        console.log('Payment Callback Debug:', debugData);

        // If no TransactionID found, check if we have a stored transaction
        if (!transactionId) {
          console.log('No transaction ID found in URL parameters, checking sessionStorage...');
          
          // Check if we have a pending transaction in sessionStorage
          const pendingTransaction = sessionStorage.getItem('pendingTransaction');
          if (pendingTransaction) {
            try {
              const pendingData = JSON.parse(pendingTransaction);
              console.log('Found pending transaction:', pendingData);
              
              // Use the stored transaction ID
              const storedTransactionId = pendingData.transactionId;
              if (storedTransactionId) {
                console.log('Using stored transaction ID:', storedTransactionId);
                
                // Set payment data for display
                setPaymentData({
                  transactionId: storedTransactionId,
                  amount: pendingData.amount,
                  donorInfo: pendingData.donorInfo
                });
                
                // Call finalization API with stored transaction ID
                console.log('Calling finalization API with stored transaction ID:', storedTransactionId);
                const response = await fetch('/api/ubl-payment', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    action: 'finalize',
                    transactionId: storedTransactionId
                  })
                });

                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.success) {
                  setPaymentStatus('success');
                  
                  // Store successful payment data
                  const successData = {
                    ...result,
                    transactionId: storedTransactionId,
                    amount: pendingData.amount,
                    timestamp: new Date().toISOString(),
                    donorInfo: pendingData.donorInfo || null
                  };
                  
                  sessionStorage.setItem('lastPayment', JSON.stringify(successData));
                  
                  // Clear pending transaction data
                  sessionStorage.removeItem('pendingTransaction');
                  sessionStorage.removeItem('paymentData');
                  
                  // Log successful payment
                  console.log('Payment successful:', successData);
                  
                } else {
                  setError(result.error || 'Payment finalization failed');
                  setPaymentStatus('failed');
                }
                return;
              }
            } catch (parseError) {
              console.error('Error parsing pending transaction:', parseError);
            }
          }
          
          // Also check regular paymentData as fallback
          const storedPaymentData = sessionStorage.getItem('paymentData');
          if (storedPaymentData) {
            try {
              const paymentData = JSON.parse(storedPaymentData);
              if (paymentData.transactionId) {
                console.log('Found transaction ID in paymentData:', paymentData.transactionId);
                
                // Set payment data for display
                setPaymentData(paymentData);
                
                // Call finalization API
                console.log('Calling finalization API with paymentData transaction ID:', paymentData.transactionId);
                const response = await fetch('/api/ubl-payment', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    action: 'finalize',
                    transactionId: paymentData.transactionId
                  })
                });

                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.success) {
                  setPaymentStatus('success');
                  
                  // Store successful payment data
                  const successData = {
                    ...result,
                    transactionId: paymentData.transactionId,
                    amount: paymentData.amount,
                    timestamp: new Date().toISOString(),
                    donorInfo: {
                      name: paymentData.donorName,
                      email: paymentData.donorEmail,
                      phone: paymentData.donorPhone,
                      donationType: paymentData.donationType
                    }
                  };
                  
                  sessionStorage.setItem('lastPayment', JSON.stringify(successData));
                  
                  // Clear payment data
                  sessionStorage.removeItem('paymentData');
                  
                  console.log('Payment successful:', successData);
                  
                } else {
                  setError(result.error || 'Payment finalization failed');
                  setPaymentStatus('failed');
                }
                return;
              }
            } catch (parseError) {
              console.error('Error parsing payment data:', parseError);
            }
          }
          
          setError(`Transaction ID not found. Debug info: ${JSON.stringify(debugData)}`);
          setPaymentStatus('failed');
          setIsProcessing(false);
          return;
        }

        // Get stored payment data
        const storedData = sessionStorage.getItem('paymentData');
        if (storedData) {
          setPaymentData(JSON.parse(storedData));
        }

        // Call finalization API
        console.log('Calling finalization API with URL transaction ID:', transactionId);
        const response = await fetch('/api/ubl-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'finalize',
            transactionId: transactionId
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setPaymentStatus('success');
          setIsProcessing(false);
          
          // Store successful payment data
          const successData = {
            ...result,
            transactionId,
            timestamp: new Date().toISOString(),
            donorInfo: storedData ? JSON.parse(storedData) : null
          };
          
          sessionStorage.setItem('lastPayment', JSON.stringify(successData));
          
          // Clear payment data from session
          sessionStorage.removeItem('paymentData');
          
          // Log successful payment
          console.log('Payment successful:', successData);
          
        } else {
          setError(result.error || 'Payment finalization failed');
          setPaymentStatus('failed');
          setIsProcessing(false);
        }
      } catch (error) {
        console.error('Payment processing error:', error);
        setError(`Network error during payment processing: ${error.message}`);
        setPaymentStatus('failed');
        setIsProcessing(false);
      }
    };

    processPayment();

    // Cleanup timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array since we only want this to run once

  const handleRetry = () => {
    router.push('/donation');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  const renderContent = () => {
    switch (paymentStatus) {
      case 'processing':
        return (
          <div className={styles.processingContainer}>
            <div className={styles.spinner}></div>
            <h2>Processing Your Payment</h2>
            <p>Please wait while we confirm your donation...</p>
          </div>
        );

      case 'success':
        return (
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>✓</div>
            <h2>Payment Successful!</h2>
            <p>Thank you for your generous donation. Your contribution will help make a difference.</p>
            
            {paymentData && (
              <div className={styles.paymentDetails}>
                <h3>Payment Details</h3>
                <div className={styles.detailRow}>
                  <span>Transaction ID:</span>
                  <span>{paymentData.transactionId}</span>
                </div>
                <div className={styles.detailRow}>
                  <span>Amount:</span>
                  <span>PKR {paymentData.amount}</span>
                </div>
                <div className={styles.detailRow}>
                  <span>Donation Type:</span>
                  <span>{paymentData.donorInfo?.donationType || 'General Donation'}</span>
                </div>
                {paymentData.approvalCode && (
                  <div className={styles.detailRow}>
                    <span>Approval Code:</span>
                    <span>{paymentData.approvalCode}</span>
                  </div>
                )}
              </div>
            )}

            <div className={styles.actionButtons}>
              <button onClick={handleGoHome} className={styles.primaryButton}>
                Go to Home
              </button>
              <button onClick={() => window.print()} className={styles.secondaryButton}>
                Print Receipt
              </button>
            </div>
          </div>
        );

      case 'failed':
        return (
          <div className={styles.failedContainer}>
            <div className={styles.errorIcon}>✗</div>
            <h2>Payment Failed</h2>
            <p>{error || 'Your payment could not be processed. Please try again.'}</p>
            
            {/* Debug information for failed payments */}
            {debugInfo && (
              <div className={styles.debugInfo}>
                <h4>Debug Information:</h4>
                <pre>{debugInfo}</pre>
              </div>
            )}
            
            <div className={styles.actionButtons}>
              <button onClick={handleRetry} className={styles.primaryButton}>
                Try Again
              </button>
              <button onClick={handleGoHome} className={styles.secondaryButton}>
                Go to Home
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout2>
      <div className={styles.container}>
        <div className={styles.content}>
          {renderContent()}
        </div>
      </div>
    </Layout2>
  );
};

export default PaymentCallback;