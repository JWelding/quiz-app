const QUIZ = [
    {
        question: "What is the plural of 'moose'?",
        answers: {
            a: "moosen",
            b: "moose",
            c: "mooses",
            d: "meese"
        },
        correctAnswer: "b"
    },
    {
        question: "How many continents are there?",
        answers: {
            a: "5",
            b: "8",
            c: "7",
            d: "11"
        },
        correctAnswer: "c"
    },
    {
        question: "What causes tides?",
        answers: {
            a: "wind",
            b: "ships",
            c: "whales",
            d: "moon"
        },
        correctAnswer: "d"
    },
    {
        question: "Who invented the light bulb?",
        answers: {
            a: "Thomas Edison",
            b: "Bill Gates",
            c: "General Electric",
            d: "Ben Franklin"
        },
        correctAnswer: "a"
    },
    {
        question: "How many legs does a spider have?",
        answers: {
            a: "4",
            b: "6",
            c: "8",
            d: "12"
        },
        correctAnswer: "c"
    }
];

const answers = [];

let quizNotStarted = true;

//helper functions
//these fuction do misc. tasks

function getQuestionIndex() {
    return answers.length;
}

//generator functions
//these function make html strings
function generateStartPage() {
    return $(`
<p>Here is a short and quick way for you see if you are capable of arguing with a 1st grader.  Click start if you dare!</p>
<button id = "startButton">Start Quiz</button>
`)
}

function generateQuestionPage(index) {
    const question = QUIZ[index]
    const theAnswers = Object.keys(question.answers)
    return $(`
<section>
<form>
    <fieldset>
        <legend>
            (${index + 1} /${QUIZ.length}) ${question.question}
        </legend>
        <ol>
            ${theAnswers.map(answer => `<li>
                <input type="radio" name="answer" id="answer${answer}" value="${answer}">
                <label for="answer${answer}">${question.answers[answer]}</label>
            </li>`).join("")}
        </ol>
    </fieldset>
    <button type = "submit">Submit</button>
    <p>Correct:${getScore()}  Incorrect:${answers.length-getScore()}</p>
</form>
</section>`)
}

function generateFeedbackPage() {
    return $(`
<p>You scored ${getScore()} out of ${QUIZ.length} questions correct.</p>
<button id = "restartButton">Restart</button>
`)
}

function displayNextPage(){
    console.log("next");
    if (quizNotStarted){
        quizNotStarted = false;
        displayStartPage();
    }else if(QUIZ[answers.length]){
        displayQuestionPage(answers.length);
    }else{
        displayFeedbackPage();
    }
}

function getScore(){
    let score = 0;
    for(let i = 0; i < QUIZ.length; i++){
        if (answers[i]===QUIZ[i].correctAnswer){
            score++
        }
    }
    return score;
}

//display fuctions
//these display the result of generator functions on screen

function displayStartPage() {
    $("main").html(generateStartPage())
}

function displayQuestionPage(index) {
    $("main").html(generateQuestionPage(index))
}

function displayFeedbackPage() {
    $("main").html(generateFeedbackPage())
}

//event handlers
//ui interactions

function handleClickStartButton() {
    $("main").on("click", "#startButton", event => {
        displayNextPage();
    })
}


function handleSubmitQuestionForm() {
    $("main").on("submit", "form", event => {
        event.preventDefault();
        console.log("form");
        const formData = $("form").serializeArray()
        console.log(formData);
        const answer = formData[0].value;
        if (answer===QUIZ[answers.length].correctAnswer){
            popUp(`That's Right!`, "green")
        }else{
            let q = QUIZ[answers.length];
            let correctIndex = QUIZ[answers.length].correctAnswer;
            let realAnswer = q.answers[correctIndex];
            popUp(`Wrong, correct answer was ${realAnswer}`, "red");
        }
        answers.push(answer);
        displayNextPage();
    })
}

function handleClickCloseButton(){
    $("body").on("click", ".closeButton", event => {
    console.log("close button");
    $(event.currentTarget).closest(".popUp").remove();
    })
}
function popUp(text, color){
    let p = $(`<div class = "popUp">${text}<button class = "closeButton">X</button></div>`).css("background-color",color).appendTo($("body"))
    setTimeout(function(){p.remove()},4000);
}

function handleClickRestartButton() {
    $("main").on("click", "#restartButton", event => {
       answers.length = 0;
       quizNotStarted = true;
        displayNextPage();
    })
}

//setup
//setting up and starting program

function setupEventHandlers() {
    handleClickStartButton();
    handleSubmitQuestionForm();
    handleClickCloseButton();
    handleClickRestartButton();
}

function startApp() {
    setupEventHandlers();
    displayNextPage();
}

$(startApp)