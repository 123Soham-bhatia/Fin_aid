import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './context/Appcontext';
import Navbar from './Navbar';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { createUser, loginUser, status, setError } = useContext(AppContext);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (status === true) {
      navigate('/profilepage');
    } else if (status === false) {
      setErrorMessage('Invalid credentials. Please try again.');
      setError(null);
    }
  }, [status, navigate, setError]);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage('');
  };

  return (
    <>
      <Navbar />
      <div style={styles.authContainer}>
        <div style={styles.authFormContainer}>
          <div style={styles.authToggle}>
            <button
              style={{ ...styles.toggleButton, ...(isLogin ? styles.activeToggleButton : {}) }}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              style={{ ...styles.toggleButton, ...(!isLogin ? styles.activeToggleButton : {}) }}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>
          {errorMessage && <div style={styles.errorMessage}>{errorMessage}</div>}
          {isLogin ? <LoginForm loginUser={loginUser} setErrorMessage={setErrorMessage} /> : <SignupForm createUser={createUser} setErrorMessage={setErrorMessage} />}
        </div>
      </div>
    </>
  );
};

const LoginForm = ({ loginUser, setErrorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    setErrorMessage('');
    try {
      await loginUser(email, password);
      if (!user) {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <form style={styles.authForm} onSubmit={handleSubmit}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Password</label>
        <input
          type="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={styles.submitButton}>Login</button>
    </form>
  );
};

const SignupForm = ({ createUser, setErrorMessage }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    setErrorMessage('');
    try {
      await createUser(username, email, password);
      if (!user) {
        setErrorMessage('Email already registered. Please try with another email.');
      }
    } catch (error) {
      setErrorMessage('Email already registered. Please try with another email.');
    }
  };

  return (
    <form style={styles.authForm} onSubmit={handleSubmit}>
      <div style={styles.formGroup}>
        <label style={styles.label}>Username</label>
        <input
          type="text"
          style={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Password</label>
        <input
          type="password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={styles.submitButton}>Signup</button>
    </form>
  );
};

const styles = {
  authContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #ece9e6, #ffffff)',
    fontFamily: 'Arial, sans-serif'
  },
  authFormContainer: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px'
  },
  authToggle: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '1rem'
  },
  toggleButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.2rem',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.3s, color 0.3s'
  },
  activeToggleButton: {
    borderBottom: '2px solid #000dff',
    color: '#000dff'
  },
  authForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s'
  },
  submitButton: {
    padding: '0.75rem',
    backgroundColor: '#000dff',
    border: 'none',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  errorMessage: {
    color: 'red',
    marginBottom: '1rem',
    textAlign: 'center'
  }
};

export default AuthPage;
