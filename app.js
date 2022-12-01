function display(num) {
  var result = document.getElementById("result");
  result.value += num;
}

function clean() {
  var result = document.getElementById("result");
  result.value = "";
}

function output() {
  var result = document.getElementById("result");
  console.log(result.value);
  result.value = eval(result.value);
}
