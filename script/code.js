// //console.log("Hello World")
// //document.write ("My name is Kgodisho")
// document.getElementById('p1').innerText = "I love programming"
// document.querySelector ('#p1').textContent = ('What is happening')
// function displayContent () {
//     document.querySelector ('#p1').textContent = ('What is happening')
// }

// let display = document.querySelector ('#btnDisplay');
// display.addEventListener ('click',displayContent);

// let numb1 = +prompt('Enter a number: ')
// let numb2 = +prompt ('Enter another number: ')
// let addition = numb1 + numb2
// console.log (`Sum: ${addition}`);
// let subjects = ['C++','C#','Python','Javascript', 56, 78]
// console.log(subjects)
// let personDetail = {
//     FirstName : 'John',
//     Surname :"Surname",
//     age : 25
// }

// console.log (personDetail)
// let {FirstName, Surname,age} = personDetail;
// console.log (FirstName)

// let firstName = 'Kgodisho'
// let Surname = 'Lebopa'
// console.log ('My name is' +firstName ,'and my surname is' +Surname)
// let numberVar = 5
// console.log (numberVar*5)
// const myname = 'Kgodisho'
// myname = 'Lebopa'
// if statement example
// let Jacket = 'Yellow'

// if (Jacket != 'Yellow'){
//     console.log('You are a wearing a Yellow jacket');
// }
// else{
//     console.log('Go get a new jacket!!');
// }
//__________________________________________________________________________
// finding out data type is as follows
// let numb1 = 7
// if (typeof numb1 === 'number'){
//     console.log('It is a number');
// }
// else{
//     console.log('it is not a number');
// }
// stuff to do with arrays and loops
//  let data = ['Henk', 9, true, 8, 'J', 4.7]
// for (let i=0; i < data.length; i++){
//    if (typeof data [i] == "number")
//     console.log(data[i])
// }

//Functions
// function addition(username){
//     return username;
// }

// this is how you call a function
// console.log('Lebopsi');
// let addition = () =>{
//     return numb1 + numb2
// }
// console.log (addition(5,3)); 

//___________________________CLASS NOTES_____________________________

// // for, break and continue
// // for (i=0; i<10; i++){
// //   if (i == 8)
// //   break
// //   if ((i%2) >0)// in order to know if a number is even then the remainder is 0 and if there is greater than 0 it is odd. 
// //   continue
// // }

// // let personDetail = {
// //   firstName :'Kgodisho',
// //   lastName :'Lebopa',
// //   age: 25
// // }

// // for of is used inside an Array
// // for in is used in an index
// // index represents property, 'object key'

// // for (let p in personDetail){
// //   console.log(`${p}-> ${personDetail[p]}`);
// // }

// // OR 

// // dot notation
// // console.log(personDetail.firstName);

// // let subjects = ['HTML', 'CSS', 'Delphi', 'JS']
// // for(let subject of subjects) {

// // }

// // ______________________ARRAY METHODS ___________________
// let numbers = [2, 5, 5]
// console.log(numbers);
// console.log(numbers.length);  //to know how many elemnts you have in your array 
// numbers.push (7, 6) //to add a new elemnt in the array we use push
// console.log(numbers)
// numbers.pop()// to remove the last element we use pop
// console.log(numbers)
// numbers.shift //to remove the first element
// console.log(numbers);
// numbers.unshift(10) // to add numbers at the start of the array
// console.log(numbers);
// //console.log(numbers.slice(1, 2)); //this is done to display from a certain part of the element where we start slicing from
// numbers.splice (2, 0, 9, 11 )// allows to add new elements and or to remove 0 means we are adding and if it is 1 it means we are deleting and the first number reffers to the position number. remember the computer starts counting at 0
// console.log (numbers)
// numbers.splice (1, 2)
// console.log(numbers);
// //to remove a duplicate in an array
// // let noDuplicate = []
// // numbers.forEach ((item) => {
// //   if (!noDuplicate.includes(item))
// //   noDuplicate.push(item)
// // })
// // console.log(numbers);

