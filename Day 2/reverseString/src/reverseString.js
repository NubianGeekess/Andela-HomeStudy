'use strict';
/*
Write a function *reverseString* that takes in a string argument and returns the reverse of the string provided.
If the reverse of the string is the same as the original string, as in the case of palindromes, return true instead.
*/
var myApp = {

	reverseString: function(str){
		var newArray;
		if (typeof(str) === 'string'){
			// If the string is empty return 0
			if (str.length === 0){
				newArray = null;
			}else{
				//split the string 
				//reverse the elements of the string
				//join the string
		     var reverseArray = str.split("").reverse().join("");
		     reverseArray === str ? newArray = true : newArray = reverseArray;
			} 	
		}else{
			//Ensure your input type is a string
			newArray = "Your input type must be a string";
		}
		return newArray;
	}
}


module.exports = myApp;