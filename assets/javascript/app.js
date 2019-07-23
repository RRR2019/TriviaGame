var triviaGame = {
    question: {
        q1: "This series is about a chemistry teacher that becomes a drug lord.",
        q2: "In this TV show everything is conected, present, past and future.",
        q3: "Chandler, Rachel, Joey, Monica, Phoebe and Ross are the main characters of:",
        q4: "Nobody liked the final season of this show, Dracarys:",
        q5: "Michael Scott is the manager of Dunder Mifflin in:",
        q6: "A drunk scientist and his grandchild go on adventures on: ",
        q7: "Eleven is not just a number but a girl with powers in:"
    },
    options: {
        o1: ["Chemistry Magic", "Breaking Bad", "The Sopranos", "The Bad Guy"],
        o2: ["Dark", "Friends", "The great show of time", "The Office"],
        o3: ["Amigos", "The Office", "Seinfield", "Friends"],
        o4: ["Vikings", "The Dragon and the Wolf", "Game of Thrones", "Lord of the Rings"],
        o5: ["Game of Offices", "The Office", "The Great Paper Company", "Stranger Things"],
        o6: ["Rick & Morty", "Back to the Future", "The Simpsons", "Dragon Ball Z"],
        o7: ["The magic numbers", "Stranger Things", "Weird Things", "Demogonrgon's great adventures"],
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

};

var correct = 0;
var incorrect = 0;
var timer = 5;
var timerOn = false;
var currentQuestion = 1;
var stateQuestions=false;
$(".card-body").hide();



$("#btnStart").click(function () {
    timerOn = true;
    stateQuestions = true;
    start();
    

});

function start() {
    $("#title").hide();
    $("#subTitle").hide();
    $("#btnStart").hide();
    $(".card-body").show();
    setTimer();
    questions(timer, currentQuestion);
}

function setTimer(time) {

    if (timerOn) {
        intervalId = setInterval(count, 1000);
        timerOn = false;
    }
    if (time === 0) {
        clearInterval(intervalId);
        $("#timer").html("Times Up!");
        incorrect++;
        currentQuestion++;
        stateQuestions=true;
        questions(5,currentQuestion);
        timerOn = false;

    }

}

function count() {
    var newTime = timer--;
    $("#timer").html(newTime);
    setTimer(newTime);
}

function questions(time, question) {
    console.log(time);
    console.log(question);
    var ops = triviaGame.options.o1;
    var ops2 = triviaGame.options.o2;

    if (stateQuestions) {
        if(question===1){
        $("#question").html(triviaGame.question.q1);
        for (var i = 0; i < ops.length; i++) {
            var buttons = $("<button>")
            buttons.attr("class","btn btn-dark btn-lg m-2 options");
            buttons.attr("type", "button");
            buttons.attr("value", i);
            buttons.append(ops[i]);
            $(".btn-group-vertical").append(buttons);
            stateQuestions=false;
            }
        }
        else if(question===2){
            
            $("#question").html(triviaGame.question.q2);
            console.log(ops2);
            for (var j = 0; j < ops2.length; j++) {

                stateQuestions=false;
                }
            }
        }

    }



function check(){
  
}