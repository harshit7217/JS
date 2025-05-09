let display = document.querySelector("#display");

function append(m) {
    display.value += m;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }catch {
        display.value = "Error";
    }
}
