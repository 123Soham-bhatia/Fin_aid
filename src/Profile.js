import React from 'react';
import Navbar from './Navbar';
import { useContext } from 'react';
import { AppContext } from './context/Appcontext';

const Profile = () => {
  const {logoutUser} = useContext(AppContext);

  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = localStorage.getItem('user_id');

  console.log(user);
  console.log(user_id);

  const handleLogout = () => {
  logoutUser();
    window.location.href = '/'; // Redirect to home or login page
  };

  if (!user) {
    return <div style={styles.profileContainer}>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div style={styles.profileContainer}>
        <h1 style={styles.header}>Profile</h1>
        <div style={styles.profileDetails}>
          <div style={styles.detailItem}>
            <span style={styles.label}>Username:</span> {user.username}
          </div>
          <div style={styles.detailItem}>
            <span style={styles.label}>Email:</span> {user.email}
          </div>
          <div style={styles.detailItem}>
            <span style={styles.label}>User ID:</span> {user_id}
          </div>
          <button style={styles.logoutButton} onClick={handleLogout}>Log Out</button>
        </div>
      </div>
    </>
  );
};

const styles = {
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '2rem'
  },
  profileDetails: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    width: '80%',
    maxWidth: '500px'
  },
  detailItem: {
    marginBottom: '1rem',
    fontSize: '1.2rem',
    color: '#666'
  },
  label: {
    fontWeight: 'bold',
    color: '#333'
  },
  logoutButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#000dff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s'
  }
};

export default Profile;
