const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const quizArea = document.getElementById('question-area');
const questionText = document.getElementById('question');
const submissionArea = document.getElementById('submission-area');
const finalScore = document.getElementById('final-score')
const choiceA = document.getElementById('choice-a');
const choiceB = document.getElementById('choice-b');
const choiceC = document.getElementById('choice-c');
const categoryImage = document.getElementById('category-image')
let userScore = document.getElementById('user-score')
var userName = document.getElementById('username')
let form = document.getElementById('submission-form')
let scoreArea = document.getElementById('score-area')

form.addEventListener('submit', handleSubmit)


const questions = [
  {
    question: 'Which country hosted the delayed 2020 Olympics in 2021?',
    choiceA: 'China',
    choiceB: 'Japan',
    choiceC: 'Australia',
    correct: 'B',
    category: '<i class="fas fa-running"></i>'
  },
  {
    question: 'Which female tennis player was the surprise winner of the US Open in 2021?',
    choiceA: 'Emma Raducanu',
    choiceB: 'Ashleigh Barty',
    choiceC: 'Naomi Osaka',
    correct: 'A',
    category: '<i class="fas fa-running"></i>'
  },
  {
    question: 'The delayed Euro 2020 football tournament took place in 2021. Which country won?',
    choiceA: 'Spain',
    choiceB: 'Italy',
    choiceC: 'France',
    correct: 'B',
    category: '<i class="fas fa-running"></i>'
  },
  {
    question: 'Which football team did Lionel Messi join after ending his 21 year stay at Barcelona?',
    choiceA: 'Real Madrid',
    choiceB: 'Paris Saint-Germain',
    choiceC: 'Bayern Munich',
    correct: 'B',
    category: '<i class="fas fa-running"></i>'
  },
  {
    question: 'Which Basketball team won their first NBA title for 50 years in 2021?',
    choiceA: 'Milwaukee Bucks',
    choiceB: 'Phoenix Sun',
    choiceC: 'Toronto Raptors',
    correct: 'A',
    category: '<i class="fas fa-running"></i>'
  },
  {
    question: 'What were the most popular boys and girls names in the UK for 2021?',
    choiceA: 'Oliver & Lily',
    choiceB: 'Noah & Sophia',
    choiceC: 'Muhammad & Olivia',
    correct: 'C',
    category: '<i class="fas fa-brain"></i>'
  },
  {
    question: 'Which country became a republic on the 55th anniversary of its independence?',
    choiceA: 'Barbados',
    choiceB: 'Jamaica',
    choiceC: 'Dominica',
    correct: 'A',
    category: '<i class="fas fa-brain"></i>'
  },
  {
    question: 'In January 2021 who was sworn in as the 46th US President?',
    choiceA: 'Joe Biden',
    choiceB: 'Donald Trump',
    choiceC: 'Barack Obama',
    correct: 'A',
    category: '<i class="fas fa-brain"></i>'
  },
  {
    question: 'In which of the following canals did the container ship, Ever Given, run aground?',
    choiceA: 'Corinth Canal',
    choiceB: 'Suez Canal',
    choiceC: 'Panama Canal',
    correct: 'B',
    category: '<i class="fas fa-brain"></i>'
  },
  {
    question: 'What was the name of the 2021 United Nations Climate Change Conference which took place in Scotland?',
    choiceA: 'MOP21',
    choiceB: 'CAP96',
    choiceC: 'COP26',
    correct: 'C',
    category: '<i class="fas fa-brain"></i>'
  },
  {
    question: 'Which popular Netflix series follows a French professional thief?',
    choiceA: 'Louis',
    choiceB: 'Lucas',
    choiceC: 'Lupin',
    correct: 'C',
    category: '<i class="fas fa-video"></i>'
  },
  {
    question: 'What was the highest grossing movie of 2021?',
    choiceA: 'Venom: Let There Be Carnage',
    choiceB: 'F9: The Fast Saga',
    choiceC: 'Spider-Man: No Way Home',
    correct: 'C',
    category: '<i class="fas fa-video"></i>'
  },
  {
    question: 'What was the most popular Netflix series of 2021?',
    choiceA: 'Squid Game',
    choiceB: 'Bridgerton',
    choiceC: 'Money Heist',
    correct: 'A',
    category: '<i class="fas fa-video"></i>'
  },
  {
    question: 'What 2021 film sees Keanu Reeves reprise his role as Neo 18 years after the previous film?',
    choiceA: 'Bill & Ted Face the Music',
    choiceB: 'The Matrix Revolutions',
    choiceC: 'The Matrix Resurrections',
    correct: 'C',
    category: '<i class="fas fa-video"></i>'
  },
  {
    question: 'What film won the Best Animated Feature film at the 2021 Oscars?',
    choiceA: 'Over the Moon',
    choiceB: 'Onward',
    choiceC: 'Soul',
    correct: 'C',
    category: '<i class="fas fa-video"></i>'
  },
  {
    question: 'Who received the most awards at the 2021 Grammys?',
    choiceA: 'Dua Lipa',
    choiceB: 'Beyonce',
    choiceC: 'Lady Gaga',
    correct: 'B',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'Who had the biggest selling album in Britain in 2021?',
    choiceA: 'Ed Sheeran',
    choiceB: 'Dave',
    choiceC: 'Adele',
    correct: 'C',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'What song was the Christmas No.1 in 2021?',
    choiceA: 'Last Christmas',
    choiceB: 'Sausage Rolls For Everyone',
    choiceC: 'All I Want For Christmas Is You',
    correct: 'B',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'Bad Habits by Ed Sheeran was the longest running number 1 of 2021. How long did it top the charts?',
    choiceA: '8 Weeks',
    choiceB: '10 Weeks',
    choiceC: '11 Weeks',
    correct: 'C',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'Who was voted best International Group at the 2021 BRIT awards?',
    choiceA: 'Haim',
    choiceB: 'BTS',
    choiceC: 'Run The Jewels',
    correct: 'A',
    category: '<i class="fas fa-music"></i>'
  }
 
]

