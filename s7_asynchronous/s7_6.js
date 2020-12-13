// Fetch API

document.getElementById('button1').addEventListener('click', getText);



// fetch function

function getText(){

    fetch('s7_6_data.txt')
    .then(response=>{

        // console.log(response.text());
        return response.text();
    })
    // promise again then it will auto to the promisevalue
    .then(data=>{
        console.log(data);
        document.getElementById('output').innerHTML=data;
    })
    // catch error
    .catch(err=>console.log(err));
}

// get button2
document.getElementById('button2').addEventListener('click', getJson);

// fetch function, .then to get data from promise

function getJson(){

    fetch('s7_6_data.json')
    .then(response=>response.json())
    // promise again for data
    .then(data=>{
        console.log(data);
        let output="";
        data.forEach(function(post){

            output+= `<li>${post.title}</li>`;
        });
        console.log(output);
        document.getElementById('output').innerHTML=output;
    })
    // catch error
    .catch(err=>console.log(err));
}

// API data - see the data type ( example here is json)

document.getElementById('button3').addEventListener('click', getExternal);

// fetch function

function getExternal(){

    fetch('https://api.github.com/users').then(function(response){
        // console.log(response.text());
        return response.json();
    }) 
    // promise again for data
    .then(function(data){
        console.log(data);
        let output="";
        data.forEach(function(user){

            output+= `<li>${user.html_url}</li>`;
        });
        document.getElementById('output').innerHTML=output;
    })
    // catch error
    .catch(function(err){
        console.log(err);

    });
}
