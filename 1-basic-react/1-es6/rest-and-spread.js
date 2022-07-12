//spread and rest operator

const developer = {
    firstName: 'Nathan',
    lastName: 'Sebhastian',
    developers: true,
    age: 25,
  }
console.log(developer.firstName)

const {firstName, lastName, developers, age} = developer

console.log(firstName, lastName, developers, age)

//spread operator
let arr1 = [1,2,3,"dev"];
let arr2 = [10,12,13, ...arr1, 100, 102,130]
console.log(arr2)


let obj1 = {
    name: "dev"
}

let obj2 = {
    town: "Janakpur",
    ...obj1,
    city: "kathmandu"   
}

console.log(obj2)

//rest operator - ... used in any function argument

function add(...args) {
    let sum = 0;
    args.map((v)=>{
        sum += v
    })
    console.log(sum)
}

add(1,2,3,12)

