

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

let data = {}

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
