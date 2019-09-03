
// Create variables

var correct = 0;
var incorrect = 0;
var unanswered = 0;
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

$(document).ready(function(){

function countdown(){
    counter--;
    $('#clock').html('<h3>Time Remaining: ' + counter + '</h3>');
    if(counter === 0){
        results();
    };
}

function results(){
    $('#game').hide();
    $('#submit-button').hide();
    $('#clock').hide();
    $('#results').html('<h2>Check out your results!</h2>');
    $('#results').append('<h3>Correct Answers: '+ correct+'</h3>');
    $('#results').append('<h3>Incorrect Answers: '+ incorrect+'</h3>');
    $('#results').append('<h3>Unanswered: '+(triviaQuestions.length-(this.incorrect+this.correct))+'</h3>');
    clearInterval(intervalID);
}

function checkAnswers(){
    $.each($('input[name="question-0"]:checked'), function(){
        if($(this).val()==triviaQuestions[0].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-1"]:checked'), function(){
        if($(this).val()==triviaQuestions[1].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-2"]:checked'), function(){
        if($(this).val()==triviaQuestions[2].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-3"]:checked'), function(){
        if($(this).val()==triviaQuestions[3].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-4"]:checked'), function(){
        if($(this).val()==triviaQuestions[4].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-5"]:checked'), function(){
        if($(this).val()==triviaQuestions[5].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-6"]:checked'), function(){
        if($(this).val()==triviaQuestions[6].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-7"]:checked'), function(){
        if($(this).val()==triviaQuestions[7].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-8"]:checked'), function(){
        if($(this).val()==triviaQuestions[8].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
    $.each($('input[name="question-9"]:checked'), function(){
        if($(this).val()==triviaQuestions[9].answer){
            correct++;
            console.log(correct);
        }
        else{
            incorrect++;
        }
    });
}
    // for (i = 0; i < triviaQuestions.length; i++){
    //     if (triviaQuestions[i].answer == userAnswer[i]){
    //         correct++;
    //         console.log("correct" + correct);
    //     }
    //     else if (userAnswer[i] === null){
    //         unanswered++;
    //     }
    //     else{
    //         incorrect++;
    //     }
    // }
    // for (var i =0; i < triviaQuestions.length; i++){
    //     var correctAnswer = triviaQuestions[i].answer;
    //     var userAnswer = $('input:radio[name="question-i"]:checked').val();
    //     if (userAnswer === correctAnswer){
    //         correct++;
    //         console.log("you are correct" + correct);
    //     }
    //     else if (userAnswer === ""){
    //             unanswered++;
    //         }
    //     else if (userAnswer !== correctAnswer){
    //         incorrect++;
    //         }
    //     }
    // }

    
    // var userAnswer1 = $("input[name='question-1']:checked").val();
    // if (userAnswer1 === undefined){
    //     unanswered++;
    // }
    // else if (userAnswer1 === triviaQuestions[1].answer){
    //     correct++;
    //     console.log("got one correct" + correct);
    // }
    // else{
    //     incorrect++
    // }

    
    // for (var i = 0; i < triviaQuestions.length; i++){
    //     if ($('input[name="question-0"]:checked').val() === triviaQuestions[0].answer) {
    //         correct++;
    //         console.log("got one correct" + correct);
    //     }
    //     else {
    //         incorrect++
    //         console.log("got one incorrect" + incorrect);
    //     }
    // }
//     if ($('input[name="question-0"]:checked').val() === triviaQuestions[0].answer) {
//         correct++;
//         console.log("got one correct" + correct);
//     }
//     else {
//         incorrect++
//         console.log("got one incorrect" + incorrect);
//     }
// }



function displayQuestions(){
    for(var i = 0; i < triviaQuestions.length; i++){
        $('#game').append('<h4>' + triviaQuestions[i].question + '</h4>');
        for(var j =0; j < triviaQuestions[i].choices.length; j++){
            $('#game').append("<label class='radio-inline'><input type= 'radio' name= 'question-"+ i +"' value='" +triviaQuestions[i].choices[j]+"'> " + triviaQuestions[i].choices[j] + "</label>");
        };
        // Create space between questions
        $('#game').append("<br><br>");
        
    };
    // Create a button to submit quiz
    $('#submit-button').append("<button type='button' id='submit' class='btn btn-primary submit'>Submit</button>");
}


$('#start-button').on('click', function(){
    $('#start-button').remove();
    displayQuestions();
    intervalID = setInterval(countdown, 1000);
})


$("#submit-button").on('click', function(){
    event.preventDefault();
    results();
    checkAnswers();  
})

});