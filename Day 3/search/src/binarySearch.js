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
        //Mkaes sure input datatype is an integer
        var object = {
                index: 0,
                count: 0,
                length: this.length
            }
        if (typeof(searchNumber) === 'number') {
            var minIndex = 0;
            var maxIndex = this.length - 1;
            var currentIndex;
            var searchNumberFound = false;

            //While loop to run as long as the minIndex < the maxIndex 
            while (minIndex < maxIndex) {
                //currentIndex keeps track of the middle element 
                currentIndex = Math.floor((maxIndex + minIndex) / 2);
                //check if the search number is equal to the maxIndex element
                if (this[maxIndex] === searchNumber) {
                    object.index = maxIndex;
                    searchNumberFound = true;
                    break;
                } //check if the search number is equal to the minIndex element 
                else if (this[minIndex] === searchNumber) {
                    object.index = minIndex;
                    searchNumberFound = true;
                    break;
                } //check if the search number is equal to the currentIndex element 
                else if (this[currentIndex] === searchNumber) {
                    object.index = currentIndex;
                    searchNumberFound = true;
                    break;
                } //check if the search number is less than the currentIndex element 
                else if (searchNumber < this[currentIndex]) {
                    maxIndex -= 1;
                    minIndex += 1;
                    maxIndex = currentIndex - 1;
                } //check if the search number is greater than the currentIndex element 
                else if (searchNumber > this[currentIndex]) {
                    maxIndex -= 1;
                    minIndex += 1;
                    minIndex = currentIndex + 1;
                }
                //Increase the amount if interations by 1
                object.count++;
            }
            //if the searchNumber was found do nothing else set object.index to -1
            searchNumberFound ? currentIndex : object.index = -1;
        } //if the datatype is not an integer output "You can only search for integers"
        else {
            object.index ="You can only search for integers";
        }
        return object;
    };
})()