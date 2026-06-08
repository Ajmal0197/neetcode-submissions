class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        for (let a of nums) {
            map[a] = (map[a] || 0) + 1;
        }
        // { '1': 1, '2': 2, '3': 3 }

        let numsMod = Object.entries(map) // [ [ '1', 1 ], [ '2', 2 ], [ '3', 3 ] ]
            .sort((a, b) => b[1] - a[1]) // frequency desc
            .slice(0, k)
            .map((v) => Number(v[0]));

        return numsMod;
    }
}
