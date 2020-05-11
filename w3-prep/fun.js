// Function Challenge 1

const identity = function (x) {
    return x;
};

const add = function (a, b) {
    return a + b;
};

const sub = function (a, b) {
    return a - b;
};

const mul = function (a, b) {
    return a * b;
};

const identityf = function (x) {
    return function () {
        return x;
    };
};

const addf = function (a) {
    return function (b) {
        return a + b;
    };
};

const liftf = function (f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
};


// Function Challenge 2

const curry = function (f, a) {
/* Currying: process of taking func w/ multi args
and turning into multi functions that take 1 arg */
    return function (b) {
        return f(a, b);
    };
};
// Alternatively:
/* const curry = function (f, a) {
    return liftf(f)(a);
} */

let inc_1 = addf(1);

let inc_2 = liftf(add)(1);

let inc_3 = curry(add, 1);