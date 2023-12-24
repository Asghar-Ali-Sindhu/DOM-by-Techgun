// ! If dont pass any parameter in cloneNode, it only copy the ul
// const element = document.getElementById("intro")
// const copy = element.cloneNode()
// console.log(copy);

//todo: If we pass true as a parameter in cloneNode, it copies ul togather with inside list elements
// const element = document.getElementById("intro")
// const copy = element.cloneNode(true)
// console.log(copy);

//? Append this cloned ul in the body
// const element = document.getElementById("intro")
// const copy = element.cloneNode(true)
// document.body.appendChild(copy)

/ Change the id of the newly created copy /
const element = document.getElementById("intro")
const copy = element.cloneNode(true)
copy.id="try"
document.body.appendChild(copy)