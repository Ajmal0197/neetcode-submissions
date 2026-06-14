class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        if (numRows <= 0) return [];
    
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        // Create a new row filled with 1s. The size of the row is (i + 1).
        const row = new Array(i + 1).fill(1);

        // Calculate the values between the first and last element of the row
        for (let j = 1; j < row.length - 1; j++) {
            // Value = (element directly above-left) + (element directly above-right)
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        // Push the completed row into our main triangle array
        triangle.push(row);
    }

    return triangle;
    }
}
