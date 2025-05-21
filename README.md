# Getting Started with the Ultimate Quiz Game

This is a Next.js project built with React, TypeScript, and Tailwind CSS

## Prerequisites

- Node.js 18+ installed on your pc
- npm or yarn package manager

## Quick Start

1. **Clone my repository (https://github.com/Labi-Joy/Quiz-game) or download the code on my repo**

2. **Navigate to the project directory**
   cd ultimate-quiz-game (or any name you give it)

3. **Install dependencies**
   npm install (for windows)
   # or
   yarn install (for ios)

4. **Run the development server**
   npm run dev (for windows)
   # or
   yarn dev (for ios)
   

5. **Open your browser**
   Open [http://localhost:3000](http://localhost:3000) to see the application running.

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components
- `types/` - TypeScript type definitions
- `app/api/` - API routes for the quiz questions

## Key Files

- `app/page.tsx` - Main page component
- `components/quiz-game.tsx` - Main quiz logic and state management
- `components/question-card.tsx` - Individual question display
- `components/start-screen.tsx` - Welcome screen
- `components/result-screen.tsx` - End of quiz results
- `app/api/questions/route.ts` - API endpoint for quiz questions

## Customizing the Quiz

### Adding More Questions

Edit the `app/api/questions/route.ts` file to add more questions to this quiz.

### Changing Styles

The project uses Tailwind CSS for styling. You can modify the colors and styles in the component files as you wish

## Deployment

This Next.js app can be easily deployed to Vercel:

**
npm run build
npm run start

**
Or deploy directly to Vercel with:
npx vercel

Have fun! Labi dev
