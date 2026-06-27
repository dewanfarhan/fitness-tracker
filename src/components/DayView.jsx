import React from 'react';
import confetti from 'canvas-confetti';
import { format, isFuture, isToday } from 'date-fns';
import { WEEKLY_SCHEDULE } from '../config/workoutSchedule';
import { calculateTargetTime } from '../utils/timeLogic';
import { useData } from '../context/DataContext';

export default function DayView({ selectedDate, setSelectedDate }) {
  const { completedDates, clockIn, getStreak } = useData();
  
  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const dateStr = format(selectedDate, 'yyyy-MM-dd');
  const isCompleted = completedDates.includes(dateStr);
  const future = isFuture(selectedDate) && !isToday(selectedDate);
  
  const dayOfWeek = selectedDate.getDay();
  const routine = WEEKLY_SCHEDULE[dayOfWeek];
  const targetTime = calculateTargetTime(selectedDate);
  const streak = getStreak();

  const handleClockIn = () => {
    if (!isCompleted && !future && routine.type !== 'rest') {
      clockIn(selectedDate);
      
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#2563EB', '#10B981', '#FAF9F6'] });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#2563EB', '#10B981', '#FAF9F6'] });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  };

  return (
    <div className="container animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <button onClick={handlePrevDay} style={{ fontSize: '24px', padding: '8px' }}>←</button>
        <div className="text-center">
          <h2 style={{ fontSize: '20px', fontWeight: '700' }}>
            {isToday(selectedDate) ? 'Today' : format(selectedDate, 'EEEE, MMM d')}
          </h2>
          {isToday(selectedDate) && streak > 0 && (
            <p className="text-secondary" style={{ fontSize: '14px', marginTop: '4px', fontWeight: '600', color: '#EF4444' }}>
              🔥 {streak} Day Streak
            </p>
          )}
        </div>
        <button onClick={handleNextDay} style={{ fontSize: '24px', padding: '8px' }}>→</button>
      </div>

      <div className="card text-center" style={{ padding: '24px 16px', border: isCompleted ? '2px solid var(--success-color)' : '1px solid var(--border-color)' }}>
        {routine.type !== 'rest' && (
          <h1 className="text-gradient" style={{ fontSize: '40px', marginBottom: '4px' }}>{targetTime} <span style={{ fontSize: '20px' }}>mins</span></h1>
        )}
        <h3 style={{ fontSize: '18px', color: 'var(--text-primary)' }}>{routine.name}</h3>
        <p className="text-secondary" style={{ marginTop: '4px', textTransform: 'capitalize', fontSize: '14px' }}>{routine.type}</p>
        
        {routine.type !== 'rest' && (
          <div style={{ marginTop: '24px' }}>
            <button 
              className={`btn ${isCompleted ? 'btn-success' : 'btn-primary'}`} 
              style={{ width: '100%', padding: '14px', fontSize: '16px' }}
              onClick={handleClockIn}
              disabled={isCompleted || future}
            >
              {isCompleted ? '✓ Clocked In' : future ? 'Locked' : 'Clock In'}
            </button>
          </div>
        )}
      </div>

      {routine.exercises.length > 0 && (
        <div className="mt-4 mb-8">
          <h4 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>Exercise Dictionary</h4>
          {routine.exercises.map((ex, i) => (
            <div key={i} className="card" style={{ padding: '0', marginBottom: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)' }}>
                <h5 style={{ fontSize: '18px', marginBottom: '8px' }}>{ex.name}</h5>
                <p className="text-secondary" style={{ fontSize: '15px', lineHeight: '1.5' }}>{ex.description}</p>
                
                <div style={{ marginTop: '12px', display: 'inline-block', backgroundColor: 'var(--bg-color)', padding: '6px 12px', borderRadius: '8px', fontSize: '14px', fontWeight: '600', color: 'var(--accent-color)' }}>
                  {ex.reps ? `🎯 Target: ${ex.reps}` : `⏱ Target: ${ex.time}`}
                </div>
              </div>
              <div style={{ width: '100%', height: '200px', backgroundColor: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={`/images/${ex.imageRef}.png`} 
                  alt={ex.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span style="color: var(--text-secondary); font-size: 14px;">(Image coming soon)</span>`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
