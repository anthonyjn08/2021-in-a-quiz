let startButton = document.getElementById('start-btn')
let quizArea = document.getElementById('question-area')

startButton.addEventListener('click', startQuiz)

/**
 * Function starts the quiz once user clicks
 * the start quiz button
 */

function startQuiz() {
  console.log('starting')
  startButton.classList.add('hide')
  quizArea.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {

}

function selectAnswewr() {

}

function submitScore() {

}