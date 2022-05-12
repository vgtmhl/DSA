/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const orderedS = s.split("").sort().join("")
    const orderedT = t.split("").sort().join("")

    return orderedS === orderedT
};