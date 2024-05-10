
let count = 0;
let surveyInputs = []

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


    panel = createElement("form", ["id", "method", "action"], ["panel-" + index, "GET", "#"], "panel-" + index, false);
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


        //Clean up prev next to not show at the first and end of the survey
        if (index != 0)
            panel.appendChild(prev);

        if (index != qArray.length - 1) {
            panel.appendChild(next);
        }

        //Shows only at the end of the survey
        if (index == qArray.length - 1) {
            panel.appendChild(submit);
        }

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
        let select = document.getElementById("input-select-" + index);
        surveyInputs.push(select);
        return questionList[parseInt(index) + 1];
    }
}

function saveData(inputList, key) {

    if (key == "users") {
        let users = localStorage.key(key) ? JSON.parse(localStorage.getItem(key)) : [];;

        data.userName = inputList[0].value;
        data.password = inputList[1].value;

        users.push(data);
        localStorage.setItem(key, JSON.stringify(users));

    } else if (key == "profiles") {

        let profiles = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];

        data.firstName = inputList[0].value;
        data.lastName = inputList[1].value;
        data.email = inputList[2].value;
        data.address = inputList[3].value;
        data.state = inputList[4].value;
        data.zip = inputList[5].value;

        profiles.push(data)
        localStorage.setItem(key, JSON.stringify(profiles));

    } else if (key == "surveys") {

        let surveys = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];

        data.q1 = inputList[0].value;
        data.q2 = inputList[1].value;
        data.q3 = inputList[2].value;
        data.q4 = inputList[3].value;
        data.q5 = inputList[4].value;
        data.q6 = inputList[5].value;
        data.q7 = inputList[6].value;
        data.q8 = inputList[7].value;
        data.q9 = inputList[8].value;

        surveys.push(data);
        localStorage.setItem(key, JSON.stringify(surveys));

    }
}