'use strict';
/*
Firstly, you are to create three functions, as prototypes to the Array class to return the following:
>`toTwenty()` returns `[1, 2, 3 . . . 20]`
>`toForty()` returns `[2, 4, 6 . . . 40]`
>`toOneThousand()` returns `[10, 20, 30 . . . 1000]`
Once you are done, create another prototype(d) function called `.search`, it will take just one 
argument which is the number you are to find. The search function should return an object, which contains
>`.count`, the number of times your function iterated to find the index of the number in question
>`.index`, the index of the number in question
>`.length`, the length of the original array
The `.search` function should implement the _binary search algorithm_. Each time you iterate, you 
should increase the count, to test how efficient your implementation is.
*/

function createArray(inc, max) {
    let arr = [];
    let j = 0;
    for (var i = 0; j < max; i++) {
        arr.push(j += inc);
    }
    return arr;
}

(function() {

    Array.prototype.toTwenty = function() {
        return createArray(1, 20);
    };

    Array.prototype.toForty = function() {
        return createArray(2, 40);
    };

    Array.prototype.toOneThousand = function() {
        return createArray(10, 1000);
    };

    Array.prototype.search = function(searchNumber) {
    
    };
    
})()
