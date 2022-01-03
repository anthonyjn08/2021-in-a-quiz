const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quizArea = document.getElementById('question-area');
const questionText = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');

const questions = [
  {
    question: 'What is 2 x 5?',
    choiceA: '25',
    choiceB:'10',
    choiceC: '5',
    correct: 'B'
  },
  {
    question: 'What is 2 x 8?',
    choiceA: '16',
    choiceB:'8',
    choiceC: '24',
    correct: 'A'
  },
  {
    question: 'What is 2 x 8?',
    choiceA: '16',
    choiceB:'8',
    choiceC: '24',
    correct: 'A'
  }
]

const lastQuestion = questions.length -1;
let currentQuestion = 0;
let score = 0;

function nextQuestion() {
  let q = questions[currentQuestion]
  questionText.innerText = q.question
  choiceA.innerText = q.choiceA
  choiceB.innerText = q.choiceB
  choiceC.innerText = q.choiceC
}

startButton.addEventListener('click', startQuiz)

/**
 * Function starts the quiz once user clicks
 * the start quiz button
 */

function startQuiz() {
  nextQuestion()
  console.log('starting')
  startButton.classList.add('hide')
  quizArea.classList.remove('hide')
  nextButton.classList.remove('hide')
  
  
}



function checkAnswer(answer) {
  if (answer == questions[nextQuestion].correct) {
    score++
    /*answerIsCorrect();*/
  } 

  if (currentQuestion < lastQuestion) {
    currentQuestion++;
    nextQuestion()
  }

}

/*function answerIsCorrect() {
  document.getElementById(nextQuestion).style.backgroundColor = #A2C3A4;
}

function answerIsWrong() {
  document.getElementById(nextQuestion).style.backgroundColor = #EF233C;
}

function submitScore() {

}*/

