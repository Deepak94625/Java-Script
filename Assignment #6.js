
/*
Deepak Singal
ES#6 
Assignment #6

Write a program that prints the numbers from 1 to 100.

But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".

For numbers which are multiples of both three and five print "FizzBuzz".

*/
let count1 = 0; // using as a flag to get the prime values  
for (i=0;i<=100;i++) // below logic is used to get the prime numbers 
    {
      for (j=0;j<=i;j++)
        {
          if((i%j)===0)
            {
               count1++; // it will be as the prime no will be only divisble by 1 and by itself 
            }
        }
      if(count1 === 2) 
        {
          console.log("prime"+i);  
        }
      else if((i%3)===0 && (i%5)===0) // condition when the number will be 3 and 5
        {
          console.log("fizzbuzz"+i);
        }
      else if((i%5)===0) //divisible by 5 
        {
          console.log("buzz"+i);
        }
      else if((i%3)===0) //divisible by 3
        {
          console.log("fizz"+i);
        }
      else
        {
          console.log(i); //printing all the other values 
        }
      count1=0;//initialing back to 0 
    }
