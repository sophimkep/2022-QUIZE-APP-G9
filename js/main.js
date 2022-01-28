
// add question
let listOfQuestionAndAnswer = [];

// add question
function addQuestion() {
    let newList = {};
    let answer = {};
    let questionInput = document.querySelector("#question").value;
    let firstA = document.querySelector("#an1").value;
    let secondA = document.querySelector("#an2").value;
    let thirdA = document.querySelector("#an3").value;
    let fourthA = document.querySelector("#an4").value;
    let score = document.querySelector(".score").value;
    let correct = document.getElementById("correct-answer").value;

    if (questionInput !== "" && firstA !=="" && secondA !== "" && thirdA !== "" && fourthA !== "" && score != 0 ){
        newList.Question = questionInput;
        newList.Options = answer;
        answer.a = firstA;
        answer.b = secondA;
        answer.c = thirdA;
        answer.d = fourthA;
        newList.correctAnswer = correct;
        newList.score = score;
        listOfQuestionAndAnswer.push(newList)
        displayQuestion(listOfQuestionAndAnswer)
    }
    
}
let createButton = document.getElementById("create-btn");
createButton.addEventListener("click", addQuestion);


// display question
function displayQuestion(list){
    let newcardContainer = document.querySelector(".display-question");
    let allcards = document.querySelectorAll(".card");
    for (let cards of allcards){
        cards.parentNode.removeChild(cards)
    }
    let title = document.querySelector(".description").value;
    document.getElementById("title").textContent = title;
    for (let question in list){

        // create div name card to contain question and answers
        let card = document.createElement("div");
        card.className = "card";
        newcardContainer.appendChild(card)
        
        // create h2 className questions and append to card
        let questions = document.createElement("h2");
        questions.className = "questions";
        questions.textContent = listOfQuestionAndAnswer[question].Question;
        
        // get score from array 
        let scoreEachQuestion = document.createElement("p");
        scoreEachQuestion.className = "myscore";
        scoreEachQuestion.textContent = listOfQuestionAndAnswer[question].score + " pts"
        card.appendChild(scoreEachQuestion)
        card.appendChild(questions);
        
        // create label to store each answer
        let form_gruop1 = document.createElement('div')
        form_gruop1.className = 'form-group';
        let form_gruop2 = document.createElement('div')
        form_gruop2.className = 'form-group';
        let form_gruop3 = document.createElement('div')
        form_gruop3.className = 'form-group';
        let form_gruop4 = document.createElement('div')
        form_gruop4.className = 'form-group';
        
        
        const answer1 = document.createElement('label')
        answer1.className = "eachAn"
        answer1.textContent = "a .  " + listOfQuestionAndAnswer[question].Options.an1;
        
        
        const answer2 = document.createElement('label')
        answer2.className = "eachAn"
        answer2.textContent = "b .  " + listOfQuestionAndAnswer[question].Options.an2;
        
        
        const answer3 = document.createElement('label')
        answer3.className = "eachAn"
        answer3.textContent = "c .  " + listOfQuestionAndAnswer[question].Options.an3;
        
        
        const answer4 = document.createElement('label')
        answer4.className = "eachAn"
        answer4.textContent = "d .  " + listOfQuestionAndAnswer[question].Options.an4;
        
        // card.appendChild(title)
        form_gruop1.appendChild(answer1)
        form_gruop2.appendChild(answer2)
        form_gruop3.appendChild(answer3)
        form_gruop4.appendChild(answer4)
        
        
        card.appendChild(form_gruop1)
        card.appendChild(form_gruop2)
        card.appendChild(form_gruop3)
        card.appendChild(form_gruop4)
        newcardContainer.appendChild(card); 

        // creat option to contain icon and trash
        let option = document.createElement("div");
        option.className = "option";
        // create icon and add to option 
        let icon = document.createElement("i");
        icon.className = "fa fa-pencil";
        icon.id = "edit";
        let trash = document.createElement("i");
        trash.className = "fa fa-trash-o";
        trash.id = "delete"
        option.appendChild(icon);
        option.appendChild(trash);
        card.appendChild(option);
    }
}

let active1 = document.querySelector("#play-quiz");
function act(){
    document.querySelector(".active1").style.background = "#90caf9"
    document.querySelector(".active1").style.color = "white"
    document.querySelector(".active2").style.background = "cornsilk"
    document.querySelector(".active2").style.color = "#1565c0"
}
active1.addEventListener("click", act)

let active2 = document.querySelector("#edit-Quiz");
function active(){
    document.querySelector(".active2").style.background = "#90caf9"
    document.querySelector(".active2").style.color = "white"
    document.querySelector(".active1").style.background = "cornsilk"
    document.querySelector(".active1").style.color = "#1565c0"
}
active2.addEventListener("click", active);


// ===============================Display game to play =======================dy
function displayQuizToPlay() {

    let title = document.querySelector(".description").value;
    let header = document.createElement("h1");
    header.textContent = title;
    document.querySelector(".container").appendChild(header)


    document.querySelector(".form-card").style.display = "none";
    document.querySelector(".description-card").style.display = "none";
    document.querySelector(".display-question").style.display = "none";
    document.querySelector("#show").style.display = "none";

    for (let i in listOfQuestionAndAnswer){
        let cardPlayQuiz = document.createElement("div");
        cardPlayQuiz.className = "quiz-card";
        document.querySelector(".container").appendChild(cardPlayQuiz);
        
        let questionPlace = document.createElement("h2");
        questionPlace.id = "question"
        
        let answers  = document.createElement("div");
        answers.className = "allAnswers"
        
        let firstAnswer = document.createElement("button");
        firstAnswer.id = "a";
        let secondAnswer = document.createElement("button");
        secondAnswer.id = "b";
        let thirdAnswer = document.createElement("button");
        thirdAnswer.id = "c";
        let fourthAnswer = document.createElement("button");
        fourthAnswer.id = "d";
        
        questionPlace.textContent = listOfQuestionAndAnswer[i].Question
        firstAnswer.textContent = listOfQuestionAndAnswer[i].Options.a;
        secondAnswer.textContent = listOfQuestionAndAnswer[i].Options.b
        thirdAnswer.textContent = listOfQuestionAndAnswer[i].Options.c
        fourthAnswer.textContent = listOfQuestionAndAnswer[i].Options.d
        
        answers.appendChild(firstAnswer);
        answers.appendChild(secondAnswer);
        answers.appendChild(thirdAnswer);
        answers.appendChild(fourthAnswer);
        
        cardPlayQuiz.appendChild(questionPlace);
        cardPlayQuiz.appendChild(answers);
    }
}  
document.querySelector(".quiz-card").style.display = "none";

displayQuizToPlay()  
function playQuiz() {
    document.querySelector(".quiz-card").style.display = "block";
}

let playButton = document.querySelector("#play-quiz");
playButton.addEventListener("click", playQuiz);
// ==================================================dy======