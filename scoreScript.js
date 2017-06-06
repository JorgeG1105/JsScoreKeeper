//Asking Players what their names are!
var p1NamePrompt = prompt("What is first players name?");
var p2NamePrompt = prompt("What is the second players name?");

//Setting the names to be what the users entered.
var p1Name = document.getElementById("p1Name");
p1Name.textContent = p1NamePrompt;

var p2Name = document.getElementById("p2Name");
p2Name.textContent = p2NamePrompt;

//Selecting Our two buttons
var firstPlayerButton = document.getElementById("button1");
var secondPlayerButton = document.getElementById("button2");

//Creating two vars and initializing them at 0
var firstPlayerScore = 0;
var secondPlayerScore = 0;


//Selecting the span Ids that contain the number that will change when the button is clicked.
var firstPlayerDisplay = document.getElementById("firstPlayer");
var secondPlayerDisplay = document.getElementById("secondPlayer");

//Creating a variable called game over and setting it to false. This will help us check to see if the game is over later on.
var gameOver = false;

//Asking the user for what the winning score shall be.
var winningScore = Number(prompt("What's the winning score?"));

//Selecting the winning score ID so that we can change it to be whatever the user has entered in the above prompt.
var winningScoreDisplay = document.getElementById("firstTo");
winningScoreDisplay.textContent = winningScore;

//Selecting reset button to add functionality.
var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function(){
	//reset scores back to 0
	firstPlayerScore = 0;
	secondPlayerScore = 0;
	//Reset displays back to 0;
	firstPlayerDisplay.textContent = firstPlayerScore;
	secondPlayerDisplay.textContent = secondPlayerScore;
	//Remove winner class from both players for ease.
	firstPlayerDisplay.classList.remove("winner");
	secondPlayerDisplay.classList.remove("winner");
	//Set game over back to false, allowing game to continue.
	gameOver = false;
	//Prompt the user for the new winning score and then change the winning score display to reflect the new winning score.
	winningScore = 	Number(prompt("What's the winning score?"))
	winningScoreDisplay.textContent = winningScore;
})

//Adding functionality to our buttons. When clicked, that respective player score increments by 1.
//Once the winning score is reached the game ends and the winner class is applied to the respective player.
firstPlayerButton.addEventListener("click",function(){
	if(!gameOver){
		firstPlayerScore++;
		if(firstPlayerScore === winningScore){
			firstPlayerDisplay.classList.add("winner");
			gameOver = true;

		}
		firstPlayerDisplay.textContent = firstPlayerScore;
	}
	
})

secondPlayerButton.addEventListener("click",function(){
	if(!gameOver){
		secondPlayerScore++;
		if(secondPlayerScore === winningScore){
			secondPlayerDisplay.classList.add("winner");
			gameOver = true;

		}
		secondPlayerDisplay.textContent = secondPlayerScore;
	}
	
})