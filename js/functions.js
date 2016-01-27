    

var sendEvery = 750; //in milliseconds
$(document).ready(function() {
  

  
     //setInterval(jump, sendEvery);  
    
     
});

function jump() {
 
     var keyboardEvent = document.createEvent("KeyboardEvent");
     var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

     //KeyDown Event of Pressing space
     keyboardEvent[initMethod](
                        "keydown", // event type : keydown, keyup, keypress
                         true, // bubbles
                         true, // cancelable
                         window, // viewArg: should be window
                         false, // ctrlKeyArg
                         false, // altKeyArg
                         false, // shiftKeyArg
                         false, // metaKeyArg
                         32, // keyCodeArg : unsigned long the virtual key code, else 0
                         0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
     );
     document.dispatchEvent(keyboardEvent);
     
}

function jump_down(){

     //KeyUp Event of Pressing space
     var keyboardEvent = document.createEvent("KeyboardEvent");
     var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


     keyboardEvent[initMethod](
                        "keyup", // event type : keydown, keyup, keypress
                         true, // bubbles
                         true, // cancelable
                         window, // viewArg: should be window
                         false, // ctrlKeyArg
                         false, // altKeyArg
                         false, // shiftKeyArg
                         false, // metaKeyArg
                         32, // keyCodeArg : unsigned long the virtual key code, else 0
                         0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
     );
     document.dispatchEvent(keyboardEvent);
}

function loadPreLearnt(){
     //console.log(output);
     r.learner.qvalues = output;
}


var sum_of_scores = 0;

function updateScores(games_played,current_score){
    sum_of_scores += current_score;
    var avg = Math.ceil(sum_of_scores / games_played);

    document.getElementById("games").innerHTML = games_played;
    document.getElementById("avg_score").innerHTML = avg;

}

function updatePlayStats(action, current_speed){
     document.getElementById("current_speed").innerHTML = Math.round(current_speed * 100) / 100;
     
}