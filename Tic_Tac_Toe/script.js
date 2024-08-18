let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
// let draw = document.querySelector("#draw");

let turnO = true;
let cnt = 0;
const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        cnt++;
        if(turnO){
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        if (cnt === 9 && msgContainer.classList.contains("hide")) {
            drawCondition();
        }
    });
});

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x", "o");
    } 
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    } 
};

const showWinner = (winner) => {
    msg.innerText = `Congratuations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const drawCondition = () => {
    msg.innerText = "DRAW";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for(let pattern of winningPattern){
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText,
        // );

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val == "O" || pos2val == "O" || pos3val == "O"){
            
        }
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);