$(document).ready(function(){

  var questionsRight = 0;
  var currentQuestion = 0;

  var quiz = {
    name: "Die Hard Quiz",
    description : "How well do you know the Die Hard Series?",
    questions : [
      { 
        text : "In the first film, arguably the greatest of all time, what is the name of the limo driver that picks up John from the airport?",
        answers : ["Anthony", "Chris", "Argyle", "Adrian"],
        correct : 2 
       },
      {
        text : "Die Hard One took place in Chicago",
        answers : [ "True", "False"],
        correct : 1
      },
      { 
        text : "John's wife Holly is listed in the building directory with her maiden name, Gennaro. What does she say is the reason for doing this?", 
        answers : ["to get ahead in the corporate world", "it's a Japanese company", "not sure if John was coming to LA", "just to keep things simple for now"],
        correct : 1
      },
      { 
        text : "While the building is under siege by Hans Gruber and associates, one of Holly's coworkers, Harry Ellis, (arguably God's Greatest gift) offers to help the terrorist make a deal. How does he convince Hans?", 
        answers : ["Hans, bubby, i'm your white knight", "Hans, Hans, Hans, Hans, Hans, Hans Come'on Hans", "Hans I can giftwrap this cowboy for you", "Hans do you like your steak well done"],
        correct : 0
      },
      { 
        text : "In the second film, arguably the 2nd greatest of all time, John is at the airport in his in laws' car to pick up Holly. Which airport is this ?",
        answers : ["IAD - Washington Dulles International Airport", "BOS - Boston Logan International Airport", "BWI - Baltimore Washington International Airport", "LGA - LaGuardia International Airport"],
        correct : 0
      },
      { 
        text : "Reporter Samantha Coleman is at the airport trying to get a story while waiting for General Esperanza's flight to arrive. After getting no comment from the guys from the state department, she then also gets a freezing cold shoulder from an ex Special Forces commander while walking through the airport. Who is the commander?", 
        answers : ["Lt Johnson", "Brigadier General Francis X Hummel", "Colonel William Stuart",  "Major Benson Winifred Payne"], 
        correct : 2
      },
      { 
        text : "In the 3rd Die Hard film, arguably the 3rd greatest of all time, John is forced to run around NY doing what Hans Gruber's brother tells him to do. John is nursing a pretty solid hangover, and on the way to their first stop in Harlem, officers are discussing 14 dump trucks were stolen overnight from a yard in Staten Island. Who did Officer Lamber suggest the trucks were stolen by?", 
        answers : ["Simon Gruber", "John's Land Lady", "Zeus", "Santa Claus"], 
        correct : 1
      },
      { 
        text : "Midway through the film John teams up with a truck driver named Jerry to drive through the aqueduct tunnel. Jerry solves a riddle for John. What is 21 out of 42?  Who does Jerry tell John that the 21st president is?", 
        answers : ["Hilary A. Clinton", "Grover A. Cleveland", "James A. Garfield" , "Chester A. Arthur"], 
        correct : 3
      }
    ]
  };

  $("#title").text(quiz.name);
  $(".wrap").text(quiz.description);

  $("#start").on('click', function starting(){
    $("#start").addClass("hidden");
    displayQuestion();
  });

  function displayQuestion(){
    var html = "";
    html += "<form id='quizForm'>";
    html += `<h3> ${quiz.questions[currentQuestion].text} </h3>`;
    for (var i=0; i<quiz.questions[currentQuestion].answers.length; i++){
      html += `<input type="radio" name="answers" value="${i}"> ${quiz.questions[currentQuestion].answers[i]} <br>`;
    }
    html += "<button type='submit'>Submit</button>";
    html += "</form>";

    $(".wrap").html(html);
  }

  function tally(){
    var radioValue = $("input[name='answers']:checked").val();
    if (radioValue == quiz.questions[currentQuestion].correct){
      questionsRight++;
    }
  }

  $(".wrap").on('submit', '#quizForm', function(e){
    e.preventDefault();
    tally();
    currentQuestion++;
    if (currentQuestion === (quiz.questions).length){  
      showResults();
    } 
    else {
      displayQuestion();
    }
  });

  function showResults(){ 
    var answers = "";
    answers += "<h3> Nice try, you got ";
    answers += questionsRight;
    answers += " out of ";
    answers += quiz.questions.length;
    answers += "</h3>";

    $(".wrap").html(answers);
    }
});
