const http = new easyHTTP();


// ajax better work with callback
// http.get("https://jsonplaceholder.typicode.com/posts",function(error, post){

// if(error){
//     console.log(error);
// }else{
//     console.log(post);
//     }
// });

// Get single post
// http.get("https://jsonplaceholder.typicode.com/posts/1",function(error, post){

// if(error){
//     console.log(error);
// }else{
//     console.log(post);
//     }
// });




// the assigned in below gives undefined=> it return before it was added=> so undefined
// const post=  http.get("https://jsonplaceholder.typicode.com/posts");
// console.log(post)


// GET POST- part 2

// create data

const data = {
    title: 'Custom Post',
    body:'This is a custom post'
};

// http.post("https://jsonplaceholder.typicode.com/posts",data, function(error,post){
    
// if(error){
//     console.log(error);
// }else{
//     console.log(post);
//     }


// });


// Put post-part 2 - update post

// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(error,post){
    
// if(error){
//     console.log(error);
// }else{
//     console.log(post);
//     }


// });


// DELETE part- part 2 

http.delete("https://jsonplaceholder.typicode.com/posts/1",function(error, response){

if(error){
    console.log(error);
}else{
    console.log(response);
    }
});