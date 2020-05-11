// While loop
let i = 0;
while (true) {
    i += 1;
    if (i >= 101) {
        break; // same as while i < 101
    }
    console.log(i);
}

//Array methods:

// .map
/* creates new array populated with results of calling
provided function on every element in calling array */
const array1 = [1, 4, 9, 16];

//pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
//expected output: [2, 8, 18, 32]

// .forEach
// executes provided function once for each array element
const array2 = ["a", "b", "c"];

array2.forEach((element) => console.log(element));

// expected output:
/*  a
    b
    c   */