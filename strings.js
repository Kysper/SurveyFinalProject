
let qArray = ["What type of gaming platform do you primarily use? (PC, console, mobile)?",
  "What are some games you enjoy on it?",
  "How often do you upgrade your gaming hardware (e.g., graphics card, processor)?",
  "Which brand of gaming mouse do you prefer?",
  "What factors are most important to you when choosing a gaming keyboard?",
  "Do you use a gaming headset while gaming?",
  "How satisfied are you with your current gaming monitor in terms of resolution and refresh rate?",
  "What type of gaming controller do you prefer for console gaming?",
  "Have you ever customized your gaming setup with RGB lighting or other accessories?",
  "Are you more inclined to purchase wired or wireless gaming peripherals?"];

let selections = {
  s0: ["PC", "Console", "Mobile"],
  s1: ["Every new release", "Every year", "Every 3 years", "Every 5 years", "Whenever something breaks"],
  s2: ["Final Mouse", "Corsair", "Asus", "Logitech", "Razer", "SteelSeries", "Other"],
  s3: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
};


let userData = {
  username: document.getElementById("zip").value,
  pwd: document.getElementById("zip").value,

  firstName: document.getElementById("firstName").value,
  lastName: document.getElementById("lastName").value,
  email: document.getElementById("email").value,
  address: document.getElementById("address").value,
  state: document.getElementById("state").value,
  zip: document.getElementById("zip").value,
}
