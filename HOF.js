//HOF->Higher Order Functions
//function has to be an HOF,it should fulfil any of the two conditions or both.
//condition-1
// if we return/call a function(inner) inside another function(outer),outer is HOF.

// function outer(){//Higher Order Function
//     let ans=inner();//callback Function
//     return ans;
// }

// function inner(){
//     let a=10;
//     let b=20;
//     return a+b;
// }

// let finalans=outer();
// console.log(finalans);

//condition-2
// taking a fn(smaller) as paramater to another fn(bigger)
// function bigger(){//HOF
//     console.log("Hello Abhishek");
//     let a=10;
//     let b=30;
//     console.log(a+b);
//     smaller(10,20);//callback
//     smaller(30,40);
//     smaller(50,60);
// }
// function smaller(a,b){
//     console.log("hello October batch students!");
//     console.log(a+b);
// }

// bigger(smaller);