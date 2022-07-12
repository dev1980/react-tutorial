// class and object

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.Mydetails = function() {
//     console.log(`My name is ${this.name} and i am ${this.age} year old `)
// }

// let person1 = new Person("dev", 40);
// console.log(person1)
// person1.Mydetails();
// let person2 = new  Person("John Doe", 45)
// console.log(person2);
// person2.Mydetails();



// let obj = {name:"dev2", age: 40};
// console.log(obj)
// let fruit = "mango";

// class Customer {
//     constructor(n) {
//         this.n = n;
//     }

//     buy() {
//         console.log(this.n)
//     }
// }

// let customer1 = new Customer("Dev");
// console.log(customer1);
// customer1.buy();

// let customer2 = new Customer('John Doe')
// console.log(customer2)
// customer2.buy();

// inheritance (when we need to access propeties and method of one class to another class);

 // how to access name and abd buy() function in below class.
// class GuestCustomer extends Customer{
   
//     hello() {
//         console.log("Hello.....")
//     }
// }


// let guestCustomer1 = new GuestCustomer("robert welker")
// console.log(guestCustomer1)
// guestCustomer1.buy();

// Note we can add es7 variable and arrow function staright to our class

class Customer {
    constructor(n) {
        this.n = n;
    }
 
    num = 40;

    buy = () => {
        console.log(this.n)
    }
}

let customer1 = new Customer("Dev");
console.log(customer1);
customer1.buy();

// inheritance (when we need to access propeties and method of one class to another class);

 // how to access name and abd buy() function in below class.
// class GuestCustomer extends Customer{
   
//     hello() {
//         console.log("Hello.....")
//     }
// }

// let guestCustomer1 = new GuestCustomer("John doe")
// console.log(guestCustomer1)
// guestCustomer1.hello();
// guestCustomer1.buy()