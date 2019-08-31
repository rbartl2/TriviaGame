$(document).ready(function(){

// Create variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var userAnswer = [];
var counter = 60;
var intervalID;



// Create an array of objects of all questions, choices, and answers


var triviaQuestions = [
    {
        question: "Miley Cyrus most famously starred in which Disney Channel original show?",
        choices: ["Lizzie McGuire", "Hannah Montana", "Wizards of Waverly Place", "Even Stevens"],
        answer: "Hannah Montana"
    },
    {
        question: "Which of these things would a 'basic girl' like?",
        choices: ["Pumpkin Spice lattes", "UGGs", "Yoga Pants", "All of the above, obvi"],
        answer: "All of the above, obvi"
    },
    {
        question: "What was the name of everyone's first 'friend' on MySpace?",
        choices: ["Tom", "Tim", "Toby", "Dave"],
        answer: "Tom"
    },
    {
        question: "What does it mean to 'spill the tea'?",
        choices: ["Gossip is being shared", "To make a mess of your life", "It's a euphemism for something unmentionable", "You literally spilled some tea"],
        answer: "Gossip is being shared"
    },
    {
        question: "What was the name of the host of 'Blue's Clues'?",
        choices: ["Sean", "Shane", "Steve", "Sheldon"],
        answer: "Steve"
    },
    {
        question: "Which show wasn't predominantly about wealthy teens?",
        choices: ["Gossip Girl", "Friday Night Lights", "The O.C.", "Laguna Beach"],
        answer: "Friday Night Lights"
    },
    {
        question: "What college did Rory choose to attend in 'Gilmore Girls'?",
        choices: ["Princeton", "Harvard", "Columbia", "Yale"],
        answer: "Yale"
    },
    {
        question: "Which is not the name of one of Kris Jenner's grandkids?",
        choices: ["Bear", "Stormi", "Chicago", "Reign"],
        answer: "Bear"
    },
    {
        question: "Which cartoon was not on Nickelodeon?",
        choices: ["Rocket Power", "Rugrats", "Recess", "Rocko's Modern Life"],
        answer: "Recess"
    },
    {
        question: "Which of these Nickelodeon stars was not an original cast member on 'All That'?",
        choices: ["Kel Mitchell", "Jamie Lynn Spears", "Lori Beth Denberg", "Kenan Thompson"],
        answer: "Jamie Lynn Spears"
    }

];

function countdown(){
    counter--;
    $('#clock').html('<h3>Time Remaining: ' + counter + '</h3>');
    if(counter < 1){
        clearInterval(setInterval);
        // results();
    };
}

function results(){
    $('#game').hide();
    



}

// function submit(){
//     $('#submit-button').on('click', function(){
//         var userChoice = $('input:radio[name="question-1"]:checked').val();
//         console.log("user choice: " + userChoice)
//         userAnswer.push(userChoice);
//         console.log(userAnswer);
//         results();
//     });
    
// }
function checkAnswers(){
    for (var i = 0; i < triviaQuestions.length; i++){
        if ($('input:radio[name="question-i"]:checked').val() === triviaQuestions[i].answer) {
            console.log("got one correct");
        }
        else {
            console.log("got one incorrect");
        }
    }
};
// for loop to all questions
// if (question i val === queastion[i].answer) {
    //correct++;
//}
//else {
    //incorrect++
//}


function displayQuestions(){
    for(var i = 0; i < triviaQuestions.length; i++){
        $('#game').append('<h4>' + triviaQuestions[i].question + '</h4>');
        for(var j =0; j < triviaQuestions[i].choices.length; j++){
            $('#game').append("<label class='radio-inline'><input type= 'radio' value='" + j + "' name= 'question- "+ i + "' >" + triviaQuestions[i].choices[j] + "</label>");
        };
        // Create space between questions
        $('#game').append("<br><br>");
        
    };
    // Create a button to submit quiz
    $('#submit-button').append("<button type='button' class='btn btn-primary submit'>Submit</button>");
}


$('#start-button').on('click', function(){
    $('#start-button').remove();
    displayQuestions();
    intervalID = setInterval(countdown, 1000);
    
});

$(".submit").on("click", function(){
    event.preventDefault();
    checkAnswers();
});



























});




