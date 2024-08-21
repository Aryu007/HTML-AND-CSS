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


// chap : 7 (Callbacks, Promises & Async Await)

// Asynchronous Programing example
console.log("one");
console.log("two");

// function hello() {
//     console.log("Hello!");
// };
setTimeout(() => {
    console.log("Hello!");
},5000); // to delay the execusion of hello by 2s = 2000ms

console.log("three");
console.log("four");

// Callbacks
function sum(a,b) {
    console.log(a+b);
};

function calculator(a,b,sumCallBack) {
    sumCallBack(a,b);
};

calculator(5,6,sum); 

// Callback hell (Pyramid of Doom)
// function getData(dataId,getNextData) {
//     setTimeout(() => {
//         console.log("Data ",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// };

// getData(1, () => { // this is the way to write callback hell (nested callback)
//     getData(2  , () => {
//         getData(3);
//     });
// });

// Promise
let promise = new Promise((resolve,reject) => { // here resolve and reject are two callbacks generated by JS
    console.log("I am A PROMISE!");
    // resolve("Success");
    // reject("Some error occured");
});

function get_Data(dataId,getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // console.log("Data ",dataId);
            // resolve("success");

            // reject("error");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
};

let pr = get_Data(123);

const getPromise = () => {
    return new Promise((resolve,reject) => {
        console.log("I am a Promise");
        resolve("success");
        // reject("error");
    });
};

let pro = getPromise();
// if promise resolved then
pro.then((res) => {
    console.log("promise fulfilled");
});

// if promise reject then
pro.catch((err) => {
    console.log("rejected");
});

function getdata(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data ",dataId);
            resolve("success");
        },5000);
    });
};

// promise chain

// getdata(1).then((res) => {
//     console.log(res);
//     getdata(2).then((res) => {
//         console.log(res);
//     });
// });

getdata(1)
    .then((res) => {
        return getdata(2);
    })
    .then((res) => {
        return getdata(3);
    })
    .then((res) => {
        console.log("success");
    });

// Async & Await

async function hello() { // always return promise
    console.log("hello");
}

async function getAllData() {
    await getdata(1);
    await getdata(2);
    await getdata(3);
}