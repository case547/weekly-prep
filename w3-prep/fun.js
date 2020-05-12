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


// Function Challenge 3

const twice = function (f) {
    return function (a) {
        return f(a, a);
    };
};

const reverse = function (f) {
    return function (a, b) {
        return f(b, a);
    };
};
// Alternatively:
/* const reverse = function (f) {
    return function (...args) {
        return f(...args.reverse());
    };
} */

const composeu = function (f, g) {
    return function (a) {
        return g(f(a));
    };
};

const composeb = function (f, g) {
    return function (a, b, c) {
        return g(f(a, b), c);
    };
};

const limit = function (f, count) {
    return function (a, b) {
        if (count >= 1) {
            count -= 1;
            return f(a, b);
        } else {
            return undefined;
        }
    };
};

const from = function (start) {
    return function () {
        let next = start;
        start += 1;
        return next;
    };
};

const to = function (gen, end) {
    return function () {
        let val = gen();
        if (val < end) {
            return val;
        } else {
            return undefined;
        }
    };
};

const fromTo = function (start, end) {
    return to(
        from(start),
        end
    );
};

const element = function (array, gen) {
    if (gen === undefined) {
        gen = fromTo(
            0,
            array.length
        );
    }
    return function () {
        let i = gen();
        if (i !== undefined) {
            return array[i];
        }
    };
};


// Challenge 5

const collect = function (gen, array) {
    return function () {
        let val = gen();
        if (val !== undefined) {
            array.push(val);
        }
        return val;
    };
};

const filter = function (gen, pred) {
    return function () {
        let val = gen();
        if (pred(val) === true) {
            return val;
        }
    };
};

const third = function (val) {
    return (val % 3) === 0;
};