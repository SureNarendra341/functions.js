//print "Hello,World!" by using "greet" function

function greet(){
    console.log("Hello,World!");
   
}
greet();


//Functions with Parameters
function addnumbers(a,b){
    sum=a+b
    console.log(sum)
}
addnumbers(35,21)
addnumbers(69,21)
addnumbers(32,11)

//Functions with Return Statements

function multiply(i,j){
    return i*j;
}
var product=
multiply(24,5)
console.log(product);

//Combining Functions
function calculateRectangleArea(length,width){
    return multiply(length,width)
}
let result=
 calculateRectangleArea(35,15);
 console.log(result);




//Default Parameters
function greetUser(name = "Guest"){
    console.log(`Hello, ${name}`);
}

greetUser("Narendra");
greetUser();

console.log();