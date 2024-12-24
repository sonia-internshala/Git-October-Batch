let input=document.querySelector("input");


// input.addEventListener("input",function(event){
// //     console.log(event);
// // console.log(event.target);
// console.log(event.target.value);
// })

input.addEventListener("keydown",function(event){
    if(event.key==="Shift"){
        console.log(event.target.value);
    }
})

