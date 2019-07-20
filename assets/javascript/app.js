var triviaGame = {
    question: {
        q1: "This series is about a chemistry teacher that becomes a drug lord.",
        q2: "In this TV show everything is conected, present, past and future.",
        q3: "Chandler, Rachel, Joey, Monica, Phoebe and Ross are the main characters of:",
        q4: "Nobody liked the final season of this show, Dracarys:",
        q5: "Michael Scott is the manager of Dunder Mifflin in:",
        q6: "A drunk scientist and his grandchild go on adventures on: ",
        q7: "Eleven is nos just a number but a gir with powers in:"
    },
    options: {
        q1: ["Chemstry Magic", "Breaking Bad", "The Sopranos", "The Bad Guy"],
        q2: ["Dark", "Friends", "The great show of time", "The Office"],
        q3: ["Amigos", "The Office", "Seinfield", "Friends"],
        q4: ["Vikings", "The Dragon and the Wolf", "Game of Thrones", "Lord of the Rings"],
        q5: ["Game of Offices", "The Office", "The Great Paper Company", "Stranger Things"],
        q6: ["Rick & Morty", "Back to the Future", "The Simpsons", "Dragon Ball Z"],
        q7: ["The magic numbers", "Stranger Things", "Weird Things", "Demogonrgon's great adventures"],
    },
    answers: {
        q1: "Breaking Bad",
        q2: "Dark",
        q3: "Friends",
        q4: "Game of Thrones",
        q5: "The Office",
        q6: "Rick & Morty",
        q7: "Stranger Things"
    }
};
var correct = 0;
var incorrect =0;
var timer = 25;
var timerOn= false;

