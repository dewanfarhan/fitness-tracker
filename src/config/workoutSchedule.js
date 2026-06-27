export const START_DATE = new Date('2026-06-28T00:00:00');

export const WEEKLY_SCHEDULE = {
  1: { // Monday
    name: "Upper Body Strength (Heavy)",
    type: "workout",
    exercises: [
      { 
        name: "Push-ups (Wall or Floor)", 
        description: "Keep your body straight like a board. Lower your chest to the wall or floor, then push back up until your arms are straight.",
        reps: "3 sets of 10 reps",
        imageRef: "pushup"
      },
      { 
        name: "Doorway Pulls", 
        description: "Stand in a doorway, grab the frame. Lean back slowly with straight arms, then pull yourself forward by squeezing your back muscles.",
        reps: "3 sets of 12 reps",
        imageRef: "pull"
      },
      { 
        name: "Plank Hold", 
        description: "Rest on your forearms and toes. Keep your back completely flat and squeeze your stomach muscles tight. Don't let your hips dip.",
        time: "Hold for 30 seconds (3 times)",
        imageRef: "plank"
      }
    ]
  },
  2: { // Tuesday
    name: "Lower Body Strength (Heavy)",
    type: "workout",
    exercises: [
      { 
        name: "Chair Squats", 
        description: "Stand in front of a chair. Push your hips back and sit down until you lightly touch the chair, then stand right back up. Keep your chest up.",
        reps: "3 sets of 15 reps",
        imageRef: "squat"
      },
      { 
        name: "Hip Lifts", 
        description: "Lie on your back, knees bent, feet on the floor. Push through your heels to lift your hips high. Squeeze your glutes at the top.",
        reps: "3 sets of 15 reps",
        imageRef: "hiplift"
      },
      { 
        name: "Calf Raises", 
        description: "Stand tall. Push up onto your toes as high as you can, hold for a second, then slowly lower your heels to the floor.",
        reps: "3 sets of 20 reps",
        imageRef: "calfraises"
      }
    ]
  },
  3: { // Wednesday
    name: "Active Recovery (Light)",
    type: "recovery",
    exercises: [
      { 
        name: "Brisk Walk", 
        description: "Go for a walk outside. Move fast enough to get your heart rate slightly up, but keep a pace where you can easily hold a conversation.",
        time: "20 minutes",
        imageRef: "walk"
      },
      { 
        name: "Light Stretching", 
        description: "Reach for your toes, roll your shoulders, and gently twist your torso left and right to loosen up any tight muscles.",
        time: "5 minutes",
        imageRef: "stretch"
      }
    ]
  },
  4: { // Thursday
    name: "Cardio & Core (Heavy)",
    type: "workout",
    exercises: [
      { 
        name: "High Knee Marching", 
        description: "March in place as fast as you can. Lift your knees up to waist level and pump your arms back and forth.",
        time: "1 minute (3 rounds)",
        imageRef: "cardio"
      },
      { 
        name: "Shadow Boxing", 
        description: "Throw light punches straight into the air in front of you. Keep bouncing lightly on your feet and twist your core.",
        time: "1 minute (3 rounds)",
        imageRef: "boxing"
      },
      { 
        name: "Standing Crunches", 
        description: "Put your hands behind your head. Lift your right knee up and twist your torso to touch it with your left elbow. Alternate sides.",
        reps: "20 reps total (3 rounds)",
        imageRef: "crunches"
      }
    ]
  },
  5: { // Friday
    name: "Total Rest Day",
    type: "rest",
    exercises: []
  },
  6: { // Saturday
    name: "Full Body Express (Heavy)",
    type: "workout",
    exercises: [
      { 
        name: "Chair Squats", 
        description: "Push your hips back and sit down until you lightly touch the chair, then stand right back up. Keep your chest up.",
        reps: "3 sets of 15 reps",
        imageRef: "squat"
      },
      { 
        name: "Push-ups (Wall or Floor)", 
        description: "Keep your body straight like a board. Lower your chest to the wall or floor, then push back up until your arms are straight.",
        reps: "3 sets of 10 reps",
        imageRef: "pushup"
      },
      { 
        name: "Plank Hold", 
        description: "Rest on your forearms and toes. Keep your back completely flat and squeeze your stomach muscles tight.",
        time: "Hold for 30 seconds (3 times)",
        imageRef: "plank"
      }
    ]
  },
  0: { // Sunday
    name: "Mobility & Yoga (Light)",
    type: "recovery",
    exercises: [
      { 
        name: "Cat-Cow Stretch", 
        description: "Get on your hands and knees. Arch your back up towards the ceiling like a cat, then drop your belly down towards the floor.",
        reps: "10 times slowly",
        imageRef: "stretch"
      },
      { 
        name: "Child's Pose", 
        description: "Sit back on your heels with your knees wide. Walk your hands forward on the floor and rest your forehead on the ground. Breathe deeply.",
        time: "Hold for 2 minutes",
        imageRef: "yoga"
      }
    ]
  }
};
