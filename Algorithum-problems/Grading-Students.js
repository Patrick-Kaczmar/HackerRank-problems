// the number of students to be graded
let n = 4;

// the grades of the students in an array
let gradesArry = [73, 67, 38, 33];

// If the difference between the grades and the next multiple of 5 is less than 3, round grades up to the next multiple of 5.
// If the value of grades is less than 38, no rounding occurs as the result will still be a failing grade.

// Given the initial value of grades for each of Sam's 'n' students, write code to automate the rounding process.

// executing the roundingUp function for each grade in the grades array
function gradingStudents(grades) {
    grades.forEach(roundingUp)
}

/* checks if the grade is at least 38 or higher, if it is, then check if the points needed to reach the next multiple of five is less than 2 points. if it is,
round to the nearest multiple of 5 and console log the result*/

function roundingUp(element) {
    if (element > 37) {
        if (element % 5 > 2) {
            element = Math.ceil(element / 5) * 5
        }
    }
    console.log(element);
}

gradingStudents(gradesArry);