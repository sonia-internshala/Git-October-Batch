// const person1 = {
//     name: "Alice",
//     greet: function(greeting) {
//       console.log(`${greeting}, I am ${this.name}`);
//     }
//   };
  
// const person2 = { name: "Bob" };

// person1.greet  .call  (person2,"Good Morning");//this==person2
// output:Good Morning, I am Bob

// const mathOperations = {
//     add: function(a, b, c) {
//       console.log(a + b + c);
// //     }
// // };
// // let obj={};
//  let car={
//     start:function(){
//         console.log(`${this.name} starts`);
//     },
//     stop:function(){
//         console.log(`${this.name} stops`);
//     }
//  }
//  let fortuner={
//     name:"Fortuner"
//     // start:function(){
//     //     console.log( `fortuner starts`);
//     // },
//     // stop:function(){
//     //     console.log(`fortuner stops`);
//     // }
//  }
// let Scorpio={
//     name:"Scorpio",
//     // start:function(){
//     //     console.log( `Scorpio starts`);
//     // },
//     // stop:function(){
//     //     console.log(`Scorpio stops`);
//     // }
//  }
// car.start. call(fortuner);//this==fortuner
// car.stop. call(fortuner);//this==fortuner

// car.start. call(Scorpio);//this==scorpio
// car.stop. call(Scorpio);//this==scorpio

// const user = {
//     name: "John",
//     getDetails: function(age, city) {
//       console.log(`${this.name}, Age: ${age}, City: ${city}`);
//     }
//   };
  
//   const user1 = { name: "Alice" };
//   const user2 = { name: "Bob" };

//   user.getDetails .apply (user1,[23,"ney York"]);

// const numbers = {
//     data: [1, 2, 3, 4, 5]//1-2-3-4-5
// };
// //Array.prototype
// let joinedArray=Array.prototype.join .call(numbers.data,"-");
// console.log(joinedArray);
//given              intermediate       //borrower




  

  