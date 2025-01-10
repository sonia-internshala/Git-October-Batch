// console.log("Open the shop");
// console.log("wait for 10 seconds to sell the items");
// console.log("shut the shop and go home");

// console.log("Open the shop");//1

function waitfor10secs(){
    console.log("wait for 2 seconds to sell the items");//3
}
// console.log("shut the shop and go home");//2
// // console.log("hello");
// // console.log("welcome");

// //setTimeout-->timer
// //1s->1000ms
// //5s->5000ms
// //10s->10000ms

// setTimeout(waitfor10secs,2000);
setTimeout(function waitfor10secs(){
    console.log("wait for 2 seconds to sell the items");//3
},2000);
// let intervalID=setInterval(waitfor10secs,2000);
// setTimeout()
