// Object Oriented Programming

var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};


//you can use dot notation to update any object.
// You can also create new object property with this

userOne.name = 'Yoshi';
userOne.age = 25;

//you can also use bracket to update object.

userOne['name'] = 'Ryu';

// but this is not recommeded, ideal situation is when you add all the property inside the object.
// but in some cases you will have to update like this.