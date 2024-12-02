import React, { useEffect, useContext } from 'react';
import { AppContext } from './context/Appcontext';

const Allgoals = () => {
  const { getallgoals, user_id, goals } = useContext(AppContext);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedUserId = localStorage.getItem('user_id');
    if (storedUser&& storedUserId) {
      console.log('User ID:', storedUserId);
      getallgoals(storedUserId);
    } else {
      console.log('User is null or undefined');
    }
  }, [user_id, getallgoals]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem',
        color: '#000dff',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>All Goals</h1>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        width: '100%',
        maxWidth: '800px'
      }}>
        {goals && goals.length > 0 ? (
          goals.map((goal, index) => (
            <li key={index} style={{
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: '1rem',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <strong style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Description:</strong> 
              <span style={{ marginBottom: '0.5rem' }}>{goal.description}</span>
              <strong style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Money Needed:</strong> 
              <span style={{ marginBottom: '0.5rem' }}>₹{goal.money}</span>
              <strong style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Timeframe:</strong> 
              <span>{goal.timeframe} months</span>
            </li>
          ))
        ) : (
          <li style={{
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>No goals found</li>
        )}
      </ul>
    </div>
  );
};

export default Allgoals;
