// C

const createAdder = function (x) {
    return function (y) { // takes in y as argument
        return x + y;
    };
    // returns function, so can say that createAdder is a higher order function
    /*  referring to x passed in earlier is the closure
        closing over x reference in the later function to be utilised later */
};

const add3 = createAdder(3); // filling in x to be 3

// add3(2) === 5;
// add3(3) === 6;


// Example: request function

// Without closures - too repetitive:
const request = function (options) {
    return fetch(options.url, options) // fetch API
        .then((resp) => resp.json());
};

/* const usersPromise = request({
    url: "/users",
    headers: {"X-custom": "mykey"}
});

const tasksPromise = request({
    url: "/tasks",
    headers: {"X-custom": "mykey"}
}); */

const createRequester = function (options) {
    return function (otherOptions) {
        return request(Object.assign(
            {}, options, otherOptions
        ));
    };
};

const customRequest = createRequester({
    headers: {"X-custom": "mykey"}
});

const usersPromise = customRequest({url: "/users"});
const tasksPromise = customRequest({url: "/tasks"});