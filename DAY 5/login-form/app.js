let form = document.getElementById("loginForm");
let name = document.getElementById("nameInput");
let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");
let message = document.getElementById("message");
let submit = document.getElementById("submitBtn");
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     
form.addEventListener("submit", function(event) {
    event.preventDefault();
    emailPattern.test(email.value) 
   // if(name.value == "" || email.value == "" || password.value == ""){
       // message.innerHTML = "Name is required"} for personal reference
       if (name.value === "") {
        message.innerHTML = "Name is required";
      } else if (email.value === "") {
        message.innerHTML = "Email required";
      } else if (password.value === "") {
        message.innerHTML = "Insert a password";
      }else if (!emailPattern.test(email.value)) {
        message.innerHTML = "Please enter a valid email";
      }else if (password.value.length < 8) {
        message.innerHTML = "Too poor";
      }else{
        message.innerHTML = "Completed successfully"
      }
  });
  