var romanToInt = function(s) {
//     set variables for the result and the previous number in the loop
    let result = 0, prevNum = 0
//     break the string into an array for each number
    let splitArr = s.split("")
//     use a map to transorfm each symbol in the array to a number 
    let numberArr = splitArr.map(el => {
        switch (el) {
            case "I": return el = 1; 
            case "V": return el = 5; 
            case "X": return el = 10; 
            case "L": return el = 50; 
            case "C": return el = 100; 
            case "D": return el = 500; 
            case "M": return el = 1000; 
        }
    })
//     write logic for adding and subtracting numbers
    for (let i = numberArr.length - 1; i >= 0; i--) {
        if (numberArr[i] < prevNum) {
            result -= numberArr[i]
        } else {
            result += numberArr[i]
        }
        prevNum = numberArr[i]
    
    }
    // return the total 
        return result
};