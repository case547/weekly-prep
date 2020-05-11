import inbox from "../inbox.js";
const messages = inbox.getMessages(); // Returns an array

// If statement
if (messages.length === 0) {
    console.log("No new messages");
} else if (messages.length === 1) {
    console.log("You have a single message");
} else {
    console.log("You have $(messages.length) messages");
}

// Switch statement
// Matches expression value to case clause and executes associated statements
messages.forEach(function (message) {
    switch (message.type) {
    case "new":
        console.log("...");
        break;
    case "reply":
        break;
    default:
        console.log("");
    }
});

// Ternary expression
let averageLength = messages.size() / messages.length;

averageLength = (
    Number.isNaN(averageLength) // condition
    ? 0 // expression to execute if condition truthy
    : averageLength // expression to execute if condition falsy
);