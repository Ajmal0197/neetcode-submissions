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

/*
Input:
["act","pots","tops","cat","stop","hat"]

act  → act  → { act: ["act"] }

pots → opst → {
  act: ["act"],
  opst: ["pots"]
}

tops → opst → {
  act: ["act"],
  opst: ["pots","tops"]
}

cat  → act  → {
  act: ["act","cat"],
  opst: ["pots","tops"]
}

stop → opst → {
  act: ["act","cat"],
  opst: ["pots","tops","stop"]
}

hat  → aht  → {
  act: ["act","cat"],
  opst: ["pots","tops","stop"],
  aht: ["hat"]
}

Return:
[
  ["act","cat"],
  ["pots","tops","stop"],
  ["hat"]
]
*/