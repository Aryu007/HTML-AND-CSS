/* DOM :- We have accessed html in JS using model called as DOM.

/* we see html code in JS using document object model 
as window.document
then we get our whole html code */

/* to print the objects of document we have use console.dir() 
as console.dir(window.document)
*/

console.dir(document.body); // give us the body part object
console.log(document.body); // give us body part html code

// DOM manipulation
let x = document.getElementById("123");
console.dir(x);

let y = document.getElementsByClassName("dom"); // return as html collection
console.dir(y);

let para = document.getElementsByTagName("p");
console.dir(para);

let z = document.querySelector("p"); // first element as p tag
console.dir(z);
let z2 = document.querySelectorAll("p"); // all the p tags and return Nodelist
console.dir(z2);

let c = document.querySelector(".dom"); // in query_selector we use .
console.dir(c);

/* 
1) firstchild property :- return the first child of parent node
2) lastchild property :- return the last child of parent node
3) children :- return the HTML collection of children
*/

/* 
1) tagName :- return tag name like p as paragraph
2) innerText :- return the text of node and it's all children
3) innerHTMl :- return the html part
4) textContent :- return textual content even if it is hidden
*/

// let div = document.querySelector("div");
// console.dir(div);

// let id= div.getAttribute("id");
// console.log(id);

// let id1 = div.setAttribute("id","box2");
// console.log(id1);

// CSS using JS
// div.style.backgroundColor = "yellow";
// div.style.textDecoration = "underline";

// insert a new element
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";

// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// // to delete a element
// div.remove(newBtn);

let parag = document.querySelector("p");
let p = parag.getAttribute("class");
console.log(p);

// parag.setAttribute("class","new_content");

/*
If we add two class property then then we use
tagname.classList.add("new_tagname");
*/

