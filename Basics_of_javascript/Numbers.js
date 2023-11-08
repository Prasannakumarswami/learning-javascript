const num1= 100; //naive way but not preffered
const num2= new Number(101.234);// preferred
console.log(num1);
console.log(num2);

console.log(num2.toFixed(2))
console.log(num1.toString().length);
console.log(num2.toPrecision(4));

const price= 1250000;
console.log(price.toLocaleString());//US price
console.log(price.toLocaleString('en-IN'));//Indian price

// Number.MAX_VALUE or Number.'Parameter' in inspect gives number properties

// Math lib available by default

console.log(Math.abs(-7));//absolute

console.log(Math.round(4.6));// round

console.log(Math.ceil(4.2)); // gives the max int
console.log(Math.floor(4.9)); //gives the min int
console.log(Math.min(1,2,5,-6));
console.log(Math.max(3,100,5));


// Math.random gives value between 0 to 1

console.log(Math.random()); 
console.log(Math.floor(Math.random()*10 +1 )); //to get the num between 1 to 10

const min= 10
const max=23

console.log(Math.floor((Math.random()*(max-min+1))+ min)); // to get the number between min and max

