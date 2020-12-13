// ES6 classess

// now got class
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName=firstName;
//         this.lastName = lastName;
//         this.brithday=    Date(dob);

//     }

//     greeting(){
//         return `Hello there, ${firstName} ${lastName} `;
//     }

//     calculateAge(){
//         const diff=Date.now() - this.brithday.getTime();
//         const ageDate= new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getsMarried(newLastName){
//         this.lastName= newLastName;
//     }
//     // static method, cannot use addNumbers(1,2);
//     static addNumbers(x,y){
//         return x+y;
//     }
// }

// const mary = new Person('Mary','Smithy', '11-13-1980');


// mary.getsMarried('Thomson');


// console.log(mary);


// // call static method, must use object name

// console.log(Person.addNumbers(1,5));


// sub class

class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting(){
        return `hello there, ${this.firstName} ${this.lastName}`
    }

    // static also can be inherinted
    static getMembershipCost(){
        return 500;
    }
}

// inherintane
class Customer extends Person{
    constructor(firstName, lastName,phone, membership){
        // parent class constructor
        super(firstName, lastName);

        this.phone=phone;
        this.membership=membership;
    }


}

const John = new Customer('John', 'Smelly', '555-55-555', 'Standard');

console.log(John);

console.log(John.greeting());

console.log(Customer.getMembershipCost());