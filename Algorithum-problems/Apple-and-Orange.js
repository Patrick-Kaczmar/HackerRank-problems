// integer, starting point of Sam's house location.
let start = 7;
// integer, ending location of Sam's house location.
let end = 11;
// integer, location of the Apple tree.
let aTree = 5;
// integer, location of the Orange tree.
let bTree = 15;
// integer array, distances at which each apple falls from the tree.
let applesArry = [-2, 2, 1]
//  integer array, distances at which each orange falls from the tree.
let orangesArry = [5, -6]

// function that will console.log the number of apples and oranges that land in the house range from start to end
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // find how many apples and oranges fall on the house

    // the two variables for counting the apples in range
    let numOfApplesOnHouse = 0;
    let numOfOrangesOnHouse = 0;
    // binding all the params to the input variables
    s = start; t = end; a = aTree; b = bTree; apples = applesArry; oranges = orangesArry;
    // two map function that will calculate the final positions of the apples and oranges in their respective arrays 
    let appleDistances = apples.map(redFruit => {return redFruit + a});
    let orangeDistances = oranges.map(orangeFruit => {return orangeFruit + b});
    // if the apples array index value is between the start and end values, add one to the apple count
    for (let i = 0; i < appleDistances.length; i++) {
        if (appleDistances[i] >= s && appleDistances[i] <= t) {
            numOfApplesOnHouse += 1;
        }
    }
    // if the oranges array index value is between the start and end values, add one to the orange count
    for (let i = 0; i < orangeDistances.length; i++) {
        if (orangeDistances[i] >= s && orangeDistances[i] <= t) {
            numOfOrangesOnHouse += 1;
        }
    }
    // final result of the number of apples and oranges in house range 
    console.log(numOfApplesOnHouse);
    console.log(numOfOrangesOnHouse);
}

countApplesAndOranges();