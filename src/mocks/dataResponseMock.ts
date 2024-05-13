export type ExercisePlan = {
  [day: number]: {
    id: number;
    name: string;
    description: string;
  };
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
      [day: number]: {
        id: number;
        name: string;
        description: MealPlan;
      };
    };
    tips: string[];
  };
}

export const mockResponse: OpenAIResponse = {
  status: 'success',
  data: {
    exercisePlan: {
      1: {
        id: 1,
        name: 'Monday',
        description:
          '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
      },
      2: {
        id: 2,
        name: 'Tuesday',
        description:
          '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
      },
      3: {
        id: 3,
        name: 'Wednesday',
        description:
          '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
      },
      4: {
        id: 4,
        name: 'Thursday',
        description:
          '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
      },
      5: {
        id: 5,
        name: 'Friday',
        description:
          '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
      },
      6: {
        id: 6,
        name: 'Saturday',
        description:
          '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
      },
      7: {
        id: 7,
        name: 'Friday',
        description:
          '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
      },
    },
    mealPlan: {
      1: {
        id: 1,
        name: 'Monday',
        description: {
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
      },
      2: {
        id: 2,
        name: 'Tuesday',
        description: {
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
      },
      3: {
        id: 3,
        name: 'Wednesday',
        description: {
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
      },
      4: {
        id: 4,
        name: 'Thursday',
        description: {
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
      },
      5: {
        id: 5,
        name: 'Friday',
        description: {
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
      },
      6: {
        id: 6,
        name: 'Saturday',
        description: {
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
      },
      7: {
        id: 7,
        name: 'Sunday',
        description: {
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
    1: {
      id: 1,
      name: 'monday',
      description:
        '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
    },
    2: {
      id: 2,
      name: 'monday',
      description:
        '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
    },
    3: {
      id: 3,
      name: 'monday',
      description:
        '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
    },
    4: {
      id: 4,
      name: 'monday',
      description:
        '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
    },
    5: {
      id: 5,
      name: 'monday',
      description:
        '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
    },
    6: {
      id: 6,
      name: 'monday',
      description:
        '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
    },
    7: {
      id: 7,
      name: 'monday',
      description:
        '30 minutes of beginner bodyweight exercises including 10 push-ups, 15 squats, and 20 lunges',
    },
  },
  mealPlan: {
    1: {
      id: 1,
      name: 'Monday',
      description: {
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
    },
    2: {
      id: 2,
      name: 'Tuesday',
      description: {
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
    },
    3: {
      id: 3,
      name: 'Wednesday',
      description: {
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
    },
    4: {
      id: 4,
      name: 'Thursday',
      description: {
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
    },
    5: {
      id: 5,
      name: 'Friday',
      description: {
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
    },
    6: {
      id: 6,
      name: 'Saturday',
      description: {
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
    },
    7: {
      id: 7,
      name: 'Sunday',
      description: {
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
    },
  },
};
