// A video player plays a game in which the character competes in a hurdle race. Hurdles are of varying heights, and the characters have a maximum height they can jump. 
// There is a magic potion they can take that will increase their maximum jump height by 1 unit for each dose. How many doses of the potion 
// must the character take to be able to jump all of the hurdles. If the character can already clear all of the hurdles, return 0.



function hurdleRace(k, height) {
    // sort the array from lowest to highest number
    const highestHurdle = height.sort((a, b) => a - b)
    // pop the last element of the array which will return the highest number 
    const largestNumb = highestHurdle.pop()
    // if the highest number is lower than the number of units the character can jump, just return 0. Else return the highest hurdle number - the character jump height to get the answer
    if (largestNumb - k < 0) {
        return 0
    } else {
        return largestNumb - k
    }
}