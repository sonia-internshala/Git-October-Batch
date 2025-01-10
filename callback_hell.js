// let age=45;
// //nesting
// if(age>40){
//     console.log("I am more than 40.")
//     if(age>45){
//         console.log("I am 45.")
//     }
// }

// //nesting
// for(){
//     for(){

//     }
// }

function step1(fn){
    setTimeout(function(){
        //console.log("I am selecting a picture from the gallery!")
        console.log("Error!");
        fn();
        // step2();
    },5000);
}

function step2(fn){
    setTimeout(function(){
        console.log("I am applying filters to my picture!");
        fn();
        // step3();
    },2000);
}

function step3(fn){
    setTimeout(function(){
        console.log("I am applying caption to my picture!");
       // console.log("Error!");
        fn();
        // step4();
    },3000);
}
function step4(){
    setTimeout(function(){
        console.log("I am posting the picture!");
    },1000);
}

step1(function(){
    step2(function(){
        step3(function(){
            step4();
        });
    });
});





// step2();
// step3();
// step4();