const lastQuestion = questions.length -1;
let currentQuestion = 0;
let score = 0;

function nextQuestion() {

  if (currentQuestion > lastQuestion) {
    console.log('end')
    endQuiz()
  } else {
    let q = questions[currentQuestion]
    questionText.innerText = q.question
    choiceA.innerText = q.choiceA
    choiceB.innerText = q.choiceB
    choiceC.innerText = q.choiceC
    categoryImage.innerHTML = q.category
  }

  userScore.innerHTML = `Current score: ` + `${score}`;
}

startButton.addEventListener('click', startQuiz)
restartButton.addEventListener('click', refresh)


/**
 * Function starts the quiz once user clicks
 * the start quiz button
 */

function startQuiz() {
  nextQuestion()
  console.log('starting')
  startButton.classList.add('hide')
  quizArea.classList.remove('hide')
  submissionArea.classList.add('hide')
    
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

function endQuiz() {
  quizArea.classList.add('hide')
  submissionArea.classList.remove('hide')
    
}

function handleSubmit(event) {
  event.preventDefault();
  showScore()
}

function showScore() {
  console.log(userName)
  submissionArea.classList.add('hide')
  scoreArea.classList.remove('hide')
  restartButton.classList.remove('hide')
  let answerPercent = Math.round( 100 * score/questions.length)
  if (answerPercent == 100) {
    finalScore.innerHTML = `Congratulations ` + `${userName.value}` + `, you scored ` + `${answerPercent}` + `%! That's awesome. You clearly didn't miss a thing in 2021!`
  } else if (answerPercent >= 80) {
    finalScore.innerHTML = `Wow ` + `${userName.value}` + `, you scored ` + `${answerPercent}` + `%! That's great. You're not far off 100%. Do you think you can do it? Click restart to try again.`
  } else if (answerPercent >= 60) {
    finalScore.innerHTML = `Hi ` + `${userName.value}` + `, you scored ` + `${answerPercent}` + `%! That's a pretty good score. If you think you can do better next time click restart to try again`
  } else if (answerPercent >= 40) {
    finalScore.innerHTML = `Hi ` + `${userName.value}` + `, you scored ` + `${answerPercent}` + `%! That's ok but I think you can do better. Click restart if you want to try again.`
  } else if (answerPercent >= 20) {
    finalScore.innerHTML = `Hi ` + `${userName.value}` + `, you scored ` + `${answerPercent}` + `%! That's not bad but it's not great either. Click restart if you want to try again.`
  } else {
    finalScore.innerHTML = `Hey ` + `${userName.value}` + `, you only scored ` + `${answerPercent}` + `%! You can do better than that. Click restart to try again.`
  }
}

function refresh() {
  window.location.reload('refresh')
}