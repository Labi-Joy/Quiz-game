import { QuizGame } from "@/components/Quiz-game"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-purple-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800 dark:text-purple-300">
          The Ultimate Quiz Game
        </h1>
        <QuizGame />
        <Footer />
      </div>
    </main>
  )
}
