var myApp = require('../src/dataType.js');

(function () {
  'use strict';


  describe("Data types tests ", function () {
    describe("Case for some falsy values", function () {

      it("should return 'no value' for null", function () {
        expect(myApp.dataTypes(null)).toEqual('no value');
      });

      it("should return 'no value' for undefined", function () {
        expect(myApp.dataTypes(undefined)).toEqual('no value');
      });

    });

    describe("Case for booleans", function () {

      it("should return true for `true`", function () {
        expect(myApp.dataTypes(true)).toBe(true);
      });

      it("should return false for `false`", function () {
        expect(myApp.dataTypes(false)).toBe(false);
      });

    });

    describe("Case for Numbers", function () {

      it("should return 'less than 100' for 44", function () {
        expect(myApp.dataTypes(44)).toBe('less than 100');
      });

      it("should return 'more than 100' for 144", function () {
        expect(myApp.dataTypes(144)).toBe('more than 100');
      });

      it("should return 'equal to 100' for 100", function () {
        expect(myApp.dataTypes(100)).toBe('equal to 100');
      });

      it("should return 'less than 100' for 1", function () {
        expect(myApp.dataTypes(1)).toBe('less than 100');
      });

      it("should return 'more than 100' for 999", function () {
        expect(myApp.dataTypes(999)).toBe('more than 100');
      });

      it("should return 'more than 100' for 100.2", function () {
        expect(myApp.dataTypes(100.2)).toBe('more than 100');
      });


    });

    describe("Case for Strings", function () {

      it("should return the length of `tergiversate`", function () {
        expect(myApp.dataTypes('tergiversate')).toBe(12);
      });

      it("should return the length of an empty string", function () {
        expect(myApp.dataTypes('')).toBe(0);
      });

      it("should return the length of `555`", function () {
        expect(myApp.dataTypes('555')).toBe(3);
      });

      it("should return the length of `love`", function () {
        expect(myApp.dataTypes('love')).toBe(4);
      });

      it("should return the length of 'qwerty'", function () {
        expect(myApp.dataTypes('qwerty')).toBe(6);
      });

      it("should return the length of `1234567890`", function () {
        expect(myApp.dataTypes('1234567890')).toBe(10);
      });

    });

    describe("Case for arrays", function () {

      it("should return `2` for `[0, 1, 2]`", function () {
        expect(myApp.dataTypes([0, 1, 2])).toBe(2);
      });

      it("should return `undefined` for `[]`", function () {
        expect(myApp.dataTypes([])).not.toBeDefined();
      });
      it("should return `undefined` for `[4, 9]`", function () {
        expect(myApp.dataTypes([4, 9])).not.toBeDefined();
      });
      it("should return `undefined` for `[999, 999]`", function () {
        expect(myApp.dataTypes([999, 999])).not.toBeDefined();
      });
      it("should return `undefined` for `[4, 9]`", function () {
        expect(myApp.dataTypes(['0', '0'])).not.toBeDefined();
      });
    });

    describe("Case for functions", function () {
      it("should call the `callback` function with argument true, and return `called callback`", function () {
        var callback = function (arg) {
          expect(arg).toBeTruthy();
          if (arg === true) {
            return 'called callback';
          }
        };
        expect(myApp.dataTypes(callback)).toBe('called callback');
      });

      it("should call the `helloworld` function with argument true, and return `hello world`", function () {
        var helloworld = function (arg) {
          expect(arg).toBeTruthy();
          if (arg === true) {
            return 'hello world';
          }
        };
        expect(myApp.dataTypes(helloworld)).toBe('hello world')
      });

      it("should call the `love` function with argument true, and return `love`", function () {
        var love = function (arg) {
          expect(arg).toBeTruthy();
          if (arg === true) {
            return 'love';
          }
        };
        expect(myApp.dataTypes(love)).toBe('love')
      });
    });
  });

})();
