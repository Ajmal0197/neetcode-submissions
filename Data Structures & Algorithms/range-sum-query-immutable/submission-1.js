class NumArray {
    constructor(nums) {
        let curr = 0
        this.prefix = [0]
        for(let num of nums){
            curr += num
            this.prefix.push(curr)
        }
                    console.log(this.prefix)

    }

    sumRange(left, right) {
        let res = this.prefix[right+1] - this.prefix[left]
        return res
    }
}
