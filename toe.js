let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#rstbtn");
let win= document.querySelector(".win hide");
let newbtn= document.querySelector("#newbtn");
let msg= document.querySelector(".msg");

let turnO = true;
let count= 0;


const patterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = () =>{
    turnO= true;
    enableBoxes();
};


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turnO===true){
            box.innerText= "O";
            turnO = false;
        }
        else{
            box.innerText= "X";
            turnO = true;
        }
        box.disabled= true;
        count++;

        let isWinner= checkWinner();

        if (count===9 && !isWinner){
            gameDraw();
        }
    });
});

const showWinner=(winner)=>{
    msg.innerText=`Congrats! Winner is ${winner}`;
    disableBoxes();
    
}

const checkWinner=()=>{
    for (let pattern of patterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1!='' && pos2!='' && pos3!=''){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
}

const gameDraw=()=>{
    msg.innerText= "Game was Draw";
    disableBoxes();
}

reset.addEventListener("click", resetgame);
newbtn.addEventListener("click", resetgame);