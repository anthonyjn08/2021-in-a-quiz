let startButton = document.getElementById('start-btn')
let nextButton = document.getElementById('next-btn')
let quizArea = document.getElementById('question-area')
let questionText = document.getElementById('question')
let answer1 = document.getElementById('answer1')
let answer2 = document.getElementById('answer2')
let answer3 = document.getElementById('answer3')

let currentQuestion = 0;

startButton.addEventListener('click', startQuiz)

/**
 * Function starts the quiz once user clicks
 * the start quiz button
 */

function startQuiz() {
  console.log('starting')
  startButton.classList.add('hide')
  quizArea.classList.remove('hide')
  nextButton.classList.remove('hide')
  questionText.innerText = questions[currentQuestion].question
  answer1.innerText = questions[currentQuestion].answer1
  answer2.innerText = questions[currentQuestion].answer2
  answer3.innerText = questions[currentQuestion].answer3


}

function nextQuestion() {
  
}

function selectAnswewr() {

}

function submitScore() {

}

const questions = [
  {
    question: 'What is 2 * 5',
    answer1: '25',
    answer2:'10',
    answer3: '5',
    correct: '10'
  },
  {
    question: 'What is 2 * 8',
    answer1: '16',
    answer2:'8',
    answer3: '24',
    correct: '1'
  }
]