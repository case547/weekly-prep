// A promise is an object

/* let loadJSON = function (url, callback) {
    return;
}; */
// Multiple callbacks may be needed, leading to even worse callback hell


// Instead of passing callback to functions, ask a function for a promise
/* let promise = function fetch(url) { // loadJSON replaced with fetch
    return;
}; */

// Promises are objects, therefore has state: pending, fulfilled, rejected

/* Rather than query promise continuously, can use then() and/or catch() funcs
    * then() receives func to be exe when promise fulfilled
    * catch() receives func to be exe if/when promise rejected */

// Give fetch() URL to fetch stuff from URL and gives promise back

let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord";
let giphyAPI = "http://api.giphy.com/v1/gifs/search";

function setup() {
    noCanvas();

    /* Point of promise to handle async things; program will
    keep going but bts promise going to be waiting for data */

    //Chained, with anon funcs
    fetch(wordnikAPI) // Starting with fetch and getting promise
        // Then get resp back and return next promise about converting to json
        .then((resp) => resp.json()) //.json() also returns promise
        // Then getting json, adding paragraph, asking to fetch more data
        .then(function (json) {
            createP(json. word);
            // return to allow next .then() to be sequenced properly
            return fetch(giphyAPI + json.word);
        })
        // Once above promise resolved, take that result and return as json
        .then((resp) => resp.json())
        // Once ready, take json and make image
        .then(function (json) {
            createImg(json.data[0].images["fixed_height_small"].url);
        })
        .catch((err) => console.log(err)); // will catch any error throughout

    /* Unchained:
        let promise = fetch(wordnikAPI);
        promise.then(gotData);
        promise.catch(gotErr);

        const gotData = function (data) {
            console.log(data);
        };

        const gotErr = function (err) {
            console.log(err);
        }; */

    /* Original callback hell code
        loadJSON(wordnikAPI, function(data) {
            createP(data.word);
            loadJSON(giphyAPI + data.word, function(data) {
                console.log(data.data[0].images);
                createImg(data.data[0].images["fixed_height_small"].url);
            });
        }); */
}