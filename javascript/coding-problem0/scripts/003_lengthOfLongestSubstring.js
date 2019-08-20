// ---------------------------------------------------------------------
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // "" of single
    if (s.length <= 1) {
        return s.length;
    }
    // generic
    let start = 0;
    let longest = 0;
    for (let i = 1; i < s.length; i++) {
        if (s.substring(start, i).indexOf(s[i]) > -1) {
            start = start + s.substring(start, i).indexOf(s[i]) + 1;
        }
        longest = Math.max(longest, i + 1 - start);
        console.log(start, s[i], longest, s.substring(0, i), s.substring(start, i + 1));
    }
    return longest;
};


module.exports = { lengthOfLongestSubstring };