// Function to clear the display
function clearScreen() {
    document.getElementById("result").value = "";
}

// Function to display the clicked values
function display(value) {
    document.getElementById("result").value += value;
}

// Function to evaluate the expression safely
function calculate() {
    try {
        let expression = document.getElementById("result").value;
        let result = new Function('return ' + expression)();
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
