async function fn(){
    let data=await axios.get("https://dummyjson.com/posts/search?q=love");
    console.log(data.data.posts);
    data.data.posts.forEach((post)=>{
        console.log(post.title.slice(0,15));
    })
}
fn();