var longestCommonPrefix = function(strs) {
    let answer = ""
    let letter
    let allGood = true
    strs.sort()
    if (strs[0] === "") return answer;
    if (!strs[1]) return strs[0];
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            letter = strs[0][i]
            if (strs[j][i] !== letter) {
                allGood = false
                break;
            }
        }
        if (allGood) {
            answer += letter
        } else {
            break;
        }
    }
    return answer
};