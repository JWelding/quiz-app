const QUIZ={}

//helper functions
//these fuction do misc. tasks

//generator functions
//these function make html strings
function generateStartPage(){
return `
<p>discribe quiz...</p>
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