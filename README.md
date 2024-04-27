<style>
  body {
    background-color: #1F2833;
    color: #333;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #FFFFFF;
  }
</style>

# Feel Fit App

![Feel Fit App Logo](https://ibb.co/jZKt55f)

## Overview

Feel Fit App is a web application built for HACKATHON DEL DEV with Vite and TypeScript that helps users generate personalized weekly exercise and meal plans based on their input. Powered by the GPT-3.5 turbo model from OpenAI, users can provide information such as dietary preferences, exercise experience, injuries, and more to generate a customized plan. The app also allows users to view their weekly plan in a grid of flip cards and download it as a PDF for offline reference.

## Features

- **Personalized Plans**: Generate customized weekly exercise and meal plans based on user input.
- **Grid View**: View the generated weekly plan in a grid of flip cards.
- **PDF Export**: Download the weekly plan as a PDF for offline access.
- **Future Plans**: Planned features include user authentication for saving, editing, and sharing plans, as well as integration with Google Calendar.

## Demo

[View Demo](https://feel-fit.netlify.app/)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/danipereiradev/feel-fit-app.git
cd feel-fit-app
```

2. Install App:

```bash
npm install
```

3. Run App:

```bash
npm run dev
```

## Usage

1. Fill out the form with your information including dietary preferences, exercise experience, injuries, etc.
2. Click on the "Generate Plan" button to generate your personalized weekly plan.
3. View your weekly plan in the grid view or download it as a PDF for offline access.

## Technologies Used

- React
- React hook form
- TypeScript
- Vite
- GPT-3.5 Turbo Model (OpenAI)
- Tailwind CSS

## Dependencies

- @react-pdf/renderer: Generate PDF documents in React.
- @types/uuid: TypeScript definitions for UUID.
- react-icons: Popular icon library for React.
- zustand: State management for React.

## Dev Dependencies

- @types/react: TypeScript definitions for React.
- @typescript-eslint/eslint-plugin: ESLint plugin for TypeScript.
- eslint: JavaScript and TypeScript linter.
- typescript: TypeScript compiler.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
