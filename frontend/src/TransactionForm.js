import React, { useContext,useState } from 'react';
import { AppContext } from './context/Appcontext';
import Navbar from './Navbar';

import { Link } from 'react-router-dom';

const TransactionForm = ({ onSubmit }) => {
  const { fetchTransactions,creatransaction } = useContext(AppContext);
  const [formData, setFormData] = useState({
    type: 'Income',
    category: 'Necessary Expenses',
    amount: '',
    month: 'January',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const create_it=()=>{

    // const storedUser = localStorage.getItem('user');
    const storedUserId = localStorage.getItem('user_id');
    creatransaction(storedUserId,formData)
  }
 

const onViewAll=()=>{
  // const storedUser = localStorage.getItem('user');
    const storedUserId = localStorage.getItem('user_id');
  fetchTransactions(storedUserId, 'All', 'All');
}

  return ( 
    <>
    <Navbar />
    <div style={styles.pageContainer}>
      <div style={styles.contentContainer}>
        <h1 style={styles.pageTitle}>Understanding Budgeting</h1>
        <p style={styles.paragraph}>
          A budget is a financial plan that helps you manage your income, expenses, and savings. It allows you to track where your money goes, make informed financial decisions, and achieve your financial goals. Budgeting is essential for maintaining financial health and avoiding debt.
        </p>
        <p style={styles.paragraph}>
          <strong>Why is budgeting needed?</strong>
        </p>
        <ul style={styles.list}>
          <li>Helps control your spending.</li>
          <li>Ensures you save money for future needs.</li>
          <li>Provides a clear picture of your financial health.</li>
          <li>Reduces financial stress by preventing overspending.</li>
        </ul>
        <p style={styles.paragraph}>
          <strong>Benefits of budgeting:</strong>
        </p>
        <ul style={styles.list}>
          <li>Better financial management.</li>
          <li>Increased savings and investments.</li>
          <li>Debt reduction and avoidance.</li>
          <li>Improved financial security and peace of mind.</li>
        </ul>
      </div>

      <div style={styles.formContainer}>
        <h2 style={styles.formTitle} onClick={create_it} >Add Transaction</h2>
        <form  style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="Salary" >Salary</option>
              <option value="Necessary Expenses">Necessary Expenses</option>
              <option value="Parties">Parties</option>
              <option value="Travel">Travel</option>
              <option value="Online Shopping">Online Shopping</option>
              <option value="Eating Junk">Eating Junk</option>
              <option value="Gym">Gym</option>
              <option value="Streaming Services">Streaming Services</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              style={styles.input}
              required
            />
            <a href="https://www.calculator.net/" target="_blank" rel="noopener noreferrer" style={styles.calculatorLink}>Use Calculator</a>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Month</label>
            <select
              name="month"
              value={formData.month}
              onChange={handleChange}
              style={styles.select}
              required
            >
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
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={styles.input}
            />
          </div>
          <button onClick={create_it}  style={styles.submitButton}>Add Transaction</button>
         
        </form>
        
      </div>
     <Link to='/readtransaction' > <button type="button" onClick={onViewAll} style={styles.viewTransactionsButton}>Show All Transactions</button></Link>
    </div>
    </>
  );
};

const styles = {
  pageContainer: {
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '3rem 0',
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '800px',
    marginBottom: '2rem',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
  },
  pageTitle: {
    fontSize: '2.5rem',
    color: '#000dff',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1rem',
  },
  list: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1rem',
    paddingLeft: '1.2rem',
    listStyleType: 'disc',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '500px',
    margin: '2rem auto',
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    color: '#000dff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    display: 'block',
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    width: '100%',
  },
  select: {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    width: '100%',
  },
  submitButton: {
    padding: '0.75rem',
    backgroundColor: '#000dff',
    border: 'none',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '1rem',
  },
  calculatorLink: {
    marginTop: '0.5rem',
    display: 'inline-block',
    color: '#000dff',
    textDecoration: 'none',
    fontSize: '0.875rem',
    marginLeft: '0.5rem',
  },
  viewTransactionsButton: {
    padding: '0.75rem',
    backgroundColor: '#000dff',
    border: 'none',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '1rem',
  },
};

export default TransactionForm;
