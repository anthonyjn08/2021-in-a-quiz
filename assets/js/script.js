const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const quizArea = document.getElementById('question-area');
const questionText = document.getElementById('question');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
let userScore = document.getElementById('user-score')

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
  if (currentQuestion > lastQuestion) {
    console.log('end')
  } else {
    let q = questions[currentQuestion]
    questionText.innerText = q.question
    choiceA.innerText = q.choiceA
    choiceB.innerText = q.choiceB
    choiceC.innerText = q.choiceC
  }

  userScore.innerHTML = `Total score: ` + `${score}`;
}

startButton.addEventListener('click', startQuiz)
restartButton.addEventListener('click', startQuiz)


/**
 * Function starts the quiz once user clicks
 * the start quiz button
 */

function startQuiz() {
  nextQuestion()
  console.log('starting')
  startButton.classList.add('hide')
  restartButton.classList.add('hide')
  quizArea.classList.remove('hide')
    
}



function checkAnswer(answer) {
  if(answer === questions[currentQuestion].correct) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Correct',
      showConfirmButton: false,
      timer: 1500
    })
    score++
    currentQuestion++
    nextQuestion()
  } else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Wrong',
      showConfirmButton: false,
      timer: 1500
    })
    currentQuestion++
    nextQuestion()
  }
}



