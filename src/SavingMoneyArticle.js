import React from 'react';

const SavingMoneyArticle = () => {
  return (
    <div style={styles.fullScreenContainer}>
      <div style={styles.articleContainer}>
        <h1 style={styles.title}>Strategies to Save Money and Grow Your Wealth</h1>
        <p style={styles.paragraph}>
          Saving money is crucial for financial security and building wealth. By following disciplined strategies, you can manage your finances effectively, prioritize savings, and balance your spending.
        </p>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>1. Budgeting Basics</h2>
          <p style={styles.paragraph}>
            Create a budget using the 50/30/20 rule:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>50% for Needs:</strong> Essential expenses like rent, utilities, groceries.</li>
            <li style={styles.listItem}><strong>30% for Wants:</strong> Non-essential items such as dining out, entertainment.</li>
            <li style={styles.listItem}><strong>20% for Savings:</strong> Allocate towards savings, retirement, and emergency funds.</li>
          </ul>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>2. Increase Savings Over Time</h2>
          <p style={styles.paragraph}>
            Gradually increase savings by 1% each month to build a robust savings habit.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>3. Automate Savings</h2>
          <p style={styles.paragraph}>
            Set up automatic transfers from your checking to savings account to prioritize savings.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>4. Track and Cut Expenses</h2>
          <p style={styles.paragraph}>
            Regularly review expenses to identify areas to cut back and optimize spending.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>5. Build an Emergency Fund</h2>
          <p style={styles.paragraph}>
            Save three to six months' worth of living expenses in an emergency fund for financial security.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>6. Invest Wisely</h2>
          <p style={styles.paragraph}>
            Once savings are established, consider investing wisely to grow wealth over time.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>7. Review and Adjust Regularly</h2>
          <p style={styles.paragraph}>
            Periodically review your budget, savings, and investment strategy to stay on track with financial goals.
          </p>
        </div>
        
        <p style={styles.quote}>
          "Do not save what is left after spending, but spend what is left after saving."
          <br />- Warren Buffett
        </p>
        
      </div>
    </div>
  );
};

const styles = {
  fullScreenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#f0f0f0',  // Light gray background
  },
  articleContainer: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
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
  list: {
    paddingLeft: '1rem',
    marginBottom: '1rem'
  },
  listItem: {
    fontSize: '1rem',
    color: '#333',
    marginBottom: '0.5rem'
  },
  section: {
    marginBottom: '2rem'
  },
  quote: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: '2rem 0',
    padding: '1rem',
    backgroundColor: '#f9f9f9',
    borderLeft: '5px solid #000dff',  // Accent color
    borderRadius: '5px',
    fontFamily: 'Georgia, serif',
    color: '#555'
  }
};

export default SavingMoneyArticle;
