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
            map.set(num, (map.get(num) || 0) + 1);
        }

        // Sort by frequency descending
        let result = [...map.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(item => item[0]);

        return result;
    }
}