/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let string = s.toLowerCase().replace(/[^a-z0-9]/gi, "").trim();
    
    let i = 0;
    let j = string.length - 1;
    
    while(1) {
        let head = string[i]
        let tail = string[j]
        console.log(`head at ${i} | tail at ${j}`)
        console.log(`comparing ${head} and ${tail}`)
        
        if (head !== tail) { return false }
        if (i >= j) { return true }
        
        i++
        j--
    }
};