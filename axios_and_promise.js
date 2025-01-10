//axios
let promise1=axios.get("https://dummyjson.com/posts/search?q=love");
promise1.then(function(data){
    // console.log(data.data.posts);
    data.data.posts.forEach((post)=>{
        console.log(post.title.slice(0,15));
    })
})
.catch(function(error){
    console.log(error);
});