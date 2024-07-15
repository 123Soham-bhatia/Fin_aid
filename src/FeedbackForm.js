import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    feedback: '',
    rating: '',
    improvement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Feedback submitted:', formData);
    // Reset form fields after submission if needed
    setFormData({
      feedback: '',
      rating: '',
      improvement: ''
    });
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.formTitle}>Feedback Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            style={styles.textarea}
            rows={4}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Rating (out of 5)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            style={styles.input}
            min="1"
            max="5"
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>How can we improve?</label>
          <textarea
            name="improvement"
            value={formData.improvement}
            onChange={handleChange}
            style={styles.textarea}
            rows={4}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit Feedback</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    margin: '2rem auto'
  },
  formTitle: {
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '1.5rem',
    color: '#000dff'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    display: 'block'
  },
  input: {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    width: '100%'
  },
  textarea: {
    padding: '0.75rem',
    border: '1px solid #ccc',
    borderRadius: '10px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s',
    width: '100%',
    resize: 'vertical'  // Allow vertical resizing of textarea
  },
  submitButton: {
    padding: '0.75rem',
    backgroundColor: '#000dff',
    border: 'none',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '1rem'
  }
};

export default FeedbackForm;
