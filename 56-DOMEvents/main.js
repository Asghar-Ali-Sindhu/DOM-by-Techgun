// todo: DOM events are actions that occur as a result of the user action or as a result of state change of the elements of a DOM tree.
// * Examples of HTML Events
// i) When a user clicks the mouse
// ii) When a web page has loaded
// iii) When an image has been loaded
// iv) When the mouse moves over an element
// v) When the input field is changed
// vi) When an HTML form is submitted
// vii) When a user strokes a key
//! To see all the events, visit w3school dom events. There are two ways to register an event.
// ? Inline event
// function btnClick(){
//         alert("Button was clicked")
//     }

//? Use of EventListner
// function btnClick(){
//         alert("Button was clicked")
//     }
// const btn = document.getElementById("btn")
// btn.addEventListener('click', btnClick)

/ Use of an anonymous function /
// const btn = document.getElementById("btn")
// btn.addEventListener('click', function () {
//     alert("Button was clicked")
// })

//todo: Multiple events can be applied to a single element
// const btn = document.getElementById("btn")
// btn.addEventListener('click', function () {
//     console.log("Button was clicked")
// })
// btn.addEventListener('mouseover', function () {
//     console.log("Mouse over was activated")
// })
// btn.addEventListener('mouseout', function () {
//     console.log("Mouse out was activated")
// })