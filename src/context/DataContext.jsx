import React, { createContext, useContext, useEffect, useState } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';
import { format } from 'date-fns';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const { currentUser } = useAuth();
  const [completedDates, setCompletedDates] = useState([]);
  const [loading, setLoading] = useState(true);

  const isMock = !import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_FIREBASE_API_KEY === 'your_api_key_here';

  useEffect(() => {
    async function loadData() {
      if (!currentUser) {
        setCompletedDates([]);
        setLoading(false);
        return;
      }

      if (isMock) {
        // Load from LocalStorage
        const localData = localStorage.getItem('completedDates');
        if (localData) {
          setCompletedDates(JSON.parse(localData));
        }
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, 'users', currentUser.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setCompletedDates(docSnap.data().completedDates || []);
        } else {
          setCompletedDates([]);
        }
      } catch (error) {
        console.error("Error loading data", error);
      }
      setLoading(false);
    }
    
    loadData();
  }, [currentUser, isMock]);

  const clockIn = async (date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    if (completedDates.includes(dateStr)) return;
    
    const newDates = [...completedDates, dateStr];
    setCompletedDates(newDates);

    if (isMock) {
      localStorage.setItem('completedDates', JSON.stringify(newDates));
      return;
    }

    try {
      if (currentUser) {
        await setDoc(doc(db, 'users', currentUser.uid), {
          completedDates: newDates
        }, { merge: true });
      }
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  const getStreak = () => {
    if (completedDates.length === 0) return 0;
    
    // Sort descending
    const sorted = [...completedDates].sort((a, b) => new Date(b) - new Date(a));
    
    let streak = 0;
    let currentDate = new Date();
    // Start streak calculation from today or yesterday
    let dateStrToCheck = format(currentDate, 'yyyy-MM-dd');
    
    if (!sorted.includes(dateStrToCheck)) {
      currentDate.setDate(currentDate.getDate() - 1);
      dateStrToCheck = format(currentDate, 'yyyy-MM-dd');
      if (!sorted.includes(dateStrToCheck)) {
        return 0; // Missed yesterday and today
      }
    }
    
    // Calculate streak backwards
    while (sorted.includes(dateStrToCheck)) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
      dateStrToCheck = format(currentDate, 'yyyy-MM-dd');
    }
    
    return streak;
  };

  const value = { completedDates, clockIn, getStreak };

  return (
    <DataContext.Provider value={value}>
      {!loading && children}
    </DataContext.Provider>
  );
}
