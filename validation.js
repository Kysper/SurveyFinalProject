let userName = document.getElementById("username");
let pwd = document.getElementById("password");
let profileForm = document.getElementById("profile-form");
let loginForm = document.getElementById("login-form")
let allowSubmission = false;

const pattern = new RegExp("/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/", "g");

document.addEventListener("keyup", function (event) {
   input = event.target;
   input.classList.remove("invalid");
   /* Login */
   // catch all for blank inputs that are required
   if (input.value == null) {
      input.style.borderColor = "red";
      if (document.getElementById("label-" + input.id)) {
         document.getElementById("label-" + input.id).textContent = setMessages(input)[0] != null ? setMessages(input)[0] : "";
         allowSubmission = false;
         input.classList.add("invalid");
      }
      return
   }

   //checking general length based on min-length attribute
   if (input.value.length < parseInt(input.getAttribute("min-length"))) {
      document.getElementById("label-" + input.id).textContent = setMessages(input)[1];
      input.style.borderColor = "red";
      input.classList.add("invalid");
      return
   }

   //Checking pwd special char
   if (input.id == "password" && pattern.test(input.value)) {
      document.getElementById("label-" + input.id).textContent = setMessages(input)[2];
      input.style.borderColor = "red";
      input.classList.add("invalid");
      return
   }

   //Email
   if (input.id == "email" && input.value.contains("@") && input.value.contains(".")) {
      document.getElementById("label-" + input.id).textContent = setMessages(input)[1];
      input.style.borderColor = "red";
      input.classList.add("invalid");
      return
   }

   //If all is passed then success!
   if (!input.classList.contains("invalid")) {
      document.getElementById("label-" + input.id).textContent = setMessages(input).length[setMessages(input).length];
      input.style.borderColor = "green";
      allowSubmission = true;
      return
   }
   /* Profile */
});


function setMessages(e) {
   if (e.id == "password") return ["Password cannot be left blank.",
      "Password must be 8 characters or longer",
      "Password must have a special character.",
      "Password must have a number.", "Password must have an upper case character.", "Password"];
   if (e.id == "username") return ["User name cannot be left blank.", "User name must be 3 characters or longer", "User Name"];
   if (e.id == "firstName") return ["First name cannot be left blank.", "First name must be at least 3 characters or longer.", "First Name"];
   if (e.id == "lastName") return ["Last name cannot be left blank.", "Last name must be at least 3 characters or longer.", "Last Name"];
   if (e.id == "email") return ["Email must not be left blank", "Email must be valid (@.com)", "Email"];
   if (e.id == "address") return ["Address must not be left blank", "Add number and street", "Address"];
   if (e.id == "state") return ["State must not be left blank", "Can use full name or abbrivated name (KS)", "State"];
   if (e.id == "zip") return ["Zip must not be invalid", "5 numbers needed", "Zip"];

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

if (document.getElementById("saveProfile")) {
   let saveProfile = document.getElementById("saveProfile");
   saveProfile.addEventListener("click", function () {

   })
}
