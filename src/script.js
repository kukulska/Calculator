// Inspired by https://www.edureka.co/blog/javascript-calculator/

function display(val) {
  let input = document.getElementById("input");
  return (input.value += val);
}

function solve() {
  let input = document.getElementById("input").value;
  let result = eval(input);
  document.getElementById("input").value = result;
}

function clr() {
  document.getElementById("input").value = "";
}
