let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//player x; player o
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO= true;
    count = 0;
    enableBoxes();
    msgConatiner.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {//player O
            box.innerText = "O";
            box.classList.add("color-changer");
            turnO = false;
        } else {//player X
            box.innerText = "X";
            box.classList.add("color-changer2");
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();
        
        if(count === 9 && !isWinner) {
            gameDraw();
        }
    })
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Conguratulation, Winner is ${winner}`;
    msgConatiner.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPattern) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val == pos2Val && pos2Val == pos3Val) {
                
                showWinner(pos1Val);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);