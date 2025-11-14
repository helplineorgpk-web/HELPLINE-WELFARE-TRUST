import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRegisterDonationMutation } from '../../services/ublApi';

export default function PaymentModal({ open, onClose, amount, cause }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const iframeRef = useRef(null);
  const formRef = useRef(null);
  const fallbackTimerRef = useRef(null);
  const [registerDonation] = useRegisterDonationMutation();

  const iframeName = useMemo(() => `ublPaymentIframe_${Date.now()}`, [open]);

  useEffect(() => {
    if (!open) return;
    setError('');

    const start = async () => {
      try {
        const numericAmount = parseInt(String(amount || '').replace(/[^0-9]/g, ''), 10);
        if (!numericAmount || Number.isNaN(numericAmount) || numericAmount <= 0) {
          setError('Please enter a valid amount.');
          return;
        }
        setIsRegistering(true);
        const data = await registerDonation({ amount: numericAmount, cause: cause || 'Donation' }).unwrap();
        const { paymentPortal, transactionId } = data || {};
        if (!paymentPortal || !transactionId) throw new Error('Invalid response from server');

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = paymentPortal;
        form.target = iframeName;

        const input1 = document.createElement('input');
        input1.type = 'hidden';
        input1.name = 'TransactionID';
        input1.value = transactionId;
        form.appendChild(input1);

        const input2 = document.createElement('input');
        input2.type = 'hidden';
        input2.name = 'TransactionId';
        input2.value = transactionId;
        form.appendChild(input2);

        document.body.appendChild(form);
        formRef.current = form;
        form.submit();
        fallbackTimerRef.current = setTimeout(() => {
          try {
            if (!formRef.current) return;
            formRef.current.removeAttribute('target');
            formRef.current.submit();
          } catch (e) {
            console.error('Fallback redirect failed', e);
          }
        }, 2000);
      } catch (e) {
        console.error(e);
        setError('Unable to open payment page. Please try again.');
      } finally {
        setIsRegistering(false);
      }
    };

    start();

    return () => {
      if (formRef.current && formRef.current.parentNode) {
        formRef.current.parentNode.removeChild(formRef.current);
        formRef.current = null;
      }
      if (fallbackTimerRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }
    };
  }, [open, amount, cause, iframeName]);

  if (!open) return null;

  return (
    <div style={styles.backdrop} onClick={onClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div style={styles.header}>
          <h3 style={{ margin: 0 }}>Secure Payment</h3>
          <button onClick={onClose} style={styles.closeBtn} aria-label="Close">×</button>
        </div>
        <div style={styles.body}>
          {error ? (
            <div style={styles.error}>{error}</div>
          ) : (
            <>
              {isRegistering && (
                <div style={styles.loading}>Preparing payment…</div>
              )}
              <iframe
                ref={iframeRef}
                name={iframeName}
                title="UBL Payment"
                style={styles.iframe}
                onLoad={() => {
                  if (fallbackTimerRef.current) {
                    clearTimeout(fallbackTimerRef.current);
                    fallbackTimerRef.current = null;
                  }
                }}
              />
              <div style={styles.note}>If the payment page does not appear, your browser may be blocking iframes. In that case, close this and try again; we will redirect you directly to the bank page.</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  backdrop: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  },
  modal: {
    width: 'min(100%, 900px)',
    background: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderBottom: '1px solid #eee',
  },
  closeBtn: {
    border: 'none',
    background: 'transparent',
    fontSize: '20px',
    cursor: 'pointer'
  },
  body: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    background: '#f9f9f9'
  },
  loading: {
    padding: '12px 16px',
    color: '#555',
  },
  error: {
    padding: '12px 16px',
    color: '#a00',
    background: '#fee',
    border: '1px solid #f99',
    borderRadius: '4px',
    margin: '16px',
  },
  note: {
    padding: '8px 16px',
    fontSize: '12px',
    color: '#777',
    borderTop: '1px dashed #eee'
  }
};
