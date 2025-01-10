// let obj={
//     firstname:"John",
//     lastname:"Doe",
//     print:function(){
//         console.log(`The person name is ${obj.firstname} ${obj.lastname}`);
//     }
// }
// console.log(obj.firstname);//John
// console.log(obj.lastname);//Doe
// obj.print();
//this keyword->refer to the current object

let obj={
    // firstname:"John",
    // lastname:"Doe",
    names:["John","Doe"],
    print:function(){
        // console.log(`The person name is ${this.firstname} ${this.lastname}`);
        console.log(obj.address);
        console.log(this.address);
    },
    address:{
        street:"xyz",
        city:"abc"
    }
}
obj.print();
