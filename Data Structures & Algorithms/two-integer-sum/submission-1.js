class Solution {
    twoSum(nums, target) {

        let map = new Map();

        for (let i = 0; i < nums.length; i++) {

            let complement = target - nums[i];

            if (map.has(complement)) {
                return [map.get(complement), i];
            }

            map.set(nums[i], i);
        }
    }
}

/*
target = 9

i=0
num=2
complement=7
❌ 7 not in map
store 2→0

map = {2:0}

i=1
num=7
complement=2
✅ 2 found in map at index 0

return [0,1]
*/