// let red=document.querySelector("#red");
// let green=document.querySelector("#green");
// let blue=document.querySelector("#blue");

let buttons=document.querySelectorAll("button");
console.log(buttons);

// for(let button of buttons){
//     console.log(button);
// }

for(let i=0;i<=2;i++){
    console.log(buttons[i].innerHTML);
}
// let body=document.querySelector("body");

// red.addEventListener("click",function(){
//     body.style.backgroundColor="red";
//     console.log("red button is clicked");
// })
// green.addEventListener("click",function(){
//     body.style.backgroundColor="green";
//     console.log("green button is clicked");
// })
// blue.addEventListener("click",function(){
//     body.style.backgroundColor="blue";
//     console.log("blue button is clicked");
// })