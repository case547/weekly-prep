// Gathering
const array = function (...elements) {
    return elements;
};

array(1, 2, 3); //[1, 2, 3]

// Spreading
const log = function (...args) {
    console.log(...args);
};

log("hello", "there"); //hello there

// Rest
const langs = ["JavaScript", "Ruby", "Haskell"];
const [js, ...rest] = langs;

/*  js === "JavaScript";
    rest[0] === "Ruby";
    rest[1] === "Haskell";  */