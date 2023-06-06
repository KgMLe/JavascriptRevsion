// // Arrow function: An arrow function is an alternative way of creating a declaration function.
// // More on an object
//  // The class needs to explain the object.
// let person = {
//     firstName: 'Lerato',
//     lastName: 'Tshepo',
//     age: 27
// }
// // Display a person object on a console.
// console.log(person);
// console.log("Object.keys(): ", Object.keys(person)); //gives us the key word of the objects
// console.log("Object.value(): ", Object.values(person));
// console.log("Object.entries(): ", Object.entries(person));// returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object. basically combines property and value, loops through the objects 
// console.log("dot operator: ", person.firstName);
// console.log("[] operator: ", person['age']);
// console.log("['subject'] operator: ", person['subject']);
// console.log("Check if an object has property: ", person.hasOwnProperty('subject') ? person.subject : 'subject property wasn\'t found' );
// person.subject = ["HTML", "CSS", "Javascript"]
// console.log("Added subject property: ", person);



// let person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// Object.keys(person).forEach( key => {
//     console.log(key);
// })

//Function in an object
	
// let person = {
//     firstName: 'Lerato',
//     lastName: 'Tshepo',
//     age: 27,
//     fullName: function() {
//         return this.firstName.concat(" ", this.lastName)
//     }
// }
// // Display user full name
// console.log("Your full name is", person.fullName());


//Practice work 

// let myself = {
//     firstName: "Kgodisho",
//     lastName: "Lebopa",
//     age: 24
// //this is how you can do it using a function and terinary operator
// // checkAge: function(){
// //     return this.age > 17 ? "You are qualified" : "You are not qualified"
// // }

// }

// console.log (myself)
// // console.log (myself.checkAge)

// if (myself.age > 17){
//     console.log("You are over the age of 17");
// } else{
//     console.log("You are not older that 17!");
// }

// ____________________________Factory function____________________________
// It is a function that allows us to create and return an object.
// In addition, it does return an object of any class directly.
// When defining a factory function, you should make use of the camel case.
// Example 1

// function createPerson(firstName, lastName) {
//     return {
//         firstName,
//         lastName,
//         display: function() {
//             return firstName.concat(" ", lastName)
//         }
//     }
// }
// const joelDetail = createPerson("Joel", "Mukanya");
// console.log("Full name: ", joelDetail.display());
// const henryDetail = createPerson("Henry", "Tshepo");
// console.log("Full name: ", henryDetail.display());
// function createPerson(firstName, lastName, salary,  performed) {
//     let person = {}
//     person.firstName = firstName
//     person.lastName = lastName
//     person.salary = salary
//     person.performed = performed
//     // Check if the user qualifies for a bonus.
//     person.qualified = ()=> {
//         if(person.performed)
//             person.salary += 500
//         else
//             person.salary = salary
//         return person.salary
//     }
//  // Return an object
//     return person
// }
// const joelDetail = createPerson('Joel', 'Mukanya', 5000, false);
// console.log("Salary: R", joelDetail.qualified());
// Constructor function
// It is used to create objects and return this keyword.
// When creating an object, you must use a new keyword.
// When defining a constructor function, you should make use of the Pascal case.
// NB: This keyword represents an object when it is created.
// Example 1
// function Person(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
// }
// let henkDetail = new Person('Henk', 'Daniels')
// let samDetail = new Person('Sam', "Luvuyo")
// console.log(henkDetail);
// console.log(samDetail);


// Example 2
// function Person(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = ()=> {
//         return this.firstName.concat(" ", this.lastName)
//     }
// }
// let henkDetail = new Person('Henk', 'Daniels')
// let samDetail = new Person('Sam', "Luvuyo")
// console.log(henkDetail);
// console.log("Full name:", henkDetail.fullName());
// console.log(samDetail);
// console.log("Full name:", samDetail.fullName());

