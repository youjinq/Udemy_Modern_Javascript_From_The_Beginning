
// consturctor
function easyHTTP(){ 
    // property
    this.http = new XMLHttpRequest();
}

// HTTP get request
// easyHTTP.prototype.get = function(url){
//     this.http.open('GET', url, true);

//     let self= this;

//     this.http.onload= function(){

//         // this.http is undefined, because it is within function, another scope
//         if (self.http.status === 200){
//            callback(null, self.http.responseText);
//         } else{
//             callback('Error' + self.http.status);
//         }
//     }

//     this.http.send();
// }

easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self= this;

    this.http.onload= function(){

        // this.http is undefined, because it is within function, another scope
        if (self.http.status === 200){
            // error, print
           callback(null, self.http.responseText);
        } else{
            callback('Error:' +self.http.status);
        }
        
    }

    this.http.send();
};



// HTTP POST request - send data -part 2

easyHTTP.prototype.post = function(url,data,callback){
    this.http.open('POST',url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self= this;

    this.http.onload= function(){

        // this.http is undefined, because it is within function, another scope
            // error, print
           callback(null, self.http.responseText);
    }


    // send json stringify- send it as json string
    this.http.send(JSON.stringify(data));
}

// HTTP put request -part 2 -update post

easyHTTP.prototype.put = function(url,data,callback){
    this.http.open('PUT',url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self= this;

    this.http.onload= function(){

        // this.http is undefined, because it is within function, another scope
            // error, print
           callback(null, self.http.responseText);
    }


    // send json stringify- send it as json string
    this.http.send(JSON.stringify(data));
}

// HTTP delete request (get)


easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);

    let self= this;

    this.http.onload= function(){

        // this.http is undefined, because it is within function, another scope
        if (self.http.status === 200){
            // error, print
           callback(null, 'Post Deleted');
        } else{
            callback('Error:' +self.http.status);
        }
        
    }

    this.http.send();
};
