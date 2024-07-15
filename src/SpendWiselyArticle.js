import React from 'react';

const SpendWiselyArticle = () => {
  return (
    <div style={styles.fullScreenContainer}>
      <div style={styles.articleContainer}>
        <h1 style={styles.title}>Spend Wisely: Get the Most Value for Your Money</h1>
        <p style={styles.paragraph}>
          In today's world, managing your finances effectively is more crucial than ever. Whether you're saving for a major purchase, planning for retirement, or simply trying to make ends meet, spending wisely can help you get the most value for your money. Here are some practical tips to help you become a smarter spender.
        </p>
        <h2 style={styles.subtitle}>1. Create a Budget</h2>
        <p style={styles.paragraph}>
          Creating a budget is the cornerstone of financial management. It allows you to track your income and expenses, understand your financial situation, and make informed spending decisions.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>List Your Income:</strong> Include all sources of income such as salary, freelance work, investments, etc.
          </li>
          <li style={styles.listItem}>
            <strong>Track Your Expenses:</strong> Categorize your expenses into fixed (rent, utilities) and variable (groceries, entertainment).
          </li>
          <li style={styles.listItem}>
            <strong>Set Limits:</strong> Allocate a specific amount to each expense category and stick to it. This helps prevent overspending.
          </li>
        </ul>
        <h2 style={styles.subtitle}>2. Differentiate Between Needs and Wants</h2>
        <p style={styles.paragraph}>
          Understanding the difference between needs (essential expenses) and wants (discretionary expenses) is crucial. Prioritize spending on needs first and allocate leftover funds to wants.
        </p>
        <h2 style={styles.subtitle}>3. Comparison Shopping</h2>
        <p style={styles.paragraph}>
          Before making a purchase, compare prices and features across different brands or stores. Take advantage of discounts, promotions, and loyalty programs to save money.
        </p>
        <h2 style={styles.subtitle}>4. Avoid Impulse Purchases</h2>
        <p style={styles.paragraph}>
          Impulse purchases can derail your budget. Take time to evaluate whether a purchase aligns with your financial goals and whether it offers long-term value.
        </p>
        <h2 style={styles.subtitle}>5. Save and Invest Regularly</h2>
        <p style={styles.paragraph}>
          Allocate a portion of your income towards savings and investments. Building an emergency fund and investing for the future ensures financial security and growth.
        </p>
        <h2 style={styles.subtitle}>6. Review and Adjust Regularly</h2>
        <p style={styles.paragraph}>
          Periodically review your budget and spending habits. Adjust your budget as needed to reflect changes in income, expenses, and financial goals.
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
    backgroundColor: '#f0f0f0', // Light gray background
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
  }
};

export default SpendWiselyArticle;
