const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const introArea = document.getElementById('intro-area')
const quizArea = document.getElementById('question-area');
const questionText = document.getElementById('question');
const submissionArea = document.getElementById('submission-area');
const finalScore = document.getElementById('final-score');
const choiceA = document.getElementById('choice-a');
const choiceB = document.getElementById('choice-b');
const choiceC = document.getElementById('choice-c');
const categoryImage = document.getElementById('category-image');

let buttons = document.getElementsByClassName('answer-btn')
let userScore = document.getElementById('user-score');
let userName = document.getElementById('username');
let form = document.getElementById('submission-form');
let scoreArea = document.getElementById('score-area');
let currentQuestion = 0;
let score = 0;

form.addEventListener('submit', handleSubmit);




/**
 * This function populates the current question and answers to the relevent areas in the HTML
 */

function nextQuestion() {

  if (currentQuestion > lastQuestion) {
    endQuiz();
  } else {
    let question = questions[currentQuestion];
    questionText.innerText = question.question;
    choiceA.innerText = question.choiceA;
    choiceB.innerText = question.choiceB;
    choiceC.innerText = question.choiceC;
    categoryImage.innerHTML = question.category;
  }

  userScore.innerHTML = `Current score: ` + `${score}`;
}

startButton.addEventListener('click', startQuiz);
restartButton.addEventListener('click', restartQuiz);


/**
 * Function starts the quiz once user clicks
 * the start quiz button
 */

function startQuiz() {
  nextQuestion();
  //showHide(startButton)
  //showHide(quizArea)
  startButton.classList.add('hide');
  introArea.classList.add('hide');
  quizArea.classList.remove('hide');
}

function showHide(target) {
  target.classList.contains('hide') ? target.classList.remove('hide') : target.classList.add('hide');
} 

/**
 * CheckAnswer functions checks the answer against the answer button pressed and displays a message for correct or wrong answers
 * and will increment the score if correct, then move on to the next question
 */

function checkAnswer(answer) {
  
  if(answer === questions[currentQuestion].correct) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Correct',
      showConfirmButton: false,
      timer: 1500
    });
    score++;
    currentQuestion++;
    nextQuestion();
  } else {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Wrong',
      showConfirmButton: false,
      timer: 1500
    });
    currentQuestion++;
    nextQuestion();
  }
}

/**
 * This function removes the question area from view and displays the submission form for the player to get their score
 */

function endQuiz() {
  //showHide(quizArea)
  //showHide(submissionArea)
  quizArea.classList.add('hide');
  submissionArea.classList.remove('hide');
    
}

/**
 * This function prevents the submit button from refreshing the page when the user submits their name to see their score, it then runs the showScore function
 */

function handleSubmit(event) {
  event.preventDefault();
  showScore();
}

/**
 * This function calculates the players score, then displays this and a message dependent on their score. It also displays the restart button if the user wants to play again
 */

function showScore() {
  //showHide(submissionArea)
  //showHide(scoreArea)
  //showHide(restartButton)
  submissionArea.classList.add('hide');
  scoreArea.classList.remove('hide');
  restartButton.classList.remove('hide');
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
  };
}

/**
 * This function will restart the quiz if the user presses the restart button. It resets the score to 0 and goes back to the first question.
 */

function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  scoreArea.classList.add('hide');
  startButton.classList.add('hide');
  startQuiz();
  //showHide(startButton)
  //showHide(scoreArea)
}

