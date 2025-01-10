//direct calling

// console.log(this);//this will point to window object

// //function calling

// function sonia(){
//     console.log(this);//this will point to ?
// }
// sonia();//direct calling

//2. method calling
//method is function inside the object

// let obj={
//     a:100,
//     fn:function(){
//         console.log(this);//this will point to obj in which it is present
//     }//method
// }
// obj.fn();//indirect calling or dependent calling

//3. constructor->inside the classes,creating objects,it is automatically called
//use a new or an object is created

// class Person{
//     constructor(fname,lname){
//         this.fname=fname;
//         this.lname=lname;
//         console.log(`${this.fname} and ${this.lname}`)
//     }
//     speak(){
//         console.log('Person speaks');
//     }
// }
// let sonia=new Person("Sonia","Malik");
// let sajal=new Person("Sajal","Dev");
// let aditya=new Person("Aditya","Deshmukh");

//4.call,apply and bind

// let aditya={
//     name:"Aditya Deshmukh",
//     fn:function(){
//         console.log(this.name);
//     }
// }
// let sonia={
//     name:"Sonia Malik",

// }
// aditya.fn();
// aditya.fn.call(sonia);
// aditya.fn();

//5.arrow function

let obj={
    a:100,
    fn:function(){
        console.log(this);//1.
        function fn2(){
            console.log(this);//2.
        }
        fn2();
    }
}

obj.fn();//obj
let a=obj.fn;
a();//direct->window object