// reformat with aysnc and await

const http = new EasyHTTP;


// GET users

http.get('https://jsonplaceholder.typicode.com/users')
    .then(data=>console.log(data))
    .catch(err=>console.log(err));


// user data

const data ={
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
};

// Post - auto update with the id to 11 
// http.post('https://jsonplaceholder.typicode.com/users',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));

// update user to id 5

// http.put('https://jsonplaceholder.typicode.com/users/5',data)
// .then(data=>console.log(data))
// .catch(err=>console.log(err));


// // delete user
http.delete('https://jsonplaceholder.typicode.com/users/8')
.then(data=>console.log(data))
.catch(err=>console.log(err));
