// Iteration 1: Names and Input

//1.1
let hacker1 = "Gustavo"
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
let hacker2 = "Bernardo"
//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//2.1
if (hacker1 > hacker2) {
    console.log(`The driver's has the longest name, it has ` + hacker1.length + ` characters.`);
}
else if (hacker1 < hacker2) {
    console.log(`It seems that the navigator has the longest name, it has ` + hacker2.length + `characters.`);
} else {
    console.log(`wow, you both have equally long names,` + hacker1.length + ` characters!`);
}
// Iteration 3: Loops
//3.1
let hacker1Space = "";
for(let i = 0; i < hacker1.length;i++) {
    hacker1Space += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Space.trim());

//3.2
let hacker2Reverse = "";
for(let i = hacker2.length -1; i >= 0; i --) {
    hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

//3.3

let wordOrder = hacker1.localeCompare(hacker2);
if (wordOrder < 0) {
    console.log("The driver's name goes first.");
} else if (wordOrder > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
