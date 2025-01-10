//call method
//obj and myobj
let obj={
    name:"Shalini",
    print:function(age,degree){
        console.log(`The name is ${this.name} is of ${age} and pursuing ${degree}`);//this==obj
    }
}
let myobj={
    name:"Sanjana"
}
//using call method,one object borrows the method of another object.
//syntax
// obj.print();//this=obj the name is Shalini
// obj.print   .call      (myobj,27,"B.Tech");//this=myobj  the name is sanjana
// //giver      mediator    taker/borrower


//apply
//using apply method,one object borrows the method of another object.
//arguments->pass it in an array(packed box)
// obj.print   .apply      (myobj,[27,"B.Tech"]);//this=myobj  the name is sanjana
// //giver      mediator    taker/borrower

//bind
//it is same as call return a function

let superpower=obj.print   .bind      (myobj,27,"B.Tech");//this=myobj  the name is sanjana
superpower();
// //giver      mediator    taker/borrower
