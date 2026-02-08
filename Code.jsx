import React, { useState } from 'react';

const CharitySimulator = () => {
  const [stats, setStats] = useState({ revenue: 0, cost: 0, charity: 0 });
  const [logs, setLogs] = useState([]);

  const simulateOrder = () => {
    const salePrice = Math.floor(Math.random() * 50) + 20; // $20-$70 sale
    const costPrice = salePrice * 0.4; // 40% cost to Sellvia
    const profit = salePrice - costPrice;
    const charityCut = profit * 0.90; // The 90% Charity Rule

    setStats(prev => ({
      revenue: prev.revenue + salePrice,
      cost: prev.cost + costPrice,
      charity: prev.charity + charityCut
    }));

    setLogs(prev => [
      `Order Processed: $${salePrice.toFixed(2)} sale -> $${charityCut.toFixed(2)} to Feeding America`,
      ...prev
    ].slice(0, 5));
  };

  const resetStats = () => {
    setStats({ revenue: 0, cost: 0, charity: 0 });
    setLogs([]);
  };

  return (
    <div style={styles.container}>
      <h1>🌍 Feed America AI Simulation</h1>
      
      <div style={styles.statsGrid}>
        <div style={styles.card}>
          <p style={styles.label}>Total Revenue</p>
          <p style={styles.value}>${stats.revenue.toFixed(2)}</p>
        </div>
        <div style={{ ...styles.card, color: '#22c55e' }}>
          <p style={styles.label}>Total Donated</p>
          <p style={styles.value}>${stats.charity.toFixed(2)}</p>
        </div>
        <div style={styles.card}>
          <p style={styles.label}>Total Cost</p>
          <p style={styles.value}>${stats.cost.toFixed(2)}</p>
        </div>
      </div>

      <div style={styles.buttonGroup}>
        <button 
          onClick={simulateOrder}
          style={styles.button}
          aria-label="Simulate a new order"
        >
          Simulate Real-Time Order
        </button>
        <button 
          onClick={resetStats}
          style={{ ...styles.button, backgroundColor: '#ef4444' }}
          aria-label="Reset all statistics"
        >
          Reset Stats
        </button>
      </div>

      <h3>Live Transaction Log (90% Charity Rule)</h3>
      {logs.length === 0 ? (
        <p style={{ color: '#666' }}>No transactions yet. Click "Simulate Real-Time Order" to begin.</p>
      ) : (
        <ul style={styles.logList}>
          {logs.map((log, i) => (
            <li key={i} style={styles.logItem}>{log}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'sans-serif',
    maxWidth: '800px',
    margin: '0 auto'
  },
  statsGrid: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  card: {
    flex: '1',
    minWidth: '150px',
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9fafb'
  },
  label: {
    margin: '0 0 8px 0',
    fontSize: '12px',
    color: '#666',
    textTransform: 'uppercase'
  },
  value: {
    margin: '0',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: '500'
  },
  logList: {
    listStyle: 'none',
    padding: '0'
  },
  logItem: {
    padding: '8px',
    marginBottom: '8px',
    backgroundColor: '#f0f9ff',
    borderLeft: '4px solid #3b82f6',
    borderRadius: '4px'
  }
};

export default CharitySimulator;
