import { useRouter } from 'next/router';

export default function PaymentResult() {
  const router = useRouter();
  const { status, tid } = router.query || {};

  const isSuccess = String(status).toLowerCase() === 'success';

  return (
    <div style={{ maxWidth: 720, margin: '80px auto', padding: '0 16px' }}>
      <h1>Payment {isSuccess ? 'Successful' : 'Status'}</h1>
      <p>
        Transaction ID: <strong>{tid || '-'}</strong>
      </p>
      {isSuccess ? (
        <p>Thank you! Your donation has been received.</p>
      ) : (
        <p>Your payment status is: {status || 'unknown'}. If this was unexpected, please try again.</p>
      )}
      <button onClick={() => router.push('/')}>Go to Home</button>
    </div>
  );
}
