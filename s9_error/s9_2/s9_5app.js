
// UI
// Form Blur event listeners


document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zipcode').addEventListener('blur', validateZip);

document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName(e){
    // const z = e.target.value
    // console.log(z);
    const name = document.getElementById('name');
    const re= /^[a-zA-z]{2,10}$/;

    if (!re.test(name.value)) {
      name.classList.add('is-invalid');  
    } else {
        name.classList.remove('is-invalid');  
    }
}


function validateZip(){
  const zip = document.getElementById('zipcode');
  // limit 5 infront then (dash then 4 behind is optional) 
  const re= /^[0-9]{5}(-[0-9]{4})?$/;
  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid');  
  } else {
      zip.classList.remove('is-invalid');  
  }
    
}


function validateEmail(){
  const email = document.getElementById('email');
  // limit 5 infront then (dash then 4 behind is optional) 

  //  it cab be any number from a-z , A-Z, 0-9, _, -,.   + for remaining character
  const re= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!re.test(email.value)) {
    email.classList.add('is-invalid');  
  } else {
      email.classList.remove('is-invalid');  
  }
    
}

function validatePhone(){
  const phone = document.getElementById('phone');
  // limit 5 infront then (dash then 4 behind is optional) 

  //  it cab be any number from a-z , A-Z, 0-9, _, -,.   + for remaining character

// (3 number) ? represent optional here
  const re= /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  if (!re.test(email.value)) {
    phone.classList.add('is-invalid');  
  } else {
      phone.classList.remove('is-invalid');  
  }
    
}
    