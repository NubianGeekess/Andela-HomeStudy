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

    words: function(sentence) {
		        var arr = {};
		        //	\s+ ---> To use all spaces of lenght 1 or more than 1 as a split delimiter
		        //	\n  ---> To use all new lines as a split delimiter 
		        //	\t  ---> To use all new tabs as a split delimiter 
		        sentence.split(/\s+|\n|\t/).forEach(function(element) {
		            arr[element] = arr[element] ? ++arr[element] : 1;
		        });
		        return arr;
		    }
		}

module.exports = myApp;