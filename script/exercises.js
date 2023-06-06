//1. Build 5 Person objects using constuctors
//2. add each  object to the people array
//3. add array to local storage
//4. get items from local storage and display people with age less than 30

//______________________________________1.


function People (name, surname, age){
    this.firstName = name
    this.lastName = surname
    this.age = age
}

let person1 = new People ("Kgodisho", "Lebopa", 24)
let person2 = new People ("Magdeline", "Makwela", 30)
let person3 = new People ("Peter", "Mulaudzi", 44)
let person4 = new People ("Joshua", "Mashao", 28)
let person5 = new People ("Kapoko", "Lebopa", 25)

// _______________________________________2.

let peoples = [person1, person2, person3, person4, person5 ]

console.log(peoples);

// ________________________________________ 3. 
localStorage.setItem (peoples, JSON.stringify (peoples))

//__________________________________________ 4.
localStorage.getItem (peoples, JSON.stringify (peoples))



// console.log(peoples.age < 30);


// _______FETCH API STUFF

async function getData (){
try{
    let data = await fetch('https://api.publicapis.org/entries')
    let response = await data.json()
}

catch (error) {
    console.log("Error");
}
}

getData ()

fetch ("https://api.publicapis.org/entries").then ((response)=>response.json()).then((data) => console.log(data)).catch(error => console.log(error))

