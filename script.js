// chap : 1 (Variables and Data Types)
console.log("let's start with JavaScript !");

FUllname = "Aryan Solanki S";
age = 19;
console.log(FUllname);
console.log(age);

// right way to asign variable
let name = "Aryan Solanki";
console.log(name);

const PI = 3.14;
console.log(PI);

// create objects
const student = {
    Name : "Aryan Solanki",
    age : 19,
    CGPA : 7
};
console.log(student.Name);
// ----------------------------------------------------------------------------------------------- //

// Chap : 2 (operators)
let a = 5;
let b = 2;
console.log("a^b = ",a ** b); // exponentiation

/*we have use === and !== as the strict version of equal and notequal
because it will check the data type also. */

// let num = prompt("Enter the Number : "); // use as browser ask something and we give the answer
// if(num%5 == 0){
//     console.log("Multiple of 5!");
// }
// else{
//     console.log("Not the multiple of 5!");
// }
// ----------------------------------------------------------------------------------------------- //

// Chap : 3 (Loops and Strings)
let i = 20;
do{
    console.log("Aryan Solanki");
} while(i <= 10);

// for-of loop which is used for strings and array
let ch = "ARYAN SOLANKI";
for(let i of ch){
    console.log(i);
}

// for-in loop which is used for objects to return the key value
let std = {
    name : "Aryan Solanki",
    age : 19,
    CGPA : 6.9,
    College : "DAIICT"
};

for(let i in std){
    console.log(i,std[i]);
}

// Guess the number(Game)
// let num1 = 110;
// let num2 = prompt("Enter the number");

// while(num1 != num2){
//     num2 = prompt("You enter the wrong number. Enter Again !");
// }

// console.log("Congretuation! You guess the correct num!");

// Strings
let n = "Aryan Solanki";
console.log(n.length);

// Template Literals
//let str = `This is a Template Literals`; 

// it is used for
let obj = {
    pen : "PinLong",
    price : 5
};
let str = `The cost of ${obj.pen} is ${obj.price} rupees`;
console.log(str);

let p = "Aryan Solanki";
let new_p = p.toUpperCase();
console.log(p);
console.log(new_p);
// p.toLowerCase();
// p.trim();

// let c = prompt("Enter your full name : ");
// let s = `@${c}110`;
// console.log(s);
// ----------------------------------------------------------------------------------------------- //

// Chap : 4 (Array)

/* In JS String are immutable means they not updated
and array are mutable means they are updated */

let arr = ["aryan","dev","darpan","soni"];
for(let ele of arr){
    console.log(ele);
}

/* Array opretion
1 push  2 pop   3 toString  4 Concat    5 unShift   6 shift     7 sLice     8 splice */
// ----------------------------------------------------------------------------------------------- //

// Chap : 5 (Functions & methods)
function sum(x,y){
    let s = x + y;
    return s;
}
let val = sum(3,4);
console.log(val);

// Arrow functions
const s = (a,b) => {
    return a+b;
};
console.log(s);

// cnt number of vowels
let cnt = 0;
function cnt_vowels(st){
    for(let i of st){
        if(i == "a" || i == "e" || i == "i" || i == "o" || i == "u"){
            cnt++;
        }
    }
    return cnt;
}
let xy = cnt_vowels("aryansolanki");
console.log(xy);