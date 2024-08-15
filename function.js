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

// forEach for array which we call as higher order function/methods
let arr = [1,2,3,4,5];
arr.forEach((val) => { // callback function
    console.log(val);
});

let calSqu = (num) => {
    console.log(num * num);
};
arr.forEach(calSqu);

// second method is map which will create new array
let new_arr = arr.map((num) => {
    return num*num*num;
});
console.log(new_arr);

// third is filter
let even_num = arr.filter((num) => {
    return num%2 === 0;
});
console.log(even_num);

// fourth is reduce for sum of numbers
const output = arr.reduce((res,cur) => {
    return res + cur; // sum will be stored in res 
});
console.log(output);

