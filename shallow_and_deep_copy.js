//shallow copy->copies top-level properties but has a reference to secondary level props.
// variables ->top-level
//arrays& nested objects->secondary level properties

// let toy={
//     toy1:"teddy",
//     toy2:"Elephant",
//     toys:["A","B","C","D","E"],
//     toy_properties:{
//         color:"red",
//         height:10,
//         weight:50
//     }
// }

//Two ways of creating shallow copy
//1.Spread operator

// let shallow_toy={...toy};

//2 Assign Method
// let shallow_toy2=Object.assign({},toy);

// shallow_toy.toy2="bear";
// shallow_toy.toys.push("Angel","Green");


// shallow_toy.toy_properties.color="black";
// console.log(shallow_toy.toy_properties.color);//black
// console.log(toy.toy_properties.color);//red


//Deep copy->copies deeply top-levl adn nested level(secondary level props)
let toy={
    toy1:"teddy",
    toy2:"Elephant",
    toys:["A","B","C","D","E"],
    toy_properties:{
        color:"red",
        height:10,
        weight:50
    }
}

// syntax:
let deep_toy=JSON.parse(JSON.stringify(toy));

deep_toy.toy1="bear";
deep_toy.toys.push("Angel","green");
deep_toy.toy_properties.color="black";

// console.log(deep_toy.toys);["A","B","C","D","E","Angel","green"]
// console.log(toy.toys);["A","B","C","D","E"]
console.log(deep_toy.toy_properties.color);//black
console.log(toy.toy_properties.color);//red