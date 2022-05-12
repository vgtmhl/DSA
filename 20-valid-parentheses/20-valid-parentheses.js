/* WORKING ITERATIVE */
var isValid = function(s) {
    if (s.length < 2 || s.length % 2 !== 0) return false;
    let stack = []
    for (let char of s) {
        if (isOpening(char)) {
            stack.push(char)
        }
        else {
            let candidate = stack.pop();
            if (!match(candidate, char)) return false
        }
    }
    if (stack.length > 0) return false;
    return true;
};



const isOpening = (p) => ['(', '[', '{'].includes(p)
const match = (p, q) => p === '(' && q === ")" || p === '[' && q === "]" || p === '{' && q === "}"


