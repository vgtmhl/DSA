/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function(image, sr, sc, newColor) {
    let startColor = image[sr][sc]
    
    if (startColor === newColor) { return image }
    
    let visited = new Set();
    let stack = [[sr,sc]]
    
    while(stack.length) {
        let [curRow, curCol] = stack.pop();
        
        // console.log(`
        // looking at ${curRow};${curCol}
        // content: ${image[curRow][curCol]}
        // startColor: ${startColor}
        // `)
        
        if (image[curRow][curCol] === startColor) {
            image[curRow][curCol] = newColor
        }
        
        visited.add([curRow, curCol])
        
        let neighbors = getNeighbors(image, curRow, curCol)
        
        for (let neighbor of neighbors) {
            if (image[neighbor[0]][neighbor[1]] === startColor &&
                !visited.has(neighbor)
               ) {
                    stack.push([neighbor[0], neighbor[1]])
            }
        }
    }
    
    return image
    
};

/** Given an matrix, a row and a column, returns all the neighboring pixels*/
function getNeighbors(image, sr, sc) {
    let neighbors = []
    
    let lastColIndex = image[0].length - 1;
    let lastRowIndex = image.length -1;
    let firstRowIndex = 0;
    let firstColIndex = 0;
    
    let top = [ Math.max(sr-1, firstRowIndex) , sc ]
    let right = [ sr , Math.min(sc+1, lastColIndex) ]
    let bottom = [ Math.min(sr+1, lastRowIndex) , sc ]
    let left = [ sr , Math.max(sc-1, firstColIndex) ]

    !isSameCell(top, [sr, sc]) && neighbors.push(top)
    !isSameCell(right, [sr, sc]) && neighbors.push(right)
    !isSameCell(bottom, [sr, sc]) && neighbors.push(bottom)
    !isSameCell(left, [sr, sc]) && neighbors.push(left)
    
    console.log('---')
    console.log("P: " + sr + ' ' + sc)
    console.log("I: " + image)
    console.log("N: " + neighbors)
    console.log("LR " + lastRowIndex)
    console.log("LC " + lastColIndex)
    
    return neighbors;
}

function isSameCell(cell1, cell2) {
    let [r1, c1] = cell1;
    let [r2, c2] = cell2;
    
    return r1 === r2 && c1 === c2
}