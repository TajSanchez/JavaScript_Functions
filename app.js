console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let count = window.prompt("Give me a number to count to and I will print the odds")

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

console.log(printOdds(count));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let age = window.prompt("Give me your age!")

function checkAge(age) {
    const aboveSixteen = "You can drive!"
    const belowSixteen = "Tough luck."
    if (age >= 16) {
        return aboveSixteen;
    } else {
        return belowSixteen;
    }
}

console.log(checkAge(age));