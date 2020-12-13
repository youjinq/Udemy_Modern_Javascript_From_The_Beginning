// working with ajax =>  json

document.getElementById("button1").addEventListener("click", loadCustomer);

document.getElementById("button2").addEventListener("click", loadCustomers);

// Load single customer
function loadCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "s7_2_customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      // make it in object of array=> to enbale using customr.id
      const customer = JSON.parse(this.responseText);
      console.log(customer);

      const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li> Name : ${customer.name} </li>
                <li> Company : ${customer.company} </li>
                <li> Phone : ${customer.phone} </li>

            </ul>`;

      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}

// load multipl object
function loadCustomers() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "s7_2_customer2.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      // make it in object of array=> to enbale using customr.id
      const customers = JSON.parse(this.responseText);
      console.log(customers);

      let output = "";
      customers.forEach(function (customer) {
        //   append new customer on output
        output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li> Name : ${customer.name} </li>
                    <li> Company : ${customer.company} </li>
                    <li> Phone : ${customer.phone} </li>
    
                </ul>`;
      });
      document.getElementById("customers").innerHTML = output;
    }
  };

  xhr.send();
}