// _____________________________________________________________________
// Difference between Object literal and constructor function
// An object literal is when you want to create a single object. Once you update the property value of an object, it will affect the original object.
// let person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// A constructor function is when you want to create multiple objects. Each property’s value is unique.
// Explain Object.prototype.contructor
// In a constructor function, each object has its own value, but if you want both objects to share the same value, you need to make use of the Object.prototype property
// ObjectName.prototype.propertyName = “value”;
// Example
// function Person(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = ()=> {
//         return this.firstName.concat(" ", this.lastName)
//     }
// }
// let henkDetail = new Person('Henk', 'Daniels')
// let samDetail = new Person('Sam', "Luvuyo")
// console.log(henkDetail);
// console.log(samDetail);
// // Share the same value by making use of prototype
// Person.prototype.age = 30
// console.log("Henk's age:", henkDetail.age);
// console.log("Sam's age:", samDetail.age);

// // Javascript built-in Constructors
// const myObj = new Object() // Created a new object
// // A new string
// const myStr = new String("I love programming. Join the group.")
// const numb1 = new Number(5) // A new number object
// const isMale = new Boolean(true) // A boolean object
// const myArr = new Array(5).fill(0);
// console.log("myObj:", myObj);
// console.log("myStr:", myStr);
// console.log("numb1:", numb1);
// console.log("isMale:", isMale);
// console.log("myArr:", myArr);
// // __________________________________________________________
// // Cloning an object
// // There are three ways to clone an objects in JS
// // NB: Objects in JS are reference values.
// // Spread operator or shallow copy
// // It will not deep clone a nested object
// const person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// const newPerson = {...person}
// console.log(newPerson);

//JSON
// // It is referred to as a quick and dirty way of deep cloning an object.
// // Deep copies nested objects but doesn’t copy a function.
// const person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// const newPerson = JSON.parse(JSON.stringify(person))
// console.log(newPerson);
// // NB: Objects are reference types, which means they don’t hold a value but are pointers that point to the memory where a specific value is stored.
// // Example 1
// const person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// console.log(person);
// let newPerson = JSON.parse(JSON.stringify(person))
// newPerson.firstName = "John"
// newPerson.lastName = "Tshepo"
// console.log(newPerson);
// Example 2
// // In the below example, you will see why we shouldn’t copy or clone an object using an equal sign.
// const person = {
//     firstName: 'Joel',
//     lastName: 'Mukanya'
// }
// let newPerson = person
// newPerson.firstName = "Henk"
// newPerson.lastName = "Peterson"
// console.log(person, newPerson);
// // Difference between shallow copy and deep copy
// // Variables are used to store values, which can be primitives or references. Let’s consider the below example:
// let numb1 = 9;
// /* We copy the value of numb1 and store it in numb2.
// So what will happen if we change the value of numb2?
// It will not affect the value stored in numb1.
// */
// let numb2 = numb1
// // Let's change numb2 value
// numb2 = 2
// console.log(`numb1: ${numb1}\nnumb2: ${numb2}`);
// Deep copying means that the values of the new variable point to a new reference in memory.
// A shallow copy means that some values are still using the origin variable reference in memory.
// NB: The efficient way to clone an object is with Object.assign().
// For deep cloning, make use of _.cloneDeep() (any array).
	
// NB: Students need to do some extra research on the difference between shallow and deep copy.
// Garbage collection
// GC Monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it.
// https://betterprogramming.pub/deep-dive-into-garbage-collection-in-javascript-6881610239a
// Difference between function declaration and expression or hoisting
// Hoisting It is one of the ways in which JS moves variables and functions to the top of the scope before code execution.
// console.log(numb2);
// var numb2 = 8;
// /*
// The above code is equivalent to
// var numb2;
// console.log(numb2);
// numb2 = 8
// */
// Function declarations are not executed immediately, only when they are invoked or called.
// function display() {
//     console.log("Well done");
// }
// // Function as an expression It can be defined as a variable; it is also referred to as an anonymous function.
// let addition = function(x, y) {return x + y}
// console.log(addition(4, 5));
// Rest operator as a parameter, default parameters
// // Function with parameters
// function addition(numb1, numb2) {
//     console.log(numb1 + numb2)
// }
// addition(2, 7)
// // parameter with default value
// function addition(numb1, numb2 = 3) {
//     console.log(numb1 + numb2)
// }
// addition(2)
// // Rest operator
// function addition(...args) {
//     console.log(`Sum of ${args} is ${args.reduce( (a, b)=> a + b)}`)
// }
// addition(2, 5, 12)