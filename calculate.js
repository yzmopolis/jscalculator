var number = "";
var prevNumber = "";
var prevOperator = "";
var equation = "";
var view = "";
var operators = "*-+/%";
var button = document.getElementsByTagName("button");

for (var counter = 0; counter < button.length; counter++) {
    button[counter].onclick = calculate;
}

function calculate() {
    var buttonValue = this.innerHTML;
    switch (buttonValue) {
        case "C":
            number = "";
            equation = "";
            view = "";
            prevNumber = "";
            prevOperator = "";
            alert(buttonValue);
            break;
        case ".":
            alert(buttonValue);
            if (number == 0) {
                break;
            }
            if (number.indexOf(".") == -1) {
            }
            break;
        case "+":
        case "-":
            alert(buttonValue);

                }
}

