const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

function calculateSumofSquares(a, b) {
  const sumOfSquares = a * a + b * b;
  return sumOfSquares;
}

hypotenuseBtn.addEventListener("click", function calculateHypotenuse() {
  const sumOfSquares = calculateSumofSquares(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
  output.innerText =
    "The length of Hypotenuse is " + lengthOfHypotenuse + " cm";
});
