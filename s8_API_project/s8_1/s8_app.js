// Search Input - part 2

// initialize github class -part 2

const github = new Github;

// initialize UI class

const ui = new UI;


const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    // get input

    const userText= e.target.value;
    // make sure not blank

    if (userText!="") {

        // make http call

        github.getUser(userText)
        .then(data=> {
            if (data.profile.message ==="Not Found") {
                // show alert- part 4
                

                ui.showAlert(`User not found`, 'alert  alert-danger');

            
            } else{
                console.log(data);
                // show profile-part 3
                ui.showProfile(data.profile);

                ui.showRepos(data.repos);
            }
        })
    }  else{
        // clear profile - part4
        ui.clearProfile(); 
    }

});

