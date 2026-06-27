import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Auth from './components/Auth';
import Navigation from './components/Navigation';
import DayView from './components/DayView';
import WeekView from './components/WeekView';
import MonthView from './components/MonthView';
import { LogOut } from 'lucide-react';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [currentView, setCurrentView] = useState('day');

  const renderView = () => {
    switch (currentView) {
      case 'day': return <DayView />;
      case 'week': return <WeekView setView={setCurrentView} />;
      case 'month': return <MonthView />;
      default: return <DayView />;
    }
  };

  return (
    <DataProvider>
      <header style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '18px', fontWeight: '800', letterSpacing: '-0.5px' }}>Frictionless</h1>
        {currentUser && (
          <button onClick={logout} style={{ color: 'var(--text-secondary)' }}>
            <LogOut size={20} />
          </button>
        )}
      </header>
      
      {renderView()}
      
      <Navigation currentView={currentView} setView={setCurrentView} />
    </DataProvider>
  );
}

function Main() {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return (
      <>
        <header style={{ padding: '16px 24px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px' }}>Frictionless</h1>
        </header>
        <Auth />
      </>
    );
  }
  
  return <Dashboard />;
}

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  );
}
