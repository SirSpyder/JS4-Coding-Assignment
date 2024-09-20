// Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("Agesl" , ages);
//     Programmatically subtract the value of the first element in the array from the value in the last element of the array.
let minusAge = ages[ages.length -1] - ages[0];
console.log("minusAge", minusAge);
//         Do not use numbers to reference the last element, find it programmatically.
//         ages[7] - ages[0] is not allowed!
//     Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(100);
console.log("Ages after pushing a new value", ages);
let minusAgePush = ages[ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);
//     Use a loop to iterate through the array and calculate the average age.
let sumOfAges = 0;

for(let i = 0; i < ages.length; i++){
 //   console.log("test")
sumOfAges += ages[i]
console.log("index:" ,i, "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average);
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
//     Use a loop to iterate through the array and calculate the average number of letters per name.

// Really struggled here because i did not realise i uesed ' ' around the names but what i needed was " " to break the names up properly so it would average them per name not all together.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let totalChars = 0;

for (let i = 0; i < names.length; i++) {
    //console.log(i,"test");
    totalChars += names[i].length;
    console.log("index:", i, "name", names[i], "totalChars:", totalChars);
}
let averageName = totalChars / names.length;
console.log("Average of Names:", averageName);

//     Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let concatNames = " "; 
for (let i = 0; i < names.length; i++) {
   // console.log(i,"test");
concatNames = concatNames.concat(names[i] + " ");
console.log(i,"Names concatenated", concatNames);
}

// How do you access the last element of any array?
console.log("Last element of ages array:", ages[ages.length - 1]);
// How do you access the first element of any array?
console.log("first element of ages array:", ages[0]);
// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    //console.log(i, "test");
    nameLengths.push(names[i].length);
    console.log("Name lengths array:", nameLengths);
}
// For example:
// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let charsTotal = 0;
for (let i = 0; i < nameLengths.length; i++) {
    //console.log (i, "test");
charsTotal =+ nameLengths[i];
console.log("CharsTotal;", charsTotal);
}

// Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatWords(word, n){
    console.log("Word Par:", word, "n Par:", n);
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello", 3);
// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
function fullName(firstName, lastname){
    let fullName = firstName + " " + lastname;
    console.log(fullName);
}
fullName("Jeff", "Rocks");
// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let numbers1 = [100,200,300,400]
let numbers2 = [1,2,3,4]

function sumNumbersArray(array){
    let total = 0;

    for (let i = 0; i < array.length; i++){
        //console.log(i,"Test");
        total += array[i];
        console.log("total:", total);
    }
    if (total > 100) {
        console.log("total:",total, true);
        return true;
    } else {
        console.log("total:", total, false);
        return false; 
    }
}
sumNumbersArray(numbers2);

// Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateNumbersAverage(array){
    let total = 0;

    for(let i = 0; i < array.length; i++) {
        //console.log(i, "test");
        total =+ array[i]
        console.log("calculate Function, total:", total);
    }
    let average = total / array.length;
    console.log("Average of numbers:", average);
    return average;
}
calculateNumbersAverage(numbers1);

// Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let numbers3 = [100, 105, 95,];
let numbers4 = [100, 100, 90];

function twoAverages(array1,array2) {
    console.log("Parameters:", array1, array2);
    let total1 = 0;
    let total2 = 0;
    for (const number of array1) {
        total1 += number;
        console.log("current number loop1:", number,"total1:", total1);
    }
    for (const number of array2){
        total2 += number;
        console.log("Current number loop2:", number, "Total2:", total2);
    }
    let average1 = total1 / array1.length;
    let average2 = total2 / array2.length;

    console.log("averages", average1, average2);
    
    if (average1 > average2) {
        console.log(true);
        return true 
    } else if (average1 < average2) {
        console.log(false);
        return false 
    } else {
        console.log("Numbers are equal");
    }
}
twoAverages(numbers3, numbers4);

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
console.log("Parameters", isHotOutside, moneyInPocket);
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink?", buyDrink);
return buyDrink;
}

willBuyDrink(true, 11);
// Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 
// I created a function of sleep and depending on time I can sleep more or not is the idea of the function.

function sleep(wantToSleep, timeLeftToSleep) {
    if (!wantToSleep) {
        return "You don't want to sleep right now.";
    }
    
    if (timeLeftToSleep <= 0) {
        return "You don't have enough time to sleep.";
    } else if (timeLeftToSleep < 60) {
        return `You should take a nap! You have ${timeLeftToSleep} minutes left.`;
    } else {
        return `It's time for a good sleep! You have ${timeLeftToSleep} minutes left.`;
    }
}

// examples
let result1 = sleep(true, 90);  //  "It's time for a good sleep! You have 90 minutes left."
let result2 = sleep(false, 45); //  "You don't want to sleep right now."
let result3 = sleep(true, 30);  //  "You should take a nap! You have 30 minutes left."

console.log(result1);
console.log(result2);
console.log(result3);
