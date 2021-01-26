"use strict";
// Declare and initialize the following variables with
// appropriate values:
// name(string) don't use name tho bc it's a JS term
// age (number)
// birthday (string)
// detroitGC (boolean) true or false depending on yr campus
// lifeEvents (array with 4 items, 4 important life events)
const fullName = "Tayler Ondersma";
let age = 26;
const birthday = "March 4";
let detroitGC = true;
const lifeEvents = ["I was born in Kalamazoo, Michigan", "In 2013, I ran my first half-marathon", "In May 2017, I graduated from Umich", "In July 2017, I adopted my KitKat"];

// // Write an if/else statement that runs one of two console.log methods. Your console.log methods must incorporate the variables: name, age, and birthday.

// If detroitGC is true, log the following message to the console: My name is name and I am a student at Grand Circus in Detroit, Michigan. I am currently age years old and my birthday is on birthday.

// else: My name is name and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently age years old and my birthday is on birthday. 
if(detroitGC){
    console.log(`My name is ${fullName} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
}else{
    console.log(`My name is ${fullName} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
};

// Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the length of the lifeEvents array. Each iteration of the loop should log a new sentence from the lifeEvents array. You should only have one console.log method.
for(let i = 0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
};

// Declare and initialize a variable named counter to the value of 0.
let counter = 0;

// Write a while loop that loops while true.

// Declare a variable named randomNumber that is initialized to a random integer between 1 and 10. Google search how to do this.

// Write an if/else statement that has two conditions:

// If: randomNumber is not equal to 5 the increment counter and use a console.log method to say: “randomNumber !== 5”

// Else: Increment counter, use a console.log method to say: “5 === 5. It took counter iterations to randomly generate the number 5.”, and break
while(true){
let randomNumber = Math.floor(Math.random() * 10) + 1 
if(randomNumber !== 5){
    console.log(`${randomNumber} !== 5`);
    counter++;
} 
else{ 
    console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`);
    break;
}
}
