// asynchronous code - doesnt need to waill the post reload for proceed
// XHR reuqest=> txt

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // create XHR object
  const xhr = new XMLHttpRequest();

  // open , get = read

  xhr.open("GET", "s7_1_data.txt", true);

  // optional- used for spinners/ loaders => always in 3 for readystatus
  xhr.onprogress = function () {
    console.log("Ready state", xhr.readyState);
  };

  // load the file content -better than ready state value, bcs ready state will be 4 aldy in here
  // xhr object no need write xhr.prototype.onload
  xhr.onload = function () {
    console.log("Ready state", xhr.readyState);

    if (this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML =`<h1>${this.responseText}</h1>`;
    }
    // HTTP STATUS
    // 200 :"OK"
    // 403 :"FORBIDDEN"
    // 404 :"NOT FOUND"



  };

  // include the readystate values - old syntax (not recommend to use it ;it include onreadystatechange)
  // xhr.onreadystatechange = function(){
  //     console.log('Ready state', xhr.readyState);
  //     if (this.status ===200 && this.readyState === 4) {
  //         console.log(this.responseText);

  //     }
  // }

  // readyState Values
  // 0 :"OK"
  // 1 :"request not initialized"
  // 2 :"server connection established"
  // 3 :"request received"
  // 4 :"request finished and response is ready"



//   error alert if something went wrong
  xhr.onerror= function(){
      console.log('Requst errorrr....');
  }
  // xhr send at the end
  xhr.send();
}
