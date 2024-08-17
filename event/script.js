let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("you are inside the div!");
};

/*
JS event handling > Inline event handling
*/

let btn1 = document.querySelector("button");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
// };

// If we do multiple work in event then we used
btn1.addEventListener("click",() => {
    console.log("Button1 was clicked! - handler1");
});

btn1.addEventListener("click",() => {
    console.log("Button1 was clicked! - handler2");
});

const handler3 = () => {
    console.log("Button1 was clicked! - handler2");
};

btn1.addEventListener("click",handler3);

btn1.removeEventListener("click",handler3);

// Change mode light to dark
let mode = document.querySelector("#mode");
let currMode = "light";

mode.addEventListener("click",() => {
    if(currMode === "light"){3
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
});
