import React, { useState } from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the best way to start saving money?",
      answer: "The best way to start saving money is by creating a budget and sticking to it. Track your income and expenses to understand where your money is going. Set aside at least 20% of your income for savings and gradually increase this amount over time."
    },
    {
      question: "How can I reduce unnecessary expenses?",
      answer: "Identify and categorize your spending to distinguish between needs and wants. Prioritize essential expenses and look for areas where you can cut back, such as dining out less often or canceling unused subscriptions."
    },
    {
      question: "What is a safe investment option?",
      answer: "Safe investment options include savings accounts, government bonds, and fixed deposits. These provide steady but low returns and ensure the safety of your capital. Systematic Investment Plans (SIPs) in mutual funds are also considered relatively safe."
    },
    {
      question: "What is a high-risk investment option?",
      answer: "High-risk investment options include stocks in emerging markets, cryptocurrencies, and small-cap companies. These investments have the potential for high returns but come with a higher risk of loss."
    },
    {
      question: "How often should I review my budget?",
      answer: "It's a good practice to review your budget monthly. This helps you stay on track with your financial goals, adjust for any changes in income or expenses, and make necessary tweaks to your spending habits."
    },
    {
      question: "How can I start investing with a small amount of money?",
      answer: "You can start investing with a small amount of money by choosing low-cost investment options like exchange-traded funds (ETFs) or starting a SIP in a mutual fund. These options allow you to invest small amounts regularly and grow your investment over time."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <div style={styles.fullScreenContainer}>
        <div style={styles.contentContainer}>
          <h2 style={styles.title}>Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div style={styles.question} onClick={() => toggleFAQ(index)}>
                {faq.question}
              </div>
              {activeIndex === index && (
                <div style={styles.answer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const styles = {
  fullScreenContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f0f0',
    padding: '1rem',
  },
  contentContainer: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '800px',
    lineHeight: '1.6',
    fontFamily: 'Arial, sans-serif',
    overflowY: 'auto',
    maxHeight: '90vh',
  },
  title: {
    fontSize: '2rem',
    color: '#000dff',
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  faqItem: {
    marginBottom: '1rem',
  },
  question: {
    fontSize: '1.2rem',
    color: '#000dff',
    cursor: 'pointer',
    marginBottom: '0.5rem',
  },
  answer: {
    fontSize: '1rem',
    color: '#333',
    paddingLeft: '1rem',
    borderLeft: '3px solid #000dff',
  },
};

export default FAQ;
