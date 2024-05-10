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
        if (localStorage.getItem("users") != null) {



            let surveyList = document.getElementById("surveyList");
            let users = JSON.parse(localStorage.getItem("users"));
            let profiles = JSON.parse(localStorage.getItem("profiles"));
            let surveys = JSON.parse(localStorage.getItem("surveys"));
            console.log(surveys)

            for (let values of Object.values(surveys[0])) {
                console.log(values)
                let h4 = document.createElement("div");
                let txtNode = document.createTextNode(values);
                h4.appendChild(txtNode);
    
                surveyList.appendChild(h4);
            }

        };
    }
}

document.addEventListener("submit", function (event) {
    event.preventDefault();

    if (allowSubmission || event.target.id.includes("panel")) {
        let inputList = event.target.querySelectorAll('input')

        //Saves data from submit and redirects to next page
        if (event.target.id == "login-form") {
            if (userHasAccount(inputList, "users")) {
                window.location.replace("home.html");
            } else {
                saveData(inputList, "users");
                window.location.replace("home.html");
            }

        } else if (event.target.id == "profile-form") {
            if (userHasAccount(inputList, "users")) {
                window.location.replace("index.html");
            } else {
                saveData(inputList, "profiles");
                window.location.replace("index.html")
            }

        } else {
            saveData(surveyInputs, "surveys");
            window.location.replace("complete.html");
        }

    }

    function userHasAccount(inputList, key) {
        let users = JSON.parse(localStorage.getItem(key));
        return users != null && users.includes(inputList[0].value);
    }
})




