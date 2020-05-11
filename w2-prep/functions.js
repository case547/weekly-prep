// Function expression
const double = function (x) {
    return 2 * x;
};

// Arrow function; don't use if more than 1 expression
const dbl = (x) => 2 * x;

// Function expression
const f = function (a, b) {
    const temp = dbl(a);
    return temp + b;
};

// Function statement; discouraged
function timesTwo(x) {
    return 2 * x;
}