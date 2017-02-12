'use strict';
/*
You are presented with two arrays, all containing positive integers. Create a function *findMissing(arr1, arr2)* 
that takes in two arguments, both of which are arrays. One of the arrays will have one extra number, see below:
>`[1,2,3]` and `[1,2,3,4]` should return `4`
>`[4,66,7]` and `[66,77,7,4]` should return `77`
*/
var myApp = {
    findMissing: function(arr1, arr2) {
        var result = [];
        var equal;
        if (arr1.length === 0 || arr2.length === 0) {
            result.push(0);
        } else if (arr1.length === arr2.length) {
            for (var i = 0; i < arr2.length; i++) {
                arr1[i] !== arr2[i] ? equal = false : equal = true;
            }
            if (equal) {
                result.push(0);
            }
        } else {
            for (i = 0; i < arr1.length; i++) {
                if (arr2.indexOf(arr1[i]) === -1) {
                    result.push(arr1[i]);
                }
            }
            for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) === -1) {
                    result.push(arr2[i]);
                }
            }
        }
        return result[0];
    }
}
module.exports = myApp;