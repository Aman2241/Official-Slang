# Official Slang Translator

[🌐 Live Project Demo](https://aman2241.github.io/Official-Slang/)

A blazing fast, real-time web application built with React and Vite that intercepts casual, slang, or vulgar language and transforms it into highly refined, corporate-friendly professional discourse. 

## Features
- **Real-Time Engine**: Instantly sanitizes harsh words into professional equivalents using a rapid dictionary lookup.
- **Premium Glassmorphic UI**: Stunning dark mode aesthetic with frosted glass panels, floating gradient orbs, and sleek micro-animations.
- **Visual Highlighting**: Substituted keywords instantly light up with a subtle blue tracking pulse so you know exactly what was changed.

## Technology Stack
- **React (Vite)**: For lightning fast performance and state management.
- **CSS**: Pure vanilla CSS logic handling all typography (`Inter` font), animations, gradients, and layout.

## Running Locally

1. Ensure you have Node.js installed.
2. Clone the repository and navigate into the `Official-Slang` directory:
   ```bash
   npm install
   ```
3. Start the local Vite server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173/`.

## Deploying
This project is configured to auto-deploy its optimized build directory (`/dist`) to the `gh-pages` branch.
To ship new updates to the live site, simply run:
```bash
npm run deploy
```
