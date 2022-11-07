/* https://fabisiakradoslaw.medium.com/understand-react-hooks-in-a-few-minutes-and-use-it-from-now-5020df968486 */
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [balance, setBalance] = useState(1500);
  const [savingBalance, setSavingBalance] = useState(500);

  const handleSaving = () => {
    setBalance(balance - 100);
    setSavingBalance(savingBalance + 100);
  };

  const handleSpending = () => {
    setBalance(balance + 100);
    setSavingBalance(savingBalance - 100);
  };

  return (
    <div className='container'>
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
  );
};

export default App;
