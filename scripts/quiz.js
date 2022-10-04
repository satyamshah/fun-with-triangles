const quizForm = document.querySelector("#quiz-form")
const quizButton = document.querySelector("#btn-quiz")
const quizOutput = document.querySelector("#output-quiz")

correctAnswers = [
    "90°",
  "right angled",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  "100°",
  "30°",
  "a + b + c",
  "no",
  "45°",
]

function showMessage(message){
    quizOutput.innerText = message
}

quizButton.addEventListener("click", function calculateCorrectAnswer() {
    var formResult = new FormData(quizForm)
    var score = 0, index = 0
    for(let value of formResult.values()) {
        if(value === correctAnswers[index]) {
            score +=1
        }
        index +=1
    }
    if(index === 10) {
        if(score < 5) {
            showMessage("Oops!! your score is less than 5. You need practice. Total points = " + score)
        } else if(score > 5) {
            showMessage("Yay!! you scored well. Total points = " + score)
        } else {
            showMessage("Your score is okay. Practice more. Total points = " + score)
        }
    } else {
        showMessage("Mark answers for all the questions")
    }  
    document. forms[0]. reset();
})

