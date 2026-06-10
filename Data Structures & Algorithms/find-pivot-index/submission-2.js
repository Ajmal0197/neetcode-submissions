class Solution {
    // using brute force
    // pivotIndex(nums) {
    //     const length = nums.length
    //     for(let i=0;i<length;i++){
    //         let leftSum = 0
    //         let rightSum = 0
    //         for(let j=0;j<i;j++){
    //            leftSum+=nums[j]
    //         }
    //         for(let j=i+1;j<length;j++){
    //            rightSum+=nums[j]
    //         }
    //         if(leftSum===rightSum){
    //             return i
    //         }
    //     }
    //     return -1
    // }

// using two sum
    pivotIndex(nums) {
        const n = nums.length;
        const prefixSum = new Array(n + 1).fill(0);
        for (let i = 0; i < n; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }

        for (let i = 0; i < n; i++) {
            const leftSum = prefixSum[i];
            const rightSum = prefixSum[n] - prefixSum[i + 1];
            if (leftSum === rightSum) {
                return i;
            }
        }
        return -1;
    }
}
