function addVal(button) {
    document.querySelector("#txt").value += button.value;
}

function clearText() {
    document.querySelector("#txt").value = '';
}

function backspace() {
    var inputField = document.querySelector("#txt");
    var currentText = inputField.value;
    
    if (currentText.length > 0) {
        inputField.value = currentText.substring(0, currentText.length - 1);
    }
}
function addOperator(operator) {
    document.querySelector("#txt").value += operator;
}
function calculateResult() {
    var inputField = document.querySelector("#txt");
    var expression = inputField.value;

    try {
        var result = eval(expression);
        inputField.value = result;
    } catch (error) {
        inputField.value = "Error";
    }
}
