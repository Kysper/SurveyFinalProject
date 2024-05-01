
let qArray = ["What type of gaming platform do you primarily use? (PC, console, mobile)?",
  "What are some games you enjoy on the %s",
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
  s1: (index) => { s0[index] },
  s2: ["every release of new hardware", "every year", "every 3 years", "every 5 years", "whenever something breaks"],
  s3: ["Final Mouse","Corsair","Asus","Logitech","Razer","SteelSeries","other"],
};
