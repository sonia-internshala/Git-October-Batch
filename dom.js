//selection
let h1=document.querySelector("h1");//tag name
let h2=document.querySelector(".heading2");//class name
let p=document.querySelector("#para");//id name



//manipulation
// h1->textcolor->red

//WET Way->camelCase
// h1.style.backgroundColor="red";
// h1.style.color="green";
// h1.style.fontSize="100px";

h2.style.backgroundColor="blue";

p.style.color="yellow";

//DRY->kabab case
h1.style.cssText=`
color:red;
background-color:green;
font-size:100px;
`