// //but there is a shorter way
// console.log( new Set (numbers) );


// console.log(numbers.indexOf (5)); //this will let us know the index of the first occurance of the duplicate
// console.log(numbers.lastIndexOf (5)) // this will let us know the index of the last occurance of the duplicate


// console.log(numbers.concat ([28, 27])); //this returns a new array?? not sure make sure you find out, therefore we should store in a new variable


 
//Arrays
// let numbers = [2, 5];
// console.log("length:", numbers.length); //returns the length of array
// console.log("numbers:", numbers);
// numbers.push(9);
// numbers.push(6);
// console.log("After push()", numbers);
// console.log("length:", numbers.length);
// numbers.pop()
// console.log("After pop()", numbers);
// numbers.shift()
// console.log("After shift(): ", numbers);
// numbers.unshift(12, 18)
// console.log("After unshift()", numbers);
// const firstTwo = numbers.slice(0, 2)
// console.log(firstTwo);
// console.log(numbers);
// numbers.splice(2, 0, 8)
// console.log("After splice():", numbers);
// console.log("Accesing the last array", numbers[numbers.length -1]);
// // Find a primitive element
// // for(let i=0; i<numbers.length; i++){
// //     if(numbers[i] != 2)
// //         console.log(numbers[i]);
// // }
// // console.log(numbers.filter( i => i == 2 ));
// // numbers.filter( (value, i)=>{
// //     if(value == 2)
// //         console.log(i , value);
// // } );
// console.log("indexOf():",numbers.indexOf(18));

// //this is for adding arrays 
// const secArr = [19, 18]
// console.log("concat():",numbers.concat(secArr))

// //combinign elements
// console.log("join():",numbers.join(" - "));
// //another examples
// let folks = ["Sweswe", "Kgodisho", "Lebopa"]
// console.log(folks);
// let strNames = folks.join (" == ")
// console.log(strNames);
// //Let us says we wants to fill it with something instead of the actual field of it that is already there
// let myArr = new Array();
// let myArr2 = new Array(4).fill("*");
// console.log("fill()", myArr2);

// console.log("Check if all elements are even numbers? ", numbers.every( (value)=>{
//     return value % 2 == 0
// } ))
// console.log("Check if some elements are even numbers? ", numbers.some( (value)=>{
//     return value % 2 == 0
// } ))
// console.log("Try to find number 2:", numbers.find( value => {
//     return value == 19
// }))
// console.log("findIndex(): ", numbers.findIndex( value => value == 18 ) )
// console.log("includes(): ", numbers.includes(2) )
// console.log("reduce(): ", numbers.reduce( (a,b)=> a+b)) //goes to the right from the left
// console.log("reduceRight(): ", numbers.reduceRight( (a,b)=> a+b)) //goes from right to left 
// console.log("sort(): ", numbers.sort()); 
// //arranages the arrays either in descenidng or ascending 
// //we do this also by doing this 
// console.log("sort() in ascending order: ", numbers.sort((a, b)=> a-b));
// console.log("reverse(): ", numbers.reverse())

// let names =["Kamva", "Jason", "Mujahid"]

// console.log(names);
// console.log (names.filter(name =>{
//     return name.indexOf ('a') == "1"
//     //you could also use it like this
//     //return name.charAt (1) == "a"
// }))

// let data = [3, "Codi", 7]
// console.log (data)
 //Make use of reduce to return the sum
//  //the long method
// let addition = data.filter (d =>{
//     return Number.isInteger (d)
// }).reduce ((a,b) => {return a + b})
// console.log(addition);
// //short method
// console.log(data.filter(num=>typeof(num)=="number").reduce((a,b)=> a+b))
// //another method
// data.splice(1,1);
// console.log(data.reduce( (a,b)=> a+b))
// //another method 
// console.log(parseInt(data.reduce((a,b)=>{
//     return a+b
// })));
//arrays find
// console.log(data.findIndex(d => {return d == 'Codi'
// }));

const addName = document.querySelector ("#input")
const displayName = document.querySelector("#display") 
