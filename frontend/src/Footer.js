import React from 'react';

const Footer = () => {
    return <div>
          <footer style={styles.footer}>
        <p style={styles.footerText}>&copy; 2024 FinanceAdvice. All rights reserved.</p>
      </footer>
    </div>;
}

const styles = {

    footer: {
        backgroundColor: '#000dff',
        color: '#fff',
        textAlign: 'center',
        padding: '1rem 0',
        position: 'fixed',
        width: '100%',
        bottom: '0'
      },
      footerText: {
        margin: '0'
      }
    };

export default Footer;