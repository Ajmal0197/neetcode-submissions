class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {

        let start = 0;

        for (let i = 0; i < s.length; i++) {

            let found = false;

            for (let j = start; j < t.length; j++) {

                if (s[i] === t[j]) {
                    found = true;
                    start = j + 1;
                    break;
                }
            }

            if (!found) {
                return false;
            }
        }

        return true;
    }
}