const map = (fn) => (array) => array.map(fn);
const multiply = (x) => (y) => x * y;
const pluck = (key) => (object) => object[key];
/* Take 'key' string and pull out whatever
value exists at the key for the object */

const discount = multiply(0.98);
const tax = multiply(1.0925);
// x filled in, but still waiting on y (price)

const customRequest = request({ // API request
    headers: {"X-Custom": "mykey"}
});

customRequest({url: "/car/items"}) // make API request
    .then(map(pluck("price")))
    .then(map(discount))
    .then(map(tax));
/* [{price: 5}, {price: 10}, {price: 3}]; */
// item.price --> [5, 10, 3]
// maps multiply each item by specified number

/* Triple iteration, which won't always be desirable with larger data arrays,
so can use compose (see composing-closures.js for single iteration) */