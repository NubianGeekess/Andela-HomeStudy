/*
	Write a function called *words* that takes in a string argument and counts the occurrences of each word in the string.
	The function should return a JSON object showing the words identified, and their occurrences.
	For example for the input `olly olly in come free`, the output should be
	>olly: 2
	>in: 1
	>come: 1
	>free: 1
*/
'use strict';

var myApp = {

  words: function (sentence) {
    var obj = {};
    //arr.prototype.toString = null;
    //	\s+ ---> To use all spaces of lenght 1 or more than 1 as a split delimiter
    //	\n  ---> To use all new lines as a split delimiter 
    //	\t  ---> To use all new tabs as a split delimiter 
    sentence.split(/\s+|\n|\t/).forEach(function (element) {
      /*
        	 loops through the sentence type int the element and check if the element 
        	 is a truthy value and has duplicates, if it is a truthy value increase 
        	 the element by 1, if it is not a truthy value set it equal to 0 and increase it by 1.
			*/
      obj[element] = (+obj[element] || 0) + 1;
    });
    return obj;
  }
}

module.exports = myApp;
