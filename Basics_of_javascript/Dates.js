let date= new Date()//date is an object


console.log(date);
console.log(date.toString());//readable
console.log(date.toLocaleString());

const d1= new Date(2023,0,14);
console.log(d1.toString());

const d2= new Date(2023,0,14,14,50);
console.log(d2.toString());

const d3= new Date("2023-11-14");
const d4= new Date("11-14-2023");

console.log(d4.toString());

console.log(Date.now()); //Timestamp
console.log(date.getTime());
console.log(date.getDay());
console.log(date.getMonth());

console.log(Math.floor(Date.now()/1000));//seconds

date.toLocaleString('default',{
    weekday: "long",
})

console.log(date);

