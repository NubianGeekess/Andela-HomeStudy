'use strict';
var myApp = {

	getPrimes: function (max){
	  /*
		for (i = 2; i<=max; i++){
			if (i % 2 === 0 & i !== 2){continue;}
		    else if (i % 3 === 0 & i !== 3){continue;}
		    else if (i % 5 === 0 & i !== 5){continue;}
		    else if (i % 7 === 0 & i !== 7){continue;}
		    else if (i % 11 === 0 & i !== 11){continue;}
		    else if (i % 13 === 0 & i !== 13){continue;}
		    else if (i % 17 === 0 & i !== 17){continue;}
		    else if (i % 19 === 0 & i !== 19){continue;}
		    else{newArray.push(i);}	
		}
		return newArray;
		*/
		//*******USING SEIVE OF ERATOSTHENES*******
	    var arr = [];
	    var newArray = [];

	    // Set all elements between 0 to max in the array to true 
	    for (var i = 0; i <= max; i++) {
	        arr.push(true);
	    }

	    // Sieve the Two's and Sieve the Three's, The Sieve of Eratosthenes.
		//When the multiples sublime,The numbers that remain are Prime.
		//Only way to explain this function is the poem above.
	    for (var i = 2; i <= Math.sqrt(max); i++) {
	        if (arr[i]) {
	            for (var j = i * i; j < max; j += i) {
	                arr[j] = false;
	            }
	        }
	    }
	    
	    //For every true element in the array push the index value to a new array 
	    for (var i = 2; i < max; i++) {
	        if(arr[i]) {
	            newArray.push(i);
	        }
	    }

	    return newArray;
	}
}

module.exports = myApp;