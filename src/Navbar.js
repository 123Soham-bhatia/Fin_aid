import React from 'react';

const Navbar = () => {
  const status = localStorage.getItem('user_status');
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>FinanceAdvice</div>
      <ul id="navLinks" style={styles.navLinks}>
        <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="/goals" style={styles.navLink}>Goals</a></li>
        <li style={styles.navItem}><a href="/advice" style={styles.navLink}>Advice</a></li>
        <li style={styles.navItem}>
          <a href={status ? "/profilepage" : "/profile"} style={styles.navLink}>Profile</a>
        </li>
      </ul>
      <div style={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};

const toggleMenu = () => {
  const navLinks = document.getElementById('navLinks');
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#000dff',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    top: '0',
    zIndex: '1000'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    paddingLeft : '15px'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: '0',
    paddingRight: '30px',
    font:'bold'
  },
  navItem: {
    margin: '0 1rem'
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s'
  },
  hamburger: {
    display: 'none',
    fontSize: '2rem',
    cursor: 'pointer'
  },
};

const mobileStyles = {
  navLinks: {
    display: 'none',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#000dff',
    position: 'absolute',
    top: '60px',
    left: '0'
  },
  hamburger: {
    display: 'block'
  },
  navItem: {
    margin: '1rem 0',
    textAlign: 'center'
  }
};

// Merge the styles
const mergedStyles = { ...styles, '@media (max-width: 768px)': mobileStyles };

export default Navbar;
