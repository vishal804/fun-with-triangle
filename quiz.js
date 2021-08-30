const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-Btn");
const output = document.querySelector("#output");

const correctAnswer = ["90°", "right angled"];

submitAnswerBtn.addEventListener("click", function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  output.innerText = "You have scored " + score;
});
