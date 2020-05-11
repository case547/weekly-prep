// Composing functions together like g(f(x))

const processWord =
    compose(hyphenate, reverse, toUpperCase); // goes right to left
    // hypothetical function

const words = ["hello", "functional", "programming"];

const newWords = words.map(processWord);

console.log(newWords);
// ["OL-LEH", "LANOI-TCNUF", "GNIMM-ARGORP"]

const processWordExplicit = function (word) {
    return hyphenate(reverse(toUpperCase(word)));
};


// Shopping cart example
customRequest({url: "/car/items"})
    .then(map(
        compose(
            tax, discount, pluck("price")
        )
    ));