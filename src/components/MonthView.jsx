import React from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, isFuture, isToday } from 'date-fns';
import { useData } from '../context/DataContext';

export default function MonthView() {
  const { completedDates } = useData();
  const today = new Date();
  const start = startOfMonth(today);
  const end = endOfMonth(today);

  const daysInMonth = eachDayOfInterval({ start, end });
  const startDayOfWeek = start.getDay(); // 0 is Sunday

  // Padding days for grid alignment
  const paddingDays = Array.from({ length: startDayOfWeek }).map((_, i) => i);

  return (
    <div className="container animate-fade-in">
      <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px', textAlign: 'center' }}>
        {format(today, 'MMMM yyyy')}
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '16px' }}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <div key={i} style={{ textAlign: 'center', fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)' }}>
            {d}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px' }}>
        {paddingDays.map(i => <div key={`pad-${i}`} />)}
        
        {daysInMonth.map(day => {
          const dateStr = format(day, 'yyyy-MM-dd');
          const isCompleted = completedDates.includes(dateStr);
          const future = isFuture(day) && !isToday(day);
          
          let bgColor = 'var(--card-bg)';
          let borderColor = 'var(--border-color)';
          let textColor = 'var(--text-primary)';
          
          if (isCompleted) {
            bgColor = 'var(--success-color)';
            borderColor = 'var(--success-color)';
            textColor = 'white';
          } else if (!future && !isToday(day)) {
            bgColor = 'rgba(239, 68, 68, 0.1)';
            borderColor = 'rgba(239, 68, 68, 0.2)';
            textColor = 'var(--danger-color)';
          } else if (isToday(day)) {
            borderColor = 'var(--accent-color)';
          }

          return (
            <div 
              key={dateStr}
              style={{
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                borderRadius: '50%',
                fontSize: '14px',
                fontWeight: isToday(day) ? '700' : '500',
                color: textColor,
                opacity: future ? 0.3 : 1
              }}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>
    </div>
  );
}
