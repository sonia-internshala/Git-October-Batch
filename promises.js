//promise is constrcutor function that creates objects

// let promise1=new Promise(callback function(arg1/handler1,arg2/handler2));

// let promise1=new Promise(function(resolve,reject){
//     //resolve("Promise is resolved!");
//     reject("Promise is rejected!");
// })
// promise1
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log("hello!");
// })


function step1(){
    let promise1=new Promise(function(resolve,reject){
        setTimeout(function(){
            // resolve("I am selecting a picture from the gallery!")
            reject("I am not able to select picture from gallery");
            // console.log("Error!");
            // step2();
        },5000);
    })
    return promise1;
}

function step2(){
    let promise2=new Promise(function(resolve,reject){
        setTimeout(function(){
             resolve("I am applying filters to my picture!");
            reject("I am not able to apply filters!")
            // step3();
        },2000);
    })
    return promise2;
}

function step3(){
    let promise3=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I am applying caption to my picture!");
            reject("I am not able to apply caption")
           // console.log("Error!");
            // step4();
        },3000);
    })
    return promise3;
}
function step4(){
    let promise4=new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I am posting the picture!");
            reject("I am not able to post my picture");
        },1000);
    })
    return promise4;
}

let promise1=step1();

promise1.then(function(data){
    console.log(data);
    let promise2=step2();
    promise2.then(function(data){
        console.log(data);
        let promise3=step3();
        promise3.then(function(data){
            console.log(data);
            let promise4=step4();
            promise4.then(function(data){
                console.log(data);
            }).
            catch(function(error){
                console.log(error);
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }).
    catch(function(error){
        console.log(error);
    })
}).catch(function(error){
    console.log(error);
})

step1(function(){
    step2(function(){
        step3(function(){
            step4();
        });
    });
});
