function sortedArrayToBST(nums) {
    
    // base case
    if (nums.length === 0) return null;
    
    let midIndex = Math.floor(nums.length / 2)
    let midValue = nums[midIndex]
    
    let leftSubArr = nums.slice(0, midIndex)
    let rightSubArr = nums.slice(midIndex + 1, nums.length)
    
    let node = new TreeNode(midValue)
    node.left = sortedArrayToBST(leftSubArr)
    node.right = sortedArrayToBST(rightSubArr)
    
    return node;
}

