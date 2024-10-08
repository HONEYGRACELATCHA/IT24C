//Data types
let stringName = "Mark";
let intAge = 19;
let booleanStudent = true;
console.log("stringName: " + stringName + "\nintAge: " + intAge + "\nbooleanStudent: " + booleanStudent);

//Arithmetic Operation
let num1 = 5;
let num2 = 20;
sum = num1 + num2;
console.log("Sum= " + sum);

// -CONDITIONAL STATEMENTS
//if else
let age = 19;   
if (age >= 60) {
    console.log(age + ": Old Adult");
} else if (age > 39 ) {
    console.log(age + ": Middle-aged Adult");
} else if (age <= 39) {
    console.log(age + ": Young Adult");
}
else {
    console.log("Invalid Age");
}

//switch
let month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    default:
        console.log("Invalid month");

}
// -LOOPS-
for (let count = 1; count <= 5; count++) {
    console.log(count);
}
let countDown = 5;
while (countDown >= 1) {
    console.log(countDown);
    countDown--;
}

// -FUNCTIONAL PROGRAMMING-
//I
for (let number = 1; number <= 10; number++) {
    if (number % 2 === 0) {
        console.log("Even: " + number);
    }
    else {
        console.log("Odd: " + number);
    }
}

//II
let primes = [];

for (let num = 1; num <= 20; num++) {
    let isPrime = true;

    
    if (num <= 1) {
        isPrime = false;
    } else if (num === 2) {
        isPrime = true; 
    } else if (num % 2 === 0) {
        isPrime = false; 
    } else {
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        primes.push(num);
    }
}

console.log("Prime numbers between 1 and 20:", primes);


//III
function isPalindrome(str) {
    
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

    let reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}

let testString = "A man, a plan, a canal, Panama";
console.log(`"${testString}" is a palindrome:`, isPalindrome(testString));