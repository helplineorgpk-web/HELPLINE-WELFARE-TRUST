import React, { useState } from 'react';
import Layout2 from '../Components/Layout/Layout2';
import FraudDashboard from '../Components/Elements/FraudPrevention/FraudDashboard';
import CustomerRegistrationForm from '../Components/Elements/FraudPrevention/CustomerRegistrationForm';

const FraudPreventionPage = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [registeredCustomer, setRegisteredCustomer] = useState(null);

  const handleRegistrationSuccess = (customer) => {
    setRegisteredCustomer(customer);
    setActiveView('dashboard');
    alert(`Customer registered successfully! Customer ID: ${customer.customerId}`);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <FraudDashboard />;
      case 'register':
        return (
          <CustomerRegistrationForm
            onRegistrationSuccess={handleRegistrationSuccess}
            onCancel={() => setActiveView('dashboard')}
          />
        );
      default:
        return <FraudDashboard />;
    }
  };

  return (
    <Layout2>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        <div style={{ 
          backgroundColor: 'white', 
          borderBottom: '1px solid #e5e7eb',
          padding: '20px 0',
          marginBottom: '20px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div>
                <h1 style={{ 
                  margin: '0 0 8px 0', 
                  color: '#1f2937', 
                  fontSize: '2rem',
                  fontWeight: '700'
                }}>
                  Fraud Prevention System
                </h1>
                <p style={{ 
                  margin: '0', 
                  color: '#6b7280',
                  fontSize: '1rem'
                }}>
                  UBL Payment Gateway Security Management
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveView('dashboard')}
                  style={{
                    padding: '10px 20px',
                    border: '2px solid #e5e7eb',
                    background: activeView === 'dashboard' ? '#3b82f6' : 'white',
                    color: activeView === 'dashboard' ? 'white' : '#374151',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                  }}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveView('register')}
                  style={{
                    padding: '10px 20px',
                    border: '2px solid #e5e7eb',
                    background: activeView === 'register' ? '#3b82f6' : 'white',
                    color: activeView === 'register' ? 'white' : '#374151',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    transition: 'all 0.2s'
                  }}
                >
                  Register Customer
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          {renderContent()}
        </div>

        {/* Information Panel */}
        <div style={{ 
          marginTop: '40px',
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '24px',
          maxWidth: '1200px',
          margin: '40px auto 0',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h3 style={{ 
            margin: '0 0 16px 0', 
            color: '#1f2937',
            fontSize: '1.25rem',
            fontWeight: '600'
          }}>
            UBL Fraud Prevention Features
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            <div>
              <h4 style={{ 
                margin: '0 0 8px 0', 
                color: '#374151',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                🔒 Strict Registration Policy
              </h4>
              <p style={{ 
                margin: '0', 
                color: '#6b7280',
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}>
                Mandatory customer information including CNIC, address, mobile number, and email for enhanced security.
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                margin: '0 0 8px 0', 
                color: '#374151',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                📊 Active Monitoring
              </h4>
              <p style={{ 
                margin: '0', 
                color: '#6b7280',
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}>
                Real-time transaction monitoring with positive/negative lists and IP address tracking.
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                margin: '0 0 8px 0', 
                color: '#374151',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                🚫 Preventive Actions
              </h4>
              <p style={{ 
                margin: '0', 
                color: '#6b7280',
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}>
                Automatic account blocking and transaction limits based on risk assessment and suspicious patterns.
              </p>
            </div>
            
            <div>
              <h4 style={{ 
                margin: '0 0 8px 0', 
                color: '#374151',
                fontSize: '1rem',
                fontWeight: '600'
              }}>
                💳 Card Token Tracking
              </h4>
              <p style={{ 
                margin: '0', 
                color: '#6b7280',
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}>
                Monitor card usage frequency and patterns to detect fraudulent transactions and suspicious activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default FraudPreventionPage;
