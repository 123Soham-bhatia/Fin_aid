import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [user_id, setuser_id] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [Month, setMonth] = useState();
  const [goal, setgoal] = useState(null);
  const [Category, setCategory] = useState();
  const [goals, setgoals] = useState([]);
  const [percentage, setpercentage] = useState({
    necessaryPercentage: 0,
    luxuriesPercentage: 0,
    savingPercentage: 0
  });
  const [savings, setSavings] = useState([]);
  const [status, setstatus] = useState(false);

  const fetchSavings = async (userId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fin-aid.onrender.com/savings/${userId}`);
      setSavings(response.data);
    } catch (error) {
      console.error('Error fetching savings:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const analysis = async (user_id, Month) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fin-aid.onrender.com/getpercentage/${user_id}?month=${Month}`);
      setpercentage(response.data);
      if (percentage.luxuriesPercentage !== null || percentage.necessaryPercentage !== null || percentage.savingPercentage !== null) {
        localStorage.setItem("percentage", JSON.stringify(response.data));
      }
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getallgoals = async (userd) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fin-aid.onrender.com/all_goals/${userd}`);
      setgoals(response.data);
    } catch (error) {
      console.error('Error fetching goals:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTransactions = async (user_id, Month, Category) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://fin-aid.onrender.com/readtransaction?user=${user_id}&month=${Month}&category=${Category}`);
      setTransactions(response.data.transactions);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    setLoading(true);
    try {
      const response = await axios.post('https://fin-aid.onrender.com/loginuser', {
        email,
        password,
      });
      setLoading(false);
      setuser_id(response.data._id);
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      localStorage.setItem('user_id', response.data._id);
      setstatus(true);
      localStorage.setItem('user_status', true);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const createUser = async (username, email, password) => {
    setLoading(true);
    try {
      const response = await axios.post('https://fin-aid.onrender.com/createUser', {
        username, email, password,
      });
      console.log(response.data);
      setstatus(response.data.status);
      setLoading(false);
      setUser(response.data.user);
      setuser_id(response.data.user._id);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('user_id', response.data.user._id);
      setstatus(true);
      localStorage.setItem('user_status', true);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logoutUser = () => {
    setUser(null);
    setuser_id(null);
    setstatus(false);
    localStorage.removeItem('user');
    localStorage.removeItem('user_id');
    localStorage.removeItem('status');
    setstatus(false);
    localStorage.removeItem('user_status');
    localStorage.removeItem('percentage');
  };

  useEffect(() => {
    if (user_id) {
      console.log('Updated user_id:', user_id);
      console.log('User:', user);
      console.log('Status:', status);
    }
  }, [user_id, user, status]);

  const getAllUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://fin-aid.onrender.com/readuser');
      setUsers(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error.response ? error.response.data.message : 'Server error');
      throw error;
    }
  };

  const getUserById = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://fin-aid.onrender.com/readSingleUser/${userId}`);
      setUser(response.data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error.response ? error.response.data.message : 'Server error');
      throw error;
    }
  };

  const updateUserById = async (userId, userData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`https://fin-aid.onrender.com/updateUser/${userId}`, userData);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error.response ? error.response.data.message : 'Server error');
      throw error;
    }
  };

  const creategoal = async (userId, goalData) => {
    setLoading(true);
    try {
      const response = await axios.post('https://fin-aid.onrender.com/creategoal', {
        userId, ...goalData
      });
      setLoading(false);
      setgoal(response.data);
      console.log(response.data);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const creatransaction = async (userId, formData) => {
    setLoading(true);
    try {
      const response = await axios.post('https://fin-aid.onrender.com/createtransaction', {
        user: userId,
        ...formData
      });
      setLoading(false);
      return response.data;
    } catch (error) {
      console.error(error);
      setLoading(false);
      throw error;
    }
  };

  const value = {
    loading, setLoading, loginUser, createUser, creategoal, creatransaction, getAllUsers, updateUserById,
    getUserById, users, user, setUser, setUsers, error, setError, user_id, setuser_id, fetchTransactions,
    transactions, setTransactions, Month, setMonth, Category, setCategory, goal, setgoal, getallgoals,
    goals, setgoals, analysis, percentage, setpercentage, fetchSavings, savings, setSavings, status,
    setstatus, logoutUser
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
