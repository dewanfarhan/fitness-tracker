import { differenceInDays, startOfDay } from 'date-fns';
import { START_DATE } from '../config/workoutSchedule';

export function calculateTargetTime(targetDate) {
  const start = startOfDay(START_DATE);
  const current = startOfDay(targetDate);
  
  if (current < start) {
    return 15; // Minimum time before start date (or just default to 15)
  }

  const daysDiff = differenceInDays(current, start);
  
  // Base time: 15 mins
  // Increment: +5 mins per day
  // Cap: 30 mins
  let targetTime = 15 + (daysDiff * 5);
  
  if (targetTime > 30) {
    targetTime = 30;
  }
  
  return targetTime;
}
