//selection
let button=document.querySelector("button");

//manipulation
function pizza(){
    console.log("I am eating pizza");
}
function frenchfries(){
    console.log("I am eating frenchfries");
}


//way-2
// button.onclick=pizza;
// button.onclick=frenchfries;

//way-3
//addEventListeners

button.addEventListener("click",function pizza(){
    console.log("I am eating pizza");
});
button.addEventListener("click",frenchfries);
