/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Player inventory (you can change these to test different outcomes)
let hasTorch = true;
let hasMap = false;
let hasSword = false;
let hasCompass = false;

console.log("🌲 You wake up in a mysterious forest with a faint memory of a quest.");
console.log("You see a backpack nearby.");

// First decision: pick up the backpack
let pickBackpack = readline.question("Do you take the backpack? (yes/no): ");

if (pickBackpack.toLowerCase() === 'yes') {
  console.log("You open it and find a sword, a compass, and a map.");
  hasSword = true;
  hasCompass = true;
  hasMap = true;
} else {
  console.log("You leave the backpack and continue on your way.");
}

// Second decision: choose a path
console.log("\nYou see two paths: one leads to the mountains, the other to a village.");
const pathChoice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (pathChoice === "mountains") {
  if (hasTorch && hasCompass) {
    console.log("You navigate through the dark mountain pass safely using your torch and compass.");
  } else if (!hasTorch && hasCompass) {
    console.log("You try to navigate the mountains, but it's too dark without a torch. You turn back.");
  } else if (hasTorch && !hasCompass) {
    console.log("You light your way, but without a compass, you wander in circles.");
  } else {
    console.log("You stumble in the darkness and fall. Game over.");
  }
} else if (pathChoice === "village") {
  if (hasMap || hasCompass) {
    console.log("You follow your map and arrive safely in the village.");
  } else {
    console.log("You get lost on the way to the village and end up in a swamp.");
  }
} else {
  console.log("You wander off the path and vanish into the woods. Game over.");
}

// Third scenario: nightfall
console.log("\nNight is falling, and you must find shelter.");

const nightChoice = readline.question("Do you 'camp' in the woods or look for a 'cabin'?: ");

if (nightChoice === "camp") {
  if (hasSword && (hasTorch || hasMap)) {
    console.log("You build a safe camp and guard yourself through the night.");
  } else {
    console.log("You are attacked by wild animals in the night. Game over.");
  }
} else if (nightChoice === "cabin") {
  if (hasMap && hasCompass) {
    console.log("You use your map and compass to locate an abandoned cabin and spend the night safely.");
  } else {
    console.log("You get lost in the dark looking for shelter. Game over.");
  }
} else {
  console.log("You freeze in indecision and the cold gets to you. Game over.");
}

console.log("\n🎉 Thank you for playing! Your journey has ended.");


/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/