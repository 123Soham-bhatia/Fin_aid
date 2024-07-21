import React from 'react';
import Navbar from './Navbar'; 
import "./HomePage.css" // Adjust the import path as necessary


const HomePage = () => {
  // const {status} = useContext(AppContext);
  const status = localStorage.getItem('user_status');
  return (
    <div>
      <Navbar />
      <header style={styles.header}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Welcome to FinanceAdvice</h1>
          <p style={styles.heroSubtitle}>Your trusted guide to smart financial decisions</p>
          <a href="#advice" style={styles.ctaButton}>Get Started</a>
        </div>
      </header>
      <main style={styles.main}>
        <section id="advice" style={styles.adviceSection}>
          <h2 style={styles.sectionTitle}>Financial Advice</h2>
          <div style={styles.adviceCategories}>
            <a href='/save_money' style={styles.categoryLink}>
              <div style={styles.category}>
                <h3 style={styles.categoryTitle}>Saving Money</h3>
                <p style={styles.categoryDescription}>Learn the best strategies to save money and grow your wealth over time.</p>
              </div>
            </a>
            <a href='/spend_wisely' style={styles.categoryLink}>
              <div style={styles.category}>
                <h3 style={styles.categoryTitle}>Smart Spending</h3>
                <p style={styles.categoryDescription}>Discover how to spend wisely and get the most value for your money.</p>
              </div>
            </a>
            <a href='/investment_tips' style={styles.categoryLink}>
              <div style={styles.category}>
                <h3 style={styles.categoryTitle}>Investment Tips</h3>
                <p style={styles.categoryDescription}>Find out where to invest your money for the best returns.</p>
              </div>
            </a>
            <a href={status? '/budget_planning':'/profile'} style={styles.categoryLink}>
              <div style={styles.category}>
                <h3 style={styles.categoryTitle}>Budget Planning</h3>
                <p style={styles.categoryDescription}>Create a budget that works for you and helps you achieve your financial goals.</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#000dff',
    color: '#fff',
    padding: '4rem 2rem',
    textAlign: 'center'
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto'
  },
  heroTitle: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem'
  },
  ctaButton: {
    backgroundColor: '#fff',
    color: '#000dff',
    padding: '1rem 2rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
    display: 'inline-block'
  },
  main: {
    padding: '2rem'
  },
  adviceSection: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem'
  },
  adviceCategories: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  categoryLink: {
    textDecoration: 'none',
    color: 'inherit',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  categoryLinkHover: {
    transform: 'translateY(-10px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
  },
  category: {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '1rem',
    margin: '1rem',
    maxWidth: '300px',
    textAlign: 'left',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease'
  },
  categoryTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem'
  },
  categoryDescription: {
    fontSize: '1rem'
  }
  
};

export default HomePage;
