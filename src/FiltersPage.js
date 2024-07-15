import React, { useState } from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from './context/Appcontext';


const FiltersPage = ({ onSubmit }) => {
  const{fetchTransactions} = useContext(AppContext);
  const [filters, setFilters] = useState({
    month: 'All',
    category: 'All',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const call_func=()=>{
    const id = localStorage.getItem("user_id");
    fetchTransactions(id,filters.month,filters.category)
  }


  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <div style={styles.contentContainer}>
          <h1 style={styles.pageTitle}>Filters</h1>
          <form  style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Month</label>
              <select
                name="month"
                value={filters.month}
                onChange={handleFilterChange}
                style={styles.select}
              >
                <option value="All">All</option>
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
              <label style={styles.label}>Category</label>
              <select
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
                style={styles.select}
              >
                <option value="All">All</option>
                <option value="Salary">Salary</option>
                <option value="Necessary Expenses">Necessary Expenses</option>
                <option value="Parties">Parties</option>
                <option value="Travel">Travel</option>
                <option value="Online Shopping">Online Shopping</option>
                <option value="Eating Junk">Eating Junk</option>
                <option value="Gym">Gym</option>
                <option value="Streaming Services">Streaming Services</option>
              </select>
            </div>
          <button style={{color:'black',textDecoration:'none'}} ><Link to='/readtransaction' onClick={call_func} >  <button style={styles.submitButton}>Apply Filters</button></Link></button>
          </form>
        </div>
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
    width: '50%',
    alignSelf: 'center',
  },
};

export default FiltersPage;
