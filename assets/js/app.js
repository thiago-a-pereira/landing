const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menu() {
  if (window.innerWidth < 860) {
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
      y.className = "fa fa-bars";
    }
    var z = document.getElementById("opaco-id");
    if (z.className === "opaco"){
      z.className += " responsive";
    } else{
      z.className = "opaco"
      z.addEventListener("click", function(){
        z.className = "opaco";
        y.className = "fa fa-bars";
        x.className = "topnav";
      })
    }
  }
}


function popUp(id) {
  var pop = document.getElementById(id);
  pop.classList.toggle("show");
  var opa = document.getElementById("opaco-id");
  if (opa.className === "opaco"){
    opa.className += " responsive";
  } else {
    opa.className = "opaco";
  }
  if(opa.className === "opaco responsive"){
    opa.addEventListener("click", function(){
      console.log("click ok");
      console.log(pop.className);
      if(pop.className === "popuptext show"){
        pop.classList.toggle("show");
        opa.className = "opaco";
      }
    })
  }
}



/*function popUp(id) {
  var pop = document.getElementById(id);
  if (pop.className === "popuptext"){
    pop.className += " show";
  } else {
    pop.className = "popuptext";
  }
  var opa = document.getElementById("opaco-id");
  if (opa.className === "opaco"){
    opa.className += " responsive";
  } else{
    opa.className = "opaco";
    pop.className = "popuptext";
    opa.addEventListener("click", function(){
      pop.className = "popuptext";
      opa.className = "opaco";
    })
  }
}*/

