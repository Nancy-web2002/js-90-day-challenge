let addBtn = document.getElementById("addBtn");
let userImage = document.getElementById("userImage");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userCountry = document.getElementById("userCountry");
async function getUser() {
    try {
      let response = await fetch("https://randomuser.me/api/");
      let data = await response.json();
      let user = data.results[0];
  
      userImage.src = user.picture.large;
      userName.innerHTML = user.name.first + " " + user.name.last;
      userEmail.innerHTML = user.email;
      userCountry.innerHTML = user.location.country;
    } catch (error) {
      userName.innerHTML = "Something went wrong. Please try again.";
    }
  }
  addBtn.addEventListener("click", getUser);
getUser();