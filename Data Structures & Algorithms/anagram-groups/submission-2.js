class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        /*
{
  act: [ 'act', 'cat' ],
  opst: [ 'pots', 'tops', 'stop' ],
  aht: [ 'hat' ]
}
        */
        return Object.values(res);
    }
}