/**
 * 
 * Easy HTTP library 2
 * 
 * 
 * @version 2.0.0
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

//  get request with return only

class EasyHTTP{
    // make get request 
    get(url){
        return new Promise((resolve,reject)=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> resolve(data))
        .catch(err=>reject(err));
        })
    }


    // make post request =>add method ,headers,body
    post(url,data){
        return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            // send data to here
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=> resolve(data))
        .catch(err=>reject(err));
        })
    }
    // put request
    put(url,data){
        return new Promise((resolve,reject)=>{
        fetch(url,{
            method: 'PUT',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=> resolve(data))
        .catch(err=>reject(err));
        })
    }

        // delete request=> no body sending data
        delete(url,data){
            return new Promise((resolve,reject)=>{
            fetch(url,{
                method: 'DELETE',
                headers:{
                    "Content-Type": "application/json"
                },
            })
            .then(res=>res.json())
            .then(()=> resolve('Resource Deleted'))
            .catch(err=>reject(err));
            })
        }



 }