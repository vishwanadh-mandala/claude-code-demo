import React, { useState } from 'react';
import PurchaseOrderCreate from './components/PurchaseOrderCreate';
import PurchaseOrderList from './components/PurchaseOrderList';
import AccountCreate from './components/AccountCreate';
import './styles/App.css';

function App() {
  const [currentView, setCurrentView] = useState('po-list');

  const renderContent = () => {
    switch (currentView) {
      case 'po-create':
        return <PurchaseOrderCreate />;
      case 'po-list':
        return <PurchaseOrderList />;
      case 'account-create':
        return <AccountCreate />;
      default:
        return <PurchaseOrderList />;
    }
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <button className="navbar-brand" onClick={() => setCurrentView('po-list')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            Purchase Order System
          </button>
          <ul className="navbar-menu">
            <li>
              <button
                className={`nav-button ${currentView === 'po-list' ? 'active' : ''}`}
                onClick={() => setCurrentView('po-list')}
              >
                Purchase Orders
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${currentView === 'po-create' ? 'active' : ''}`}
                onClick={() => setCurrentView('po-create')}
              >
                Create PO
              </button>
            </li>
            <li>
              <button
                className={`nav-button ${currentView === 'account-create' ? 'active' : ''}`}
                onClick={() => setCurrentView('account-create')}
              >
                Create Account
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--card-background)',
        borderTop: '1px solid var(--border-color)',
        padding: '1.5rem 2rem',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        marginTop: 'auto'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          &copy; 2025 Purchase Order Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
