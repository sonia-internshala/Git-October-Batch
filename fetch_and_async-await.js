let ansarray=[];
async function fn(){
    let data=await fetch("https://dummyjson.com/posts/search?q=love");
    // console.log(data);//partial data
    // console.log(data.json());//entire data
    let response=await data.json();
    response.posts.forEach((post)=>{
        ansarray.push(post);
      })
      let newarr=ansarray.filter((post)=>post.id%2==0);
      console.log(newarr);
}
fn();