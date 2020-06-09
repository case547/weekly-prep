import module from "./test-funcs.js";
import * as fc from "./node_modules/fast-check"

// const describe = window.describe;
// const it = window.it;
// const fc = window.fastcheck;

describe("`sort`", function () {
    it("Outputs ordered arrays", function () {
        fc.assert( // run many times, and throw upon failure
            fc.property(
                fc.array(fc.integer()), // generates arrays of ints
                (nums) => isOrdered(sort(nums)) // feeds inputs to predicate
            )
        );
    });
});

describe("(One of) De Morgan's laws", function () {
    test("not (P and Q) <=> (not P) or (not Q)", function () {
        fc.assert(fc.property(
            // can request multiple arbs - just add to property
            fc.boolean(), fc.boolean(),
            (p, q) => {return !(p && q) === !p || !q}
        ))
    })
})

describe("`Array#filter`", function () {
    it("Always results in same-or-shorter-length arr", function () {
        // Can combine data to build complexity
        fc.assert(fc.property(
            fc.array(fc.anything()), // array of any vals
            fc.func(fc.boolean()), // func returning bools
            (arr, pred) => {
                return arr.filter(pred).length <= arr.length
            }
        ))
    })
})

describe("`isOdd`", function () {
    it("Correctly identifies odd integers", function () {
        fc.assert(fc.property(
            // New arb that generates odd ints
            // Can transform arbs with functional techniques like map, filter
            fc.integer().map(n => n * 2 + 1),
            isOdd
        ))
    })
})
