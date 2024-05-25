// Object Oriented Programming

// var userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };


//you can use dot notation to update any object.
// You can also create new object property with this

// userOne.name = 'Yoshi';
// userOne.age = 25;

//you can also use bracket to update object.

// userOne['name'] = 'Ryu';

// but this is not recommeded, ideal situation is when you add all the property inside the object.
// but in some cases you will have to update like this.


//Classes

//If we ever have to make mupltiple object with similar kind of properties, we have to create new object again & again.
// That is where Class comes into play it will give you a map or blueprint or preset which can be editable. Now you don't have to re write ever code to create same kind of object.
// Classes in javascript are like blueprints
// It is like a master component and objects will be thier instances.


// Constructor Function(): Will let you create object.

// the 'new' keyword
// - Creates a new empty objects {}
// - sets the value of 'this' to be the new empty objects
// - Calls the constructor method

class User{
    constructor(email, name){
        this.email = email;
        this.name = name;
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('marioninjas@.com', 'Mario');

console.log(userOne);
console.log(userTwo);

