$(document).ready(function() {
  var questionsRight = 0;
  var currentQuestion = 0;

  var quiz = {
    name: "Die Hard Quiz",
    description: "Do you even Die Hard?",
    questions: [
      {
        text:
          "In the first film, arguably the greatest of all time, what is the name of the limo driver that picks up John from the airport?",
        answers: ["Anthony", "Chris", "Argyle", "Adrian"],
        correct: 2,
        image: "./images/DieHardOneTitle.jpg"
      },
      {
        text: "Die Hard One took place in Chicago",
        answers: ["True", "False"],
        correct: 1,
        image: "./images/Nakatomi.jpg"
      },
      {
        text:
          "John's wife Holly is listed in the building directory with her maiden name, Gennaro. What does she say is the reason for doing this?",
        answers: [
          "to get ahead in the corporate world",
          "it's a Japanese company",
          "not sure if John was coming to LA",
          "just to keep things simple for now"
        ],
        correct: 1,
        image: "./images/NakatomiPlazaDirectory.jpg"
      },
      {
        text:
          "While the building is under siege by Hans Gruber and associates, one of Holly's coworkers, Harry Ellis, (arguably God's Greatest gift) offers to help the terrorist make a deal. How does he convince Hans?",
        answers: [
          "Hans, bubby, i'm your white knight",
          "Hans, Hans, Hans, Hans, Hans, Hans Come'on Hans",
          "Hans I can giftwrap this cowboy for you",
          "Hans do you like your steak well done"
        ],
        correct: 0,
        image: "./images/HarryEllis.jpg"
      },
      {
        text:
          "In the second film, arguably the 2nd greatest of all time, John is at the airport in his in laws' car to pick up Holly. Which airport is this ?",
        answers: [
          "IAD - Washington Dulles International Airport",
          "BOS - Boston Logan International Airport",
          "BWI - Baltimore Washington International Airport",
          "LGA - LaGuardia International Airport"
        ],
        correct: 0,
        image: "./images/GennarosCar.jpg"
      },
      {
        text:
          "Reporter Samantha Coleman is at the airport trying to get a story while waiting for General Esperanza's flight to arrive. After getting no comment from the guys from the state department, she then also gets a freezing cold shoulder from an ex Special Forces commander while walking through the airport. Who is the commander?",
        answers: [
          "Lt Johnson",
          "Brigadier General Francis X Hummel",
          "Colonel William Stuart",
          "Major Benson Winifred Payne"
        ],
        correct: 2,
        image: "./images/SpecialForcesYoga.jpg"
      },
      {
        text:
          "In the 3rd Die Hard film, arguably the 3rd greatest of all time, John is forced to run around NY doing what Hans Gruber's brother tells him to do. John is nursing a pretty solid hangover, and on the way to their first stop in Harlem, officers are discussing 14 dump trucks were stolen overnight from a yard in Staten Island. Who did Officer Lamber suggest the trucks were stolen by?",
        answers: ["Simon Gruber", "John's Land Lady", "Zeus", "Santa Claus"],
        correct: 1,
        image: "./images/JoeLambert.jpg"
      },
      {
        text:
          "Midway through the film John teams up with a truck driver named Jerry to drive through the aqueduct tunnel. Jerry solves a riddle for John. What is 21 out of 42?  Who does Jerry tell John that the 21st president is?",
        answers: [
          "Hilary A. Clinton",
          "Grover A. Cleveland",
          "James A. Garfield",
          "Chester A. Arthur"
        ],
        correct: 3,
        image: "./images/JerryTruckDriver.jpg"
      }
    ]
  };

  var syledQuizDescription = `<h1 class="quiz-description">${
    quiz.description
  }</h1>`;

  // $("#title").text(quiz.name);
  $(".wrap").html(syledQuizDescription);

  $("#start").on("click", function starting() {
    $("#start").addClass("hidden");
    $("#start-image").addClass("hidden");
    displayQuestion();
  });

  function displayQuestion() {
    var html = "";
    html += `<img src="${
      quiz.questions[currentQuestion].image
    }" class="question-image"></img>`;
    html += "<form id='quizForm'>";
    html += `<h3 class="quiz-question"> ${
      quiz.questions[currentQuestion].text
    } </h3>`;
    for (var i = 0; i < quiz.questions[currentQuestion].answers.length; i++) {
      html += `<input type="radio" name="answers" class="quiz-answers" value="${i}"> ${
        quiz.questions[currentQuestion].answers[i]
      } <br>`;
    }
    html += "<br><button type='submit'>Submit</button>";
    html += "</form>";

    $(".wrap").html(html);
  }

  function tally() {
    var radioValue = $("input[name='answers']:checked").val();
    if (radioValue == quiz.questions[currentQuestion].correct) {
      questionsRight++;
    }
  }

  function displayTally() {
    var html = "";
    html += `<p class="tally"></p>`;
    html += `<h3>${questionsRight} correct out of ${currentQuestion} so far</h3>`;
    $(".tally").html(html);
  }

  $(".wrap").on("submit", "#quizForm", function(e) {
    e.preventDefault();
    tally();
    currentQuestion++;
    if (currentQuestion === quiz.questions.length) {
      $(".tally").html("");
      showResults();
    } else {
      displayQuestion();
      displayTally();
    }
  });
  let winnerAl = "./images/AlPowell.jpg";
  let bruceToes = "./videos/fistsWithToes.mp4";
  function showResults() {
    if (questionsRight == quiz.questions.length) {
      var answers = `<h3> WHOA THERE you deserve a medal for ${questionsRight} out of ${
        quiz.questions.length
      }</h3>`;
      answers += `<img class="question-image" src="${winnerAl}"></img>`;
      answers +=
        `<p>Want to see another film turned into a quiz? Be able to set the difficulty level?</p>`;
      answers += `<p><a href="http://nickis.online/#contact">Send Nick a note</a></p>`;
    } else {
      var answers = `<h3> Nice try, you got ${questionsRight} out of ${
        quiz.questions.length
      }</h3>`;
      answers += `<video with="600" controls="controls"><source src="${bruceToes}" type="video/mp4" ></video>`;
      answers +=
        `<p>Want to see another film turned into a quiz? Be able to set the difficulty level?</p>`;
      answers += `<p><a href="http://nickis.online/#contact">Send Nick a note</a></p>`;
    }
    $(".wrap").html(answers);
  }
});
