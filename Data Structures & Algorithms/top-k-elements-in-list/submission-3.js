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

        console.log(Object.entries(map));

        let numsMod = Object.entries(map)
            .sort((a, b) => b[1] - a[1]) // frequency desc
            .slice(0, k)
            .map((v) => Number(v[0]));

        return numsMod;
    }
}
