"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface ResultScreenProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export function ResultScreen({ score, totalQuestions, onRestart }: ResultScreenProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  let message = ""
  let emoji = ""

  if (percentage >= 90) {
    message = "Outstanding! You're a quiz master!"
    emoji = "🏆"
  } else if (percentage >= 70) {
    message = "Great job! You know your stuff!"
    emoji = "🎉"
  } else if (percentage >= 50) {
    message = "Good effort! Keep learning!"
    emoji = "👍"
  } else {
    message = "Keep practicing! You'll improve!"
    emoji = "📚"
  }

  return (
    <Card className="w-full shadow-lg border-gray-200 dark:border-gray-700">
      <CardHeader className="text-center">
        <div className="text-4xl mb-2">{emoji}</div>
        <CardTitle className="text-3xl">Quiz Completed!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-2xl font-bold mb-2">
            Your Score: {score}/{totalQuestions}
          </p>
          <p className="text-gray-600 dark:text-gray-300">{message}</p>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>
          <Progress
            value={percentage}
            className="h-3 bg-gray-200 dark:bg-gray-700 [&_.progress-bar]:bg-purple-600 [&_.progress-bar]:dark:bg-purple-500"
          />
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-medium mb-2">Performance Summary</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span>Correct Answers: {score}</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span>Incorrect Answers: {totalQuestions - score}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center pb-6">
        <Button onClick={onRestart} size="lg" className="px-6 bg-purple-600 hover:bg-purple-700 text-white">
          Play Again
        </Button>
      </CardFooter>
    </Card>
  )
}
