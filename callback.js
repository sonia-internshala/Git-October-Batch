function sum(a,b){
    console.log(a+b);
}
function calculateSum(a,b,sum){
    sum(a,b);
}
calculateSum(10,20,sum);
//sum->callback
//calculateSum->HOF