/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const tryBruteForce = true;

var rotateString = function(s, goal) {
    // exclude ovbious edge cases
    if (s.length !== goal.length || s.length === 0 || goal.length === 0) {
        return false;
    }
    
    
    if (tryBruteForce) { return rotateStringBruteForce(s, goal) }
};

function rotateStringBruteForce(s, goal) {
    // check equality between goal and every possible rotation of s.
    // i.e. for every iteration we the first letter and we move it to the end
    // (MyPencil, PencilMy): PencilMy -> encilMyP -> ncilMyPe -> cilMyPen -> ilMyPenc
    // -> lMyPenci -> MyPencil
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s.length ; j++) {
            s = s.slice(1, s.length) + s[0]
            
            if (s === goal) { return true }
        }   
    }
    
    return false
    
}

rotateString("NicePigeonsAre", "PigeonsAreNice")