let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

// Define questions
const myQuestions = [
  {
    question: "What does the 'H' in HTML stand for?",
    answers: {
      a: "Hyperactive",
      b: "Hypothermia",
      c: "Hypertext",
      d: "Hippopotamus"
    },
    correctAnswer: "c"
},
{
    question: "How was JavaScript invented?",
    answers: {
      a: "As a long-planned, new scripting language",
      b: "By accident",
      c: "As an extension of Java",
      d: "A screenwriter poured coffee on his manuscript",
    },
    correctAnswer: "b"
},
{
    question: "What does CSS stand for?",
    answers: {
      a: "<b>C</b>ascading <b>S</b>tyle <b>S</b>heet",
      b: "<b>C</b>omplete <b>S</b>hit <b>S</b>how",
      c: "<b>C</b>osmetically <b>S</b>lick <b>S</b>tyling",
      d: "None of the above",
    },
    correctAnswer: "a"
},
{
    question: "The dot operator typically exposes what part of an object?",
    answers: {
      a: "Methods",
      b: "Properties",
      c: "Methods or properties",
      d: "Private parts",
  },
    correctAnswer: "c"
},
{
    question: "What is the DOM?",
    answers: {
      a: "<b>D</b>ental <b>O</b>rthodontic <b>M</b>ethodology",
      b: "<b>D</b>ominatrix <b>O</b>rdering <b>M</b>echanism",
      c: "<b>D</b>onnie <b>O</b>smond <b>M</b>ovie",
      d: "<b>D</b>ocument <b>O</b>bject <b>M</b>odel",
    },
    correctAnswer: "d"
}
];   //end making array



/// Function that builds the quiz
function buildQuiz(){
  let output = [];

  //loop through myQuestions
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

    //store list of multiple choice answers
    let answers = [];

    // store each available answer
    for(letter in currentQuestion.answers){

      // add HTML binary button
      answers.push(
        `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
      );
    }

      //add current question and its answers to HTML output
      output.push(
      `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join('')} </div>`
    );
  }
);

  quiz.innerHTML = output.join('');

}


/// Function that collects the results of the quiz
function showResults(){
  let answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0; //keep track of answers
  myQuestions.forEach((currentQuestion, questionNumber) => {
    let answerContainer = answerContainers[questionNumber];
    let selector = 'input[name=question' + questionNumber+ ']:checked';
    let userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // on correct answer
    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      //green for correct....can't get ONLY the right answer green though
      userAnswer.style.color = 'green'; 
      // answerContainers[questionNumber].style.color = "green";
    }
      else {
        //wrong answers = gray
        answerContainers[questionNumber].style.color = "gray";
      }
  });
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length + ' correct';

}

//display Quiz
buildQuiz();

// show results on submit
submitButton.addEventListener('click', showResults);
