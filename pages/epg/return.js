import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function EpgReturnPage() {
  const router = useRouter();
  const { transactionId } = router.query;
  const [status, setStatus] = useState('finalizing');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!transactionId) return;
    const finalize = async () => {
      try {
        setStatus('finalizing');
        const res = await fetch('/api/epg/finalize', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ transactionId }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data?.error || 'Finalization failed');
          setStatus('error');
          return;
        }
        setResult(data?.result || data);
        setStatus('success');
      } catch (e) {
        setError('Network or server error');
        setStatus('error');
      }
    };
    finalize();
  }, [transactionId]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Payment Status</h1>
      {status === 'finalizing' && <p>Finalizing your payment...</p>}
      {status === 'error' && (
        <div>
          <p style={{ color: 'red' }}>Error: {String(error)}</p>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
      {status === 'success' && (
        <div>
          <p>Payment completed.</p>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
