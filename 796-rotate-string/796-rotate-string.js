/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var rotateString = function(s, goal) {
    // exclude ovbious edge cases
    if (s.length !== goal.length || s.length === 0 || goal.length === 0) {
        return false;
    }
    
    
    return rotateStringBruteForceRecursive(s, goal, 0) 
};

// brute force iterative
function rotateStringBruteForce(s, goal) {
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length ; j++) {
            
            s = s.slice(1, s.length) + s[0]
            if (s === goal) { return true }
        }   
    }
    
    return false
    
}

// brute force recursive
function rotateStringBruteForceRecursive(s, goal, swaps) {
    
    if (s === goal) { return true }
    if (swaps === goal.length) { return false }
    
    s = s.slice(1, s.length) + s[0]
    swaps ++;
    
    
    return rotateStringBruteForceRecursive(s, goal, swaps) 
}
