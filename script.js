const boxes=document.querySelectorAll(".box")
const gameInfo=document.querySelector(".game-info")
const newGame=document.querySelector(".btn")

let currentPlayer;
let gameGrid;
const winningPositions=[
	[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]
]
start()
function start(){
	currentPlayer="X"
	gameGrid=["","","","","","","","",""]
	// boxes[index].style.pointerEvents = "all";
	boxes.forEach((box,index)=>{
    boxes[index].innerText=""
	boxes[index].style.pointerEvents="all"
	boxes[index].classList.remove("win")

	
	})
	newGame.classList.remove("active")
	gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
function checkGameover(){
	let answer=""
	winningPositions.forEach((position)=>{
		if((gameGrid[position[0]]!=="" || gameGrid[position[1]]!=="" || gameGrid[position[2]]!=="") &&((gameGrid[position[0]]===gameGrid[position[1]])&&(gameGrid[position[1]]===gameGrid[position[2]]))){
			if (gameGrid[position[0]]==="X"){
				answer="X"
				newGame.classList.add("active")

        
		}
		else{
			answer="O"
			newGame.classList.add("active")
			 
		}
		if(answer=="X"){
	  gameInfo.innerText="Player X wins"}
else if(answer=="O"){
	gameInfo.innerText="Player O wins"}
		
		boxes.forEach((box)=>{
			box.style.pointerEvents="none"
			boxes[position[0]].classList.add("win")
		boxes[position[1]].classList.add("win")
		boxes[position[2]].classList.add("win")
		})
		
		
	
	
}
})
let fillCount = 0;
gameGrid.forEach((box) => {
	if(box !== "" )
		fillCount++;
});
if(fillCount === 9 && answer==="") {
	gameInfo.innerText = "Game Tied !";
	newGame.classList.add("active");
}
}



function handleClick(index){
if(gameGrid[index]=== ""){
	boxes[index].innerText=currentPlayer
	gameGrid[index]=currentPlayer
	swapTurn();
	checkGameover();
}
}
function swapTurn(){
	if(currentPlayer==="X"){
		currentPlayer="O"
	}
	else{
		currentPlayer="X"
	}
	gameInfo.innerText=`Current Player - ${currentPlayer}` 
	
}






boxes.forEach((box,index)=>{
boxes[index].addEventListener("click",()=>{
	handleClick(index);
	
})
})
newGame.addEventListener("click",()=>{
	start();
})
