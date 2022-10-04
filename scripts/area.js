const sidesOfTriangle = document.querySelectorAll(".sides")
const areaButton = document.querySelector("#btn-area")
const areaOutput = document.querySelector("#output-area") 

const sumOfSides = (a, b, c) => a + b + c;
const semiPerimeter = (a) => a / 2;
const subOfSides = (a, b) => a - b;
const mulOfSub = (s, a, b, c) => s * a * b * c;

function showMessage(message) {
    areaOutput.innerText = message;
}

function ClearFields() {   
    document.getElementById("first-side").value = "";
    document.getElementById("second-side").value = "";
    document.getElementById("third-side").value = "";
}

areaButton.addEventListener("click", function findAreaHandler() {
    if(Number(sidesOfTriangle[0].value) && Number(sidesOfTriangle[1].value) && Number(sidesOfTriangle[2].value)) {
        var sum = sumOfSides(Number(sidesOfTriangle[0].value), 
                         Number(sidesOfTriangle[1].value), 
                         Number(sidesOfTriangle[2].value))
        sum = semiPerimeter(sum)
        var sub1 = subOfSides(sum, Number(sidesOfTriangle[0].value))
        var sub2 = subOfSides(sum, Number(sidesOfTriangle[1].value))
        var sub3 = subOfSides(sum, Number(sidesOfTriangle[2].value))
        var mul = mulOfSub(sum, sub1, sub2, sub3)
        var area = Math.sqrt(mul)
        showMessage("The area of triangle is " + area)
    } else {
        showMessage("Enter the lengths of all sides")
    }
    ClearFields();
})