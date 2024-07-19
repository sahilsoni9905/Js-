// observe how the things are working 
console.log("hi there");
setTimeout(function(){
    console.log("inside setTimeout");
} , 5000);
let a = 0;
for(let i = 0 ; i< 10000000000 ; i++){
    a = a+ 1;
};
console.log(`the value of a is ${a}`);