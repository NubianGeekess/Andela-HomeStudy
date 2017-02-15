var myApp = require('../src/findMissing.js');
(function () {
  'use strict';

  describe("Find missing number two lists: ", function () {

    describe("Case for en empty list", function () {

      it("should return 0 for empty list", function () {
        expect(myApp.findMissing([], [])).toEqual(0);
      });

    });

    describe("Case for lists with the same entries", function () {

      it("should return 0 for [2],[2]", function () {
        expect(myApp.findMissing([2], [2])).toEqual(0);
      });

      it("should return 0 for [4],[4]", function () {
        expect(myApp.findMissing([4], [4])).toEqual(0);
      });

      it("should return 0 for [7],[7]", function () {
        expect(myApp.findMissing([7], [7])).toEqual(0);
      });

      it("should return 0 for [3],[3]", function () {
        expect(myApp.findMissing([3], [3])).toEqual(0);
      });

      it("should return 0 for [5],[5]", function () {
        expect(myApp.findMissing([5], [5])).toEqual(0);
      });

      it("should return 0 for [99],[99]", function () {
        expect(myApp.findMissing([99], [99])).toEqual(0);
      });

    });

    describe("Case for lists with similar entries and a missing number", function () {

      it("should return 5 for [1,2],[1,2,5]", function () {
        expect(myApp.findMissing([1, 2], [1, 2, 5])).toEqual(5);
      });

      it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function () {
        expect(myApp.findMissing([4, 6, 8], [4, 6, 8, 10])).toEqual(10);
      });

      it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function () {
        expect(myApp.findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).toEqual(1);
      });

      it("should return 5 for [1,2,3],[1,2,3,5]", function () {
        expect(myApp.findMissing([1, 2, 3], [1, 2, 3, 5])).toEqual(5);
      });

      it("should return 10 for [4, 6, 8,22],[4, 6, 8,22, 10]", function () {
        expect(myApp.findMissing([4, 6, 8, 22], [4, 6, 22, 8, 10])).toEqual(10);
      });

      it("should return 1 for [5, 4, 7, 6, 11, 66,11],[11,5, 4, 1, 7, 6, 11, 66]", function () {
        expect(myApp.findMissing([5, 4, 7, 6, 11, 66, 11], [5, 4, 1, 7, 6, 11, 11, 66])).toEqual(1);
      });

    });

    describe("Case for wrong input DataType", function () {

      it("should return 'Your datatypes must be Arrays' for TRUE, TRUE", function () {
        expect(myApp.findMissing(true, true)).toEqual('Your datatypes must be Arrays');
      });

      it("should return 'Your datatypes must be Arrays' for UUNDEFINED, UNDEFINED", function () {
        expect(myApp.findMissing(undefined, undefined)).toEqual('Your datatypes must be Arrays');
      });

      it("should return 'Your datatypes must be Arrays' for FALSE,FALSE", function () {
        expect(myApp.findMissing(false, false)).toEqual('Your datatypes must be Arrays');
      });

      it("should return 'Your datatypes must be Arrays' for NULL, NULL", function () {
        expect(myApp.findMissing(null, null)).toEqual('Your datatypes must be Arrays');
      });

      it("should return 'Your datatypes must be Arrays' for 11, 11", function () {
        expect(myApp.findMissing(11, 11)).toEqual('Your datatypes must be Arrays');
      });

      it("should return 'Your datatypes must be Arrays' for 'qwe','ww'", function () {
        expect(myApp.findMissing('qwe', 'ww')).toEqual('Your datatypes must be Arrays');
      });

    });

  });

})();
