// Challenge 4

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
        }
        return undefined;
    };
};

const fromTo = function (start, end) {
    return to(
        from(start),
        end
    );
};

const element = function (array, gen) {
    if (gen === undefined) { // making gen optional
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
/* do... while approach: returns function that stays in loop calling gen until
it gets val approved by pred, in which case will drop out and return val */
/*  return function () {
        let val;
        do {
            val = gen();
        } while (
            val !== undefined && !pred(val)
        );
        return val;
    };
}; */
// Tail recursion approach:
    return function recur() {
        let val = gen();
        if (
            val === undefined || pred(val)
        ) {
            return val;
        }
        return recur();
    };
};

const concat = function (gen1, gen2) {
    return function () {
        if (gen1() !== undefined) {
            return gen1();
        }
        return gen2();
    };
};