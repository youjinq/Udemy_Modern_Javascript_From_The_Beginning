class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.IdInput = document.querySelector("#id");
    this.postSubmit = document.querySelector(".post-submit");
    this.titleInput = document.querySelector("#title");
    this.forState = "add";
  }

  showPosts(posts) {
    let output = "";

    posts.forEach((post) => {
      output += `
            <div class='card mb-3'>
            <div class="card-body">
                <h4 class="card-title">${post.title}</h4>
                <p class="card-text">${post.body}</p>
                <a href="#" class="edit card-link" data-id="${post.id}"> 
                <i class="fa fa-pencil"></i>
                </a>

                <a href="#" class="delete card-link" data-id="${post.id}"> 
                <i class="fa fa-remove"></i>
                </a>
            </div>
            </div>
            `;
    });
    this.post.innerHTML = output;
  }

  showAlert(msg, className) {
    this.clearAlert();

    // create div
    const div = document.createElement("div");
    // add classes

    div.className = className;
    // add text

    div.appendChild(document.createTextNode(msg));

    // get parent

    const container = document.querySelector(".postsContainer");
    // get posts
    const posts = document.querySelector("#posts");

    container.insertBefore(div, posts);

    // set time 3s
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
  }

  fillForm(data) {
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;
    this.IdInput.value = data.id;

    // part-4
    this.changeFormState("edit");
  }

  clearIdInputs(){
      this.IdInput.value="";
  }



  changeFormState(type) {
    if (type === "edit") {
      this.postSubmit.textContent = "Update Post";
      // rewrite classname if wanna replace
      this.postSubmit.className = "post-submit btn btn-warning btn-block";

      // create cancel button
      const button = document.createElement("button");
      button.className = "post-cancel btn btn-light btn-block";
      button.appendChild(document.createTextNode("Cancel Edit"));
      // get parent
      const cardForm = document.querySelector(".card-form");
      //  get element to insert before

      const formEnd = document.querySelector(".form-end");

      //   insert cancel btn
      cardForm.insertBefore(button, formEnd);
    } else {
        
      // set back to default
      this.postSubmit.textContent = "Post It";
      this.postSubmit.className = "post-submit btn btn-primary btn-block";
      //   remove cancel btn if it is there
      if(document.querySelector('.post-cancel')){
        document.querySelector('.post-cancel').remove();
      }
      //clear ID from hidden field
      this.clearIdInputs();

    //   clear text
    this.clearFields();
      
    }
  }
}

export const ui = new UI();
