import React from 'react';
import { Calendar, CalendarDays, CheckCircle2 } from 'lucide-react';

export default function Navigation({ currentView, setView }) {
  return (
    <nav className="bottom-nav">
      <button 
        className={`nav-item ${currentView === 'day' ? 'active' : ''}`}
        onClick={() => setView('day')}
      >
        <CheckCircle2 size={24} />
        <span>Today</span>
      </button>
      
      <button 
        className={`nav-item ${currentView === 'week' ? 'active' : ''}`}
        onClick={() => setView('week')}
      >
        <CalendarDays size={24} />
        <span>Week</span>
      </button>
      
      <button 
        className={`nav-item ${currentView === 'month' ? 'active' : ''}`}
        onClick={() => setView('month')}
      >
        <Calendar size={24} />
        <span>Month</span>
      </button>
    </nav>
  );
}
