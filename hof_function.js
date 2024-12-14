// let circleradius=[1,2,3,4,5];

//3 tasks
//Task1->calcucate areas of all circles
//Area->pi*r*r

// function Area(radius){
//     return Math.PI*radius*radius;
// }
// function Circumference(radius){
//     return 2*Math.PI*radius;
// }
// function Diameter(radius){
//     return 2*radius;
// }

// function calculate(shubham){
//     let output=[];
//         for(let i=0;i<circleradius.length;i++){
//             output.push(shubham(circleradius[i]));
//         }
//         return output;
// }

// console.log(calculate(Area));
// console.log(calculate(Circumference));
// console.log(calculate(Diameter));
// function calculateArea(){
//     let output=[];
//     for(let i=0;i<circleradius.length;i++){
//         output.push(Area(circleradius[i]));
//     }
//     return output;
// }
// //task2->calculate circumference of all circles
// function calculateCircumference(){
//     let output=[];
//     for(let i=0;i<circleradius.length;i++){
//         output.push(Circumference(circleradius[i]));
//     }
//     return output;
// }
// //task3->diameter of each circle
// function calculateDiameter(){
//     let output=[];
//     for(let i=0;i<circleradius.length;i++){
//         output.push(Diameter(circleradius[i]));
//     }
//     return output;
// }
// // console.log(calculateArea());
// // console.log(calculateCircumference());
// // console.log(calculateDiameter());

//map method

let arr=[10,20,10,12,1];
// function triple(x){
//     return 3*x;
// }
// let newArray=arr.map(triple);


// function filterGreaterThanEqualTo3(x){
//     return x>=3;
// }
// let newArray=arr.filter(filterGreaterThanEqualTo3);

function filterGreaterThanEqualTo3(x){
        return x>=3;
}
    let ans=arr.every(filterGreaterThanEqualTo3);
console.log(ans);
