// Pattern - programming template

// Module and Revealing module pattern


// module-pattern - favourite pattern by brad traversy

// basic structure - auto run it with () at the end;
// function ( {
//     // declare private vars and functions

//     return{
//         // declare public var and functions
//     }
// })();


// standard module pattern - return with another callback method to private method
const UICtrl = (function(){
    let text= 'Hello world';


    const changeText= function () {
        const element = document.querySelector('h1');
        element.textContent = text; 
        
    }

    return {
        callChangeText : function(){
            changeText();
            console.log(text);
        }
    }
})();


UICtrl.callChangeText();

// if dun want run initiate, change a bit without () at the end, and then UICtrl().callChangeText();

// cannot call private var and function

// UICtrl.changeText();


// revealing module pattern - map  the object literal directly reveals methods name inside private

const ItemCtrl =    (function(){
    // private side
    let data= [];
    
    function add(item){
        data.push(item);
        console.log('Item Added');
    }

    function get(id){
        return data.find(item =>{
            return item.id ===id;
        }) 
    }

    return {

        // public
        add: add,
        get : get
    }


})();

ItemCtrl.add({id:1, name:'John'});
ItemCtrl.add({id:2, name:'Mark'});

ItemCtrl.get(1);
