$(document).ready(function(){
    $('#start-button').on('click', function(){
        // $('#game').hide();
        // Display questions 
        // for(var i = 0; i < triviaQuestions.length; i++){
        //     $('#game').append('<h2>' + triviaQuestions[i].question + '</h2>')
        // }
        displayQuestion();
        // displayChoices();
    });

    // Create a function and loop through array to get each question to appear on page
    function displayQuestion(){
        for(var i = 0; i < triviaQuestions.length; i++){
            $('#game').append('<h3>' + triviaQuestions[i].question + '</h3>');
            for(var j =0; j < triviaQuestions[i].choices.length; j++){
                $('#game').append("<input type= 'radio' name= 'question- "+ i + "' >" + triviaQuestions[i].choices[j]);
                
            };
            
            
        };

        // $('#game').append('<p>' + triviaQuestions[i].choices[j] + '</p>')

        

    };

    // function displayChoices(){
    //     for(var i =0; i < triviaQuestions.length; i++){
    //         $('#game').append('<p>' + triviaQuestions[i].choices + '</p>')
    //     };
    // }

    // Create a function to create radio buttons for answer choices
    // function createRadios(index){
    //     var radioList = $('<ul>');
    //     var item;
    //     var input = '';
    //     for(var i = 0; i < triviaQuestions[index].choices.length; i++){
    //         item = $('<li>');
    //         input = '<input type="radio" name="answer" value=' + i + ' />';
    //         input += triviaQuestions[index].choices[i];
    //         item.append(input);
    //         radioList.append(item);
    //     }
    //     return radioList;


    // };


    var correct =  0;
    var incorrect = 0;
    var currentQuestion = 0;
    var clock = 20;
    var timer;
    var remainingQuestions;




//Create an array of objects of all questions, choices, and answers


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
            question: "What was the name of the host of 'Blue's Clues?",
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

// Remove start button when starting the game

// $('#start-button').on('click', function(){
//     $('#start-button').remove();
// });


// var game = {
//     triviaQuestions: triviaQuestions,
//     currentQuestion: 0,
//     counter: 20,
//     correct: 0,
//     incorrect: 0,
//     countdown: function(){
//         game.counter--;
//         $('#counter').html(game.counter);
//         if(game.counter <= 0){
//             game.timeUP();
//         }
//     },

//     displayQuestion: function(){
//         timer = setInterval(game.countdown,1000);
//     }

// }


// Display the quetion and choices

// function displayQuestion() {

//     var question = triviaQuestions[currentQuestion].question;
//     var choices = triviaQuestions[currentQuestion].choices;

//     $('#game').html('<h3>' + question + '</h3>');
//     $('#time').html('Timer: ' + clock);

// }

// displayQuestion();