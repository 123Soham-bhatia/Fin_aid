// components/UserPage.js
import React, { useContext } from 'react';
import { AppContext } from './context/Appcontext';

const UserPage = () => {
  const { user } = useContext(AppContext);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Information</h1>
      <div style={styles.userInfo}>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Total Income:</strong> {user.totalIncome}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    color: '#000dff',
  },
  userInfo: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
  },
};

export default UserPage;
