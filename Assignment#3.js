/*
Deepak Singal
ES6 Assignment #3 */

function  men (name,ismortal) // creating a function to store the members 
{
  let count = 0; // using a variable like a flag
  this.name = name ;	 // declaring variables
  this.ismortal = ismortal;
  if (this.name !== null && this.ismortal === true) // condition to check the members 
  {
      count = 0; // if any member is not mortal count value will not be 0
  }
}

// passing members 

let deepak = new men ("Deepak",true);
let singal = new men("Singal",true);
let socrates = new men("socrates",true);
let immortal = new men("immortal",false);

//using array to access the members and attributes 

let array1 =new Array();
array1=[deepak,singal,socrates,immortal]; // passing members 

if (men.count === 0)
    {
      console.log("all the members of the men are mortal")
    }
    else
    {
      // following code is used to check if any members of array / function men are immortal
      let i = 0;
      console.log("some members in this group are immortal");
      // accessing all the members of the array to verify if anyone is immortal 
      for (i=0; i<=array1.length-1;i++) // access the 
        {
          if (array1[i].ismortal === false)
          {
            console.log("Following members are immortal");
            console.log("Name : " + array1[3].name);
          }
        }
    }

/*
Same logic is used as of above 

This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.*/

function cake (flavour)
{
  let count1 = 1;
  this.flavour = flavour;
  if(flavour!==0)
    {
      count1=count1+1;
    }
}

let vanilla = new cake("vanilla");
let choclate = new cake("choclate");
let array2=new Array();
array2=[vanilla,choclate];
i=0;
if(array2.count1 === 0)
  {
    console.log("cake has no flavour");
  }
else
  {
  
for(i=0;i<=array2.length-1;i++)
  {
    if (array2[i].flavour === "vanilla" || array2[i] === "choclate")
      {
        console.log("cake is either choclate or vanilla");
      
      if (array2[i].flavour !== "choclate")
        {
         console.log("Flavour of cake :" + array2[i].flavour); 
        }
      }
  }

  }
  
  

