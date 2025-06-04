import React, { useEffect, useState } from 'react';
import Header from '../Header';

const Payouts = () => {
  const [payout, setPayout] = useState(999445);

  useEffect(() => {
    const interval = setInterval(() => {
      setPayout(prev => prev + 1);
    }, 1000);


    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <>
      <Header
        planTitle="Payouts"
        title={<><h1>We've Paid Out Over $1M to Traders</h1></>}
        subtitle="Your Trust is Our Fuel—Power Up with Abcd"
      />

      <div style={{ textAlign: 'center', marginTop: '40px', color: '#fff' }}>
        <h1 style={{ fontSize: '4rem' }}>
          ${payout.toLocaleString()}+
        </h1>
        <button
        >
          Are you Next? →
        </button>
      </div>
    </>
  );
};

export default Payouts;
