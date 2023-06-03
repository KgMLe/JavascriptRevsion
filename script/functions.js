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

// Factory function
// It is a function that allows us to create and return an object.
// In addition, it does return an object of any class directly.
// When defining a factory function, you should make use of the camel case.
// Example 1


