let ar = [1, 2, 3, 4, 5, 6]
let n = 6
let k = 5

function divisibleSumPairs(n, k, ar) {
  let answer = 0
  let curIndex = 1
  // looping the current index
  for (let i = 0; i < n; i++) {
    let curIndexItem = ar[i]
    // looping everything after the index
    for (let j = curIndex; j < n; j++) {
      if ((curIndexItem + ar[j]) % k === 0) {
        answer += 1
      }
      console.log(j)
    }
    curIndex += 1
  }
  console.log(answer)
}

divisibleSumPairs(n, k, ar)
