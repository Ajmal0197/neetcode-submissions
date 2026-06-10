class Solution {
    pivotIndex(nums) {
        const length = nums.length
        for(let i=0;i<length;i++){
            let leftSum = 0
            let rightSum = 0
            for(let j=0;j<i;j++){
               leftSum+=nums[j]
            }
            for(let j=i+1;j<length;j++){
               rightSum+=nums[j]
            }
            if(leftSum===rightSum){
                return i
            }
        }
        return -1
    }
}
