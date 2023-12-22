const questions = [
  {
      question: "Who is the father of our nation ?",
      optionA: "Nehru",
      optionB: "Mahatma Gandhi",
      optionC: "Subhash Chandra Bose",
      optionD: "Thalapathy Vijay",
      correctOption: "optionB"
  },

  {
      question: "Who is the first president of india ?",
      optionA: "Abdul Kalam",
      optionB: "Ram Nadh Kovind",
      optionC: "Rajendra Prasad",
      optionD: "Radhakrishnan",
      correctOption: "optionC"
  },

  {
      question: "World War 1 Dates ?",
      optionA: "1915 - 1916",
      optionB: "1914 - 1918",
      optionC: "1916 - 1917",
      optionD: "1920 - 1922",
      correctOption: "optionB"
  },

  {
      question: "Name of the national bird of india ?",
      optionA: "Crow",
      optionB: "Hen",
      optionC: "Peacock",
      optionD: "Sparrow",
      correctOption: "optionC"
  },

  {
      question: "Name the first man to walk on the moon ?",
      optionA: "Buzz Aldin",
      optionB: "Alan Bean",
      optionC: "David Scott",
      optionD: "Neil Armstrong",
      correctOption: "optionD"
  },

  {
    question: "Who is the first citizen in india ?",
    optionA: "Prime Minister",
    optionB: "President",
    optionC: "Cheif Minister",
    optionD: "MLA",
    correctOption: "optionB"
},

{
    question: "Name of the longer river in the river ?",
    optionA: "Kauveri",
    optionB: "Amaravathi",
    optionC: "Ganga",
    optionD: "Nile",
    correctOption: "optionD"
},

{
    question: "Which of the smallest bone in the human body ?",
    optionA: "Finger bone",
    optionB: "Ear bone",
    optionC: "Neck bone",
    optionD: "Leg bone",
    correctOption: "optionB"
},
 

  

 

 

  

 

 


 

  {
      question: "Name of the bird that lays the largest eggs ?",
      optionA: "Crow ",
      optionB: "Dove",
      optionC: "Ostrich",
      optionD: "Heron",
      correctOption: "optionC"
  },

  {
      question: "Which is the tallest mountain in the world ?",
      optionA: "Mount Everest",
      optionB: "Annapurna",
      optionC: "Himalayas ",
      optionD: "Kamet",
      correctOption: "optionA"
  },

  {
      question: "Who invented radio ?",
      optionA: "Newton",
      optionB: "Albert Einstein",
      optionC: "Marconi",
      optionD: "Thomas Alva edison",
      correctOption: "optionC"
  },

  {
      question: "Who invented AC current ?",
      optionA: "Tesla",
      optionB: "Galilio Gallili",
      optionC: "Edison",
      optionD: "Charles Darvin",
      correctOption: "optionA"
  },

  {
      question: "Which festival is known as Festival of light ?",
      optionA: "Ramzaan",
      optionB: "Pongal",
      optionC: "Diwali",
      optionD: "Christmas",
      correctOption: "optionC"
  },

  {
      question: "Which festival is called festival of color ?",
      optionA: "Good friday",
      optionB: "Rakcha banthan",
      optionC: "Moharam",
      optionD: "Holi",
      correctOption: "optionD"
  },

  {
      question: "Meenakshi Amman temple located in the bank of the river ?",
      optionA: "Kaveri",
      optionB: "Vaigai",
      optionC: "Amaravathi",
      optionD: "Thamirabharani",
      correctOption: "optionB"
  },

  {
      question: "Which day of pongal the Jallikattu was played ?",
      optionA: "Bhogi",
      optionB: "Thai Pongal",
      optionC: "Kaanum Pongal",
      optionD: "Maatu Pongal",
      correctOption: "optionD"
  },

  {
      question: "Cholas capital ?",
      optionA: "Museri",
      optionB: "Thanjavur",
      optionC: "Madurai",
      optionD: "Kanchipuram",
      correctOption: "optionB"
  },

  {
      question: "Which queen is called Veeramangai?",
      optionA: "Janshi Rani",
      optionB: "Veelu Nachiyar",
      optionC: "Vellai Nachiyar",
      optionD: "Jakkamma",
      correctOption: "optionB"
  },

  {
      question: "Which one is the longest river in Tamilnadu ?",
      optionA: "Amaravathi",
      optionB: "Thamirabharani",
      optionC: "Kaveri",
      optionD: "Vaigai",
      correctOption: "optionC"
  },

  {
      question: "Silapathikaram written by?",
      optionA: "Kabilar",
      optionB: "Seethalai Saathanar",
      optionC: "Elangoadikal",
      optionD: "Thiruvalluvat",
      correctOption: "optionC"
  }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
  //function to shuffle and push 10 questions to shuffledQuestions array
  while (shuffledQuestions.length <= 2) {
      const random = questions[Math.floor(Math.random() * questions.length)]
      if (!shuffledQuestions.includes(random)) {
          shuffledQuestions.push(random)
      }
  }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
  handleQuestions()
  const currentQuestion = shuffledQuestions[index]
  document.getElementById("question-number").innerHTML = questionNumber
  document.getElementById("player-score").innerHTML = playerScore
  document.getElementById("display-question").innerHTML = currentQuestion.question;
  document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
  const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
  const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
  let correctOption = null

  options.forEach((option) => {
      if (option.value === currentQuestionAnswer) {
          //get's correct's radio input with correct answer
          correctOption = option.labels[0].id
      }
  })
 
  //checking to make sure a radio input has been checked or an option being chosen
  if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
      document.getElementById('option-modal').style.display = "flex"
  }

  //checking if checked radio button is same as answer
  options.forEach((option) => {
      if (option.checked === true && option.value === currentQuestionAnswer) {
          document.getElementById(correctOption).style.backgroundColor = "green"
          playerScore++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }

      else if (option.checked && option.value !== currentQuestionAnswer) {
          const wrongLabelId = option.labels[0].id
          document.getElementById(wrongLabelId).style.backgroundColor = "red"
          document.getElementById(correctOption).style.backgroundColor = "green"
          wrongAttempt++
          indexNumber++
          //set to delay question number till when next question loads
          setTimeout(() => {
              questionNumber++
          }, 1000)
      }
  })
}



