"use client"

import { useEffect, useState } from "react"

interface TimerProps {
  duration: number
  isActive: boolean
  onTimeUp: () => void
}

export function Timer({ duration, isActive, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(duration)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0 && isActive) {
      onTimeUp()
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timeLeft, isActive, onTimeUp])

  // Reset timer when duration changes
  useEffect(() => {
    setTimeLeft(duration)
  }, [duration])

  // Calculate percentage for progress bar
  const percentage = (timeLeft / duration) * 100

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <p className="text-sm font-medium text-slate-500">Time Remaining</p>
        <p className="text-sm font-medium text-slate-500">{timeLeft} seconds</p>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-1000 ${
            timeLeft < 10 ? "bg-red-500" : timeLeft < 20 ? "bg-yellow-500" : "bg-green-500"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
