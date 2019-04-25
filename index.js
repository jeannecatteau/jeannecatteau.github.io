function toggleNavMenu() {
  var navbar = document.getElementsByClassName("navbar")[0];
  console.log("navbar:", navbar.style.visibility);
  navbar.style.visibility !== "visible"
    ? (navbar.style.visibility = "visible")
    : (navbar.style.visibility = "hidden");
}
// attach
document
  .getElementsByClassName("navbar-burger-button")[0]
  .addEventListener("click", toggleNavMenu);
