import React, { useState, useEffect } from 'react';
import styles from './FraudDashboard.module.css';

const FraudDashboard = () => {
  const [stats, setStats] = useState(null);
  const [positiveList, setPositiveList] = useState([]);
  const [negativeList, setNegativeList] = useState([]);
  const [blockedAccounts, setBlockedAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchFraudData();
  }, []);

  const fetchFraudData = async () => {
    try {
      setLoading(true);
      
      // Fetch fraud statistics
      const statsResponse = await fetch('/api/fraud-management?type=stats');
      const statsData = await statsResponse.json();
      if (statsData.success) {
        setStats(statsData.stats);
      }

      // Fetch positive list
      const positiveResponse = await fetch('/api/fraud-management?type=positive_list');
      const positiveData = await positiveResponse.json();
      if (positiveData.success) {
        setPositiveList(positiveData.positiveList);
      }

      // Fetch negative list
      const negativeResponse = await fetch('/api/fraud-management?type=negative_list');
      const negativeData = await negativeResponse.json();
      if (negativeData.success) {
        setNegativeList(negativeData.negativeList);
      }

      // Fetch blocked accounts
      const blockedResponse = await fetch('/api/fraud-management?type=blocked_accounts');
      const blockedData = await blockedResponse.json();
      if (blockedData.success) {
        setBlockedAccounts(blockedData.blockedAccounts);
      }

    } catch (error) {
      console.error('Error fetching fraud data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFraudAction = async (action, customerId, reason = '', limits = {}) => {
    try {
      const response = await fetch('/api/fraud-management', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action,
          customerId,
          reason,
          limits
        })
      });

      const result = await response.json();
      
      if (result.success) {
        alert(`Action ${action} completed successfully`);
        fetchFraudData(); // Refresh data
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error performing fraud action:', error);
      alert('Error performing action');
    }
  };

  const renderOverview = () => (
    <div className={styles.overview}>
      <h2>Fraud Prevention Overview</h2>
      {stats && (
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <h3>Total Customers</h3>
            <p className={styles.statNumber}>{stats.totalCustomers}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Total Transactions</h3>
            <p className={styles.statNumber}>{stats.totalTransactions}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Positive List</h3>
            <p className={styles.statNumber}>{stats.positiveListCount}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Negative List</h3>
            <p className={styles.statNumber}>{stats.negativeListCount}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Blocked Accounts</h3>
            <p className={styles.statNumber}>{stats.blockedAccountsCount}</p>
          </div>
          <div className={styles.statCard}>
            <h3>Total Value</h3>
            <p className={styles.statNumber}>PKR {stats.totalTransactionValue?.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  );

  const renderPositiveList = () => (
    <div className={styles.listSection}>
      <h2>Positive List Management</h2>
      <div className={styles.listHeader}>
        <button 
          className={styles.addButton}
          onClick={() => {
            const customerId = prompt('Enter Customer ID to add to positive list:');
            if (customerId) {
              const minAmount = prompt('Enter minimum amount (default: 1000):') || 1000;
              const maxAmount = prompt('Enter maximum amount (default: 100000):') || 100000;
              const maxTransactions = prompt('Enter max transactions per month (default: 3):') || 3;
              
              handleFraudAction('add_to_positive_list', customerId, '', {
                minAmount: parseInt(minAmount),
                maxAmount: parseInt(maxAmount),
                maxTransactions: parseInt(maxTransactions)
              });
            }
          }}
        >
          Add to Positive List
        </button>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Min Amount</th>
              <th>Max Amount</th>
              <th>Max Transactions</th>
              <th>Added Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {positiveList.map((item, index) => (
              <tr key={index}>
                <td>{item.customerId}</td>
                <td>PKR {item.minAmount?.toLocaleString()}</td>
                <td>PKR {item.maxAmount?.toLocaleString()}</td>
                <td>{item.maxTransactions}</td>
                <td>{new Date(item.addedDate).toLocaleDateString()}</td>
                <td>
                  <button 
                    className={styles.removeButton}
                    onClick={() => {
                      if (confirm('Remove from positive list?')) {
                        // Note: This would require a remove action in the API
                        alert('Remove functionality not implemented yet');
                      }
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderNegativeList = () => (
    <div className={styles.listSection}>
      <h2>Negative List Management</h2>
      <div className={styles.listHeader}>
        <button 
          className={styles.addButton}
          onClick={() => {
            const customerId = prompt('Enter Customer ID to add to negative list:');
            if (customerId) {
              const reason = prompt('Enter reason for adding to negative list:');
              if (reason) {
                const minAmount = prompt('Enter minimum amount (default: 100):') || 100;
                const maxAmount = prompt('Enter maximum amount (default: 5000):') || 5000;
                const maxTransactions = prompt('Enter max transactions per month (default: 1):') || 1;
                
                handleFraudAction('add_to_negative_list', customerId, reason, {
                  minAmount: parseInt(minAmount),
                  maxAmount: parseInt(maxAmount),
                  maxTransactions: parseInt(maxTransactions)
                });
              }
            }
          }}
        >
          Add to Negative List
        </button>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Reason</th>
              <th>Min Amount</th>
              <th>Max Amount</th>
              <th>Max Transactions</th>
              <th>Added Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {negativeList.map((item, index) => (
              <tr key={index}>
                <td>{item.customerId}</td>
                <td>{item.reason}</td>
                <td>PKR {item.minAmount?.toLocaleString()}</td>
                <td>PKR {item.maxAmount?.toLocaleString()}</td>
                <td>{item.maxTransactions}</td>
                <td>{new Date(item.addedDate).toLocaleDateString()}</td>
                <td>
                  <button 
                    className={styles.removeButton}
                    onClick={() => {
                      if (confirm('Remove from negative list?')) {
                        alert('Remove functionality not implemented yet');
                      }
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBlockedAccounts = () => (
    <div className={styles.listSection}>
      <h2>Blocked Accounts Management</h2>
      <div className={styles.listHeader}>
        <button 
          className={styles.addButton}
          onClick={() => {
            const customerId = prompt('Enter Customer ID to block:');
            if (customerId) {
              const reason = prompt('Enter reason for blocking account:');
              if (reason) {
                handleFraudAction('block_account', customerId, reason);
              }
            }
          }}
        >
          Block Account
        </button>
      </div>
      
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blockedAccounts.map((customerId, index) => (
              <tr key={index}>
                <td>{customerId}</td>
                <td>
                  <button 
                    className={styles.unblockButton}
                    onClick={() => {
                      const reason = prompt('Enter reason for unblocking account:');
                      if (reason) {
                        handleFraudAction('unblock_account', customerId, reason);
                      }
                    }}
                  >
                    Unblock
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className={styles.loading}>
        <p>Loading fraud prevention data...</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1>Fraud Prevention Dashboard</h1>
        <button 
          className={styles.refreshButton}
          onClick={fetchFraudData}
        >
          Refresh Data
        </button>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'overview' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'positive' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('positive')}
        >
          Positive List
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'negative' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('negative')}
        >
          Negative List
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'blocked' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('blocked')}
        >
          Blocked Accounts
        </button>
      </div>

      <div className={styles.content}>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'positive' && renderPositiveList()}
        {activeTab === 'negative' && renderNegativeList()}
        {activeTab === 'blocked' && renderBlockedAccounts()}
      </div>
    </div>
  );
};

export default FraudDashboard;
