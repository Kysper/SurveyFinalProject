const mainElement = document.querySelectorAll("main")[0];
const beginBtn = document.getElementById('begin-survey');
const body = document.getElementsByTagName("body");
beginBtn.addEventListener('click', startSurvey)
let questionList = [];
function startSurvey() {

    beginBtn.remove(this);
    for (let i = 0; i < qArray.length; i++) {
        questionList.push(generateQuestion(i));
    }
    mainElement.appendChild(questionList[0]);
}


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
    } else if (e.target.id == "submitBtn") {
        let submitBtn = document.getElementById(e.target.id);
        redirectToCompletedPage = submitSurvey(submitBtn.className.split("-")[1], questionList);
        if (redirectToCompletedPage != null) {
            window.location.href = redirectToCompletedPage;
        }
    } else {
        // Do nothing no other target accepted
    }
})



