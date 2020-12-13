// iterator example ES6

function nameIterator(names){
    let nextIndex =0;

    return {
        // return an public function that has next function
        next: function (){
            return nextIndex < names.length ?
            // ++ = +1
            {value: names[nextIndex++], done: false} :
            { done: true};
        }
    }
}

// create an array of name
const nameArr = ['Jack', 'Jill', 'John'];

// init iterator and pss in the name array

const names = nameIterator(nameArr);

// the method to call generator value
console.log(names.next().value);

console.log(names.next().value);

console.log(names.next().value);

console.log(names.next());




// GENERATOR example => function to return multiple values like iterator above

function* sayNames(){
    yield "Jack";
    yield "Jill";
    yield "John";

}


const name =sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);


// ID creator

function* createIds(){
    let index=0;

    while(true){
        yield index++;
    }

}

const gen = createIds();
// start from zero
console.log(gen.next().value);
console.log(gen.next().value);



// iterator pattern

const items1 = [1, 'john', true];

function Iterator(items){
    this.items = items;
    this.index = 0;
}

Iterator.prototype={
    hasNext:function(){
        return this.index < this.items.length
    },

    next: function(){
        return this.item[this.index++]
    }
}

const iter = new Iterator(items1);



while(iter.hasNext()){
    console.log(iter.next());
}