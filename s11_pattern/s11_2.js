// Singleton pattern and Factory pattern


// Singleton  pattern -  assign a variable within and return it, so it can fetch one thing only
const Singleton =(function(){
    let instance;

    function createInstance(){
        // create new object literal
        const person = new Object({name: 'Brad'});
        return person;
    }

    return{
        getInstance : function(){
            if (!instance){
                instance = createInstance();
            }

            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// console.log(instanceA);

// it is not unique, return the same instance object
console.log( instanceA === instanceB);


// Factory methods - do many object with shared, shared object with one variable
// ; other with this
// create an object for many object 
function MemberFactory (){
    this.createMember = function(name, type){
        let member;

        // create object with type
        if (type === 'simple'){
            member = new SimpleMembership(name);
        } else if(type === 'standard'){
            member = new StandardMembership(name);
        } else if( type === 'super'){
            member = new SuperMembership(name);
        }

        // add a type in member object
        member.type = type;

        member.define = function(){
            console.log(`${this.name} (${this.type}) : ${this.cost}`);
        }

        return member;
    }
}

// two option:
// one
// const SimpleMembership = function(name){
//     this.name = name;
//     this.cost = '$5';
// }

// two
 function SimpleMembership (name){
    this.name = name;
    this.cost = '$5';
}


const StandardMembership = function(name){
    this.name = name;
    this.cost = '$10';
}

const SuperMembership = function(name){
    this.name = name;
    this.cost = '$20';
}

const members= [];

const factory = new MemberFactory();


members.push(factory.createMember('Johny', 'simple'));
members.push(factory.createMember('Jackson', 'super'));
members.push(factory.createMember('Chris', 'standard'));



console.log(members);


members.forEach(function(member){
    member.define();
})