//called when the next button is called
function handleNextQuestion() {
  checkForAnswer()
  unCheckRadioButtons()
  //delays next question displaying for a second
  setTimeout(() => {
      if (indexNumber <= 2) {
          NextQuestion(indexNumber)
      }
      else {
          handleEndGame()
      }
      resetOptionBackground()
  }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
  const options = document.getElementsByName("option");
  options.forEach((option) => {
      document.getElementById(option.labels[0].id).style.backgroundColor = ""
  })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
      options[i].checked = false;
  }
}

// function for when all questions being answered
function handleEndGame() {
  let remark = null
  let remarkColor = null

  // condition check for player remark and remark color
  if (playerScore <= 1) {
      remark = " Keep Practicing."
      remarkColor = "red"
  }
  else if (playerScore >= 2) {
      remark = " You can do better."
      remarkColor = "orange"
  }
  else if (playerScore >= 3) {
      remark = "Excellent, Keep the good work going."
      remarkColor = "green"
  }
  const playerGrade = (playerScore / 3) * 100

  //data to display to score board
  document.getElementById('remarks').innerHTML = remark
  document.getElementById('remarks').style.color = remarkColor
  document.getElementById('grade-percentage').innerHTML = playerGrade
  document.getElementById('wrong-answers').innerHTML = wrongAttempt
  document.getElementById('right-answers').innerHTML = playerScore
  document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
  questionNumber = 1
  playerScore = 0
  wrongAttempt = 0
  indexNumber = 0
  shuffledQuestions = []
  NextQuestion(indexNumber)
  document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
  document.getElementById('option-modal').style.display = "none"
}