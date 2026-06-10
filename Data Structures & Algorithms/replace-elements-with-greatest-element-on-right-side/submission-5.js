class Solution {
    replaceElements(arr) {

        const length = arr.length;
        let res = new Array(length).fill(-1);

        for (let i = 0; i < length; i++) {

            let max = -1;

            for (let j = i + 1; j < length; j++) {
                max = Math.max(max, arr[j]);
            }

            res[i] = max;
        }

        return res;
    }
}