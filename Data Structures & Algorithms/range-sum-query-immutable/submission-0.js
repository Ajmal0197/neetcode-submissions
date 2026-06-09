class NumArray {
    constructor(nums) {
        this.nums = nums;
    }

    sumRange(left, right) {
        let res = 0;
        for(let i=left;i<=right;i++){
            res = res+this.nums[i]
        }
        return res
    }
}
