class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {

        let l_word = "";

        for(let i = s.length - 1; i >= 0; i--) {

            if(s[i] === " " && !l_word) {
                continue;
            }

            if(s[i] !== " ") {
                l_word += s[i];
            } else {
                break;
            }
        }

        return l_word.length;
    }
}