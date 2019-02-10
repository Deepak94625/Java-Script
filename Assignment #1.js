/*
Deepak Singal
Java ES6 - Assignment # 1 
*/

// constructor used to  crate  different songs 
 // attributes are passed in function 



function  song (name ,artist ,co_artist, language, duration, year,rating,ispopular)
{
 this.name = name ;	   // string 
  this.artist= artist;  // string 
  this.co_artist = co_artist; // string
  this.language = language; // string 
  this.duration= duration;  // string 
  this.year = year; // integer 
  this.rating = rating; // integer 
  this.ispopular = ispopular;  // bool 
  this.display = function ()
  {
    console.log("Song details \n " + "Name : " + this.name + " \n"+ "Artist : " + this.artist +  " \n" + "Co_arttist :" + this.co_artist + " \n" +"Language :" + this.language + " \n" + "Duration : " + this.duration + " \n" + "Year :  " + this.year + " \n" + "Rating " + this.rating + "/10 " + " \n " + "Popular : " + this.ispopular + " \n" );
  }
  
}

// configuration of diff songs 

var song1 = new song ("Underwater" , "KSHMR" , " Sonu Nigam" ,"English","50 mins" ,2017,8 ,true);
var song2 = new song ("House Of Cards" , "KSHMR" , " Sidnie Tipton" ,"English","44 mins " ,2018,10 ,true);
 
// accessing the song attributes without array 

song1.display();

//using array to display the songs attributes

var array1  = new Array();

// creating an array of songs 

array1 = [song1,song2];

//pasing function value in  array 

array1[song1.display()];

array1.push(song1.display());

array1[0];

