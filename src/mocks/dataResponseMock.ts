
export type ExercisePlan = {
  [key: string]: string;
};

export interface MealPlan {

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


export const openAiMock = {
  exercisePlan: {
    Monday:
      '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
    Tuesday:
      '20 minutes of beginner yoga focusing on relaxation and stretching',
    Wednesday:
      'Cardio workout: 30 minutes of beginner jumping jacks,  burpees, and mountain climbers with modifications',
    Thursday:
      'Strength training: 40 minutes of beginner dumbbell exercises such as bicep curls and shoulder presses with light weights',
    Friday:
      'HIIT workout: 20 minutes of beginner high-intensity interval training with low impact movements',
    Saturday: 'Rest day',
    Sunday:
      '30 minutes of stretching and mobility exercises focusing on flexibility and range of motion',
  },
  mealPlan: {
    Monday: {
      Breakfast:
        'Start your day with overnight oats made with almond milk, chia seeds, and topped with fresh berries',
      MorningSnack:
        'Grab a small handful of mixed nuts for a quick and nutritious snack',
      Lunch:
        'Prepare a turkey and avocado wrap using whole grain tortilla, include lettuce, tomato, and a drizzle of balsamic glaze',
      AfternoonSnack:
        'Enjoy a sliced apple with a sprinkle of cinnamon and a tablespoon of almond butter',
      Dinner:
        'Cook a simple grilled chicken breast seasoned with lemon pepper, paired with a side of quinoa and steamed green beans',
    },
    Tuesday: {
      Breakfast:
        'Whip up a protein-packed spinach and feta omelette served with a side of whole grain toast',
      MorningSnack:
        'Indulge in a cup of Greek yogurt topped with honey and a handful of granola',
      Lunch:
        'Prepare a colorful salad bowl with mixed greens, cherry tomatoes, cucumbers, chickpeas, and a drizzle of tahini dressing',
      AfternoonSnack:
        'Satisfy your sweet tooth with a sliced pear sprinkled with cinnamon',
      Dinner:
        'Bake a piece of wild-caught salmon seasoned with garlic and herbs, serve with a side of quinoa and roasted asparagus',
    },
    Wednesday: {
      Breakfast:
        'Fuel your morning with whole grain toast topped with mashed avocado and a poached egg, sprinkle with black pepper',
      MorningSnack:
        'Munch on a small container of Greek yogurt mixed with fresh berries and a drizzle of honey',
      Lunch:
        'Stir-fry a colorful mix of vegetables with tofu in a light soy sauce, serve over brown rice',
      AfternoonSnack: 'Snack on a sliced cucumber with a dollop of hummus',
      Dinner:
        'Grill succulent shrimp skewers marinated in lemon and garlic, enjoy with a side of quinoa and grilled zucchini',
    },
    Thursday: {
      Breakfast:
        'Blend together a refreshing green smoothie with spinach, banana, almond milk, and a scoop of plant-based protein powder',
      MorningSnack: 'Dip crunchy carrot sticks in a creamy portion of hummus',
      Lunch:
        'Roll up a turkey and veggie wrap using a whole wheat tortilla, add sliced avocado and baby spinach leaves',
      AfternoonSnack:
        'Enjoy a small portion of mixed nuts and dried fruits for a satisfying snack',
      Dinner:
        'Roast a lean chicken breast with a blend of herbs, serve with roasted sweet potatoes and steamed green beans',
    },
    Friday: {
      Breakfast:
        'Prepare a stack of whole grain pancakes topped with fresh berries and a drizzle of pure maple syrup',
      MorningSnack:
        'Scoop up a serving of cottage cheese with peach slices for a protein-rich snack',
      Lunch:
        'Enjoy a hearty grilled vegetable and quinoa bowl drizzled with tahini dressing for a flavorful meal',
      AfternoonSnack:
        'Nibble on rice cakes spread with creamy almond butter for an energy boost',
      Dinner:
        'Warm up with a bowl of vegetarian chili topped with a cornbread crumble for a cozy dinner',
    },
    Saturday: {
      Breakfast:
        'Treat yourself to whole grain waffles paired with Greek yogurt and freshly sliced strawberries',
      MorningSnack: 'Dip a ripe banana in almond butter for a satisfying snack',
      Lunch:
        'Indulge in a black bean and avocado salad topped with a zesty lime-cilantro dressing',
      AfternoonSnack: 'Pop open some edamame pods for a protein-packed snack',
      Dinner:
        'Savor a juicy grilled steak with crispy roasted potatoes and a side of sautéed spinach',
    },
    Sunday: {
      Breakfast:
        'Whisk up a veggie omelette filled with bell peppers, onions, tomatoes, and topped with a sprinkle of feta cheese',
      MorningSnack:
        'Dip cucumber slices in cool tzatziki dip for a refreshing mid-morning snack',
      Lunch:
        'Enjoy a Mediterranean quinoa salad loaded with olives, cherry tomatoes, cucumbers, and crumbled feta cheese',
      AfternoonSnack:
        'Crack open some fresh pistachios for a crunchy and satisfying snack',
      Dinner:
        'Bake a flaky salmon fillet seasoned with herbs and lemon juice, accompanied by a medley of roasted vegetables',
    },
  },
};

