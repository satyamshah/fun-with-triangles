const angles = document.querySelectorAll(".angles-input")
const isTriangleButton = document.querySelector("#btn-isTriangle")
const isTriangleOutput = document.querySelector("#output-is-triangle")

function calculate(a, b, c) {
    var sum = a + b + c;
    return sum
}

function showMessage(message){
    isTriangleOutput.innerText = message;
}

function ClearFields() {
    document.getElementById("angle1").value = "";
    document.getElementById("angle2").value = "";
    document.getElementById("angle3").value = "";
}

isTriangleButton.addEventListener("click", function isTriangleHandler() {
    if(Number(angles[0].value) && Number(angles[1].value) && Number(angles[2].value)) {
        var sum = calculate(Number(angles[0].value), Number(angles[1].value), Number(angles[2].value)) 
    if(sum === 180) {
        showMessage("Yay!! the angles can form a triangle.");
    } else {
        showMessage("Nooo!! the angles cannot form a triangle.")
    }
    } else {
        showMessage("Enter all the angles")
    }
    ClearFields();
})
