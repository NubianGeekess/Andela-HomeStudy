'use strict';
/*
Write a *getPrimes* function that takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis.
The generated prime numbers should be in an array.
If no prime number is obtainable for the input, return an empty array.
Your logic should be as efficient as possible (with minimal iterations).
Your code should also address edge cases (invalid input, negative input value, or zero as input).
*/
var myApp = {

	getPrimes: function (max){
	  
	  		//*******USING SEIVE OF ERATOSTHENES*******
	    if(typeof(max) === 'number' && max >= 2){
		    var arr = [];
		    var newArray = [];
		    var answer;

		    // Set all elements between 0 to max in the array to true 
		    for (var i = 0; i <= max; i++) {
		        arr.push(true);
		    }

		    // Sieve the Two's and Sieve the Three's, The Sieve of Eratosthenes.
			//When the multiples sublime,The numbers that remain are Prime.
			//The best way to explain this for loop is the poem above.
		    for (var i = 2; i <= Math.sqrt(max); i++) {
		        if (arr[i]) {
		            for (var j = i * i; j <= max; j += i) {
		                arr[j] = false;
		            }
		        }
		    }
		    
		    //For every true element in the array push the index value to a new array 
		    //E.g [true,false,true] == [0,2], Only th true indexes are pushed
		    for (var i = 2; i <= max; i++) {
		        if(arr[i]) {
		            newArray.push(i);
		        }
		    }

		    answer =  newArray;
	    }else if (typeof(max) === 'number' && max < 2) {
	    	answer = "Your max number must be greater than 1"
	    }else{
	    	answer = "your data type must be a number"
	    }
	    return answer;
	}
}

module.exports = myApp;