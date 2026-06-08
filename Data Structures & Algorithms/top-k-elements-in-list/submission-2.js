class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        // Count frequency
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1); // { 1 => 1, 2 => 2, 3 => 3 }
        }

        // Sort by frequency descending
        let result = [...map.entries()] // [ [ 1, 1 ], [ 2, 2 ], [ 3, 3 ] ]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map((item) => item[0]);

        return result;
    }
}
