// Fill in what hass been given until all arguments satisfied

const add = (x) => (y) => x + y;
// Takes x, then returns function that takes in y; takes y, then maps x + y

// ES5 equivalent
const adder = function add(x) {
    return function (y) {
        return x + y;
    };
};


const request = (defaults) => (options) => {
// See partial-application.js for function expression
    options = Object.assign(
        {}, defaults, options
    );

    return fetch(options.url, options)
        .then((resp) => resp.json());
};