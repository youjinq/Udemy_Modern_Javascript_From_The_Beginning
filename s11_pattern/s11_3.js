// observer pattern

// the observers with fn

// function EventObserver() {
//     this.observers = [];
//   }
  
// //   addd multiple method into prototype
//   EventObserver.prototype = {
//     subscribe: function(fn) {
//       this.observers.push(fn);
//       console.log(`You are now subscribed to ${fn.name}`);
//     },
//     unsubscribe: function(fn) {
//       // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
//       this.observers = this.observers.filter(function(item){
//         if(item !== fn) {
//           return item;
//         }
//       });
//       console.log(`You are now unsubscribed from ${fn.name}`);
//     },
//     fire: function() {
//       this.observers.forEach(function(item) {
//         item.call();
//       });
//     }
//   }
  
//   const click = new EventObserver();
  
//   // Event Listeners
//   document.querySelector('.sub-ms').addEventListener('click', function() {
//     click.subscribe(getCurMilliseconds);
//     console.log(click);
//   });
  
//   document.querySelector('.unsub-ms').addEventListener('click', function() {
//     click.unsubscribe(getCurMilliseconds);
//   });
  
//   document.querySelector('.fire').addEventListener('click', function() {
//     click.fire();
//   });
  
//   // Click Handler
//   const getCurMilliseconds = function() {
//     console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
//   }
  



// ES6 class

class EventObserver {
    constructor() {
      this.observers = ['hello','bye'];
    }
  
    subscribe(fn) {
      this.observers.push(fn);
      console.log(this.observers);
      console.log(`You are now subscribed to ${fn.name}`);
    }
  
    unsubscribe(fn) {
       // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
       console.log(this.observers);

    //    if item in list not match with fn given, then it return a new list, else filter all
       this.observers = this.observers.filter(function(item){
        //   if foudn simialr item with fn, then filter out
        if(item !== fn) {
          return item;
        }


      }
      );

      console.log(`You are now unsubscribed from ${fn.name}`);
    }
  
    fire() {
      this.observers.forEach(function(item) {
        // call all fn in observers
        item.call();
      });
    }
  }

  const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function() {
  click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}




