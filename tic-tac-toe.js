let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset-button");
let bigbox=document.querySelector(".container");
// console.log(bigbox.children[3]);
let X=document.querySelector("#x");
let O=document.querySelector("#o")

let turnO=true;
X.addEventListener("click",function(){
    turnO=false;
})



// let turnO=true;//O's turn is there to start the game

let winningPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let moves=0;
boxes.forEach(box=>{//out of all boxes
    box.addEventListener("click",function(){//whichever box i click
        if(turnO==true){//O's Turn
            box.innerHTML=`<h1>O</h1>`;//box should have O
            turnO=false;//turnO should be over
        }
        else{//X's Turn
            box.innerHTML=`<h1>X</h1>`;//box should have X
            turnO=true;//turnO please wake up again is your turn
        }
        box.style.pointerEvents="none";//once done done
        moves++;
        if(moves>=5){
            checkWinner();
        }
    })
})

function checkWinner(){
    for(let pattern of winningPatterns){
        let pos1=bigbox.children[pattern[0]].innerText;
        let pos2=bigbox.children[pattern[1]].innerText;
        let pos3=bigbox.children[pattern[2]].innerText;

        if(pos1!==""&&pos2!==""&&pos3!==""){
            if(pos1===pos2&&pos2===pos3){
                console.log(`${pos1} wins!`);
            }
        }
    }
}

resetbutton.addEventListener("click",function(){
    boxes.forEach(box=>{
        box.innerHTML="";
        box.style.pointerEvents="auto";
    })
})

