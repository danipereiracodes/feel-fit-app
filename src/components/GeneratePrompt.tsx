import { InputValues } from '../types/InputTypes';

export const generatePrompt = (formData: InputValues): string => {
  const {
    name,
    age,
    height,
    weight,
    gender,
    allergies,
    diet,
    fasting,
    fastingFreq,
    exerciseFreq,
    exerciseExp,
    goal,
  } = formData;

  const prompt = `Hello, please Generate a personalized weekly meal and exercise plan based on the following user data, Please make sure that if the exercise experience is beginner break down the exercises so the user gets a better experience with the app. Also Explain how to cook the meals. Do not include allergies ingredients in the meals nor injured parts to train in the exercise plans:
  
Name: ${name}
Age: ${age}
Height: ${height} cm
Weight: ${weight} kg
Gender: ${gender}
Allergies: ${allergies || 'None'}
Diet: ${diet}
Fasting: ${fasting ? 'Yes, ' + fastingFreq : 'No'}
Exercise Frequency: ${exerciseFreq}
Exercise Experience: ${exerciseExp}
Fitness Goal: ${goal}

Please provide a detailed plan for each day of the week, including both meals and exercises.

The response should follow this example's structure.
 Your response should be in JSON format. Here is the expected JSON format:
 {
    "exercisePlan": {
      "Monday": "30 minutes of bodyweight exercises (push-ups, squats, lunges, etc.)",
      "Tuesday": "20 minutes of yoga",
      "Wednesday": "Cardio workout: 30 minutes of jumping jacks, burpees, and mountain climbers",
      "Thursday": "Strength training: 40 minutes of dumbbell exercises (bicep curls, shoulder presses, etc.)",
      "Friday": "HIIT workout: 20 minutes of high-intensity interval training",
      "Saturday": "Rest day",
      "Sunday": "30 minutes of stretching and mobility exercises"
    },
    "mealPlan": {
      "Monday": {
        "Breakfast": "Oatmeal with sliced bananas and almonds",
        "MorningSnack": "Greek yogurt with berries",
        "Lunch": "Grilled chicken salad with mixed greens and vinaigrette dressing",
        "AfternoonSnack": "Apple slices with peanut butter",
        "Dinner": "Salmon fillet with quinoa and steamed broccoli"
      },
      "Tuesday": {
        "Breakfast": "Scrambled eggs with spinach and tomatoes",
        "MorningSnack": "Cottage cheese with pineapple chunks",
        "Lunch": "Quinoa salad with chickpeas, cucumber, and lemon-tahini dressing",
        "AfternoonSnack": "Carrot sticks with hummus",
        "Dinner": "Turkey meatballs with marinara sauce over whole wheat pasta"
      },
      "Wednesday": {
        "Breakfast": "Whole wheat toast with avocado and poached eggs",
        "MorningSnack": "Mixed nuts (almonds, walnuts, cashews)",
        "Lunch": "Vegetable stir-fry with tofu and brown rice",
        "AfternoonSnack": "Greek yogurt with honey and granola",
        "Dinner": "Grilled shrimp skewers with quinoa and grilled asparagus"
      },
      "Thursday": {
        "Breakfast": "Smoothie with spinach, banana, protein powder, and almond milk",
        "MorningSnack": "Sliced bell peppers with hummus",
        "Lunch": "Turkey and avocado wrap with whole wheat tortilla",
        "AfternoonSnack": "Trail mix (dried fruits and nuts)",
        "Dinner": "Baked chicken breast with roasted sweet potatoes and green beans"
      },
      "Friday": {
        "Breakfast": "Protein pancakes with mixed berries and maple syrup",
        "MorningSnack": "Cottage cheese with peach slices",
        "Lunch": "Grilled vegetable and quinoa bowl with tahini dressing",
        "AfternoonSnack": "Rice cakes with almond butter",
        "Dinner": "Vegetarian chili with cornbread"
      },
      "Saturday": {
        "Breakfast": "Whole grain waffles with Greek yogurt and strawberries",
        "MorningSnack": "Banana with almond butter",
        "Lunch": "Black bean and avocado salad with lime-cilantro dressing",
        "AfternoonSnack": "Edamame pods",
        "Dinner": "Grilled steak with roasted potatoes and sautéed spinach"
      },
      "Sunday": {
        "Breakfast": "Vegetable omelette with whole wheat toast",
        "MorningSnack": "Cucumber slices with tzatziki dip",
        "Lunch": "Mediterranean quinoa salad with feta cheese and olives",
        "AfternoonSnack": "Pistachios",
        "Dinner": "Baked salmon with roasted vegetables"
      }
    }
  }
  
`;

  return prompt;
};
