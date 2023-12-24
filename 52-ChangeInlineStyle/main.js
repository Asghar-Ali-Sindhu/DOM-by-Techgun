// todo: Insert CSS using javascript
// const btn = document.getElementById("btn")
// btn.style.cssText = "background-color: red; color: white; padding:10px 5px; border-radius: 5px; border: 2px solid black";
// document.body.style.cssText = "display: flex; justify-content: space-between; "


// ! Second method of inserting CSS
// const btn = document.getElementById("btn")
// btn.setAttribute('style', 'background-color: blue; color: white; padding:15px' );


// ? Third method of inserting CSS. In this method, we insert CSS property one at a time
// const btn = document.getElementById("btn")
// btn.style.color = "orange"
// btn.style.backgroundColor = "teal"

/ This inline styling has a problem.It replaces the already inserted inline style when it is inserted using cssText or setAttribute method. We observe already inline style of bgc aqua is replaced by color: blue /
const btn = document.getElementById("btn")
// btn.style.color = "orange"
btn.style.cssText += 'color: blue'
    
// todo: This inline styling has a problem.It replaces the already inserted inline style when it is inserted using cssText or setAttribute method. We observe already inline style of bgc aqua is replaced by color: white and padding: 15px /
// ! In order to avoid this problem, we use concatination
// const btn = document.getElementById("btn")
// btn.setAttribute('style', 'color: white; padding:15px' );


