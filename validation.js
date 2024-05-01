let userName = document.getElementById("username");
let pwd = document.getElementById("password");
let profileForm = document.getElementById("profile-form");
let loginForm = document.getElementById("login-form")
let allowSubmission = false;

document.addEventListener("input", function (event) {
   input = event.target;
   if (input.value == null) {
      input.style.borderColor = "red";
      document.getElementById("label-" + input.id).textContent = setMessages(input)[0];
      allowSubmission = false;
   } else if ((input.value.length < 3 && input.id == "username") || (input.value.length < 8 && input.id == "password")) {
      document.getElementById("label-" + input.id).textContent = setMessages(input)[1];
      input.style.borderColor = "red";
   } else {
      document.getElementById("label-" + input.id).textContent = setMessages(input)[2];
      input.style.borderColor = "green";
      allowSubmission = true;
   }
});

function setMessages(e) {
   if (e.id == "password") {
      return ["Password Cannot be left blank.", "Password Must be 8 characters or longer", "Password"];
   }

   if (e.id == "username") {
      return ["User Name Cannot be left blank.", "User Name Must be 3 characters or longer", "User Name"];
   }
}


document.addEventListener("submit", function (event) {
   event.preventDefault();
   if (allowSubmission) {
      let inputList = event.target.querySelectorAll('input')
      let data = {
         userName: inputList[0].value,
         password: inputList[1].value
      };
      localStorage.setItem("user", JSON.stringify(data));

      window.location.href = "home.html"
   } else {
      window.location.href = "login.html"
      msg = "Account has not been created";
   }
})

window.onload = function () {
   let user = localStorage.getItem("user");
   if (user == null) {
      window.location.href = "login.html";
   } else {
      if (document.getElementById("header")) {
         let header = document.getElementById("header");
         header.textContent = "Welcome " + JSON.parse(user).userName;
      }
   }
}