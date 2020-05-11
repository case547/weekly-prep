// General-purpose way to fill in options

const add = (x, y) => x + y;

const add3 = partial(add, 3); // hypothetical function 'partial
// take add function and pre-fill with 3

// add3(2) === 5;


const request = function (defaults, options) {
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then((resp) => resp.json());
};

const customRequest = partial(request, {
    headers: {"X-custom": "mykey"} // pre-fills in defaults
});

const usersPromise = customRequest({url: "/users"});
const tasksPromise = customRequest({url: "/tasks"});


// Implementing partial function

const partialFromBind = function (fn, ...args) {
    return fn.bind(null, ...args);
    /* bind() method creates new functiom with
    'this' keyword set to given value, i.e. null */
};

// Can also be written as:
const partial = function (fn, ...args) {
    return function (...otherArgs) {
        return fn(...args, ...otherArgs);
    };
};