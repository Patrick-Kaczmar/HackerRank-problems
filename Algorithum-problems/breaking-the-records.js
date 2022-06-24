// Scores are in the same order as the games played. She tabulates her results as follows:

//                                      Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// ********************************************************************************************************************************************************


// sample input for points Maria scores each game 
const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

function breakingRecords(scores) {
    // sets the current max and min score to the first value in the array
    let currMax = scores[0];
    let currMin = scores[0];
    // counter for the number of times she breaks her record for highest or lowest points scored this season 
    let breakMax = 0;
    let breakMin = 0;
    
    for (let i = 1; i < scores.length; i++) {
        // if the score for the current game is higher than the current max, then set that score as the new max and add 1 to the breakMax counter
        if (scores[i] > currMax) {
            currMax = scores[i]
            breakMax += 1
        // if the score for the current game is lower than the current lowest, then set that score as the new lowest and add 1 to the breakMin counter
        } else if (scores[i] < currMin) {
            currMin = scores[i]
            breakMin += 1
        }
    }
    // show the number of times she broke her own records for highest and lowest points scored during the season
    console.log([breakMax, breakMin]) 
}

breakingRecords(scores)