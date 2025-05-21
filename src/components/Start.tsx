"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface StartScreenProps {
  onStart: () => void
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <Card className="w-full shadow-lg border-gray-200 dark:border-gray-700">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">Welcome to The Ultimate Quiz Game!</CardTitle>
        <CardDescription className="text-lg mt-2">Test your knowledge of HTML, CSS, and JavaScript</CardDescription>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl" role="img" aria-label="HTML">
                🧱
              </span>
            </div>
            <h3 className="font-medium">HTML</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Structure your web content</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl" role="img" aria-label="CSS">
                🎨
              </span>
            </div>
            <h3 className="font-medium">CSS</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Style your websites</p>
          </div>
          <div className="text-center p-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl" role="img" aria-label="JavaScript">
                ⚡
              </span>
            </div>
            <h3 className="font-medium">JavaScript</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Add interactivity</p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Challenge yourself with questions about front-end web development. Each question has a 15-second time limit,
          so think fast!
        </p>
      </CardContent>
      <CardFooter className="flex justify-center pb-8">
        <Button size="lg" onClick={onStart} className="px-8 py-6 text-lg bg-purple-600 hover:bg-purple-700 text-white">
          Start Quiz
        </Button>
      </CardFooter>
    </Card>
  )
}
