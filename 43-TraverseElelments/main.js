// todo: Traverse means to select a parent by first selecting child.
// const element = document.getElementById("div1")
// const parent = element.parentElement
// console.log(parent);

// ? Select the next sibling element
// const element = document.getElementById("div1")
// const sibling = element.nextElementSibling
// console.log(sibling.innerHTML);


// ! Select the ul having lists with innerText "List a" etc
// const element = document.getElementById('intro')
// // console.log(element);
// const parent = element.parentElement
// // console.log(parent);
// const nextList = parent.nextElementSibling
// console.log(nextList);

// todo: Selelct the innerHTML of all the elements of second list
// const element = document.getElementById('intro')
// const parent = element.parentElement
// const nextList = parent.nextElementSibling.children
// for (let i = 0; i < nextList.length; i++) {
//     console.log(nextList[i].innerHTML);
// }

// ? Select first element of second list
// const element = document.getElementById('intro')
// const parent = element.parentElement
// const nextList = parent.nextElementSibling.firstElementChild
// console.log(nextList.innerHTML);


//! Select last element of second list
// const element = document.getElementById('intro')
// const parent = element.parentElement
// const nextList = parent.nextElementSibling.lastElementChild
// console.log(nextList.innerHTML);

/ Second child and third child of the second list /
// const element = document.getElementById('intro')
// const parent = element.parentElement
// const secondChild = parent.nextElementSibling.firstElementChild.nextElementSibling
// console.log(secondChild.innerHTML);
// const thirdChild = secondChild.nextElementSibling
// console.log(thirdChild.innerHTML);

// ? Select children from parents
// let parent = document.getElementById("par")
// console.log(parent);
// console.log(parent.children);
// const children = parent.children
// for (let i = 0; i < children.length; i++) {
//     console.log(children[i].innerHTML);
// }

// ! Select first child
// const parent = document.getElementById('par')
// const firstChild = parent.firstElementChild
// console.log(firstChild);

// todo: Select the last child
const parent = document.getElementById('par')
const lastChild = parent.lastElementChild
console.log(lastChild);

