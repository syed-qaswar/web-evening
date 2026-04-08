// runs inside the browser

// variables and data type
let name = 'Saad'; //string
let age = 20; //integer
let city = 'Lahore';
let marks = 90.7; //float
const cnic = '123-4567-8'; //string
let status = false; //boolean

// output
console.log(name)
console.log(age)
console.log(city)
console.log(status)

// operators: arithmetic, assignment, comparison

// function

// defining a function
function greet(name){ //parameter
    // function block
    // console.log('Hello, Guest')
    console.log('Hello,' + name)
}

// calling a function
greet('Abdullah') //argument


// HTML DOM

// writing text using JS
// document.getElementById('text').innerText = 'Hello JS';
// document.querySelector('h1').innerText = 'Hello JS';

// styling with JS
// function changeColor(){
//     document.querySelector('h1').style.color = 'red';
// }

// using event listeners

// with a named function
// document.getElementById('btn').addEventListener('click', changeColor)

// with an anonymous function
// document.getElementById('btn').addEventListener('click', function(){
//     document.querySelector('h1').style.color = 'red';
// })

// adding multiple styles 

// let box = document.getElementById('box')

// document.getElementById('btn').addEventListener('click', function(){
//     box.style.backgroundColor = 'aqua'
//     box.style.color = 'white'
//     box.style.border = '2px solid red'
//     box.style.padding = '10px'
// })


// let btn = document.getElementById('btn')
// let input = document.getElementById('input')
// let txt = document.getElementById('text')

// btn.addEventListener('click', function(){
//     let val = input.value
//     if(val.length >= 5){
//         txt.innerText = val
//     } else{
//         txt.innerText = 'Number of chars should be equals to 5 or greater than 5'
//     }
// })


// changing color with user input
let btn = document.getElementById('btn')
let txt = document.getElementById('text')

btn.addEventListener('click', function(){
    let color = document.getElementById('color').value
    txt.style.color = color
})
