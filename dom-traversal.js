let section=document.querySelector("section");

//1-level down
let pp=section.children[0].children[1];
// console.log(section.children[1]);

//1-level up
let listItem1=pp.parentElement.parentElement.parentElement.children[1].children[0].children[0];

//1-level right
// console.log(listItem1.nextElementSibling.nextElementSibling);

//1-level left
console.log(listItem1.nextElementSibling.nextElementSibling.previousElementSibling);



