var myApp = require('../src/countWords.js');
(function () {
  'use strict';

  describe("words()", function () {
    it("counts one word", function () {
      var expectedCounts = { word: 1 };
      expect(myApp.words("word")).toEqual(expectedCounts);
    });

    it("counts one of each", function () {
      var expectedCounts = { one: 1, of: 1, each: 1 };
      expect(myApp.words("one of each")).toEqual(expectedCounts);
    });

    it("counts multiple occurrences", function () {
      var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 };
      expect(myApp.words("one fish two fish red fish blue fish")).toEqual(expectedCounts);
    });

    it("includes punctuation", function () {
      var expectedCounts = { car: 1, ":": 2, carpet: 1, as: 1, java: 1, "javascript!!&@$%^&": 1 };
      expect(myApp.words("car : carpet as java : javascript!!&@$%^&")).toEqual(expectedCounts);
    });

    it("includes numbers", function () {
      var expectedCounts = { testing: 2, 1: 1, 2: 1 };
      expect(myApp.words("testing 1 2 testing")).toEqual(expectedCounts);
    });

    it("respects case", function () {
      var expectedCounts = { go: 1, Go: 1, GO: 1 };
      expect(myApp.words("go Go GO")).toEqual(expectedCounts);
    });

    it("counts properly international characters", function () {
      var expectedCounts = { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1 };
      expect(myApp.words("¡Hola! ¿Qué tal? Привет!")).toEqual(expectedCounts);
    });

    it("counts multiline", function () {
      var expectedCounts = { hello: 1, world: 1 };
      expect(myApp.words("hello\nworld")).toEqual(expectedCounts);
    });

    it("counts tabs", function () {
      var expectedCounts = { hello: 1, world: 1 };
      expect(myApp.words("hello\tworld")).toEqual(expectedCounts);
    });

    it("counts multiple spaces as one", function () {
      var expectedCounts = { hello: 1, world: 1 };
      expect(myApp.words("hello  world")).toEqual(expectedCounts);
    });

    it("handles properties that exist on Object's prototype", function () {
      var expectedCounts = { reserved: 1, words: 1, like: 1, prototype: 1, and: 1, toString: 1, "ok?": 1 };
      expect(myApp.words("reserved words like prototype and toString ok?")).toEqual(expectedCounts);
    });

    it("includes numbers", function () {
      var expectedCounts = { testing: 2, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 };
      expect(myApp.words("testing 1 2 3 4 5 testing")).toEqual(expectedCounts);
    });

    it("respects case", function () {
      var expectedCounts = { go: 1, Go: 1, GO: 1, HI: 1, hi: 1 };
      expect(myApp.words("go Go GO HI hi")).toEqual(expectedCounts);
    });

    it("counts properly international characters", function () {
      var expectedCounts = { "¡Hola!": 1, "¿Qué": 1, "tal?": 1, "Привет!": 1, "kmdc": 1 };
      expect(myApp.words("¡Hola! ¿Qué tal? Привет! kmdc")).toEqual(expectedCounts);
    });

    it("counts multiline", function () {
      var expectedCounts = { hello: 1, world: 1, this: 1, is: 1, new: 1 };
      expect(myApp.words("hello\nworld\nthis\nis\nnew")).toEqual(expectedCounts);
    });

    it("counts tabs", function () {
      var expectedCounts = { hello: 1, world: 1, this: 1, is: 1, tab: 1 };
      expect(myApp.words("hello\tworld\tthis\tis\ttab")).toEqual(expectedCounts);
    });

    it("counts multiple spaces as one", function () {
      var expectedCounts = { hello: 1, world: 1, i: 1, am: 1, jed: 1 };
      expect(myApp.words("hello       world          i             am                           jed")).toEqual(expectedCounts);
    });
  });


})();
