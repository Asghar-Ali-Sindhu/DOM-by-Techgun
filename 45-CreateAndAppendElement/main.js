// ! Create and append a tag. h2 is created and appended in the div
// const element = document.getElementById("intro")
// const h2 = document.createElement("h2")
// element.appendChild(h2)
// console.log(element);
// console.log(h2);

// todo: Create text node and append the new created child
// const element = document.getElementById("intro")
// const h2 = document.createElement("h2")
// const text = document.createTextNode("This is an h2 tag")
// h2.appendChild(text)
// // console.log(h2);
// element.appendChild(h2)
// console.log(element);


/ Insert a class in any tag either it is newly appended or old tag. also we can insert more than classes. Similarly we can insert an id on any tag/
// const element = document.getElementById("intro")
// element.className = "big"
// const h2 = document.createElement("h2")
// h2.className = "try pi"
// h2.id = "info"
// const text = document.createTextNode("This is an h2 tag")
// h2.appendChild(text)
// element.appendChild(h2)

// ! Create an elment and append it in the body. This element is placed at the end of the body, even after the script and before the closing html tag.
// const h2 = document.createElement("h2")
// h2.className = "try pi"
// h2.id = "info"
// const text = document.createTextNode("This is an h2 tag")
// h2.appendChild(text)
// document.body.appendChild(h2)


// todo: Append a newly created element using property
// const h2 = document.createElement("h2")
// h2.textContent ="This text is created using textContent"
// document.body.appendChild(h2)

//? How the text of a tag.
//! Hence textContent can be used to read the content of a tag. Also it can be used to add some text to a newly created tag
// const element = document.getElementById("intro")
// const firstChild = element.firstElementChild
// console.log(firstChild.textContent);

// todo: Add a new list in ul
// const ul = document.getElementById("list")
// const li = document.createElement("li")
// li.textContent = "List D"
// ul.appendChild(li)
