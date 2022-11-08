/* https://fabisiakradoslaw.medium.com/understand-react-hooks-in-a-few-minutes-and-use-it-from-now-5020df968486 */

import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [balance, setBalance] = useState(1500);
  const [savingBalance, setSavingBalance] = useState(500);
  const [notification, setNotfication] = useState(false);

  const handleSaving = () => {
    if (balance > 1000) {
      setBalance(balance - 100);
      setSavingBalance(savingBalance + 100);
    }
  };

  const handleSpending = () => {
    setBalance(balance + 100);
    setSavingBalance(savingBalance - 100);
  };

  useEffect(() => {
    if (balance <= 1000) {
      setNotfication(true);
    }
  }, [balance]);

  return (
    <div className='container'>
      <div className='notification-section'>
        {notification && (
          <div className='notification'>
            <button onClick={() => setNotfication(false)}>X</button>
            <p>Balance too low, cannot transfer anymore</p>
          </div>
        )}
      </div>
      <div className='balance'>
        <div className='col balance-section'>
          <h4 className='title'>My Balance</h4>
          <p>${balance}</p>
          <button className='btn' onClick={() => handleSaving()}>
            Spend $100
          </button>
        </div>
        <div className='col saving-balance-section'>
          <h4 className='title'>My Saving Balance</h4>
          <p>${savingBalance}</p>
          <button className='btn' onClick={() => handleSpending()}>
            Spend $100
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
