//selection
let anchorTag=document.querySelector("a");//tag name
let input=document.querySelector("input");


//manipulation(changing)
//get attribute->getter
console.log(anchorTag.getAttribute("href"));
console.log(input.getAttribute("type"));

//set attribute->setter

anchorTag.setAttribute("href","https://www.youtube.com/");
input.setAttribute("type","text");


//Can we also get and set class attribute?
