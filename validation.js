let userName = document.getElementById("username");
let pwd = document.getElementById("password");
let profileForm = document.getElementById("profile-form");
let loginForm = document.getElementById("login-form")
let allowSubmission = false;

const pattern = new RegExp("/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/", "g");

document.addEventListener("input", function (event) {
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
   if (input.id == "email" && !(input.value.includes("@") && input.value.includes("."))) {
      document.getElementById("label-" + input.id).textContent = setMessages(input)[1];
      input.style.borderColor = "red";
      input.classList.add("invalid");
      return
   }

   //Zipcode
   if (input.id == "zip" && input.value.length != 5) {
      document.getElementById("label-" + input.id).textContent = setMessages(input)[1];
      input.style.borderColor = "red";
      input.classList.add("invalid");
   }

   //If all is passed then success!
   if (!input.classList.contains("invalid")) {
      document.getElementById("label-" + input.id).textContent = setMessages(input)[setMessages(input).length - 1]
      input.style.borderColor = "green";
      allowSubmission = true;
      return
   }
   /* Profile */
});


window.onload = function () {

   if (document.getElementById("header")) {
      user = JSON.parse(localStorage.getItem("users"));
      let header = document.getElementById("header");
      header.textContent = "Welcome " + user[0].userName;
   }
}
