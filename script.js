const mainElement = document.querySelectorAll("main")[0];
const beginBtn = document.getElementById('begin-survey');
const body = document.getElementsByTagName("body");
let questionList = [];
if (document.getElementById('begin-survey')) {

    //Initalizes survey
    beginBtn.addEventListener('click', startSurvey)


    //Creates questions adds first question to page
    function startSurvey() {

        beginBtn.remove(this);
        for (let i = 0; i < qArray.length; i++) {
            questionList.push(generateQuestion(i));
        }

        mainElement.appendChild(questionList[0]);

    }
}

//Moves the questions back and forth and setups submit button
document.addEventListener("click", function (e) {
    if (e.target.id == "nextBtn") {
        let nextBtn = document.getElementById(e.target.id);
        let nextQuestion = jumpToNextQuestion(nextBtn.className.split("-")[1], questionList)
        if (nextQuestion != null) {
            mainElement.removeChild(nextBtn.parentElement);
            mainElement.appendChild(nextQuestion);
        }

    } else if (e.target.id == "prevBtn") {
        let prevBtn = document.getElementById(e.target.id);
        let prevQuestion = jumpToPrevQuestion(prevBtn.className.split("-")[1], questionList);
        if (prevQuestion != null) {
            mainElement.removeChild(prevBtn.parentElement);
            mainElement.appendChild(prevQuestion);
        }
    } else {
        // Do nothing no other target accepted
    }
})


//Checks if the value is Other in question 4 generates follow up question
document.addEventListener("change", function (event) {
    if (event.target.value == "Other") {
        let subQuestion = generateQuestion(3, true);
        console.log(event.target.parentElement)
        event.target.parentElement.appendChild(subQuestion);
    }

    if (event.target.value.toLowerCase() == "yes") {
        let subQuestion = generateQuestion(6, true);
        console.log(event.target.parentElement)
        event.target.parentElement.appendChild(subQuestion);
    }
})

if (document.getElementById("surveyList")) {
    window.onload = function () {
        if (localStorage.getItem("user") != null) {

            let users = JSON.parse(localStorage.getItem("user"));
            let profiles = JSON.parse(localStorage.getItem("profiles"));
            let survey = JSON.parse(localStorage.getItem("survey"));
            
            let p = document.createElement("p");
            let h4 = document.createElement("h4");
            let txtNode = document.createTextNode(`${users.userName}`);
      
            let surveyList = document.getElementById("surveyList");
        };
    }
}


