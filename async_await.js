// function fn(){
//     return 10;
// }
// console.log(fn());

// async function fn(){
//     //return 10;
//     console.log(10);
// }
// console.log(fn());

async function getdata(){
    console.log(20);
    let data= await fetch("https://icanhazdadjoke.com/");//takes some times
    console.log(data);
}
console.log(10);
getdata();
console.log(40);
console.log(70);
console.log(80);

//10,40,20,data,30
//10,20,30,data,40
//10,20,data,30,40
//10,20,30,40,data
//10 20 data 30 40
//10,20,30,40,data