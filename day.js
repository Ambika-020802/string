//1.take two strings with spaces at starting of one string and 
//at the ending of another string remove the spaces and 
//concat the both string and 
//convert the combined string into uppercase string

var a="     note";
var b="book     ";
var a1= a.trimStart();
var b1=b.trimEnd();
var concat_str=a1.concat(b1);
var uppercase=concat_str.toUpperCase();
console.log(uppercase);


//Extract Middle Portion of the string and
 //get the last index of char of extracted string and
 //Convert the portion to Lowercase


var str1="javascript"
 var slice_str=str1.slice(1,9)
 var char="p"
 var indexOf_str=slice_str.indexOf(char)
 console.log(indexOf_str)
 var Lowercase_str=slice_str. toLowerCase()
 console.log(Lowercase_str);
 


 //take a single char and concat string to that char and 
//convert the resulted string to uppercase and 
//then extract the last second char 


var str1="a"
 var str2="fruits"
 var concat_str=str1.concat(str2)
 var toUpperCase_str=concat_str.toUpperCase()
 var slice_str=toUpperCase_str.slice(5,7)
 console.log(slice_str);
 

 //we have 2 string and extract first 3 chars of first string and
 //extra last 3 chars of another string and concat those 2 results together
 //and first char and last char of the resulted concatinated string should as uppercase

 var str1="prasad"
 var str2="swathi"
 var slice_1=str1.slice(0,3)
 console.log(slice_1);
 var slice_2=str2.slice(-3)
 console.log(slice_2);
 var concat_str=slice_1.concat(slice_2)
 console.log(concat_str);
 var UpperCase_str=concat_str.charAt(0).toUpperCase()+concat_str.slice(1,5)+concat_str.charAt(concat_str.length-1).toUpperCase()
 console.log(UpperCase_str);




 //You are given a string with extra spaces at the beginning and end.
 //You need to trim the string, make the first and last characters uppercase, 
 //extract a specific part of the string, 
 //concatenate it with another string


 var str1="          chicken       "
 var str2="briyani"
 var trim_str=str1.trim()
 var uppercase=trim_str.charAt(0).toUpperCase()+trim_str.slice(1,-1)+trim_str.charAt(trim_str.length-1).toUpperCase();
 var slice_str=uppercase.slice(2,5)
 var concat_str=slice_str.concat(str2)
 console.log(concat_str);


 
// "hello there , how are you " find the index of are word in the sentence

  var a="hello there , how are you "
  var a1=a.indexOf("are");
  console.log(a1);
 



 





