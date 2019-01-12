/*

Name - Deepak Singal 
Course - JS ES 6
Variables , Let and Const 
*/

/*

Difrenece between Var , Let , Const 

Var 

it  increases the complexicity of the code as the cose can access the variable declare with var outside its scope 
Developer can make a mistake as it allowed to reassign the value of a variable declare with var 

****Note  - Should be used least in code ****

Let

It provides clearity to the code as it will not allowed  a variable to be accessed outside its scope . 
But still it will let you re assgn the value 

****Note - Can be used mot of the time ****

Const 

It is used to declare the constant value of the variable 
you can't reassign it's value   ( we can modify some datatypes such as array or bject ) 
Scope works similar to that of Let 

****Note :Should be used if we are not changing the variable value in code such as "PI = 3.14... ";

*/



// let

function f1()
{
  var istrue = true ;
  var isfalse = false;
  let sample = "sample";
  if (istrue === true)
    {
      console.log("sample " + sample);
      let sample2 = "sample2";
          sample = "Updated_sample";
      var variable = "variable"
      console.log("=====First If Block=====");	
      console.log("istrue " + istrue);   // it will work (var is used )
      console.log("variable " + variable);   // it will work (var is used )
      console.log("sample " + sample); // it will work as sample is declared in function scope not in IF scope . Reassigning value of the sample will also work 
      console.log("sample2 " + sample2); // it will wok as it is declared in If block 
    }
  if (isfalse === false)
    {
      let sample1 = "sample1";
      var variable1 ="variable1";
      console.log("=====Second If Block=====");	
      console.log("isfalse " + isfalse); // it will work (var is used )
      console.log("variable1 " + variable1); // it will work (var is used )
      nconsole.log("sample " + sample); // it will work as sample is declared in function scope not in IF scope
      console.log("sample1 " + sample1); // it will wok as it is declared in If  block
      console.log("sample2 " + sample2); // it will not work as it is declared as let and it is out of scope in this IF block 
    }
  console.log("=====Function Block====="); 
  console.log("variable " + variable); // it will work (var is used , but it is out of scope )
  console.log("variable1 " + variable1); // it will work (var is used , but it is out of scope)
  console.log("sample " + sample);  // let is used , it is in scope as well 
  console.log("sample1 " + sample1); // As let is used it will not work , it is out of scope
  console.log("sample2 " + sample2); // As let is used it will not work , it is out of scope
}

f1();

//var 

var variable1= "variable1"; // declare as var 
var variable2= "variable2"; //declare as var 
function sayhi1 ()
{
   variable1= "Updated_variable1";
   variable3 ="variable3";  // declaring a variable in IF block  , but it will have scope out of this block too as var is used 	
  console.log("=====function block=====");
  console.log("variable1 : " + variable1); // it will work  as variable1 is in scope 
  console.log("variable2 : " + variable2); // it will work  as variable2 is in scope 
  console.log("variable3 : " + variable3);//
}

console.log("=====Main block=====");
console.log("variable1 : " + variable1);
console.log("variable2 : " + variable2);
//console.log("variable3 : " + variable3); 

sayhi1();


// const 

const con1 = "variable1"; // declare as const have scope in the entire function 
const con2 = "variable2"; //declare as const have scope in the entire fncton
function f2 ()
{	
	if( true === true ) 
{
	const con3 = "variable3"; // have scope in only IF block 
	console.log("=====IF Block=====");
	console.log("constant : " + con1); 
 	con1 = "updated_variable "; // it will throw an error as we cant reassign the const variable
	console.log("constant : " + con1); // it will not work 
	console.log("constant : " + con2); // it will work , con2 is in scope
	console.log("constant : " + con3); // it will work , con3 is in scope;
}
	console.log("====Main Block====");
	console.log("constant : " + con1); // it will not work 
	console.log("constant : " + con2); // it will work , con2 is in scope
	console.log("constant : " + con3); // it will not work , con3 is out of  scope;
}

f2();

// Use case in modifying the variales declared as const 

const array1 =[1,2,3];
console.log(array1);
array1.push(4);
console.log(array1); // we can modify some data types . It will work as expeted " 1 2  3 4 " 

const obj = {

name : "Deepak", 
Lname : "Singal",
}

obj.name = "DIPAK";
console.log(obj) // it will print DIPAK 



//hoisting 

// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope

var x = 5; // declare and intialize 
var y ;  // only declare 

console.log(x)
console.log(y); // undefined ( it is not initialized)

y=10;

console.log(x);
console.log(y); // it will work fine here , as y is declare as well as initialized  



