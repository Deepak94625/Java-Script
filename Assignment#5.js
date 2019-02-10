/*
Deepak Singal
Assignment #6 
*/

//fumction to verify if the given input is a valid 

check = (l,m,n,o) =>
{
  if(typeof(l) === "number" && typeof(m) === "string" ) // checking the datatype 
    {
     if(typeof(n) === "number" && typeof(o) === "string")
       {
         if((l > 1 && m[m.length-1]==="s") || (l === 1 && m[m.length - 1]!=="s" ) ) // checking if the numreic value is singular / plural
           {
             if((n > 1 && o[o.length-1]==="s") || (n === 1 && o[o.length - 1]!=="s" ) )
               {
                  return true ; 
               }
           }
       }
    }
  
}

let array1 = new Array(); //using an array to pass the value
let array2 = new Array(); // using an array to pass the special case
let array3 = new Array();
calc = (l,m,n,o) => //function is used to get the number of secs 
{
    if(check(l,m,n,o) === true) // checking the validating 
    {
      let t1,t2,t3,t4,t5,t6,t9,sum = 0; //initializing the variables to zero 
      switch(m) //using the switch 
      {
        case "days": // if the day calling a function day
        t1 = day(l)
        array1.push(t1);
        break;
        case "hour":  //if the singular hour it will be 3600 secs 
        array1.push(3600);
        break;  
        case "hours": // if the hour calling a function hour 
        t9 = hour(l)
        array1.push(t9); 
        break;
        case "day": //if it will be day then calling the day function 
        t2=day(1);
        array1.push(t2);
        break;
        case "mins": //if  mins then calling  the function mins
        t4 =  min(l);
        array1.push(t4); 
        break;
        case "min": // if singular min passing 60 secs
        array1.push(60);
        break;
        case "secs": //if secs calling sec function 
        t3 = sec(l);
        array1.push(t3); 
        break;
        case "sec": // if singular sec 
        array1.push(1);
        break;
        default:
        console.log("only pural");
        break;
      }
      switch(o) // same logic as of above 
      {
        case "days":
        t1 = day(l)
        array1.push(t1);
        break;  
        case "hour":
        array1.push(3600);
        break;  
        case "hours":
        let t10 = hour(l);
        array1.push(t10); 
        break;
        case "day":
        t2=day(1);
        array1.push(t2);
        break;
        case "mins":
        t5 =  min(n);
        array1.push(t5); 
        break;
        case "min":
        array1.push(60);
        break;
        case "secs":
        t6 = sec(n);
        array1.push(t6);
        break;
        case "sec":
        array1.push(1);
        break;
        default:
        console.log("no value");
        break;
    }
    let i = 0;
    for (i=0;i<=array1.length-1;i++)
    {
       sum = sum + array1[i]; //adding all teh secs 
    }
      array2.push(sum); //passing the values in the array 
      array2.push("secs")
      console.log(array2);
      
    //let grand_sum = (sum);
      i=0;
      if (sum === 144000) //if the sum is 24 hrs or 1440000 secs it will print 1 day 
         {
          array3.push(1);
          array3.push("day");
          console.log(array3)
      }

    for (i=0;i<=array1.length-1;i++)
    {
      array1[i]=0; // initializing the araay agagin to 0 
    }
      sum = 0;
        for (i=0;i<=array3.length-1;i++)
    {
      array3[i]=0; 
    }
      
  }
    else
    {
      console.log("Invalid entry"); //if the validity of the I/P fails it will give invalid entry 
    }
}
//function to get the number of secs in a  hour , day and mins 
day = (l) => l*(24*60*60);
min = (l) => l*60;
sec = (l) => l;
hour =(l) => l*3600;

//test cases 

calc(1,"day",6,"mins");
calc(1,"min",1,"sec");
calc(5,"days",5,"mins");
calc(5,"mins",6,"secs");
calc(20,"hours",4,"hours");

