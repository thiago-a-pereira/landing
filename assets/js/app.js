

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function menu() {
  if (window.innerWidth < 860) {
    var x = document.getElementById("myTopnav");
    var opa = document.getElementById("opaco-id");
    if (x.className === "topnav") {
      x.className += " responsive";
      opa.className = "opaco responsive";
    } else {
      x.className = "topnav";
      opa.className = "opaco";
    }
    var y = document.getElementById("botao");
    if (y.className === "fa fa-bars"){
      y.className += "fa fa-close";
    } else {
      y.className = "fa fa-bars";
    }
  }


  if(opa.className === "opaco responsive"){
    opa.addEventListener("click", function(){
      if(opa.className === "opaco responsive"){
        y.className = "fa fa-bars";
        x.className = "topnav";
        opa.className = "opaco";
      }
    })
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
      if(pop.className === "popuptext show"){
        pop.classList.toggle("show");
        opa.className = "opaco";
      }
    })
  }
}

function loadFrame(){
  var myFrame = document.getElementById('loc-titulo');
  myFrame.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15287.585865404106!2d-49.2585498!3d-16.6820636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef165d4163bfb%3A0x7e60d70be9bf3c32!2sGon%C3%A7alves%2C%20Macedo%2C%20Paiva%20e%20Rassi%20Advogados%20-%20GMPR!5e0!3m2!1spt-BR!2sbr!4v1678639832256!5m2!1spt-BR!2sbr";
};

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
}


const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});

*/

