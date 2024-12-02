import React, { useEffect, useContext, useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import { AppContext } from './context/Appcontext';
import Navbar from './Navbar';
import "./Analysis.css";

// Register Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analysis = () => {
  const { user_id, fetchSavings, savings,analysis } = useContext(AppContext);
  const [percentage, setPercentage] = useState({
    necessaryPercentage: 0,
    luxuriesPercentage: 0,
    savingPercentage: 0
  });

  useEffect(() => {
    const storedUserId = localStorage.getItem('user_id');
    fetchSavings(storedUserId); // Adjust this ID to the actual user_id you want to fetch
    const selmon = localStorage.getItem('selectedMonth');
    analysis(storedUserId, selmon);

    const storedPercentage = localStorage.getItem("percentage");
    if (storedPercentage) {
      setPercentage(JSON.parse(storedPercentage)); // Parse JSON string back to object
    }
  }, [user_id, fetchSavings,analysis]);

  // Conditional statements for financial advice
  const savingsAdvice = percentage.savingPercentage < 20 
    ? "Your savings are less than 20%. Consider saving more as it will harm your financial health."
    : "Your savings are in a good range.";

  const necessaryAdvice = percentage.necessaryPercentage > 50
    ? "Your necessary expenses are more than 50%. Consider ways to increase your income."
    : "Your necessary expenses are in a good range.";

  const luxuriesAdvice = percentage.luxuriesPercentage > 30
    ? "Your luxury expenses are more than 30%. Please try to avoid excessive spending on luxuries and save more. This will help you grow financially in the future."
    : "Your luxury expenses are in a reasonable range.";

  // Prepare data for the line graph
  const lineData = {
    labels: savings.map(s => s.month), // Extract month names
    datasets: [
      {
        label: 'Savings',
        data: savings.map(s => s.savings), // Extract savings values
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <div className="charts-container">
        <div className="doughnut-container">
          <Doughnut 
            data={{
              labels: ["Necessary", "Luxuries", "Saving"],
              datasets: [
                {
                  label: "Percentage",
                  data: [percentage.necessaryPercentage, percentage.luxuriesPercentage, percentage.savingPercentage],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
              ],
            }}
          />
        </div>

        <div className="line-container">
          <Line
            data={lineData}
            options={{
              scales: {
                x: {
                  beginAtZero: true,
                },
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <p><strong>Financial Analysis Report:</strong></p>
        <p>Your expenditure on necessary items is {percentage.necessaryPercentage}%. {necessaryAdvice}</p>
        <p>Your expenditure on luxuries is {percentage.luxuriesPercentage}%. {luxuriesAdvice}</p>
        <p>Your savings are {percentage.savingPercentage}%. {savingsAdvice}</p>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Financial Tips:</h3>
        <ul>
          <li>Track your spending regularly to identify areas where you can cut back.</li>
          <li>Create a budget and stick to it. This will help you manage your finances more effectively.</li>
          <li>Consider setting up automatic transfers to your savings account to ensure you save consistently.</li>
          <li>Invest in your future by exploring various investment options that suit your risk tolerance and financial goals.</li>
          <li>Review your financial goals periodically and adjust your budget and spending habits as needed.</li>
        </ul>
      </div>
    </div>
  );
};

export default Analysis;
