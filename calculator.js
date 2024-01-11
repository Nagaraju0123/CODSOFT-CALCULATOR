var keys = document.querySelectorAll("#calc span");
console.log(keys.length)
var operators = ["+", "-", "x", "/"];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function(e) {
        var input = document.querySelector(".display");
        var inputVal = input.textContent;
        var btnVal = this.textContent;
        console.log(btnVal)

        if (btnVal === "C") {
            input.textContent = "";
            decimalAdded = false;

        } else if (btnVal === "=") {
            var equation = inputVal;
            var lastChar = equation[equation.length - 1];

            equation = equation.replace("x", "*").replace("/", "/");

            if (operators.indexOf(lastChar) > -1 || lastChar === ".")
                equation = equation.replace(/.$/, "");

            if (equation) input.innerHTML = eval(equation);

            decimalAdded = false;
        } else if (operators.indexOf(btnVal) > -1) {
            lastChar = inputVal[inputVal.length - 1];

            if (inputVal !== "" && operators.indexOf(lastChar) === -1)
                input.innerHTML += btnVal;
            else if (inputVal === "" && btnVal === "-") input.innerHTML += btnVal;

            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }

            decimalAdded = false;
        } else if (btnVal === ".") {
            if (!decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        } else if (btnVal === "DEL") {
            input.textContent = input.innerHTML.slice(0, -1);
        } else {
            input.innerHTML += btnVal;
        }

        // prevent page jumps
        e.preventDefault();
    };
}

const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);
