// todo: Since body is the parent of every object so each and every thing can be removed
//! Remove ul from the body
// const parent = document.getElementById("menu")
// document.body.removeChild(parent)

//? Remove first list item from ul
// const parent = document.getElementById("menu")
// const firstItem = parent.firstElementChild
// // console.log(firstItem);
// parent.removeChild(firstItem)

/ Remove second list item /
// const parent = document.getElementById("menu")
// const secondItem = parent.firstElementChild.nextElementSibling
// parent.removeChild(secondItem)

// ** Remove third list item from ul
const parent = document.getElementById("menu")
const thirdItem = parent.firstElementChild.nextElementSibling.nextElementSibling
parent.removeChild(thirdItem)