import React from 'react';
import Navbar from './Navbar';  // Adjust the import path as necessary

const RiskCategoriesPage = () => {
  return (
    <div>
      <Navbar />
      <header style={styles.header}>
        <h1 style={styles.title}>Investment Risk Categories</h1>
        <p style={styles.subtitle}>Choose the best investment strategy based on your risk tolerance.</p>
      </header>
      <main style={styles.main}>
        <div style={styles.categoriesContainer}>
        <a href='/safe_option' style={{color:'black', textDecoration:'none'}} >  <div style={styles.category}>
            <h2 style={styles.categoryTitle}>Safe Option</h2>
            <p style={styles.categoryDescription}>Investments with minimal risk, such as savings accounts, government bonds, and fixed deposits. These options provide steady but low returns, ensuring the safety of your capital.</p>
          </div></a>
         <a href='/mid_option' style={{color:'black' , textDecoration:'none'}} > <div style={styles.category}>
            <h2 style={styles.categoryTitle}>Medium Risk</h2>
            <p style={styles.categoryDescription}>Balanced investments like mutual funds, index funds, and real estate. These options offer moderate returns with a balanced approach to risk and reward.</p>
          </div></a>
         <a href='/high_option' style={{color:'black' , textDecoration:'none'}} > <div style={styles.category}>
            <h2 style={styles.categoryTitle}>High Risk</h2>
            <p style={styles.categoryDescription}>Investments with higher potential returns but also higher risk, such as stocks, cryptocurrencies, and commodities. Suitable for those who can handle significant volatility and potential losses.</p>
          </div></a>
        <a href='/best_option' style={{color:'black', textDecoration:'none'}} >  <div style={styles.category}>
            <h2 style={styles.categoryTitle}>Best Option</h2>
            <p style={styles.categoryDescription}>A tailored mix of various investments based on individual financial goals, risk tolerance, and time horizon. This option combines safe, medium, and high-risk investments to optimize returns.</p>
          </div></a> 
        </div>
      </main>
    
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#000dff',
    color: '#fff',
    padding: '3rem 2rem',
    textAlign: 'center'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.2rem'
  },
  main: {
    padding: '2rem',
    backgroundColor: '#f4f4f9'
  },
  categoriesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  category: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '2rem',
    margin: '1rem',
    maxWidth: '300px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    flex: '1 1 calc(25% - 2rem)'
  },
  categoryTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#000dff'
  },
  categoryDescription: {
    fontSize: '1rem',
    color: '#555'
  },
  footer: {
    backgroundColor: '#000dff',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem 0',
    marginTop: '2rem'
  },
  footerText: {
    margin: '0'
  }
};

export default RiskCategoriesPage;
