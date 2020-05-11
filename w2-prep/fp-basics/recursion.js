// Solving problem in terms of itself

// e.g. 4! = 4 x 3 x 2 x 1 = 24

// Invariable approach; unwanted in FP - not declarative
const factorial_inv = function (n) {
    let result = 1;

    while (n > 1) {
        result *= n;
        n--;
    }

    return result;
};

/* Recursive approach; fewer lines of code, can
express closer to original mathematical definition */
const factorial_rec = function (n) {
    if (n < 2) {
        return 1;
    }

    return n * factorial_rec(n - 1); // recursive call
};
/*  factorial(4)
    = 4 * factorial(3)
    = ...
    = 4 * 3 * 2 * factorial(1) // base case reached; n < 2
    = 4 * 3 * 2 * 1;
    = ...
    = 4 * 6
    = 24 */

/* Steps:
    Find the recurrence
    Find the base case (where it stops at so loop not infinite) */

/* Call stack grows by O(n) so not usable for large numbers;
use tail call optimisation instead: rather growing stack, replace
stack frames. Key point: recursive call happens in the tail call
position - very last statement evaluated in return statement */

// Above factorial function not optimisable as final step was multiplying by n
const factorial_opt = function (n, accum = 1) {
// start off with accumulator equalling base case return value
    if (n < 2) {
        return accum;
    }

    return factorial_opt(n - 1, n * accum);
};

/*  factorial_opt(4)
    = factorial_opt(3, 4)
    = factorial_opt(2, 12)
    = factorial_opt(1, 24)
    = 24 */
