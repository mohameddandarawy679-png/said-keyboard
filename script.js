let screen = document.getElementById("screen");

function typeLetter(letter) {
  screen.value += letter;
}

function deleteLetter() {
  screen.value = screen.value.slice(0, -1);
}

function clearAll() {
  screen.value = "";
}

function copyText() {
  screen.select();
  document.execCommand("copy");
  alert("اتنسخ ✅");
}

function addDiv() {
  screen.value += "<div></div>";
}

function addH1() {
  screen.value += "<h1></h1>";
}

function addP() {
  screen.value += "<p></p>";
}

function showPreview() {
  document.getElementById("preview").innerHTML = screen.value;
}