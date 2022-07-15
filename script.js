console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0": "X"
}

// Function to check for a winner
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 3, 4, 0],
        [3, 4, 5, 3, 15, 0],
        [6, 7, 8, 3, 25, 0],
        [0, 3, 6, -8, 14, 90],
        [1, 4, 7, 3, 14, 90],
        [2, 5, 8, 13, 14, 90],
        [0, 4, 8, 5, 14, 45],
        [2, 4, 6, 15, 29, 134],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".Imagebox").getElementsByTagName("img")[0].style.width = '200px';
            document.querySelector(".line").style.width = "20vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game Logic
// music.play()
let boxes = document.getElementsByClassName("gamebox");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

//Reset butoon

reset.addEventListener('click', () =>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = "X"
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector(".Imagebox").getElementsByTagName("img")[0].style.width = '0px'
})