const base = document.querySelector("#base-a")
const height = document.querySelector("#height-b")
const hypotenuseButton = document.querySelector("#btn-hypotenuse")
const hypotenuseOutput = document.querySelector("#output-hypotenuse")

const sum = (a, b) => a*a + b*b ;

function showMessage(message) {
    hypotenuseOutput.innerText = message;
}

function ClearFields() {
    document.getElementById("base-a").value = "";
    document.getElementById("height-b").value = "";
}

hypotenuseButton.addEventListener("click", function findHypotenuseHandler() {
    if(Number(base.value) && Number(height.value)) {
        var sumOfSquare = sum(Number(base.value), Number(height.value))
    var hypotenuse = Math.sqrt(sumOfSquare);
    showMessage("The length of hypotenuse is "+ hypotenuse)
    } else {
        showMessage("Enter both the values")
    }
    ClearFields();
})