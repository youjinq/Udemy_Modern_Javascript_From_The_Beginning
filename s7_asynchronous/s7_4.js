// callback function    & promise

// mimic our server

// server

// synchoronous way
// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
//   ];

// function createPost(post) {
//   setTimeout(function() {
//     posts.push(post);
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();


// aysnchroous call => function can be passed in another function


// function createPost(post,callback) {
//   setTimeout(function() {
//     posts.push(post);
//     callback();
//   }, 2000);
// }


// function getPosts() {
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }


// // call back => callback like substitable function name
// createPost({title: 'Post Three', body: 'This is post three'},getPosts);




// promise



function createPost(post) {

  return new Promise(function (resolve,reject){
    setTimeout(function() {
      posts.push(post);

      let error = false;
      if (!error){
        resolve();
      }else{reject('Error: Something went wrong')};

    }, 2000);

  });

}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}


// call back => callback like substitable function name
createPost({title: 'Post Three', body: 'This is post three'})

// then always run on resolve 

.then(getPosts);

// show error in proper line, not in uncaught line
// .catch(function(error){
//   console.log(error);
// });
