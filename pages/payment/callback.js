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
  const [isProcessing, setIsProcessing] = useState(true);
  const hasProcessed = useRef(false);
  const hasFinalized = useRef(false);


  // Function to handle finalization with duplicate prevention
  const finalizeTransaction = async (transactionId, paymentInfo = null) => {
    if (hasFinalized.current) {
      console.log('Finalization already in progress, skipping...');
      return;
    }

    hasFinalized.current = true;
    console.log('Starting finalization for transaction:', transactionId);

    try {
      // Use GET request with query parameters for the callback API
      const params = new URLSearchParams({
        TransactionID: transactionId,
        ...(paymentInfo?.customerId && { customerId: paymentInfo.customerId }),
        ...(paymentInfo?.amount && { amount: paymentInfo.amount }),
        ...(paymentInfo?.cardToken && { cardToken: paymentInfo.cardToken }),
        ...(paymentInfo?.ipAddress && { ipAddress: paymentInfo.ipAddress })
      });

      const response = await fetch(`/api/payment-callback?${params}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        
        // Handle 400 errors as failed payments instead of throwing
        try {
          const errorResult = JSON.parse(errorText);
          
          // Check if it's a duplicate finalization error
          if (errorResult.error && errorResult.error.includes('failed previous finalize request')) {
            // Try to query the transaction status instead
            const queryResponse = await fetch(`/api/ubl-payment?action=query&transactionId=${transactionId}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              }
            });
            
            if (queryResponse.ok) {
              const queryResult = await queryResponse.json();
              if (queryResult.success) {
                setPaymentStatus('success');
                setPaymentData({
                  transactionId: transactionId,
                  amount: paymentInfo?.amount || 0,
                  status: 'success',
                  donorInfo: paymentInfo?.donorInfo || null
                });
                return;
              }
            }
          }
          
          setError(errorResult.error || 'Payment failed');
          setPaymentStatus('failed');
          
          // Set payment data for failed transaction display
          setPaymentData({
            transactionId: transactionId,
            amount: paymentInfo?.amount || 0,
            status: 'failed',
            error: errorResult.error
          });
          
          return;
        } catch (parseError) {
          // If we can't parse the error, fall back to throwing
          throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
        }
      }

      const result = await response.json();

      if (result.success) {
        setPaymentStatus('success');
        
        // Store successful payment data
        const successData = {
          ...result,
          transactionId: transactionId,
          amount: paymentInfo?.amount || result.amount || 0,
          timestamp: new Date().toISOString(),
          donorInfo: paymentInfo?.donorInfo || null,
          approvalCode: result.approvalCode,
          cardNumber: result.cardNumber,
          cardBrand: result.cardBrand
        };
        
        setPaymentData(successData);
        sessionStorage.setItem('lastPayment', JSON.stringify(successData));
        
        // Clear pending transaction data
        sessionStorage.removeItem('pendingTransaction');
        sessionStorage.removeItem('paymentData');
        
        console.log('Payment finalized successfully:', successData);
        
      } else {
        setError(result.error || 'Payment finalization failed');
        setPaymentStatus('failed');
      }
    } catch (error) {
      console.error('Finalization error:', error);
      
      // Set payment data for failed transaction display
      setPaymentData({
        transactionId: transactionId,
        amount: paymentInfo?.amount || 0,
        status: 'failed',
        error: error.message
      });
      
      setError(`Payment processing failed: ${error.message}`);
      setPaymentStatus('failed');
    } finally {
      try {
        setIsProcessing(false);
      } catch (e) {
        console.error('Error calling setIsProcessing:', e);
      }
    }
  };

  useEffect(() => {

    if (hasProcessed.current) {
      return;
    }

    hasProcessed.current = true;

    const timeoutId = setTimeout(() => {
      if (paymentStatus === 'processing') {
        setError('Payment processing timeout. Please check your payment status or try again.');
        setPaymentStatus('failed');
      }
    }, 15000); 

    const processPayment = async () => {
      try {
       
        const urlParams = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        
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

        // If no TransactionID found, check if we have a stored transaction
        if (!transactionId) {
          
          // Check if we have a pending transaction in sessionStorage
          const pendingTransaction = sessionStorage.getItem('pendingTransaction');
          if (pendingTransaction) {
            try {
              const pendingData = JSON.parse(pendingTransaction);
              
              // Use the stored transaction ID
              const storedTransactionId = pendingData.transactionId;
              if (storedTransactionId) {
                
                // Set payment data for display
                setPaymentData({
                  transactionId: storedTransactionId,
                  amount: pendingData.amount,
                  donorInfo: pendingData.donorInfo
                });
                
                // Call finalization API with stored transaction ID
                await finalizeTransaction(storedTransactionId, {
                  amount: pendingData.amount,
                  donorInfo: pendingData.donorInfo
                });
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
                
                // Set payment data for display
                setPaymentData(paymentData);
                
                // Call finalization API
                await finalizeTransaction(paymentData.transactionId, {
                    amount: paymentData.amount,
                    donorInfo: {
                      name: paymentData.donorName,
                      email: paymentData.donorEmail,
                      phone: paymentData.donorPhone,
                      donationType: paymentData.donationType
                    }
                });
                return;
              }
            } catch (parseError) {
              console.error('Error parsing payment data:', parseError);
            }
          }
          
          setError(`Transaction ID not found. Please check your payment status or contact support.`);
          setPaymentStatus('failed');
          
          // Set payment data for failed transaction display
          setPaymentData({
            transactionId: null,
            amount: null,
            status: 'failed',
            error: 'Transaction ID not found'
          });
          
          try {
            setIsProcessing(false);
          } catch (e) {
            console.error('Error calling setIsProcessing:', e);
          }
          return;
        }

        // Get stored payment data
        const storedData = sessionStorage.getItem('paymentData');
        const pendingTransaction = sessionStorage.getItem('pendingTransaction');
        
        let paymentInfo = null;
        if (storedData) {
          try {
            paymentInfo = JSON.parse(storedData);
            setPaymentData(paymentInfo);
          } catch (e) {
            console.error('Error parsing stored payment data:', e);
          }
        } else if (pendingTransaction) {
          try {
            paymentInfo = JSON.parse(pendingTransaction);
            setPaymentData(paymentInfo);
          } catch (e) {
            console.error('Error parsing pending transaction data:', e);
          }
        }

        // Call finalization API
        await finalizeTransaction(transactionId, {
          amount: paymentInfo?.amount || null,
          donorInfo: paymentInfo?.donorInfo || null,
          customerId: paymentInfo?.customerId || null,
          cardToken: paymentInfo?.cardToken || null,
          ipAddress: paymentInfo?.ipAddress || null
        });
      } catch (error) {
        console.error('Payment processing error:', error);
        
        // Extract transaction ID for display
        const urlParams = new URLSearchParams(window.location.search);
        const hashParams = new URLSearchParams(window.location.hash.substring(1));
        const transactionId = 
          urlParams.get('TransactionID') || 
          urlParams.get('transactionId') || 
          urlParams.get('transaction_id') ||
          hashParams.get('TransactionID') || 
          hashParams.get('transactionId') || 
          hashParams.get('transaction_id');
        
        // Set payment data for failed transaction display
        if (transactionId) {
          setPaymentData({
            transactionId: transactionId,
            amount: null,
            status: 'failed'
          });
        }
        
        setError(`Payment processing failed: ${error.message}`);
        setPaymentStatus('failed');
        
        try {
        setIsProcessing(false);
        } catch (e) {
          console.error('Error calling setIsProcessing:', e);
        }
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
      case "processing":
        return (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              gap: 8,
              padding: 16,
            }}
          >
            {/* SVG spinner (no CSS needed) */}
            <svg
              viewBox="0 0 50 50"
              style={{ width: 48, height: 48, marginBottom: 12 }}
            >
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="4"
                opacity="0.6"
              />
              <circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeDasharray="90"
                strokeDashoffset="60"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="0.9s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
  
            <h2 style={{ margin: 0 }}>Processing Your Payment</h2>
            <p style={{ margin: 0 }}>Please wait while we confirm your donation...</p>
          </div>
        );

      case "success":
        return (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              gap: 8,
              padding: 16,
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 8, color: "#16a34a" }}>✓</div>
            <h2 style={{ margin: 0 }}>Payment Successful!</h2>
            <p style={{ margin: 0 }}>
              Thank you for your generous donation. Your contribution will help make a difference.
            </p>
            
            {paymentData && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 560,
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: 12,
                  marginTop: 12,
                  textAlign: "left",
                }}
              >
                <h3 style={{ margin: "0 0 8px 0", fontSize: 16 }}>Payment Details</h3>
  
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "6px 0",
                    fontSize: 14,
                  }}
                >
                  <span>Transaction ID:</span>
                  <span>{paymentData.transactionId}</span>
                </div>
  
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "6px 0",
                    fontSize: 14,
                  }}
                >
                  <span>Amount:</span>
                  <span>PKR {paymentData.amount}</span>
                </div>
  
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "6px 0",
                    fontSize: 14,
                  }}
                >
                  <span>Donation Type:</span>
                  <span>{paymentData.donorInfo?.donationType || "General Donation"}</span>
                </div>
  
                {paymentData.approvalCode && (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      padding: "6px 0",
                      fontSize: 14,
                    }}
                  >
                    <span>Approval Code:</span>
                    <span>{paymentData.approvalCode}</span>
                  </div>
                )}
              </div>
            )}

            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              <button
                onClick={handleGoHome}
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #3b82f6",
                  background: "#3b82f6",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Go to Home
              </button>
              <button
                onClick={() => window.print()}
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
                Print Receipt
              </button>
            </div>
          </div>
        );

       case "failed":
        return (
           <div
             style={{
               height: "100vh",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               flexDirection: "column",
               textAlign: "center",
               gap: 8,
               padding: 16,
             }}
           >
             <div style={{ fontSize: 40, marginBottom: 8, color: "#ef4444" }}>✗</div>
             <h2 style={{ margin: 0 }}>Payment Failed</h2>
             <p style={{ margin: 0 }}>
               {error || "Your payment could not be processed. Please try again."}
             </p>
             
             {/* Display Transaction ID prominently for failed payments */}
             {paymentData && paymentData.transactionId && (
               <div
                 style={{
                   width: "100%",
                   maxWidth: 560,
                   border: "2px solid #ef4444",
                   borderRadius: 12,
                   padding: 16,
                   marginTop: 16,
                   backgroundColor: "#fef2f2",
                   textAlign: "left",
                 }}
               >
                 <h3 style={{ margin: "0 0 12px 0", fontSize: 18, color: "#dc2626" }}>
                   Failed Transaction Details
                 </h3>
                 <div
                   style={{
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                     padding: "8px 0",
                     fontSize: 16,
                     fontWeight: "bold",
                   }}
                 >
                   <span>Transaction ID:</span>
                   <span style={{ color: "#dc2626", fontFamily: "monospace" }}>
                     {paymentData.transactionId}
                   </span>
                 </div>
                 {paymentData.amount && (
                   <div
                     style={{
                       display: "flex",
                       justifyContent: "space-between",
                       padding: "4px 0",
                       fontSize: 14,
                     }}
                   >
                     <span>Amount:</span>
                     <span>PKR {paymentData.amount}</span>
                   </div>
                 )}
                 <div
                   style={{
                     display: "flex",
                     justifyContent: "space-between",
                     padding: "4px 0",
                     fontSize: 14,
                   }}
                 >
                   <span>Status:</span>
                   <span style={{ color: "#dc2626", fontWeight: "bold" }}>FAILED</span>
                 </div>
                 {paymentData.error && (
                   <div
                     style={{
                       padding: "8px 0",
                       fontSize: 14,
                       color: "#dc2626",
                       fontWeight: "bold",
                       borderTop: "1px solid #fecaca",
                       marginTop: "8px",
                       paddingTop: "8px"
                     }}
                   >
                     <span>Error: {paymentData.error}</span>
                   </div>
                 )}
               </div>
             )}
  
            {debugInfo && (
              <div
                style={{
                  width: "100%",
                  maxWidth: 560,
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: 12,
                  marginTop: 12,
                  textAlign: "left",
                  whiteSpace: "pre-wrap",
                }}
              >
                <h4 style={{ margin: "0 0 8px 0" }}>Debug Information:</h4>
                <pre style={{ margin: 0 }}>{debugInfo}</pre>
              </div>
            )}
            
            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              <button
                onClick={handleRetry}
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #3b82f6",
                  background: "#3b82f6",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Try Again
              </button>
              <button
                onClick={handleGoHome}
                style={{
                  padding: "10px 14px",
                  borderRadius: 10,
                  border: "1px solid #e5e7eb",
                  background: "#fff",
                  cursor: "pointer",
                }}
              >
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
        <div className={styles.content}
        >
          {renderContent()}
        </div>
      </div>
    </Layout2>
  );
};

export default PaymentCallback;