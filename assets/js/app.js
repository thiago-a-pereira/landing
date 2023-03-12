const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  var y = document.getElementById("botao");
  if (y.className === "fa fa-bars"){
    y.className += "fa fa-close";
  } else {
    y.className = "fa fa-bars"
  }
}

function popUp(id) {
  var popup = document.getElementById(id);
  popup.classList.toggle("show");
}

function newPopup(){
  varWindow = window.open (
  'popup.html',
  'pagina',
  "width=350, height=255, top=100, left=110, scrollbars=no " );
  }

function fecharPopup(){
fecharWindow = varWindow.close()
}

