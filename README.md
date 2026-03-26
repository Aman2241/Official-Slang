# Official Slang Translator (Powered by Google Gemini AI)

[🌐 Live Project Demo](https://aman2241.github.io/Official-Slang/)

A blazing fast, next-generation web application built with React and Vite that intercepts casual, slang, or vulgar language and dynamically transforms it into highly refined, corporate-friendly professional discourse using **Google's Gemini 2.5 Flash LLM**.

## Features
- **Dynamic AI Translation Engine**: Instead of relying on a limited static dictionary, the app streams your input directly to the Gemini AI in real-time. This guarantees infinite, flawless translation capability for arbitrary slang, deep Hinglish sentences, poor grammar, and highly contextual phrasing.
- **Smart Debouncing**: Real-time typing is optimized with an 800ms debounce to prevent overwhelming the API rate limits while maintaining a seamless user experience.
- **Premium Glassmorphic UI**: Stunning dark mode aesthetic with frosted glass panels, floating gradient orbs, and sleek CSS micro-animations.
- **Live State Indicators**: Beautiful UI badges automatically indicate when the AI is currently thinking and translating vs when it has finished refining the text.

## Technology Stack
- **React (Vite)**: For lightning-fast performance and component architecture.
- **Google Gemini API**: Utilizing the `gemini-2.5-flash` model via REST for complex language processing.
- **Vanilla CSS**: Pure CSS logic handling all typography (`Inter` font), animations, gradients, and frosted glass layouts—no bloated UI libraries.

## Running Locally

1. Ensure you have Node.js installed.
2. Clone the repository and navigate into the `Official-Slang` directory.
3. Create a `.env` file in the root directory and add your Gemini API Key:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
4. Install the dependencies:
   ```bash
   npm install
   ```
5. Start the local Vite server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to `http://localhost:5173/`. 

> [!WARNING]
> Because this is a purely frontend static application (HTML/JS/CSS) without a backend, providing the API key to Vite means the key will be exposed in the compiled `gh-pages` Javascript bundle. While `.env` keeps it out of your repository source code, anyone inspecting the live website's network requests can still see the key. For true security, this API call must be routed through a backend server.

## Deploying
This project is configured to auto-deploy its optimized build directory (`/dist`) to the `gh-pages` branch.
To ship new updates to the live GitHub Pages site, simply run:
```bash
npm run deploy
```
