// Banque Q :

var questionBank= [
    {
        question : 'Quel est l\'arbre de noël à la Reunion ?',
        option : ['Le Flamboyant','le cactus','na pwin','Le manguier'],
        answer : 'Le Flamboyant'
    },
    {
        question : 'Qu\'est ce qu\'une bringelle ?',
        option : ['une poire','une savate','une aubergine','un avion'],
        answer : 'une aubergine'
    },
    {
        question : 'Combien de volcan(s) sont actif à la Reunion ?',
        option : ['3','0','10','1'],
        answer : '1'
    },
    {
        question : 'Qu\'est ce que le siav ?',
        option : ['la sauce soja','le nom donné à la lave','un fruit','une chanson'],
        answer : 'la sauce soja'
    },
    {
        question : 'Qu\'est ce qu\'un tangue ?',
        option : ['un lézard','un oiseau','un hérisson','une fleur'],
        answer : 'un hérisson'
    },
    {
        question : 'Où sont situé les volcans à la Reunion',
        option : ['Dans le nord','Dans le sud','dans l\'ouest','partout'],
        answer : 'partout'
    },
]



var question= document.getElementById
('question');
var quizContainer= document.getElementById
('quizz-container');
var scorecard= document.getElementById
('scorecard');
var option0 = document.getElementById
('option0');
var option1 = document.getElementById
('option1');
var option2 = document.getElementById
('option2');
var option3 = document.getElementById
('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i=0;
var score = 0;

// Questions Function

function displayQuestion(){
    for(var a=0; a<span.length;a++){
        span[a].style.background='none'
    }
    question.innerHTML= `Q.${i+1} `
    +questionBank[i].question;
    option0.innerHTML = questionBank[i].option
    [0];
    option1.innerHTML = questionBank[i].option
    [1];
    option2.innerHTML = questionBank[i].option
    [2];
    option3.innerHTML = questionBank[i].option
    [3];
    stat.innerHTML = `Question  ${i+1} of ${questionBank.length}`;
}

// fonction de calcul des scores
function calcScore(e){
    if(e.innerHTML === questionBank[i].answer && score<questionBank.length)
        {
            score= score+1;
            document.getElementById(e.id).style.
            background = 'green';
        }
        else{
            document.getElementById(e.id).style.
            background = 'tomato';
        }
        setTimeout(nextQuestion,300);
}

// funtion to display next question
function nextQuestion (){
    if(i < questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML=score+ '/'+
        questionBank.length;
        quizContainer.style.display= 'none'
        scoreboard.style.display="inline-block"
    }
}

//next button
next.addEventListener('click',nextQuestion)


// back to quizz button 
function backToQuizz(){
    location.reload();

}

// check answer
function checkAnswer(){
    var answerBank = document.getElementById('answerBank');
    var answer= document.getElementById('answers');
    answer.innerHTML = "";
    answerBank.style.display= 'block';
    scoreboard.style.display= 'block';
    for(var a=0; a<questionBank.length;a++)
    {
        var list = document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answer.appendChild(list);

    }
}

displayQuestion();

const handleBackToHome = () => {
    console.log('back')
    window.location = 'main.html'
}

