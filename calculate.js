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

        case "+":
        case "-":
            if (operators.indexOf(equation.slice(-1)) == -1) {
                equation += buttonValue;
                view += buttonValue;
            }
            prevNumber = number;
            prevOperator = buttonValue;
            number = "";
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
        default:
            equation += buttonValue;
            number += buttonValue;
            view += buttonValue;
            break;



                }
    document.getElementById("view").innerHTML = view;
}

