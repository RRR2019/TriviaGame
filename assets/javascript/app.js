var triviaGame = {
  question: {
    q1: "This series is about a chemistry teacher that becomes a drug lord.",
    q2: "In this TV show everything is conected, present, past and future.",
    q3:
      "Chandler, Rachel, Joey, Monica, Phoebe and Ross are the main characters of:",
    q4: "Nobody liked the final season of this show, Dracarys:",
    q5: "Michael Scott is the manager of Dunder Mifflin in:",
    q6: "A drunk scientist and his grandchild go on adventures on: ",
    q7: "Eleven is not just a number but a girl with powers in:"
  },
  options: {
    o1: ["Chemistry Magic", "Breaking Bad", "The Sopranos", "The Bad Guy"],
    o2: ["Dark", "Friends", "The great show of time", "The Office"],
    o3: ["Amigos", "The Office", "Seinfield", "Friends"],
    o4: [
      "Vikings",
      "The Dragon and the Wolf",
      "Game of Thrones",
      "Lord of the Rings"
    ],
    o5: [
      "Game of Offices",
      "The Office",
      "The Great Paper Company",
      "Stranger Things"
    ],
    o6: ["Rick & Morty", "Back to the Future", "The Simpsons", "Dragon Ball Z"],
    o7: [
      "The magic numbers",
      "Stranger Things",
      "Weird Things",
      "Demogonrgon's great adventures"
    ]
  },
  answers: {
    a1: "Breaking Bad",
    a2: "Dark",
    a3: "Friends",
    a4: "Game of Thrones",
    a5: "The Office",
    a6: "Rick & Morty",
    a7: "Stranger Things"
  },
  images: {
    i1: "assets/images/breakingbad.gif",
    i2: "assets/images/dark.gif",
    i3: "assets/images/friends.gif",
    i4: "assets/images/got.gif",
    i5: "assets/images/office.gif",
    i6: "assets/images/rm.gif",
    i7: "assets/images/st.gif"
  }
};

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var timer = 8;
var intervalId;
var timerOn = false;
var currentQuestion = 1;
var stateQuestions = false;
var gif = false;
var secondTime = false;
$(".card-body").hide();

$("#btnStart").click(function() {
  start();
});

function start() {
  $("#title").hide();
  $("#subTitle").hide();
  $("#btnStart").hide();
  $(".card-body").show();
  $(".options").off();
  $("#coolGif").hide();
  timerOn = true;
  stateQuestions = true;
  clearInterval(intervalId);
  timer = 8;
  setTimer();
  questions(currentQuestion);
}

function setTimer(time) {
  if (timerOn) {
    intervalId = setInterval(count, 1000);
    timerOn = false;
  }

  if (time === 0 || time < 0) {
    clearInterval(intervalId);
    $("#timer").html("Times Up!");
    $("#question").html("");
    $("#allButtons").hide();
    unanswered++;
    currentQuestion++;
    stateQuestions = true;
    setTimeout(start, 3000);
    timerOn = false;
  }
}

function count() {
  var newTime = timer--;
  $("#timer").html(newTime);
  setTimer(newTime);
}

