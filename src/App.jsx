import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DataProvider } from './context/DataContext';
import Auth from './components/Auth';
import Navigation from './components/Navigation';
import DayView from './components/DayView';
import WeekView from './components/WeekView';
import MonthView from './components/MonthView';
import { LogOut } from 'lucide-react';
import { isToday } from 'date-fns';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [currentView, setCurrentView] = useState('day');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNavChange = (view) => {
    if (view === 'day') {
      // If clicking day view, always reset to today if they are currently on day view but not on today
      if (currentView === 'day' && !isToday(selectedDate)) {
        setSelectedDate(new Date());
      }
    }
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case 'day': return <DayView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />;
      case 'week': return <WeekView setView={setCurrentView} setSelectedDate={setSelectedDate} />;
      case 'month': return <MonthView />;
      default: return <DayView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />;
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
      
      {/* Navigation moved to top */}
      <div style={{ paddingBottom: '16px' }}>
        <Navigation currentView={currentView} setView={handleNavChange} />
      </div>

      {renderView()}
      
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
