"use strict";

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
let countArray = [];

function countBy(a, b) {
  for (let i = 1; i <= b; i++) {
    countArray.push(a * i);
  }
  return countArray;
}
document.getElementById("h3-el").innerText = `Resault is ${countBy(2, 5)}`;
