let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started==false){
        console.log("game is started");
        started=true;
        
        levelUP();
    }
});
  
function gameFlash(btn){
     btn.classList.add("flash");
     setTimeout(function(){
        btn.classList.remove("flash");
     },250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
       btn.classList.remove("userFlash");
    },250);
}

function levelUP(){
    userSeq=[];
    level++; 
    h2.innerText=`Level ${level}`;

    // random button chhose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector( `.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

// to check the game and user sequence of colors
function checkSeq(idx) {
    // console.log("current level :",level);
    
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUP,500);
        }
        console.log("same value");
    }else{
        h2.innerHTML=`Game Over! Your score was <b> ${level}</b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout (function() {
            document.querySelector("body").style.backgroundColor="white";
        } ,150);
        reset();
    }
} 

function btnPress(){
    // console.log(this);
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkSeq(userSeq.length-1);
}
 
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

// function reset to reset the game \
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}