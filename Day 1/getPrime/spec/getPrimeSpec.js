var myApp = require('../src/getPrimes.js');
(function(){
  'use strict';

    describe("Case for an arithmetic sequence", function() {

      it("should return `[2, 3, 5, 7, 11, 13, 17, 19,23]` for getPrimes(23)", function() {
        expect(myApp.getPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
      });

      it("should return `[2]` for getPrimes(2)", function() {
        expect(myApp.getPrimes(2)).toEqual([2]);
      });

      it("should return `[2,3]` for getPrimes(3)", function() {
        expect(myApp.getPrimes(3)).toEqual([2,3]);
      });

      it("should return `[2, 3, 5, 7,11]` for getPrimes(11)", function() {
        expect(myApp.getPrimes(11)).toEqual([2, 3, 5, 7, 11]);
      });

      it("should return `[2, 3, 5, 7, 11, 13, 17, 19,23]` for getPrimes(23)", function() {
        expect(myApp.getPrimes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
      });

      it("should return `[2, 3, 5, 7, 11, 13, 17, 19]` for getPrimes(19)", function() {
        expect(myApp.getPrimes(19)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
      });

      it("should return `Your max number must be greater than 1` for getPrimes(1)", function() {
        expect(myApp.getPrimes(1)).toEqual("Your max number must be greater than 1");
      });

      it("should return `[2,3,  5,7, 11, 13, 17, 19, 23, 29,31, 37, 41, 43, 47,53, 59, 61, 67, 71, 73, 79, 83, 89, 97]` for getPrimes(23)", function() {
        expect(myApp.getPrimes(100)).toEqual([2,3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
      });

    });

    describe("Case of invalid datatype",function(){

      it("It should be an integer", function(){
        expect(myApp.getPrimes("hello")).toEqual("your data type must be a number");
      });

      it("It should be an integer", function(){
        expect(myApp.getPrimes("2")).toEqual("your data type must be a number");
      });

      it("It should be an integer", function(){
        expect(myApp.getPrimes([1,2,3,4])).toEqual("your data type must be a number");
      });

      it("It should be an integer", function(){
        expect(myApp.getPrimes({})).toEqual("your data type must be a number");
      });

      it("It should be an integer", function(){
        expect(myApp.getPrimes(undefined)).toEqual("your data type must be a number");
      });

      it("It should be an integer", function(){
        expect(myApp.getPrimes(null)).toEqual("your data type must be a number");
      });
     
    });

    describe("Case of max < 2", function(){

      it("It should be an greater than 1", function(){
        expect(myApp.getPrimes(1)).toEqual("Your max number must be greater than 1");
      });

      it("It should be an greater than 1", function(){
        expect(myApp.getPrimes(0)).toEqual("Your max number must be greater than 1");
      });

      it("It should be an greater than 1", function(){
        expect(myApp.getPrimes(1.999)).toEqual("Your max number must be greater than 1");
      });

      it("It should be an greater than 1", function(){
        expect(myApp.getPrimes(-2)).toEqual("Your max number must be greater than 1");
      });

      it("It should be an greater than 1", function(){
        expect(myApp.getPrimes(-99999999999)).toEqual("Your max number must be greater than 1");
      });

      it("It should be an greater than 1", function(){
        expect(myApp.getPrimes(-0)).toEqual("Your max number must be greater than 1");
      });

    });



})();