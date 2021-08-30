const sides = document.querySelectorAll(".side-input");
const areaOfTriangleBtn = document.querySelector("#calculate-area");
const output = document.querySelector("#output");

function calculateMultiplication(a, b) {
  const multiplication = a * b;
  return multiplication;
}

areaOfTriangleBtn.addEventListener("click", function calculateArea() {
  const multiplication = calculateMultiplication(
    Number(sides[0].value),
    Number(sides[1].value)
  );
  const area = multiplication / 2;
  output.innerText = "The area of the trianlge is " + area + " cm²";
});
