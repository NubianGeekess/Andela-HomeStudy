'use strict';
/*
Write a function called *dataTypes* to compare and return results, based on the argument supplied to the function. Follow through the test to produce the perfect function that accounts for all expectations.
For strings, return its length.
For null or undefined return string 'no value'
For booleans return the boolean
For numbers return a string showing how it compares to hundred e.g. For 67 return 'less than 100' for 4034 return 'more than 100' or equal to 100 as the case may be
For arrays return the 3rd index, or undefined if it doesn't exist.
For functions call the function and pass in true as an argument and return it.
*/
var myApp = {

  dataTypes: function (data) {
    var answer;
    //Check if Data type is String
    if (typeof (data) === 'string') {
      answer = data.length;
      //Check if Data type is NUll or Undefined
    } else if (data === undefined || data === null) {
      answer = "no value";
      //Check if Data type is Boolean
    } else if (typeof (data) === 'boolean') {
      answer = data;
      //Check if Data type is number
    } else if (typeof (data) === 'number') {
      if (data < 100) {
        answer = "less than 100";
      } else if (data > 100) {
        answer = "more than 100";
      } else { answer = "equal to 100"; }
      //Check if Data type is Array
    } else if (Array.isArray(data)) {
      data.length >= 2 ? answer = data[2] : answer = undefined;
      //Check if Data type is a function
    } else if (typeof (data) === 'function') {
      answer = data(true);
    } else {
      answer = "please input a valid data type"
    }
    return answer;
  }

}

module.exports = myApp;
