
let count = 0;

//Creates elements based on relative tags, names classes and if it has a text value
function createElement(tag, attrNames, attrValues, className, needsTextNode) {
    let elem = document.createElement(tag);

    for (let i = 0; i < attrNames.length; i++) {
        needsTextNode && attrNames[i] == "text" ?
            elem.appendChild(document.createTextNode(attrValues[i]))
            : elem.setAttribute(attrNames[i], attrValues[i])

    }
    elem.classList.add(className);
    return elem;
}


//Generates question
function generateQuestion(index, subQ) {
    let panel, question, prev, input, select, next, submit;


    panel = createElement("div", ["id"], ["panel-" + index], "panel-" + index, false);
    question = createElement("h4", ["text"], [qArray[index]], "q-" + index, true);
    prev = createElement("button", ["type", "id", "text"], ["button", "prevBtn", "Prev"], "prevBtn-" + index, true);
    input = createElement("input", ["id"], ["input-select-" + index], "input-" + index, false);
    select = createElement("select", ["id"], ["input-select-" + index], "input-" + index, false)
    next = createElement("button", ["type", "id", "text"], ["button", "nextBtn", "Next"], "nextBtn-" + index, true);
    submit = createElement("button", ["type", "id", "text"], ["submit", "submitBtn", "Submit"], "submitBtn-" + index, true);

    if (subQ) {
        let subQuestion = createElement("h4", ["id", "text"], ["sub-q-" + index, qArraySub[index]], "q-sub-" + index, true);
        subQuestion.appendChild(input);
        let btns = document.getElementById("panel-" + index).getElementsByTagName("button")[0]
        btns.insertAdjacentElement("beforebegin", subQuestion)
    } else {


        panel.appendChild(question);

        determineInputType(index, panel, select, input);

        panel.appendChild(prev);
        panel.appendChild(next);
        panel.appendChild(submit);
    }





    return panel;
}


//Determines if the questions are input, or a dropdown
function determineInputType(index, panel, select, input) {
    switch (index) {
        case 0:
            panel.appendChild(createDropDowns(select, index, 0));
            break;

        case 2:
            panel.appendChild(createDropDowns(select, index, 1));
            break;

        case 3:
            panel.appendChild(createDropDowns(select, index, 2));
            break;

        case 6:
            panel.appendChild(createDropDowns(select, index, 3));
            break;

        default:
            panel.appendChild(input);
            break;
    }
}

//Creates options and values to append to select html tag
function createDropDowns(parent, index, qValues) {
    let selectionArr = Object.values(selections);
    for (let i = 0; i < selectionArr[qValues].length; i++) {
        let option = createElement("option", ["id", "text"], ["input-option", selectionArr[qValues][i]], "input-" + index, true)
        parent.appendChild(option);
    }

    return parent;
}

//Runs after the previous button has been pressed
function jumpToPrevQuestion(index, questionList) {
    if ((parseInt(index) - 1) >= 0) {
        return questionList[parseInt(index) - 1];
    }
}
//Runs after the next button has been pressed
function jumpToNextQuestion(index, questionList) {
    if ((parseInt(index) + 1) < questionList.length) {
        return questionList[parseInt(index) + 1];
    }
}

//Run after the submit button has been pressed
function submitSurvey(index, questionList) {
    if (parseInt(index + 1) >= questionList.length) {
        let num = generateBasicUniqueNumber();

        if(localStorage.getItem("user-"+ num) == null){
            setCookie("user", "user-" + num, 30);
            localStorage.setItem("user-"+ num, JSON.stringify(userData));
        };
        return "complete.html"
    }
}

//Not truely random but enough for new user additions
function generateBasicUniqueNumber(){
    let id = Math.floor(Math.random() * 100);
    if (localStorage.getItem("user")) {
        id = Math.floor(Math.random() * id);
    };
    return id;
}