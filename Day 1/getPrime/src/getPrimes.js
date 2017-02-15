'use strict';
/*
Write a *getPrimes* function that takes an integer value n as argument and generates prime numbers from 0 to n with asymptotic analysis.
The generated prime numbers should be in an array.
If no prime number is obtainable for the input, return an empty array.
Your logic should be as efficient as possible (with minimal iterations).
Your code should also address edge cases (invalid input, negative input value, or zero as input).
*/
var myApp = {

  getPrimes: function (max) {
    //*******USING SEIVE OF ERATOSTHENES*******
    var answer;
    //Ensure input value is valid
    if (typeof (max) === 'number' && max >= 2) {
      //Function that sieves throught an array of numbers
      var sieve = function (list, n) {
        //Set the number to start sieving the array from
        //2 is the default sieve starting value
        if (!n) n = 2;
        var listB = [];
        //Loop through the array and remove factors of n
        list.forEach(function (i) {
          if (i === n || i % n) {
            listB.push(i);
          }
        });
        var y;
        //set y to the next bigger value after n
        for (var i = 0; i < listB.length; i++) {
          if (listB[i] > n) {
            y = listB[i];
            break;
          }
        }
        //if the final array if y is true
        if (!y) {
          return listB;
        }
        //if y is false sieve through the array again with a bigger value of y
        return sieve(listB, y);
      };
      var arr = [];
      for (var i = 2; i <= max; i++) {
        arr[i] = i;
      }
      answer = sieve(arr);
    } else if (typeof (max) === 'number' && max < 2) {
      answer = "Your max number must be greater than 1"
    } else {
      answer = "your data type must be a number"
    }
    return answer;
  }
}

module.exports = myApp;
