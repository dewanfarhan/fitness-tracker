export const START_DATE = new Date('2026-06-28T00:00:00');

export const WEEKLY_SCHEDULE = {
  1: { // Monday
    name: "Full Body Burn (A)",
    type: "workout",
    exercises: [
      { 
        name: "Jumping Jacks", 
        description: "Jump up and spread your legs while swinging your arms over your head. Jump back to the start. Keep a steady, fast pace to get your heart rate up.",
        time: "30 seconds (3 rounds)",
        imageRef: "jumpingjacks"
      },
      { 
        name: "Air Squats", 
        description: "Stand with feet shoulder-width apart. Push your hips back and bend your knees as if sitting in an invisible chair, then stand back up.",
        reps: "3 sets of 15 reps",
        imageRef: "squat"
      },
      { 
        name: "Push-ups (Knee or Wall)", 
        description: "Keep your body straight. If on the floor, you can drop to your knees. Lower your chest and push back up until arms are straight.",
        reps: "3 sets of 10 reps",
        imageRef: "pushup"
      }
    ]
  },
  2: { // Tuesday
    name: "Core & Legs",
    type: "workout",
    exercises: [
      { 
        name: "High Knees", 
        description: "Run in place as fast as you can, lifting your knees up to your waist with every step. Pump your arms to keep momentum.",
        time: "30 seconds (3 rounds)",
        imageRef: "cardio"
      },
      { 
        name: "Alternating Lunges", 
        description: "Take a big step forward and lower your hips until both knees are bent at a 90-degree angle. Push back up and switch legs.",
        reps: "3 sets of 10 reps per leg",
        imageRef: "lunges"
      },
      { 
        name: "Plank Hold", 
        description: "Rest on your forearms and toes. Keep your back completely flat and squeeze your stomach muscles tight. Don't let your hips dip.",
        time: "Hold for 30 seconds (3 times)",
        imageRef: "plank"
      }
    ]
  },
  3: { // Wednesday
    name: "Active Recovery",
    type: "recovery",
    exercises: [
      { 
        name: "Brisk Walk", 
        description: "Go for a walk outside or march in place. Move fast enough to get your heart rate up, but keep a pace where you can hold a conversation.",
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
    name: "Cardio & Glutes",
    type: "workout",
    exercises: [
      { 
        name: "Jumping Jacks", 
        description: "Jump up and spread your legs while swinging your arms over your head. Keep a steady, fast pace.",
        time: "30 seconds (3 rounds)",
        imageRef: "jumpingjacks"
      },
      { 
        name: "Glute Bridges", 
        description: "Lie on your back, knees bent, feet on the floor. Push through your heels to lift your hips high. Squeeze your glutes at the top.",
        reps: "3 sets of 15 reps",
        imageRef: "hiplift"
      },
      { 
        name: "Mountain Climbers", 
        description: "Start in a push-up position. Quickly drive one knee towards your chest, then switch legs as if you are running horizontally.",
        time: "20 seconds (3 rounds)",
        imageRef: "mountainclimbers"
      }
    ]
  },
  5: { // Friday
    name: "Total Rest Day",
    type: "rest",
    exercises: []
  },
  6: { // Saturday
    name: "Full Body Burn (B)",
    type: "workout",
    exercises: [
      { 
        name: "High Knees", 
        description: "Run in place as fast as you can, lifting your knees up to your waist with every step.",
        time: "30 seconds (3 rounds)",
        imageRef: "cardio"
      },
      { 
        name: "Air Squats", 
        description: "Push your hips back and bend your knees as if sitting in an invisible chair, then stand back up.",
        reps: "3 sets of 15 reps",
        imageRef: "squat"
      },
      { 
        name: "Push-ups (Knee or Wall)", 
        description: "Keep your body straight. Lower your chest and push back up until arms are straight.",
        reps: "3 sets of 10 reps",
        imageRef: "pushup"
      }
    ]
  },
  0: { // Sunday
    name: "Mobility & Active Rest",
    type: "recovery",
    exercises: [
      { 
        name: "Brisk Walk", 
        description: "Go for a light, continuous walk. Moving actively helps muscles recover faster than sitting perfectly still.",
        time: "15 minutes",
        imageRef: "walk"
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
