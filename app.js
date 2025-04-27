let direction={x:0,y:0};
const musicStart= new Audio("bg-music.mp3");
const stopMusic= new Audio("stop-music.wav");
let LastPaintTime=0;
let speed=9;
let snakeArr=[
    {x:13,y:15}
]
//Game loop
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-LastPaintTime)/1000 <1/speed){
        return;
}
    LastPaintTime=ctime;
    gameEngine();  
}

function gameEngine(){
   //updating the snake array
board.innerHTML="";
snakeArr.forEach((e,index)=>{
    snakeElement=document.createElement('div')
    snakeElement.style.gridRowStart=e.y
    snakeElement.style.gridColumnStart=e.x
    
    board.append
})
}
window.requestAnimationFrame(main);