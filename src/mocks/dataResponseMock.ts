type ExercisePlan = {
  [key: string]: string;
};

interface MealPlan {
  [meal: string]: string;
  Breakfast: string;
  MorningSnack: string;
  Lunch: string;
  AfternoonSnack: string;
  Dinner: string;
}

export interface OpenAIResponse {
  status: string;
  data: {
    exercisePlan: ExercisePlan;
    mealPlan: {
      [day: string]: MealPlan;
    };
    tips: string[];
  };
}

export const mockResponse: OpenAIResponse = {
  status: 'success',
  data: {
    exercisePlan: {
      Monday:
        '30 minutes of bodyweight exercises (push-ups, squats, lunges, etc.)',
      Tuesday: '20 minutes of yoga',
      Wednesday:
        'Cardio workout: 30 minutes of jumping jacks, burpees, and mountain climbers',
      Thursday:
        'Strength training: 40 minutes of dumbbell exercises (bicep curls, shoulder presses, etc.)',
      Friday: 'HIIT workout: 20 minutes of high-intensity interval training',
      Saturday: 'Rest day',
      Sunday: '30 minutes of stretching and mobility exercises',
    },
    mealPlan: {
      Monday: {
        Breakfast: 'Oatmeal with sliced bananas and almonds',
        MorningSnack: 'Greek yogurt with berries',
        Lunch:
          'Grilled chicken salad with mixed greens and vinaigrette dressing',
        AfternoonSnack: 'Apple slices with peanut butter',
        Dinner: 'Salmon fillet with quinoa and steamed broccoli',
      },
      Tuesday: {
        Breakfast: 'Scrambled eggs with spinach and tomatoes',
        MorningSnack: 'Cottage cheese with pineapple chunks',
        Lunch:
          'Quinoa salad with chickpeas, cucumber, and lemon-tahini dressing',
        AfternoonSnack: 'Carrot sticks with hummus',
        Dinner: 'Turkey meatballs with marinara sauce over whole wheat pasta',
      },
      Wednesday: {
        Breakfast: 'Whole wheat toast with avocado and poached eggs',
        MorningSnack: 'Mixed nuts (almonds, walnuts, cashews)',
        Lunch: 'Vegetable stir-fry with tofu and brown rice',
        AfternoonSnack: 'Greek yogurt with honey and granola',
        Dinner: 'Grilled shrimp skewers with quinoa and grilled asparagus',
      },
      Thursday: {
        Breakfast:
          'Smoothie with spinach, banana, protein powder, and almond milk',
        MorningSnack: 'Sliced bell peppers with hummus',
        Lunch: 'Turkey and avocado wrap with whole wheat tortilla',
        AfternoonSnack: 'Trail mix (dried fruits and nuts)',
        Dinner:
          'Baked chicken breast with roasted sweet potatoes and green beans',
      },
      Friday: {
        Breakfast: 'Protein pancakes with mixed berries and maple syrup',
        MorningSnack: 'Cottage cheese with peach slices',
        Lunch: 'Grilled vegetable and quinoa bowl with tahini dressing',
        AfternoonSnack: 'Rice cakes with almond butter',
        Dinner: 'Vegetarian chili with cornbread',
      },
      Saturday: {
        Breakfast: 'Whole grain waffles with Greek yogurt and strawberries',
        MorningSnack: 'Banana with almond butter',
        Lunch: 'Black bean and avocado salad with lime-cilantro dressing',
        AfternoonSnack: 'Edamame pods',
        Dinner: 'Grilled steak with roasted potatoes and sautéed spinach',
      },
      Sunday: {
        Breakfast: 'Vegetable omelette with whole wheat toast',
        MorningSnack: 'Cucumber slices with tzatziki dip',
        Lunch: 'Mediterranean quinoa salad with feta cheese and olives',
        AfternoonSnack: 'Pistachios',
        Dinner: 'Baked salmon with roasted vegetables',
      },
    },
    tips: [
      'Stay hydrated by drinking plenty of water throughout the day',
      'Include a source of protein in each meal to support muscle recovery and satiety',
      'Incorporate a variety of colorful fruits and vegetables for a diverse range of nutrients',
      'Listen to your body and adjust the intensity of your workouts as needed',
      'Get plenty of rest and prioritize sleep for optimal recovery',
    ],
  },
};
