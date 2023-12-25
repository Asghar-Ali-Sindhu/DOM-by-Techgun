// todo: There is two types of height and width. i)offset ii) client
//* Offset includes border and padding whereas client does not include border
const box = document.getElementById("box")
const width = box.offsetWidth;
const widthC = box.clientWidth;
console.log(width);
console.log(widthC);
const height = box.offsetHeight;
const heightC = box.clientHeight;
console.log(height);
console.log(heightC);