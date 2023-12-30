const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset_btn");
const newGame = document.querySelector("#newGame");
const message = document.querySelector("#message");
const container = document.querySelector(".mess-container");


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

turn0 = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turn0) {
            box.innerText = "0";
            
            turn0 = false;
        } else {
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    })
})



const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
            
                showWinner(pos1val);
            }
        }
    }


};


const showWinner = (winner) => {
    message.innerText = `congratulations, \nwinner is:${winner}`;
    container.classList.remove("hide");
   
   
   
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.5},
      });
    disableBoxes();


}
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    container.classList.add("hide");
};
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);