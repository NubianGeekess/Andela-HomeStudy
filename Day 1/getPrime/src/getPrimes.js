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
    if (typeof (max) === 'number' && max >= 2) {
      var sieve = function (list, n) {
        if (!n) n = 2;
        var listB = [];
        list.forEach(function (i) {
          if (i === n || i % n) {
            listB.push(i);
          }
        });
        var y;
        for (var i = 0; i < listB.length; i++) {
          if (listB[i] > n) {
            y = listB[i];
            break;
          }
        }
        if (!y) {
          return listB;
        }
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
