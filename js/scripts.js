function openNav() {
  var x = document.getElementById("navigation");

  if (x.className === "navigation") {
    x.className += " menujs";
    document.getElementById("icone-menu").innerHTML = "&Cross;";
  } else {
    x.className = "navigation";
    document.getElementById("icone-menu").innerHTML = "&#9776;";
  }


}