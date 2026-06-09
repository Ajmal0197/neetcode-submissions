class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const num of nums) {
            if (seen.has(num)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}

/*
seen = {}

1 → add → {1}
2 → add → {1,2}
3 → add → {1,2,3}
1 → already exists in set
=> return true
*/