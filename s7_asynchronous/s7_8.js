// asyn & await ES7

// async make it as promise
// function myfunc(){
//     return 'Hello'
// }

// console.log(myfunc());

// ASYNC and AWAIT
// async function myfunc() {
//   // return 'Hello';

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("hey"), 1000);
//   });

//   const error = true;

//   if (!error) {
//     // wait until promise is resolved
//     const res = await promise;
//     return res;
//   } else {
//       await Promise.reject( new Error('Something went wrong'))
//   }

// }

// myfunc()
// .then((data) => console.log(res))
// .catch(err=>console.log(err));


async function getUsers(){

    // await the response from fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once it is resolved
    const data = await response.json();
    // only proceed once second parameter is resolved
    return data;
}

getUsers().then(data => console.log(data));