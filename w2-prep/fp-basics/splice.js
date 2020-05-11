// Create state, don't mutate it
const hobbies = [
    "programming",
    "reading",
    "music"
];

const firstTwo = hobbies.splice(0, 2);

console.log(firstTwo);
// ["programming", "reading"]

console.log(hobbies);
// ["music"]

/* const firstTwo = hobbies.slice(0, 2);
console.log(firstTwo);
// ["programming", "reading"]

console.log(hobbies);
// ["programming", "reading", "music"] */

// OBJECT.FREEZE
const sports = Object.freeze([
    "hockey",
    "basketball",
    "football",
    "taekwondo"
]);

const firstThree = sports.splice(0, 3);
// TypeError