const questions = [
  {
    question: 'Which country hosted the delayed 2020 Olympics?',
    choiceA: 'China',
    choiceB: 'Japan',
    choiceC: 'Australia',
    correct: 'B',
    category: '<i class="fas fa-running"></i>'
  },
  {
    question: 'Which female tennis player was the surprise winner of the US Open?',
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
    question: 'Which football team did Lionel Messi join after ending his 21 year association with Barcelona?',
    choiceA: 'Real Madrid',
    choiceB: 'Paris Saint-Germain',
    choiceC: 'Bayern Munich',
    correct: 'B',
    category: '<i class="fas fa-running"></i>'
  },
  {
    question: 'Which Basketball team won their first NBA title for 50 years?',
    choiceA: 'Milwaukee Bucks',
    choiceB: 'Phoenix Sun',
    choiceC: 'Toronto Raptors',
    correct: 'A',
    category: '<i class="fas fa-running"></i>'
  },
  {
    question: 'What were the most popular boys and girls names in the UK?',
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
    choiceB: 'Spider-Man: No Way Home',
    choiceC: 'F9: The Fast Saga',
    correct: 'B',
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
    question: 'Which film sees Keanu Reeves reprise his role as Neo 18 years after the previous film?',
    choiceA: 'Bill & Ted Face the Music',
    choiceB: 'The Matrix Revolutions',
    choiceC: 'The Matrix Resurrections',
    correct: 'C',
    category: '<i class="fas fa-video"></i>'
  },
  {
    question: 'What film won the Best Animated Feature film at the Oscars?',
    choiceA: 'Over the Moon',
    choiceB: 'Onward',
    choiceC: 'Soul',
    correct: 'C',
    category: '<i class="fas fa-video"></i>'
  },
  {
    question: 'Who received the most awards at the Grammys?',
    choiceA: 'Dua Lipa',
    choiceB: 'Beyonce',
    choiceC: 'Lady Gaga',
    correct: 'B',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'Who had the biggest selling album in Britain?',
    choiceA: 'Ed Sheeran',
    choiceB: 'Dave',
    choiceC: 'Adele',
    correct: 'C',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'What song was the Christmas No.1?',
    choiceA: 'Last Christmas',
    choiceB: 'Sausage Rolls For Everyone',
    choiceC: 'All I Want For Christmas Is You',
    correct: 'B',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'Bad Habits by Ed Sheeran was the longest running number 1 single of 2021. How long did it top the charts?',
    choiceA: '8 Weeks',
    choiceB: '10 Weeks',
    choiceC: '11 Weeks',
    correct: 'C',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'Who was voted best International Group at the BRIT awards?',
    choiceA: 'Haim',
    choiceB: 'BTS',
    choiceC: 'Run The Jewels',
    correct: 'A',
    category: '<i class="fas fa-music"></i>'
  },
  {
    question: 'A study of almost 2,000 UK adults found that those who did this activity regularly experienced less cognitive decline. Was it:',
    choiceA: 'Watching Netflix',
    choiceB: 'Eating cheese',
    choiceC: 'Doing bicep curls',
    correct: 'B',
    category: '<i class="fas fa-atom"></i>'
  },
  {
    question: 'In March 2021, 15 volunteers ventured into a cave beneath the Pyrenees, with no natural light or a clock until they came back out. They stayed in the cave for so long that they lost track of how many days had passed. How many was it?',
    choiceA: '37 days',
    choiceB: '40 days',
    choiceC: '44 days',
    correct: 'B',
    category: '<i class="fas fa-atom"></i>'
  },
  {
    question: 'In 2021, the Met Office predicted that by the end of the century, Britain could regularly see summer days at what temperature?',
    choiceA: '38˚C',
    choiceB: '39˚C',
    choiceC: '40˚C',
    correct: 'C',
    category: '<i class="fas fa-atom"></i>'
  },
  {
    question: 'Scientists observed electric eels in the Amazon River working in groups of up to 10 to hunt. They discharged a synchronised electric shock to their prey, but how many volts of electricity could 10 eels produce?',
    choiceA: '8,600V',
    choiceB: '8,200V',
    choiceC: '8,000V',
    correct: 'A',
    category: '<i class="fas fa-atom"></i>'
  },
  {
    question: 'What space weather phenomenon, first observed over the North Pole in 2014, was confirmed in 2021?',
    choiceA: 'Space hurricane',
    choiceB: 'Space tornado',
    choiceC: 'Space monsoon',
    correct: 'A',
    category: '<i class="fas fa-atom"></i>'
  }
];

const lastQuestion = questions.length -1;