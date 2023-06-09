// 19 May 2023
// reverse a word and dislpay on console log

let sentence = "I love programming";
console.log(sentence.length);
console.log(sentence);
console.log(sentence[sentence.length-1]);
console.log(sentence[0],
sentence.slice(sentence.lastIndexOf('n')+1,
sentence.length+1));


//Ryan's work 7 June 2023
// //1. Build 5 Person objects using constuctors
// //2. add each  object to the people array
// //3. add array to local storage
// //4. get items from local storage and display people with age less than 30

// //______________________________________1.


// function People (name, surname, age){
//     this.firstName = name
//     this.lastName = surname
//     this.age = age
// }

// let person1 = new People ("Kgodisho", "Lebopa", 24)
// let person2 = new People ("Magdeline", "Makwela", 30)
// let person3 = new People ("Peter", "Mulaudzi", 44)
// let person4 = new People ("Joshua", "Mashao", 28)
// let person5 = new People ("Kapoko", "Lebopa", 25)

// // _______________________________________2.

// let peoples = [person1, person2, person3, person4, person5 ]

// console.log(peoples);

// // ________________________________________ 3. 
// localStorage.setItem (peoples, JSON.stringify (peoples))

// //__________________________________________ 4.
// localStorage.getItem (peoples, JSON.stringify (peoples))


// // _______FETCH API Work with Seth

// async function getData (){
// try{
//     let data = await fetch('https://api.publicapis.org/entries')
//     let response = await data.json()
// }

// catch (error) {
//     console.log("Error");
// }
// }

// getData ()

// fetch ("https://api.publicapis.org/entries").then ((response)=>response.json()).then((data) => console.log(data)).catch(error => console.log(error))

// ____________________________________________________________________________

// 7 June 2023 Local storage 
//Create an array of Objects and set your array in localstorage

let object = [
    { 
     name : "Person1",
     lastName: "Last Name1",
     age: 1,
     img: "https://i.pinimg.com/originals/ce/82/b9/ce82b9cd5c75c65c21851d5968001536.png"

    },

    {
     name : "Person2",
     lastName: "Last Name2",
     age: 2,
     img:"https://i.pinimg.com/originals/85/f5/be/85f5bedff0758abea714994d3c398559.gif"
    },

    {
     name : "Person3",
     lastName: "Last Name3",
     age: 3,
     img: "https://www.freebiefindingmom.com/wp-content/uploads/2021/04/free-printable-number-stencils-number-3-stencil-medium-683x1024.jpg"

    }
]

// adding the object onto local storage
localStorage.setItem('object', JSON.stringify (object))
