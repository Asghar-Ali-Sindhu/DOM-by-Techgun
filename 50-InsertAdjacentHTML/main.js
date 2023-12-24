// todo: We can insert html in four different positions
// ! Insert beforebegin. We do not need to create the new element which is to be inserted. This can be observed by inspecting the element
// const element = document.getElementById("intro")
// const html = "<h1> Humsafar Piara </h1>"
// element.insertAdjacentHTML("beforebegin", html)

// ? Insert an element afterbegin. This can be observed by inspecting the element
// const element = document.getElementById("intro")
// const html = "<h1> Humsafar Piara </h1>"
// element.insertAdjacentHTML("afterbegin", html)

/ Insert an element beforeend. This can be observed by inspecting the element /
// const element = document.getElementById("intro")
// const html = "<h1> Humsafar Piara </h1>"
// element.insertAdjacentHTML("beforeend", html)

// * Insert an element afterend. This can be observed by inspecting the element */
const element = document.getElementById("intro")
const html = "<h1> Humsafar Piara </h1>"
element.insertAdjacentHTML("afterend", html)