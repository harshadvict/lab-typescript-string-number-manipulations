import { StringManipulationService } from "./main-service";
import { NumberManipulationService } from "./main-service";
class StringManipulations implements StringManipulationService {
    print(word: string): void {
         console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(1));
        console.log(word.concat("i have concatenated"));
        for (let index = 0; index < word.length; index++) {
            console.log(word.slice(index));
        }
        console.log(word.length);
    }
    printWithSpace(sentence: string): void {
        console.log(sentence.split('').join(' '));

      
    }
    findVowel(str: string): void {
        var no = str.match(/[aeiou]/gi).length;
        console.log(no);
        
    }
}

class NumbersManipulations implements NumberManipulationService {
    findPrime(num: number): void {
        var flag: boolean = true;
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
        
    }
    findMagic(num: number): void {


        var value = this.magic(num);
        if (value == 1) {
            console.log("magic number");
        }
        else {
            console.log("not a magic number");
        }
       
    }



    magic(num: number): number {
        console.log("hi");
        var temp: number = num;
        var sum: number = 0;
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
    }
}

let obj=new StringManipulations();
obj.print("harsh");
obj.printWithSpace("harshranjan");
obj.findVowel("harsh");

let obj1=new NumbersManipulations();
obj1.findPrime(10);
obj1.findMagic(1234);