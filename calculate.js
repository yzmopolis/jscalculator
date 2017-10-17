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
            break;
        case ".":
            if (number.length == 0) {
                number += "0.";
                equation += "0.";
                view += "0.";
                break;
            }
            if (number.indexOf(".") == -1) {
                number += buttonValue;
                equation += buttonValue;
                view += buttonValue;
            }
            break;

        case "+":
        case "-":
            if (operators.indexOf(equation.slice(-1)) == -1) {
                equation += buttonValue;
                view += buttonValue;
            }
            display();
            break;
        case "x":
            if (operators.indexOf(equation.slice(-1)) == -1) {
                equation += "*";
                view += buttonValue;
            }
            display();
            break;
        case "÷":
            if (operators.indexOf(equation.slice(-1)) == -1) {
                equation += "/";
                view += buttonValue;
            }
            display();
            break;

        case "=":
            if (operators.indexOf(equation.slice(-1)) !== -1) {
                equation = view.slice(0, -1)
            }
            try {
                var result = eval(equation).toString();
                number = result;
                equation = result;
                view = parseFloat(Number(result).toFixed(10));
            }
            catch (SyntaxError) {
                alert("error!")
            }
            finally {
                break;
            }
        case "%":
            if (operators.indexOf(equation.slice(-1)) == -1) {
                switch (prevOperator) {
                    case "+":
                        equation += "-" + number + "+(" + prevNumber + "/100*" + number + ")";
                        break;
                    case "-":
                        equation += "+" + number + "-(" + prevNumber + "/100*" + number + ")";
                        break;
                    default:
                        equation += "*0.01*"
                        break;
                }
                view += buttonValue;
            }
            number = "";
            break;

        default:
            equation += buttonValue;
            number += buttonValue;
            view += buttonValue;
            break;



                }
    document.getElementById("view").innerHTML = view;
}

function display() {
    prevNumber = number;
    prevOperator = buttonValue;
    number = "";
}

