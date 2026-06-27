import React from 'react';
import { startOfWeek, addDays, format, isFuture, isToday } from 'date-fns';
import { useData } from '../context/DataContext';

export default function WeekView({ setView }) {
  const { completedDates } = useData();
  
  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 1 }); // Monday start

  const days = Array.from({ length: 7 }).map((_, i) => addDays(start, i));

  return (
    <div className="container animate-fade-in">
      <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', textAlign: 'center' }}>This Week</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {days.map(day => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const isCompleted = completedDates.includes(dateStr);
          const future = isFuture(day) && !isToday(day);
          
          let bgColor = 'var(--card-bg)';
          let borderColor = 'var(--border-color)';
          let textColor = 'var(--text-primary)';
          let statusText = 'Pending';
          
          if (isCompleted) {
            bgColor = 'rgba(16, 185, 129, 0.1)';
            borderColor = 'var(--success-color)';
            statusText = 'Completed ✓';
          } else if (!future && !isToday(day)) {
            bgColor = 'rgba(239, 68, 68, 0.05)';
            borderColor = 'rgba(239, 68, 68, 0.3)';
            statusText = 'Missed';
            textColor = 'var(--text-secondary)';
          } else if (isToday(day)) {
            borderColor = 'var(--accent-color)';
            statusText = 'Today';
          } else {
            textColor = 'var(--text-secondary)';
            statusText = 'Upcoming';
          }

          return (
            <div 
              key={dateStr}
              className="card"
              style={{ 
                margin: 0, 
                padding: '16px', 
                backgroundColor: bgColor, 
                border: `1px solid ${borderColor}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <h4 style={{ color: textColor, margin: 0 }}>{format(day, 'EEEE')}</h4>
                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>{format(day, 'MMM d')}</p>
              </div>
              <span style={{ fontSize: '14px', fontWeight: '500', color: isCompleted ? 'var(--success-color)' : textColor }}>
                {statusText}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
