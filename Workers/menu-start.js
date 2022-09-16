function altera(){
    if ( document.getElementById("menu-start").style.visibility == "hidden" ){
        document.getElementById("menu-start").style.visibility = "visible";
        document.getElementById("cor-de-fundo").style.opacity = "0.2"
        document.getElementById("cor-de-fundo").style.background = "grey"
      } else {
        document.getElementById("menu-start").style.visibility = "hidden";
        document.getElementById("cor-de-fundo").style.opacity = "1"
      }
}