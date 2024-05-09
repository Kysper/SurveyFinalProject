

//Questions
let qArray = ["Question 1: What type of gaming platform do you primarily use? (PC, console, mobile)?",
  "Question 2: What are some games you enjoy on it?",
  "Question 3: How often do you upgrade your gaming hardware (e.g., graphics card, processor)?",
  "Question 4: Which brand of gaming mouse do you prefer?",
  "Question 5: What factors are most important to you when choosing a gaming keyboard?",
  "Question 6: Do you use a gaming headset while gaming?",
  "Question 7: How satisfied are you with your current gaming monitor in terms of resolution and refresh rate?",
  "Question 8: What type of gaming controller do you prefer for console gaming?",
  "Question 9: Have you ever customized your gaming setup with RGB lighting or other accessories?",
  "Question 10: Are you more inclined to purchase wired or wireless gaming peripherals?"];

//Follow up Questions
let qArraySub = [
  "", "", "",
  "What brand of mouse do you use?", "", "", "Which one?",
]


//Drop down selections
let selections = {
  s0: ["PC", "Console", "Mobile"],
  s1: ["Every new release", "Every year", "Every 3 years", "Every 5 years", "Whenever something breaks"],
  s2: ["Final Mouse", "Corsair", "Asus", "Logitech", "Razer", "SteelSeries", "Other"],
  s3: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
};

//Saved
let userData = {
  username: document.getElementById("username") ? document.getElementById("username").value : "",
  pwd: document.getElementById("password") ? document.getElementById("password").value : "",

  firstName: document.getElementById("firstName") ? document.getElementById("firstName").value : "",
  lastName: document.getElementById("lastName") ? document.getElementById("lastName").value : "",
  email: document.getElementById("email") ? document.getElementById("email").value : "",
  address: document.getElementById("address") ? document.getElementById("address").value : "",
  state: document.getElementById("state") ? document.getElementById("state").value : "",
  zip: document.getElementById("zip") ? document.getElementById("zip").value : "",

  q1: document.getElementById("input-select-0") ? document.getElementById("input-select-0").value : "",
  q2: document.getElementById("input-select-1") ? document.getElementById("input-select-1").value : "",
  q3: document.getElementById("input-select-2") ? document.getElementById("input-select-2").value : "",
  q4: document.getElementById("input-select-3") ? document.getElementById("input-select-3").value : "",
  q5: document.getElementById("input-select-4") ? document.getElementById("input-select-4").value : "",
  q6: document.getElementById("input-select-5") ? document.getElementById("input-select-5").value : "",
  q7: document.getElementById("input-select-6") ? document.getElementById("input-select-6").value : "",
  q8: document.getElementById("input-select-7") ? document.getElementById("input-select-7").value : "",
  q9: document.getElementById("input-select-8") ? document.getElementById("input-select-8").value : "",
  q10: document.getElementById("input-select-9") ? document.getElementById("input-select-9").value : "",

  subQ1: document.getElementById("sub-q-1") ? document.getElementById("sub-q-1").value : "",
  subQ2: document.getElementById("sub-q-2") ? document.getElementById("sub-q-2").value : "",

}

//String validations
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
  if (e.id == "zip") return ["Zip must not be left blank", "5 numbers needed", "Zip"];

}
