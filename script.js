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

// chap : 6 (Classes and Objects)
const employee = {
    // both are valid representation of function in object
    calTax1() {
        console.log("The rate is 10%");
    },
    calTax2 : function() {
        console.log("The rate is 15%");
    }
};

const AryanSolanki = {
    salary : 50000,
};

// To use employee as prototype
/*
Prototype referce as an object.
If an object and prototype has same method then object's methos will use.
*/

const xyz = {
    salary : 40000,
    // have same method such that we use this object's method
    calTax1() {
        console.log("The rate is 20%");
    }
};
AryanSolanki.__proto__ = employee;
xyz.__proto__ = employee;

// Classes :
class ToyotaCar {
    constructor() { // custom constructor
        console.log("Createing new objects");
    }
    start() {
        console.log("Start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brand = brand; // this keyword use for object property
    }
}

let fortuner = new ToyotaCar(); // define object from the class
fortuner.setBrand("fortuner");

// inheritance in class
class Parent {
    parent() {
        console.log("Parent");
    }
};

class Child extends Parent {};

/*
If parent and child have same methods then child's method will be used.
(Method overriding)
*/

let obj1 = new Child();

class person {
    constructor() {
        this.species = "Homo";
    }
    eat() {
        console.log("eat");
    }
};

class enginner extends person {
    constructor(branch) {
        super();  // to invoke parent class constructor
        this.branch = branch;
    }
    work() {
        super.eat();
        console.log("To solve the problems");
    }
};

let engObj = new enginner("B.Tech");

// Error handling (try catch block)
let a1 = 5;
let b1 = 10;

console.log("a1 = ",a1);
console.log("b1 = ",b1);
console.log("a1 + b1 = ",a1+b1);
try {
    console.log("a1 + b1 = ",a1+c1); // error
}
catch(err) {
    console.log(err);
}
console.log("a1 + b1 = ",a1+b1);
console.log("a1 + b1 = ",a1+b1);

