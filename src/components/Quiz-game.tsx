"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { QuestionCard } from "@/components/question-card"
import { StartScreen } from "@/components/start"
import { ResultScreen } from "@/components/result"
import type { Question } from "@/types/quiz"

export function QuizGame() {
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [gameState, setGameState] = useState<"start" | "playing" | "finished">("start")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState(15)
  const [timerActive, setTimerActive] = useState(false)

  // Load questions from JSON file
  const loadQuestions = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/questions")
      if (!response.ok) {
        throw new Error("Failed to load questions")
      }
      const data = await response.json()
      setQuestions(data)
      setLoading(false)
    } catch (err) {
      setError("Failed to load questions. Please try again.")
      setLoading(false)
      console.error(err)
    }
  }

  // Start the game
  const startGame = async () => {
    await loadQuestions()
    setGameState("playing")
    setCurrentQuestionIndex(0)
    setScore(0)
  }

  // Handle answer selection
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1)
    }
  }

  // Move to next question
  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      setGameState("finished")
    }
  }

  // Restart the game
  const restartGame = () => {
    setGameState("start")
    setCurrentQuestionIndex(0)
    setScore(0)
  }

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (gameState === "playing" && timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && timerActive) {
      // Time's up, move to next question
      handleAnswer(false)
      setTimerActive(false)
      nextQuestion()
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timeLeft, timerActive, gameState])

  // Reset timer when moving to a new question
  useEffect(() => {
    if (gameState === "playing") {
      setTimeLeft(15)
      setTimerActive(true)
    }
  }, [currentQuestionIndex, gameState])

  // Render different screens based on game state
  if (gameState === "start") {
    return <StartScreen onStart={startGame} />
  }

  if (gameState === "finished") {
    return <ResultScreen score={score} totalQuestions={questions.length} onRestart={restartGame} />
  }

  if (loading) {
    return (
      <Card className="p-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-8 h-8 border-4 border-t-purple-600 border-gray-200 rounded-full animate-spin"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">Loading questions...</p>
        </div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="p-8 text-center bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/30">
        <div className="text-red-500 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mb-2"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-lg font-medium">{error}</p>
        </div>
        <button
          onClick={loadQuestions}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
      </Card>
    )
  }

  return (
    <>
      {questions.length > 0 && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
            <p className="text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full">
              Score: {score}
            </p>
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Time Remaining</p>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{timeLeft} seconds</p>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full transition-all duration-1000 ${
                  timeLeft < 5 ? "bg-red-500" : timeLeft < 10 ? "bg-yellow-500" : "bg-purple-600 dark:bg-purple-500"
                }`}
                style={{ width: `${(timeLeft / 15) * 100}%` }}
              ></div>
            </div>
          </div>
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={nextQuestion}
            answered={!timerActive}
            setAnswered={() => setTimerActive(false)}
            isLastQuestion={currentQuestionIndex === questions.length - 1}
          />
        </div>
      )}
    </>
  )
}
