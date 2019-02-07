/*const sample1 = [1,2,3,4,5,6,7];
const sample3 = 5;

console.log("hello");

const result = (sample2) => sample2.filter((num) => num===5);

console.log(result(sample1));

const result1 = (sample2) => sample2.filter((num) => num % 2 === 0);

console.log(result1(sample1));


const result3 = (sample2) => { 
  const myarray=[];
  sample2.forEach((n) => {
    const n1 = n*10;
    myarray.push(n1);
});
    return myarray;
}
                                             
console.log(result3(sample1)); 


//ES5

function multiply (x,y)
{
  x=x || 5;
  y=y || 10;
  return x*y
}


console.log(multiply(10)) // -> it will work 

//ES6

// multiply1 = (x=5 , y = 10) => x*y ;

//console.log(multiply1());

const str1 = "i am a stering "
strsplit = (str = str1) => str.split(" ");

console.log(strsplit());

const bankaccount = {
  canspendmoney : true,
  balance : 1000,
  hascreditcard : true
}
 purchaseitem = (price,acc = bankaccount) => 
{
  if (acc.canspendmoney)
    {
      acc.balance = acc.balance - price ;
      if (acc.balance < 0)
        {
          return acc.canspendmoney = false;
        }
        else
        {
          return acc.canspendmoney = true;
          //return acc.balance;
        }
      return acc.balance;
    } 
   return acc.balance;
}

console.log(purchaseitem(500));
//console.log(bankaccount);
console.log(purchaseitem(200));
//console.log(bankaccount);
console.log(purchaseitem(600));
//console.log(bankaccount);
//console.log(purchaseitem(600,{canspendmoney:true,balance:6000}));
console.log(purchaseitem(600,{canspendmoney:false,balance:6000}));


function f1(x,y,z)
{
  console.log(arguments)
}
 
f1(5,6,7);

function f2(x,y,z)
{
 
  console.log(arguments)
}
 
f2(5,6,7,10,8,9,5);

function f3(x,y,z)
{
  const args = Array.prototype.slice.call(arguments,f3.length)
  console.log(args)
}

f3(5,6,7,10,8,9,5);


function f4(x)
{
  const args1 = Array.prototype.slice.call(arguments,f4.length)
  console.log(args1.sort())
}

f4("hi","hello","deepak");

//magic of es6

f5 = (x,y,z,...num) => console.log(num.sort());
f5(1,2,5,8,9,3,2)

*/

//f6 = (x,...num) => num.map((n)=> x*n);
//console.log(f6(10,5,10,6,7));

//Below code will not work 
/*
const dog = (years,breed) => {
  this.years = age;
    this.type = breed;
}

const spike = new dog(5,"golden");
console.log(spike);
*/

// Error dog can't be used as construction without using function keyword



/*function Dog(years, breed)
{
  this.age = years;
  this.type = breed;
}
const spike = new Dog(5,"golden");
console.log(spike);
  
  
//console.log(this); -> chutiya hai saala 

//time to play with Es5 and ES6

//ES5
*/

function dog(years,breed) {
  const that = this; // "this" is chutiya in es5 untill u use 'use strict'
  that.age = years;
  that.type= breed;
  setInterval(function (){
    that.age += 1;
    //console.log(that);
  },2000)
}

const spike = new dog(5,"golden");
const spike1 = new dog(7,"golden");
console.log(spike);
console.log(spike1);


  


 






