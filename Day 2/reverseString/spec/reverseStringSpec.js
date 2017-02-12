var myApp = require('../src/reverseString.js');
(function() {
'use strict';

        describe("Produce the reverse order of a word: ", function() {
            describe("Case for en empty string", function() {

                it("should return null for empty string", function() {
                    expect(myApp.reverseString('')).toEqual(null);
                });

            });

            describe("Case for palindromes", function() {

                it("should return true for `anna`", function() {
                    expect(myApp.reverseString('anna')).toEqual(true);
                });

                it("should return true for `NaN`", function() {
                    expect(myApp.reverseString('NaN')).toEqual(true);
                });

                it("should return true for `civic`", function() {
                    expect(myApp.reverseString('civic')).toEqual(true);
                });

                it("should return true for `wow`", function() {
                    expect(myApp.reverseString('wow')).toEqual(true);
                });

                it("should return true for `bob`", function() {
                    expect(myApp.reverseString('bob')).toEqual(true);
                });

                it("should return true for `a`", function() {
                    expect(myApp.reverseString('a')).toEqual(true);
                });

            });

            describe("Case for normal words", function() {

                it("should return `skoob` for `books`", function() {
                    expect(myApp.reverseString('books')).toEqual('skoob');
                });

                it("should return `nomolos` for `solomon`", function() {
                    expect(myApp.reverseString('solomon')).toEqual('nomolos');
                });

                it("should return `csim` for `misc`", function() {
                    expect(myApp.reverseString('misc')).toEqual('csim');
                });

                it("should return `evol` for `love`", function() {
                    expect(myApp.reverseString('love')).toEqual('evol');
                });

                it("should return `jedidiah` for `haididej`", function() {
                    expect(myApp.reverseString('jedidiah')).toEqual('haididej');
                });

                it("should return `qwerty12345` for `54321ytrewq`", function() {
                    expect(myApp.reverseString('qwerty12345')).toEqual('54321ytrewq');
                });

            });

            describe("Case for invalid datatypes", function() {

                it("should return `Your input type must be a string` for UNDEFINED", function() {
                    expect(myApp.reverseString(undefined)).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for 1", function() {
                    expect(myApp.reverseString(1)).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for NULL", function() {
                    expect(myApp.reverseString(null)).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for [ ]", function() {
                    expect(myApp.reverseString([])).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for { }", function() {
                    expect(myApp.reverseString({})).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for ['jedididah']", function() {
                    expect(myApp.reverseString(['jedididah'])).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for true", function() {
                    expect(myApp.reverseString(true)).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for false", function() {
                    expect(myApp.reverseString(false)).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for Object", function() {
                    expect(myApp.reverseString(Object)).toEqual('Your input type must be a string');
                });

                it("should return `Your input type must be a string` for function(){}", function() {
                    expect(myApp.reverseString(function() {})).toEqual('Your input type must be a string');
                });

            });

        });
        })();