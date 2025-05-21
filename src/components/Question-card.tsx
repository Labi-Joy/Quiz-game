"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Question } from "@/types/quiz"
import { cn } from "@/lib/utils"

interface QuestionCardProps {
  question: Question
  onAnswer: (isCorrect: boolean) => void
  onNext: () => void
  answered: boolean
  setAnswered: () => void
  isLastQuestion?: boolean
}

export function QuestionCard({ question, onAnswer, onNext, answered, setAnswered, isLastQuestion }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const handleSelectAnswer = (answer: string) => {
    if (answered) return

    setSelectedAnswer(answer)
    setAnswered()

    const isCorrect = answer === question.correctAnswer
    onAnswer(isCorrect)
  }

  const getButtonClass = (answer: string) => {
    if (!answered || selectedAnswer !== answer) {
      return ""
    }

    return answer === question.correctAnswer
      ? "bg-green-500 hover:bg-green-600 text-white border-green-600"
      : "bg-red-500 hover:bg-red-600 text-white border-red-600"
  }

  return (
    <Card className="w-full shadow-lg border-gray-200 dark:border-gray-700">
      <CardHeader className="bg-purple-50 dark:bg-purple-900/20 rounded-t-lg border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="text-xl text-center">{question.question}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4">
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className={cn(
                "h-auto py-4 px-6 justify-start text-left font-normal hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all",
                getButtonClass(option),
              )}
              onClick={() => handleSelectAnswer(option)}
              disabled={answered}
            >
              <div className="flex items-center w-full">
                <div className="w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 flex items-center justify-center mr-3 flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </div>
                <span className="break-words">{option}</span>
              </div>
            </Button>
          ))}
        </div>

        {answered && (
          <div
            className={cn(
              "mt-6 p-4 rounded-lg",
              selectedAnswer === question.correctAnswer
                ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/30"
                : "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30",
            )}
          >
            <p
              className={cn(
                "font-medium",
                selectedAnswer === question.correctAnswer
                  ? "text-green-700 dark:text-green-400"
                  : "text-red-700 dark:text-red-400",
              )}
            >
              {selectedAnswer === question.correctAnswer
                ? "Correct!"
                : `Incorrect! The correct answer is: ${question.correctAnswer}`}
            </p>
          </div>
        )}
      </CardContent>
      {answered && selectedAnswer !== null && (
        <div className="px-6 pb-6 pt-2">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={onNext}>
            {isLastQuestion ? "End Quiz" : "Next Question"}
          </Button>
        </div>
      )}
    </Card>
  )
}
