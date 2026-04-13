// // runs inside the browser

// // variables and data type
// let name = 'Saad'; //string
// let age = 20; //integer
// let city = 'Lahore';
// let marks = 90.7; //float
// const cnic = '123-4567-8'; //string
// let status = false; //boolean

// // output
// console.log(name)
// console.log(age)
// console.log(city)
// console.log(status)

// // operators: arithmetic, assignment, comparison

// // function

// // defining a function
// function greet(name){ //parameter
//     // function block
//     // console.log('Hello, Guest')
//     console.log('Hello,' + name)
// }

// // calling a function
// greet('Abdullah') //argument


// // HTML DOM

// // writing text using JS
// // document.getElementById('text').innerText = 'Hello JS';
// // document.querySelector('h1').innerText = 'Hello JS';

// // styling with JS
// // function changeColor(){
// //     document.querySelector('h1').style.color = 'red';
// // }

// // using event listeners

// // with a named function
// // document.getElementById('btn').addEventListener('click', changeColor)

// // with an anonymous function
// // document.getElementById('btn').addEventListener('click', function(){
// //     document.querySelector('h1').style.color = 'red';
// // })

// // adding multiple styles 

// // let box = document.getElementById('box')

// // document.getElementById('btn').addEventListener('click', function(){
// //     box.style.backgroundColor = 'aqua'
// //     box.style.color = 'white'
// //     box.style.border = '2px solid red'
// //     box.style.padding = '10px'
// // })


// // let btn = document.getElementById('btn')
// // let input = document.getElementById('input')
// // let txt = document.getElementById('text')

// // btn.addEventListener('click', function(){
// //     let val = input.value
// //     if(val.length >= 5){
// //         txt.innerText = val
// //     } else{
// //         txt.innerText = 'Number of chars should be equals to 5 or greater than 5'
// //     }
// // })


// // changing color with user input
// // let btn = document.getElementById('btn')
// // let txt = document.getElementById('text')

// // btn.addEventListener('click', function(){
// //     let color = document.getElementById('color').value
// //     txt.style.color = color
// // })

// // regular normal
// function addValues(a, b){
//     console.log(a + b)
// }
// addValues(5, 10)

// // arrow functions (anonymous, inline)
// let sum = (a , b) => {
//     console.log(a + b)
// }
// sum(2, 4)


// let btn = document.getElementById('btn')
// let txt = document.getElementById('text')

// btn.addEventListener('click', () =>{
//     let color = document.getElementById('color').value
//     txt.style.color = color
// })


// // arrays
// // let city = 'Lahore'
// let cities = ['Lahore', 'Karachi', 'Quetta']
// console.log(cities)

// // accessing a single value with indexing
// console.log(cities[0])
// let x = cities[1]
// console.log(x)

// cities[2] = 'Multan' //assigning a new value to index 2
// cities[3] = 'Quetta' //creates a new index
// console.log(cities)

// // methods and properties
// cities.length //property
// cities.push('Sialkot') //method
// let val = cities.pop() //removes and returns the value
// console.log(cities)
// console.log(val) //returned value


// // loops

// // for loop
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }

// // multiplication table
// let result
// for(let i = 1; i <= 10; i++){
//     result = 2 * i
//     // console.log(2 + ' x ' + i + ' = ' + result)
//     console.log(`2 x ${i} = ${result}`)
// }


// calculator
// function calculator(operator){
//     let n1 = parseFloat(document.getElementById('num1').value)
//     let n2 = parseFloat(document.getElementById('num2').value)
//     let result = 0

//     if(n1 === "" || n2 === ""){
//         alert('Inputs should not be empty')
//     }
//     if(isNaN(n1) || isNaN(n2)){
//         alert('Only numbers are allowed')
//     }

//     // operations 
//     if(operator === '+') result = n1 + n2
//     else if(operator === '-') result = n1 - n2
//     else if(operator === 'x') result = n1 * n2
//     else if(operator === '/') result = n1 / n2
//     else "Operator not valid"

//     document.getElementById('result').innerText = result
    
// }

// function clearValues(){
//     document.getElementById('num1').value = ""
//     document.getElementById('num2').value = ""
//     document.getElementById('result').innerText = ""
// }

// console.log(isNaN(5))

function todoList(){
    let input = document.getElementById('task-input').value
    let taskText = input.trim()

    if(taskText === ''){
        alert('Please enter something!!')
    }

    let li = document.createElement('li')
    li.className = 'bg-amber-300 p-2 rounded-md flex justify-between items-center my-1'

    let span = document.createElement('span')
    span.innerText = taskText
    span.className = 'cursor-pointer'

    span.onclick = function(){
        span.className = 'line-through decoration-red-600'

    }
    

    let del = document.createElement('button')
    del.innerText = 'Delete Task'
    del.className = 'bg-sky-300 text-sm px-2 py-1 border border-black rounded'

    del.onclick = () => {
        li.remove()
    }

    li.appendChild(span)
    li.appendChild(del)
    document.getElementById('task-list').appendChild(li)
}

// document.getElementById('add-task').addEventListener('click', todoList)
document.getElementById('task-input').addEventListener('keypress', (e) =>{
    if(e.key === 'Enter') todoList()
})