function questions(question) {
  var ops = triviaGame.options.o1;
  var ops2 = triviaGame.options.o2;
  var ops3 = triviaGame.options.o3;
  var ops4 = triviaGame.options.o4;
  var ops5 = triviaGame.options.o5;
  var ops6 = triviaGame.options.o6;
  var ops7 = triviaGame.options.o7;
  if (stateQuestions) {
    if (question === 1) {
      $("#question").html(triviaGame.question.q1);
      for (var i = 0; i < ops.length; i++) {
        var buttons = $("<button>");
        buttons.attr("class", "btn btn-dark btn-lg m-2 options");
        buttons.attr("type", "button");
        buttons.attr("id", i);
        buttons.append(ops[i]);
        $(".btn-group-vertical").append(buttons);
      }
      stateQuestions = false;
      timer = 8;
      gif = true;
      check(triviaGame.answers.a1, triviaGame.images.i1);
      if (!secondTime) {
        createGif();
      }
    } else if (question === 2) {
      $("#question").html(triviaGame.question.q2);
      $("#allButtons").show();
      $("#0").text(ops2[0]);
      $("#1").text(ops2[1]);
      $("#2").text(ops2[2]);
      $("#3").text(ops2[3]);
      stateQuestions = false;
      timer = 8;
      check(triviaGame.answers.a2, triviaGame.images.i2);
    } else if (question === 3) {
      $("#question").html(triviaGame.question.q3);
      $("#allButtons").show();
      $("#0").text(ops3[0]);
      $("#1").text(ops3[1]);
      $("#2").text(ops3[2]);
      $("#3").text(ops3[3]);
      stateQuestions = false;
      timer = 8;

      check(triviaGame.answers.a3, triviaGame.images.i3);
    } else if (question === 4) {
      $("#question").html(triviaGame.question.q4);
      $("#allButtons").show();
      $("#0").text(ops4[0]);
      $("#1").text(ops4[1]);
      $("#2").text(ops4[2]);
      $("#3").text(ops4[3]);
      stateQuestions = false;
      timer = 8;

      check(triviaGame.answers.a4, triviaGame.images.i4);
    } else if (question === 5) {
      $("#question").html(triviaGame.question.q5);
      $("#allButtons").show();
      $("#0").text(ops5[0]);
      $("#1").text(ops5[1]);
      $("#2").text(ops5[2]);
      $("#3").text(ops5[3]);
      stateQuestions = false;
      timer = 8;

      check(triviaGame.answers.a5, triviaGame.images.i5);
    } else if (question === 6) {
      $("#question").html(triviaGame.question.q6);
      $("#allButtons").show();
      $("#0").text(ops6[0]);
      $("#1").text(ops6[1]);
      $("#2").text(ops6[2]);
      $("#3").text(ops6[3]);
      stateQuestions = false;
      timer = 8;

      check(triviaGame.answers.a6, triviaGame.images.i6);
    } else if (question === 7) {
      $("#question").html(triviaGame.question.q7);
      $("#allButtons").show();
      $("#0").text(ops7[0]);
      $("#1").text(ops7[1]);
      $("#2").text(ops7[2]);
      $("#3").text(ops7[3]);
      stateQuestions = false;
      timer = 8;

      check(triviaGame.answers.a7, triviaGame.images.i7);
    } else if (question === 8) {
      $("#question").html(
        "Incorrect: " +
          incorrect +
          "\n" +
          "Correct: " +
          correct +
          "\n" +
          "Unanswered: " +
          unanswered
      );
      clearInterval(intervalId);
      $("#allButtons").hide();
      $("#btnStart")
        .show()
        .html("Play Again")
        .click(function() {
          currentQuestion = 1;
          stateQuestions = false;
          $(".options").remove();
          start();
          $("#btnStart").off();
          $("#allButtons").show();
          correct = 0;
          incorrect = 0;
          unanswered = 0;
          secondTime = true;
        });
    }
  }
}

function check(answer, image) {
  gif = false;
  $(".options").off();
  console.log(answer);

  $(".options").click(function() {
    if ($(this).text() === answer) {
      $("#question").html("CORRECT!");
      $("#timer").html("");
      correct++;
      gifAppear(image);

      console.log($(this).text());
      console.log(currentQuestion);
      setTimeout(start, 3000);
      clearInterval(intervalId);
      $(".options").off();
      currentQuestion++;
      if (currentQuestion === 1) {
        gifAppear(triviaGame.images.i1);
      }
    } else if ($(this).text() !== answer) {
      $("#question").html("INCORRECT! " + "right answer is: " + answer);
      $("#timer").html("");
      incorrect++;
      console.log(currentQuestion);
      setTimeout(start, 3000);
      clearInterval(intervalId);
      currentQuestion++;
      $(".options").off();
    }
  });
}
function createGif() {
  var newImg = $("<img>");
  newImg.attr("src", "");
  newImg.attr("alt", "Gif");
  newImg.attr("class", "img-thumbnail");
  newImg.attr("id", "coolGif");
  var img = $("<div>");
  img.append(newImg);
  $(".card-title").append(img);
  $("#coolGif").hide();
}

function gifAppear(imgSource) {
  if (gif) {
    $("#coolGif").hide();
    $("#allButtons").show();
  } else {
    $("#coolGif").attr("src", imgSource);
    $("#coolGif").show();
    $("#allButtons").hide();
  }
}
