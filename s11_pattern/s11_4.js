// mediator pattern -central object


// chatroom idea
//  1 parameter for register mediator
// send 2 parameter to 3parameter mediator 
// mediator then back to two parameter and print 3 parameters 

// object

const User= function(name){
    this.name = name;
    // wait for central object add us in chatroom
    this.chatroom = null;
}

User.prototype={
    send: function(msg, to){
        // this is the user
        this.chatroom.send(msg,this, to)

    },

    receive: function(msg, from){
        console.log(`${from.name} to ${this.name} : ${msg}`);
    },




}

// object

function Chatroom(){
    // track people registered 
    let users = {};

    // two function at property
    return {
        register: function(user){
            // set up name in users array for sending everybody purpose
            users[user.name] =user;
            // point to this chat room  ; create chatroom with User parameter setup
            user.chatroom= this;
            console.log(this);
        },


        // mediator from send of User

        // from = this from above; so can use from.name
        send:function(msg,from, to  ){
            if (to) {
                // single user msg
                to.receive(msg,from);
            } else{
                // mass msg

                // loop the users array
                for (key in users){

                    if (users[key] !==from) {
                        users[key].receive(msg,from);
                    }   
                }
            }
        }
    }
}

// init new object
const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

// chatroom as mediator
const chatroom = new Chatroom();

// register users[this.name]= brad; userchatroom = Chatroom (with register and send)

chatroom.register(brad);

chatroom.register(jeff);
chatroom.register(sara);

// brad.send('Hello Jeff', jeff);
// sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hello Everyone!!!!');