// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Flatten_an_array_of_arrays
// reduce
// Sum all the values of an array (can leave initialValue empty, or just put 0)
var sum_arr = [0, 1, 2, 3, 4].reduce(function (acc, cur) {
    return acc + cur;
}, 0);
// Sum of values in an object array (MUST supply an initialValue)
var sum_obj = [{ x: 0 }, { x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }].reduce((acc, cur) => {
    return acc + cur.x;
}, 10);
// Flatten an array of arrays
var flatten = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => {
    return acc.concat(cur);
}, []);
// Counting instances of values in an object
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var countNames = names.reduce((dic, name) => {
    if (name in dic) {
        dic[name]++;
    } else {
        dic[name] = 0;
    }
    return dic;
}, {});
// Grouping objects by a property
var people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];
function groupBy(targetArray, property) {
    return targetArray.reduce((dic, obj) => {
        let key = obj[property];
        if (!dic[key]) {
            dic[key] = [];
        }
        dic[key].push(obj);
        return dic;
    }, {});
}
console.log(sum_arr, sum_obj, flatten, countNames, groupBy(people, "age"));