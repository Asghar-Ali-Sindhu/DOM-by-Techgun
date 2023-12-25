// todo: With the help of the getComputedStyle, we can get the already given property in style. It shows all the styles applied by the computer itself and also applied by yours.
// const btn = document.getElementById("btn")
// const computedStyle = getComputedStyle(btn)
// console.log(computedStyle);

//? We can get out desired css property
// const btn = document.getElementById("btn")
// const computedStyle = getComputedStyle(btn)
// console.log(computedStyle.color);
// console.log(computedStyle.backgroundColor);

//! If we apply inline style, it will over write the previous one
const btn = document.getElementById("btn")
const computedStyle = getComputedStyle(btn)
console.log(computedStyle.color);
console.log(computedStyle.backgroundColor);