// property & prototype & inherintance(call) & object.create (prototype)


// constructor => wanna use constructor variable should point to this
function Person(firstName, lastName, dob) {
  // take arguement as name
  this.FirstName = firstName;
  this.LastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge=function (){
  //     const diff=Date.now() - this.brithday.getTime();
  //     const ageDate= new Date(diff);
  //     return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// calculate age
Person.prototype.calculateAge = function () {
  // bcs date.now is in value ,so this.birthday gonna change to value by get time
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  //   convert to full year in universal time, 1970 is the first year of UTC
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
// fullname
Person.prototype.getFullName = function () {
  return `${this.FirstName} ${this.LastName}`;
};

// get married
Person.prototype.getMarried = function (newLastName) {
  this.LastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "march 20 1978");

mary.getMarried("Smith");
console.log(mary.getFullName());

console.log(mary.hasOwnProperty("FirstName"));

// prototype inherintance

function Customer(firstName, lastName, birthday, phone, membership) {
  // call to another function/ inherintance
  Person.call(this, firstName, lastName, birthday);

  this.phone = phone;
  this.membership = membership;
}

// inherit the Person prototype method { must inherit first before creating customer}

Customer.prototype = Object.create(Person.prototype);

// one more line to add constructor in prototype => customer.prototype return as Customer() => constructor decide this point to where !important
Customer.prototype.constructor = Customer;

// create customer

const customer = new Customer(
  "Tom",
  "Smith",
  "9-8-12",
  "555-55-555",
  "Standard"
);

console.log(customer);

// Customize getFullName
Customer.prototype.getFullName = function () {
  return `Welcome to here, ${this.FirstName} ${this.LastName}`;
};

// call but not yet inherit from prototype; so must have above line
console.log(customer.getFullName());

const personPrototypes = {
  greeting: function () {
    return `hello there~~ ${this.firstName} ${this.lastName}`;
  },
};

// another option to create consturctor (not recommend)

// inheritance of prototype or object  => object.create takes into the object prototype
const haylou = Object.create(personPrototypes);

// add constructor property
haylou.firstName = "Haylou";
haylou.lastName = "Smith";
haylou.age = 30;

console.log(haylou);
console.log(personPrototypes);

// another method to use object
const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 36 },
});

console.log(brad);
