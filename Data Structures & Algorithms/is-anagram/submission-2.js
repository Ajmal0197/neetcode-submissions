class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }

        let map = new Map();

        // Count characters from s
        for (let char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        // Remove counts using t
        for (let char of t) {

            if (!map.has(char)) {
                return false;
            }

            map.set(char, map.get(char) - 1);

            if (map.get(char) === 0) {
                map.delete(char);
            }
        }

        return map.size === 0;
    }
}

/*
Count chars from s
↓
{a:3,n:1,g:1,r:1,m:1}

Process t and decrease counts
↓
All counts become 0
↓
Map becomes empty
↓
Return true
*/