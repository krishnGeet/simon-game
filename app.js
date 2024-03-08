let gameSeq = [];
let userSeq = [];
let color = ["red", "blue", "green", "yellow"]

let started = false;
let level = 0;
let levelDiv = document.querySelector(".description")

document.addEventListener("keypress", () =>{
    if(started == false){

        let audio = new Audio("")

        started = true; //NOW GAME HAS BEEN STARTED


        levelUp(); // NOW INCREASE THE LEVEL
    }
})

function levelUp(){
    userSeq = [];
    level++;
    levelDiv.innerText = `Level ${level}`;

    let randColorIdx = Math.floor(Math.random() * 4);
    let randColor = color[randColorIdx];
    gameSeq.push(randColor);

    let randBtn = document.querySelector(`.${randColor}`);

    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(() => {
        btn.classList.remove("gameFlash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250)
}
    
    let allBtn = document.querySelectorAll(".btn");
    for(btn of allBtn){
        btn.addEventListener("click", btnFlash);
    }

function btnFlash(){
    let btn = this;
    userFlash(btn);

    let usercolor = btn.getAttribute("id"); 
    userSeq.push(usercolor);
    checkSeq(userSeq.length - 1);
}

function checkSeq(index){
    if(gameSeq[index] === userSeq[index]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    
    else{
        levelDiv.innerHTML = `Game Over! your score was <b>${level - 1}</b> <br> Press any key to reset `
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white"
        }, 150)
        setTimeout(reset, 1000);
    }
}

function reset(){
   gameSeq = [];
   userSeq = [];
   level = 0;
   started = false;
}