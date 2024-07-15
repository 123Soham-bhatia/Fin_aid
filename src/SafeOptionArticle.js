import React from 'react';

const SafeInvestmentPage = () => {
  return (
    <div style={styles.fullScreenContainer}>
      <div style={styles.articleContainer}>
        <h1 style={styles.title}>Safe Investment Options</h1>
        <p style={styles.paragraph}>
          Safe investment options prioritize capital preservation with modest returns. Consider the following strategies:
        </p>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>1. Savings Accounts</h2>
          <p style={styles.paragraph}>
            Savings accounts are low-risk options that offer liquidity and security. They provide easy access to funds with minimal or no risk to your principal amount.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>2. Government Bonds</h2>
          <p style={styles.paragraph}>
            Government bonds are considered safe investments as they are backed by the government's credit, ensuring repayment of principal and interest. They typically offer fixed returns over a specified period.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>3. Fixed Deposits</h2>
          <p style={styles.paragraph}>
            Fixed deposits (FDs) are secure investments offered by banks. They provide a fixed interest rate for a predetermined period, ensuring stable returns and capital protection.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>4. Systematic Investment Plans (SIPs)</h2>
          <p style={styles.paragraph}>
            SIPs are a safe and disciplined way to invest in mutual funds. They allow you to invest small amounts regularly, reducing the impact of market volatility through rupee cost averaging.
          </p>
          <p style={styles.paragraph}>
            SIPs are suitable for long-term goals and can help build wealth steadily over time.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Considerations</h2>
          <p style={styles.paragraph}>
            - Assess your risk tolerance and investment horizon before choosing safe investment options.<br />
            - Diversify your investments to spread risk across different asset classes.<br />
            - Monitor market conditions and adjust your portfolio as needed to align with your financial goals.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  fullScreenContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',  // Light gray background
  },
  articleContainer: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '800px',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    color: '#000dff',
    marginBottom: '1rem',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#000dff',
    marginBottom: '0.5rem'
  },
  paragraph: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '1rem'
  },
  section: {
    marginBottom: '2rem'
  }
};

export default SafeInvestmentPage;
