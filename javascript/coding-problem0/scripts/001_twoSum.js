// ---------------------------------------------------------------------
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// for loop
// const twoSum = function (nums, target) {
//     let map = {};
//     for (let i = 0; i < nums.length; i++) {
//         if (!map.hasOwnProperty(nums[i])) {
//             map[target - nums[i]] = i;
//         } else {
//             return [map[nums[i]], i];
//         }
//     }
//     return [];
// }

// forEach
// const twoSum = function (nums, target) {
//     let map = {};
//     let res;
//     nums.forEach((e, i) => {
//         if (!map.hasOwnProperty(e)) {
//             map[target - e] = i;
//         } else {
//             res = [map[e], i];
//         }
//     });
//     return res;
// }

// map + for loop
// const twoSum = function (nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         if (map.has(nums[i])) {
//             return [map.get(nums[i]), i]
//         } else {
//             map.set(target - nums[i], i);
//         }
//     }
//     return [];
// }

// map + forEach
const twoSum = function (nums, target) {
    let map = new Map();
    let res;
    nums.forEach((e, i) => {
        if (map.has(e)) {
            res = [map.get(e), i];
        } else {
            map.set(target - e, i);
        }
    });
    return res;
}


// ---------------------------------------------------------------------------------
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// spread + reduce
// var numJewelsInStones = function (J, S) {
//     const js = [...J].reduce((m, e) => {
//         if (!m.hasOwnProperty(e)) {
//             m[e] = 1;
//         }
//         return m;
//     }, {});
//     return [...S].reduce((c, e) => {
//         if (js.hasOwnProperty(e)) {
//             c++;
//         }
//         return c;
//     }, 0);
// }

// set + spread + reduce
// var numJewelsInStones = function (J, S) {
//     const js = new Set(J);
//     return [...S].reduce((c, e) => c + js.has(e), 0);
// }

// spread + filter + indexOf
// var numJewelsInStones = function (J, S) {
//     return [...S].filter((e => J.indexOf(e) > -1)).length;
// }

const numJewelsInStones = function () {
    return [...S].filter(e => J.indexOf(e) > -1).length;
}

// ---------------------------------------------------------------------------------
/**
 * @param {string} text
 * @return {number}
 */

// spread + reduce
// var letterMap = function (text) {
//     return [...text].reduce((c, e) => {
//         if (!c.hasOwnProperty(e)) {
//             c[e] = 1;
//         } else {
//             c[e]++;
//         }
//         return c;
//     }, {})
// }

// spread + forEach
var letterMap = function (text) {
    let count = {};
    [...text].forEach(e => {
        if (!count.hasOwnProperty(e)) {
            count[e] = 1;
        } else {
            count[e]++;
        }
    });
    return count;
}

// ---------------------------------------------------------------------------------
/**
 * @param {string[]} paths
 * @return {string[][]}
 */

// for of + for loop
var findDuplicate = function (paths) {
    let map = {};
    for (let p of paths) {
        let files = p.split(" ");
        for (let i = 1; i < files.length; i++) {
            let sep = files[i].indexOf("(");
            let content = files[i].substring(sep + 1, files[i].length - 1);
            if (!map.hasOwnProperty(content)) {
                map[content] = [];
            }
            map[content].push(files[0] + "/" + files[i].substring(0, sep));
        }
    }
    return Object.values(map).filter(e => e.length > 1);
};

// map + Array.from
// var findDuplicate = function (paths) {
//     let map = new Map();
//     for (let p of paths) {
//         let files = p.split(" ");
//         for (let i = 1; i < files.length; i++) {
//             let dir = files[0];
//             let sep = files[i].indexOf("(");
//             let name = files[i].substring(0, sep);
//             let content = files[i].substring(sep + 1, files[i].length - 1);
//             if (!map.has(content)) {
//                 map.set(content, []);
//             }
//             map.get(content).push(`${dir}/${name}`);
//         }
//     }
//     return Array.from(map.values()).filter(e => e.length > 1);
// }


// ---------------------------------------------------------------------------------
/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.map = new Array();
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    this.map[key] = value;
    return this;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    return this.map[key] ? this.map[key] : undefined;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    this.map[key] = undefined;
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// ---------------------------------------------------------------------------------
module.exports = { twoSum, numJewelsInStones, letterMap, findDuplicate, MyHashMap };