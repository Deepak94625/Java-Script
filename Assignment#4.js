
/*
DEEPAK SINGAL 
ES6 

*  Assignment: Homework Assignment #4: Functions. 
*/



// isstring  used to check if the data type name is string
isstring = (name) => {

  if(typeof(name) === "string") 
    {
     // return true if it is a string 
      return true;
    }
  else
    {
      // return false if it is not a string 
      return false;
    }
}


let array1 = new Array();  // using an array to pass all the eligible values 

Man = (men , ismortal) => { // using a function to get all the eligible members
  const check_type  = isstring(men); // validating datatype of the paased value 
  if(check_type === true) // passed vaulue is a string 
    {
       if (men !== null && ismortal === true ) // checking if the passes value is man and mortal
         {
           array1.push(men);//pushing all the eligible members
         }
    }
}

Man("Deepak",true); // passing testcases 
Man("Singal",true);
Man("Socrates",true);
Man(123);
Man("test2",false);
let i ;
if(array1.length !== null) // checking the numbers of eligible members 
  {
    console.log("All the below members are mortal")
    for(i=0;i<=array1.length-1;i++)
    {
      console.log(array1[i]); // displaying all the eligible members 
    }
  }

/*

If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)

2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.

*/

// an array of cake having flavour choclate and vanilla
cake = ["choclate" , "vanilla"];

//passing an array and boolean  in a function 

typeofcake = (arr , flavour1) =>
{
  if (arr.length > 0)
    {
      
      if (flavour1 === true)
      {
          console.log("Flavour of the cake is choclate");
      }
      else
        {
          console.log("Flavour of the cake is Vanilla");
        }
    }
}
//generating a boolean to check if the flavour of the cake is choclate 
ischoclate= (arr1) => {
if (arr1[0] === "choclate")
  {
    flavour = true;
    if (arr1[1] === "choclate")
      {
        flavour = true;
      }
    typeofcake(arr1,flavour);
  }
else
  {
    flavour = false;
    typeofcake(arr1,flavour);
    return;
  }
}
  
ischoclate(cake);
  

