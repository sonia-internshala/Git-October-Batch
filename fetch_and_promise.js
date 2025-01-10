//fetch->always accepts a string

let promise1=fetch("https://dummyjson.com/posts/search?q=love");
//promise->construcvtor function that creates objects
// takes a function->2 args resolve and reject->thyen and catch
//then handles resolve
//catch->reject

//fetch&promise
let ansarray=[];
promise1.then(function(data){
    let promise2=data.json();
    promise2.then(function(data){
    //     console.log(data);
    //    console.log(data.posts);

     data.posts.forEach((post)=>{
       ansarray.push(post);
     })
     let newarr=ansarray.filter((post)=>post.id%2==0);
     console.log(newarr);

    }).catch(function(error){
        console.log(error);
    })
})
.catch(function(error){
    console.log(error);
});



