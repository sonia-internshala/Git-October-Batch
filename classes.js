class car{
    constructor(brand,mileage){
        console.log(`${brand} and ${mileage}`);
    }
    starts(){
        console.log("starts");
    }
    stops(){
        console.log("stops");
    }
    // setBrand(brand,mileage){
    //     console.log(`${brand} and ${mileage}`)
    // }
}
//objects
// let Fortuner=new car("fortuner",70);//instantiation->instance
// let Swift=new car();
// Swift.setBrand("Swift",50);
// Fortuner.setBrand("fortuner",70);
// Fortuner.starts();
// Fortuner.stops();

//constructor-->special method that is by default it is created.


//Inheritance->Inheriting properties from parent

//parent class->super class
//child class->sub class

class ToyotaCar extends car{
    setBrand(brand,mileage){
        console.log(`${brand} and ${mileage}`)
    }
    //stops//starts
}
let fortuner=new ToyotaCar();
fortuner.setBrand("fortuner",60);
fortuner.starts();
fortuner.stops();
