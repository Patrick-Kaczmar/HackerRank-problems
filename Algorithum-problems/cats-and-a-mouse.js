/* You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. 
Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.

If cat A catches the mouse first, print Cat A.
If cat B catches the mouse first, print Cat B.
If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes. */

// checks if z(mouse position) - x(cat A position) is a smaller number than z(mouse position) - y(cat B position), because the smaller number will always be the closest integer to z
function catAndMouse(x, y, z) {
  if (Math.abs(z - x) < Math.abs(z - y)) {
    console.log("Cat A")
    return "Cat A"
  } else if (Math.abs(z - x) > Math.abs(z - y)) {
    console.log("Cat B")
    return "Cat B"
  } else {
    console.log("Mouse C")
    return "Mouse C"
  }
}

catAndMouse(4, 9, 6)
