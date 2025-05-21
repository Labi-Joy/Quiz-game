import { NextResponse } from "next/server"
import type { Question } from "@/types/quiz"

// Sample questions data
const questions: Question[] = [
  {
    id: 1,
    question: "Which HTML element is used to define the title of a document?",
    options: ["<header>", "<title>", "<heading>", "<top>"],
    correctAnswer: "<title>",
    category: "HTML",
  },
  {
    id: 2,
    question: "Which CSS property is used to change the text color of an element?",
    options: ["font-color", "text-color", "color", "text-style"],
    correctAnswer: "color",
    category: "CSS",
  },
  {
    id: 3,
    question: "What is the correct JavaScript syntax to change the content of an HTML element with id='demo'?",
    options: [
      "document.getElement('demo').innerHTML = 'Hello';",
      "document.getElementById('demo').innerHTML = 'Hello';",
      "#demo.innerHTML = 'Hello';",
      "document.getElementByName('demo').innerHTML = 'Hello';",
    ],
    correctAnswer: "document.getElementById('demo').innerHTML = 'Hello';",
    category: "JavaScript",
  },
  {
    id: 4,
    question: "Which HTML attribute is used to define inline styles?",
    options: ["styles", "style", "class", "font"],
    correctAnswer: "style",
    category: "HTML",
  },
  {
    id: 5,
    question: "Which CSS property controls the text size?",
    options: ["text-size", "font-style", "font-size", "text-style"],
    correctAnswer: "font-size",
    category: "CSS",
  },
  {
    id: 6,
    question: "How do you create a function in JavaScript?",
    options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "create myFunction()"],
    correctAnswer: "function myFunction()",
    category: "JavaScript",
  },
  {
    id: 7,
    question: "Which HTML element is used to specify a footer for a document or section?",
    options: ["<bottom>", "<section>", "<footer>", "<foot>"],
    correctAnswer: "<footer>",
    category: "HTML",
  },
  {
    id: 8,
    question: "Which CSS property is used to add shadows to elements?",
    options: ["element-shadow", "shadow-effect", "box-shadow", "shadow"],
    correctAnswer: "box-shadow",
    category: "CSS",
  },
  {
    id: 9,
    question: "How do you declare a JavaScript variable?",
    options: ["v carName;", "variable carName;", "var carName;", "declare carName;"],
    correctAnswer: "var carName;",
    category: "JavaScript",
  },
  {
    id: 10,
    question: "Which operator is used to assign a value to a variable in JavaScript?",
    options: ["=", "*", "x", "-"],
    correctAnswer: "=",
    category: "JavaScript",
  },
]

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Randomize questions order
  const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5)

  return NextResponse.json(shuffledQuestions)
}
