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


function generateQuestion(index) {

    let panel = createElement("div", [], [], "panel-" + index, false);
    let question = createElement("h4", ["text"], [qArray[index]], "q-" + index, true);
    let prev = createElement("button", ["type", "id", "text"], ["button", "prevBtn", "Prev"], "prevBtn-" + index, true);
    let input = createElement("input", ["name"], ["input-data"], "input-" + index, false);
    let select = createElement("select", ["id"], ["input-select"], "input-" + index, false)
    let next = createElement("button", ["type", "id", "text"], ["button", "nextBtn", "Next"], "nextBtn-" + index, true);
    let submit = createElement("button", ["type", "id", "text"], ["submit", "submitBtn", "Submit"], "submitBtn-" + index, true);

    panel.appendChild(question);

    determineInputType(index);

    panel.appendChild(prev);
    panel.appendChild(next);
    panel.appendChild(submit);

    return panel;
}

function determineInputType(index) {
    switch (index) {
        case 0:
            panel.appendChild(generateReponses(select, index, 0));
            break;

        case 2:
            panel.appendChild(generateReponses(select, index, 1));
            break;

        case 3:
            panel.appendChild(generateReponses(select, index, 2));
            break;

        case 6:
            panel.appendChild(generateReponses(select, index, 3));
            break;

        default:
            panel.appendChild(input);
            break;
    }
}

function generateReponses(parent, index, qValues) {
    let selectionArr = Object.values(selections);

    console.log(selectionArr[qValues].length)

    for (let i = 0; i < selectionArr[qValues].length; i++) {
        let option = createElement("option", ["id", "text"], ["input-option", selectionArr[qValues][i]], "input-" + index, true)
        parent.appendChild(option);
    }



    return parent;
}

function jumpToPrevQuestion(index, questionList) {
    if ((parseInt(index) - 1) >= 0) {
        return questionList[parseInt(index) - 1];
    }
}
function jumpToNextQuestion(index, questionList) {
    if ((parseInt(index) + 1) < questionList.length) {
        userData
        return questionList[parseInt(index) + 1];
    }
}
function submitSurvey(index, questionList) {
    if (parseInt(index + 1) >= questionList.length) {
        let list = document.getElementById("surveyList");
        localStorage.setItem();
    }
}
