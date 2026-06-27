export const START_DATE = new Date('2026-06-28T00:00:00');

export const WEEKLY_SCHEDULE = {
  1: { // Monday
    name: "Upper Body Strength",
    type: "workout",
    exercises: [
      { name: "Countertop/Incline Push-ups", description: "Place hands slightly wider than shoulder-width on a secure surface. Lower chest towards the surface, keeping body in a straight line, then push back up." },
      { name: "Doorframe Rows", description: "Stand facing a doorframe, grab the edges. Lean back until arms are straight, then pull yourself towards the frame by squeezing your shoulder blades." },
      { name: "Plank Holds", description: "Hold a push-up position on your forearms. Keep your core tight and your body in a straight line from head to heels." }
    ]
  },
  2: { // Tuesday
    name: "Lower Body Strength",
    type: "workout",
    exercises: [
      { name: "Chair Squats", description: "Stand in front of a chair. Lower your hips down and back until you lightly tap the seat, then stand back up pushing through your heels." },
      { name: "Glute Bridges", description: "Lie on your back with knees bent and feet flat on the floor. Push through your heels to raise your hips towards the ceiling, squeezing your glutes at the top." },
      { name: "Calf Raises", description: "Stand tall (hold a wall for balance if needed). Push up onto your tiptoes as high as possible, then slowly lower back down." }
    ]
  },
  3: { // Wednesday
    name: "Active Recovery",
    type: "recovery",
    exercises: [
      { name: "Relaxed Walk", description: "Take a gentle 20-minute walk outside. Focus on deep breathing and loosening up your muscles. No heavy exertion." }
    ]
  },
  4: { // Thursday
    name: "Cardio & Core",
    type: "workout",
    exercises: [
      { name: "Marching in Place (High Knees)", description: "Stand tall and march in place, driving your knees up as high as your hips. Pump your arms in rhythm." },
      { name: "Shadow Boxing", description: "Throw light, controlled punches into the air. Keep your feet moving and engage your core with each punch." },
      { name: "Standing Knee-to-Elbow Crunches", description: "Stand tall with hands lightly behind your head. Lift one knee up while crunching the opposite elbow down to meet it. Alternate sides." }
    ]
  },
  5: { // Friday
    name: "Full Body Express",
    type: "workout",
    exercises: [
      { name: "Chair Squats", description: "Stand in front of a chair. Lower your hips down and back until you lightly tap the seat, then stand back up pushing through your heels." },
      { name: "Incline Push-ups", description: "Place hands slightly wider than shoulder-width on a secure surface. Lower chest towards the surface, keeping body in a straight line, then push back up." },
      { name: "Plank Holds", description: "Hold a push-up position on your forearms. Keep your core tight and your body in a straight line from head to heels." }
    ]
  },
  6: { // Saturday
    name: "Weekend Break",
    type: "rest",
    exercises: []
  },
  0: { // Sunday
    name: "Weekend Break & Meal Prep",
    type: "rest",
    exercises: []
  }
};
