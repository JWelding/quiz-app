const QUIZ= [
    {
        question: "The plural of 'moose' is?",
        answers: {
            a: "moosen"
            b: "moose"
            c: "mooses"
            d: "meese"
        },
        correctAnswer: "b"
    },
    {
        question: "How many continents are there?",
        answers: {
            a: "5"
            b: "8"
            c: "7"
            d: "11"
        },
        correctAnswer: "c"
    },
    {
        question: "What causes tides?",
        answers: {
            a: "wind"
            b: "ships"
            c: "whales"
            d: "moon"
        },
        correctAnswer: "d"
    },
    {
        question: "Who invented the light bulb?",
        answers: {
            a: "Thomas Edison"
            b: "Bill Gates"
            c: "General Electric"
            d: "Ben Franklin"
        },
        correctAnswer: "a"
    },
    {
        question: "How many legs does a spider have?",
        answers: {
            a: "4"
            b: "6"
            c: "8"
            d: "12"
        },
        correctAnswer: "c"
    }
];

//helper functions
//these fuction do misc. tasks


//generator functions
//these function make html strings
function generateStartPage(){
return `
<p>Here is a short and quick way for you see if you are capable of arguing with a 1st grader.  Click start if you dare!</p>
<button>Start Quiz</button>
`
}

//display fuctions
//these display the result of generator functions on screen

function displayStartPage(){
    $("main").html(generateStartPage())
}

//event handlers
//ui interactions

function handleClickStartButton(){}
function handleSubmitQuestionForm(){}
function handleClickNextQuestionButton(){}
function handleClickRestartButton(){}

//setup
//setting up and starting program

function setupEventHandlers(){
    handleClickStartButton();
    handleSubmitQuestionForm();
    handleClickNextQuestionButton();
    handleClickRestartButton();
}

function startApp(){
setupEventHandlers();
displayStartPage();
}

$(startApp)