console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
for (let i = 1; i <= count; i++){
    if (i % 2 === 1){
        console.log(i);
    }



}
}
console.log(printOdds (100));










// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(age=29){
const aboveSixteen = "You can drive!"
const belowSixteen = "Tough luck."
if (age > 16){
    return aboveSixteen;
} else {
    return belowSixteen;

 

}}
console.log(checkAge(19));