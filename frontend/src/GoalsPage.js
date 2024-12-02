import React, { useState, useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { AppContext } from './context/Appcontext';

const GoalsPage = () => {
  const { creategoal, user_id } = useContext(AppContext);
  const [goalData, setGoalData] = useState({
    description: '',
    money: '',
    timeframe: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGoalData({ ...goalData, [name]: value });
  };

  const handleSubmit = (e) => {

    // const storedUser = localStorage.getItem('user');
    const storedUserId = localStorage.getItem('user_id');
    e.preventDefault();
    if (!goalData.description || !goalData.money || !goalData.timeframe) {
      alert('Please fill in all fields.');
      return;
    }
    creategoal(storedUserId, goalData);
    console.log('New Goal:', goalData);

    // Clearing the form inputs
    setGoalData({
      description: '',
      money: '',
      timeframe: ''
    });
  };

  return (
    <>
      <Navbar />
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',  // Light gray background
        height: '100vh'
      }}>
        <div style={{ 
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '15px',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          width: '90%',
          maxWidth: '800px',
          lineHeight: '1.6',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem',
            color: '#000dff',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>My Goals</h1>
          
          {/* Form to add a new goal */}
          <form style={{ 
            display: 'grid',
            gridGap: '1rem',
            marginBottom: '1rem'
          }} onSubmit={handleSubmit}>
            <label style={{ 
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }} htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={goalData.description}
              onChange={handleInputChange}
              style={{ 
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              required
            />
            <label style={{ 
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }} htmlFor="money">Money Needed:</label>
            <input
              type="number"
              id="money"
              name="money"
              value={goalData.money}
              onChange={handleInputChange}
              style={{ 
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              required
            />
            <label style={{ 
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }} htmlFor="timeframe">Timeframe (months):</label>
            <input
              type="number"
              id="timeframe"
              name="timeframe"
              value={goalData.timeframe}
              onChange={handleInputChange}
              style={{ 
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '10px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              required
            />
            <button type="submit" style={{ 
              padding: '0.75rem',
              backgroundColor: '#000dff',
              border: 'none',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}>Add Goal</button>
          </form>
          <Link to='/all_goals' style={{display:'flex',justifyContent:'center', alignItems:'center',cursor:'pointer'}}><button style={{background:'blue', color:'white',font:'17px',width:'570px', borderRadius:'5px',textAlign:'center',height:'30px'}} >View All Goals</button></Link> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GoalsPage;
