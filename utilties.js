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
    let input = createElement("input", ["name"], ["input-data"], "input-" + index, false);
    let prev = createElement("button", ["type", "id", "text"], ["button", "prevBtn", "Prev"], "prevBtn-" + index, true);
    let next = createElement("button", ["type", "id", "text"], ["button", "nextBtn", "Next"], "nextBtn-" + index, true);
    let submit = createElement("button", ["type", "id", "text"], ["submit", "submitBtn", "Submit"], "submitBtn-" + index, true);

    panel.appendChild(question);
    panel.appendChild(input);
    panel.appendChild(prev);
    panel.appendChild(next);
    panel.appendChild(submit);

    return panel;
}

function jumpToPrevQuestion(index, questionList) {
    if ((parseInt(index) - 1) >= 0) {
        return questionList[parseInt(index) - 1];
    }
}
function jumpToNextQuestion(index, questionList) {
    if ((parseInt(index) + 1) < questionList.length) {
        return questionList[parseInt(index) + 1];
    }
}
function submitSurvey(index, questionList) {
    if (parseInt(index + 1) >= questionList.length) {
        return "complete.html";
    }
}
