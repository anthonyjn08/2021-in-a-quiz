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
    question: 'Which country hosted the delayed 2020 Olympics in 2021?',
    choiceA: 'China',
    choiceB: 'Japan',
    choiceC: 'Australia',
    correct: 'B',
    category: 'sports'
  },
  {
    question: 'Which female tennis player was the surprise winner of the US Open in 2021?',
    choiceA: 'Emma Raducanu',
    choiceB: 'Ashleigh Barty',
    choiceC: 'Naomi Osaka',
    correct: 'A',
    category: 'sports'
  },
  {
    question: 'The delayed Euro 2020 football tournament took place in 2021. Which country won?',
    choiceA: 'Spain',
    choiceB: 'Italy',
    choiceC: 'France',
    correct: 'B',
    category: 'sports'
  },
  {
    question: 'Which football team did Lionel Messi join after ending his 21 year stay at Barcelona?',
    choiceA: 'Real Madrid',
    choiceB: 'Paris Saint-Germain',
    choiceC: 'Bayern Munich',
    correct: 'B',
    category: 'sports'
  },
  {
    question: 'Which Basketball team won their first NBA title for 50 years in 2021?',
    choiceA: 'Milwaukee Bucks',
    choiceB: 'Phoenix Sun',
    choiceC: 'Toronto Raptors',
    correct: 'A',
    category: 'sports'
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



