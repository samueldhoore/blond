function hamburgerFunction() {
  var x = document.getElementByClass("toplinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 