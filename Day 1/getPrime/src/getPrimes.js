'use strict';
var myApp = {

	getPrimes: function (max){
	  
	  		//*******USING SEIVE OF ERATOSTHENES*******
	    if(typeof(max) === 'number' && max >= 2){
		    var arr = [];
		    var newArray = [];
		    var error;

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

		    return newArray;
	    }else if (typeof(max) === 'number' && max < 2) {
	    	error = "Your max number must be greater than 1"
	    }else{
	    	error = "your data type must be a number"
	    }
	    return error;
	}
}

module.exports = myApp;