var myApp = require('../src/getPrimes.js');
(function(){
  'use strict';

    describe("Case for an arithmetic sequence", function() {

      it("should return `[2, 3, 5, 7, 11, 13, 17, 19]` for getPrimes(23)", function() {
        expect(myApp.getPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      });

      it("should return `[]` for getPrimes(2)", function() {
        expect(myApp.getPrimes(2)).toEqual([]);
      });

      it("should return `[2]` for getPrimes(3)", function() {
        expect(myApp.getPrimes(3)).toEqual([2]);
      });

      it("should return `[2, 3, 5, 7]` for getPrimes(10)", function() {
        expect(myApp.getPrimes(10)).toEqual([2, 3, 5,7]);
      });

      it("should return `[2, 3, 5, 7, 11, 13, 17, 19]` for getPrimes(23)", function() {
        expect(myApp.getPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      });

      it("should return `[2, 3, 5, 7, 11, 13, 17]` for getPrimes(19)", function() {
        expect(myApp.getPrimes(19)).toEqual([2, 3, 5, 7, 11, 13, 17]);
      });

      it("should return `[]` for getPrimes(1)", function() {
        expect(myApp.getPrimes(1)).toEqual([]);
      });

      it("should return `[2,3,  5,7, 11, 13, 17, 19, 23, 29,31, 37, 41, 43, 47,53, 59, 61, 67, 71, 73, 79, 83, 89, 97]` for getPrimes(23)", function() {
        expect(myApp.getPrimes(100)).toEqual([2,3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
      });

    });
})();