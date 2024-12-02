import React from 'react';

const HighRiskInvestmentArticle = () => {
  return (
    <div style={styles.fullScreenContainer}>
      <div style={styles.articleContainer}>
        <h1 style={styles.title}>High Risk Investment Plans</h1>
        <p style={styles.paragraph}>
          High-risk investment plans focus on maximizing returns, albeit with increased volatility. Here are some strategies to consider:
        </p>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Allocation Strategy</h2>
          <p style={styles.paragraph}>
            Allocate your investment portfolio as follows:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>40% in Nifty Fifty Companies:</strong> Maintain some stability with established large-cap companies.</li>
            <li style={styles.listItem}><strong>30% in Mid-Level Index Companies:</strong> Invest in mid-cap companies for balanced growth potential.</li>
            <li style={styles.listItem}><strong>20% in Small Index Companies:</strong> Allocate to small-cap companies with higher growth potential.</li>
            <li style={styles.listItem}><strong>10% in Bitcoin:</strong> Allocate a small portion to Bitcoin for exposure to cryptocurrency.</li>
          </ul>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Why Nifty Fifty?</h2>
          <p style={styles.paragraph}>
            Nifty Fifty companies offer a stable foundation due to their established market presence and consistent performance, even in a high-risk portfolio.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Incorporating Bitcoin</h2>
          <p style={styles.paragraph}>
            Bitcoin can offer significant returns due to its potential for high growth. However, it's highly volatile and should be limited to a small portion of your portfolio.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Benefits of Mid and Small Index Companies</h2>
          <p style={styles.paragraph}>
            - <strong>Mid-Level Index Companies:</strong> These companies provide a balance between growth potential and risk. They are generally more dynamic and can offer significant returns over time.<br />
            - <strong>Small Index Companies:</strong> Small-cap stocks can provide high returns, especially during market uptrends, but they come with higher risk and volatility.
          </p>
        </div>
        
        <div style={styles.section}>
          <h2 style={styles.subtitle}>Considerations</h2>
          <p style={styles.paragraph}>
            - Regularly review and adjust your portfolio to maintain the desired allocation.<br />
            - Consider using mutual funds or exchange-traded funds (ETFs) to gain diversified exposure to different market segments.<br />
            - Stay informed about market trends and economic conditions that may impact your investments.
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
  },
  list: {
    margin: '1rem 0',
    paddingLeft: '1rem',
    listStyleType: 'disc'
  },
  listItem: {
    marginBottom: '0.5rem'
  }
};

export default HighRiskInvestmentArticle;
