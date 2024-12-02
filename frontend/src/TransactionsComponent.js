import React, { useContext, useState } from 'react';
import { AppContext } from './context/Appcontext';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './TransactionsComponent.css';

const TransactionsComponent = () => {
  const { transactions, loading } = useContext(AppContext);
  const [selectedMonth, setSelectedMonth] = useState(localStorage.getItem('selectedMonth') || '');
  const navigate = useNavigate();

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
    localStorage.setItem('selectedMonth', month); // Save month to local storage
  };

  const handleGetAnalysis = () => {
    if (selectedMonth) {
      
   
      navigate('/analysis'); // Navigate to analysis page
    } else {
      alert('Please select a month for analysis.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="transactions-container">
        <h2>Transactions</h2>
        <br />
        <div className="actions-container">
          <Link to="/use_Filter" className="filter-link">Use Filters</Link>
          <div className="analysis-container">
            <select 
              value={selectedMonth} 
              onChange={handleMonthChange} 
              className="month-dropdown"
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <button onClick={handleGetAnalysis} className="analysis-button">
              Get Analysis
            </button>
          </div>
        </div>
        {transactions.length > 0 ? (
          <ul className="transactions-list">
            {transactions.map(transaction => (
              <li key={transaction._id} className="transaction-item">
                <p><strong>Description:</strong> {transaction.description}</p>
                <p><strong>Type:</strong> {transaction.type}</p>
                <p><strong>Category:</strong> {transaction.category}</p>
                <p><strong>Amount:</strong> ₹{transaction.amount}</p>
                <p><strong>Month:</strong> {transaction.month}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No transactions found.</p>
        )}
      </div>
    </>
  );
};

export default TransactionsComponent;
