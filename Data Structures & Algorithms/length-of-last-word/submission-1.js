class Solution {
    lengthOfLastWord(s) {

        let count = 0;

        for(let i = s.length - 1; i >= 0; i--) {

            if(s[i] === " " && count === 0) {
                continue;
            }

            if(s[i] !== " ") {
                count++;
            } else {
                break;
            }
        }

        return count;
    }
}