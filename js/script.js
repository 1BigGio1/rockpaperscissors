// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var user;

$("#shoot").click(function(){
    user = $("#input").val();
    result();
});

function result(){ 
  var cpt = Math.random() * 59 + 1;
  if (cpt < 20.0) {
    cpt = "rock";
  } else if(cpt <= 40.0) {
    cpt = "paper";
  } else{
    cpt = "scissors";
  } 
  
  
  if(user === "rock"){
    if(cpt === "rock"){
      $("#result").html("It's a Tie");
    } else if(user === "rock"){
      if(cpt === "scissors"){
        $("#result").html("You Win.")
          } else if(user === "rock"){
            if(cpt === "paper"){
              $("#result").html("CPU Wins!!");
            }
          }
        }
      }

  
  
  if(user === "paper"){
    if(cpt === "rock"){
      $("#result").html("You Win.");
    } else if(user === "paper"){
      if(cpt === "scissors"){
        $("#result").html("CPU Wins!!");
          } else if(user === "paper"){
            if(cpt === "paper"){
              $("#result").html("It's a Tie.");
            }
          }
        }
      }
  
  
  if(user === "scissors"){
    if(cpt === "paper"){
      $("#result").html("You Win.");
    } else if(user === "scissors"){
      if(cpt === "rock"){
        $("#result").html("CPU Wins!!");
          } else if(user === "scissors"){
            if(cpt === "scissors"){
              $("#result").html("It's a Tie.");
            }
          }
        }
      }
  
  
 
 
  $("#userChoice").html(user);
  $("#computerChoice").html(cpt); 
}


// DOCUMENT READY FUNCTION BELOW

