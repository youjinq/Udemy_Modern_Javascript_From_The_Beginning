/**
 * 
 * Easy HTTP library 2 -async and await
 * 
 * 
 * @version 3.0.0
 * @author Lim
 * @license udemy
 * 
 * 
 */
// simple request

// class EasyHTTP{
//     // make get request
//     get(url){
//         fetch(url)
//         .then(res=>res.json())
//         .then(data=> console.log(data))
//         .catch(err=>console.log(err));
//     }
//  }


// async auto make it as promise 
//  get request with return only

class EasyHTTP{
    // make get request 
    async get(url){

        const response = await fetch(url);
        const resdata = await response.json();
        return resdata;
 
        // return new Promise((resolve,reject)=>{
        // fetch(url)
        // .then(res=>res.json())
        // .then(data=> resolve(data))
        // .catch(err=>reject(err));
        // })
    }


    // make post request =>add method ,headers,body
    async post(url,data){

        const response = await fetch(url,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            // send data to here
            body:JSON.stringify(data)
        })

        const resdata = await response.json();
        return resdata;
    }
    // put request
    async put(url,data){
        
        const response =  await fetch(url,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })

        const resdata = await response.json();
        return resdata;
    }

        // delete request=> no body sending data
    async delete(url,data){

            const response = await fetch(url,{
                method: 'DELETE',
                headers:{
                    "Content-Type": "application/json"
                },
            })
            const resdata = await 'Resource deleted...';
            return resdata;
        }



 }