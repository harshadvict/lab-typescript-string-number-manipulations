"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(1));
        console.log(word.concat("i have concatenated"));
        for (var index = 0; index < word.length; index++) {
            console.log(word.slice(index));
        }
        console.log(word.length);
    };
    StringManipulations.prototype.printWithSpace = function (sentence) {
        console.log(sentence.split('').join(' '));
    };
    StringManipulations.prototype.findVowel = function (str) {
        var no = str.match(/[aeiou]/gi).length;
        console.log(no);
    };
    return StringManipulations;
}());
var NumbersManipulations = /** @class */ (function () {
    function NumbersManipulations() {
    }
    NumbersManipulations.prototype.findPrime = function (num) {
        var flag = true;
        for (var index = 2; index < num; index++) {
            if (num % index == 0) {
                flag = false;
            }
        }
        console.log(flag);
        if (flag) {
            console.log("prime");
        }
        else {
            console.log("not prime");
        }
    };
    NumbersManipulations.prototype.findMagic = function (num) {
        var value = this.magic(num);
        if (value == 1) {
            console.log("magic number");
        }
        else {
            console.log("not a magic number");
        }
    };
    NumbersManipulations.prototype.magic = function (num) {
        console.log("hi");
        var temp = num;
        var sum = 0;
        if (temp.toString().length == 1) {
            console.log(temp);
            return temp;
        }
        else {
            while (temp != 0) {
                temp = num % 10;
                sum = sum + temp;
                temp = temp / 10;
            }
            return this.magic(sum);
        }
    };
    return NumbersManipulations;
}());
var obj = new StringManipulations();
obj.print("harsh");
obj.printWithSpace("harshranjan");
obj.findVowel("harsh");
var obj1 = new NumbersManipulations();
obj1.findPrime(10);
obj1.findMagic(1234);
