var cerrar = document.getElementsByClassName("close");
var contenedor = document.getElementsByClassName("content-img");
var myInfo = document.getElementsByTagName("div");
console.log(myInfo);


cerrar[0].addEventListener("click", function() {
    contenedor[0].style.display = "none";

});
cerrar[1].addEventListener("click", function() {
    contenedor[1].style.display = "none";
});
cerrar[2].addEventListener("click", function() {
    contenedor[2].style.display = "none";
});
cerrar[3].addEventListener("click", function() {
    contenedor[3].style.display = "none";
});

var menu = document.getElementsByClassName("menu");
var mySeccion = document.getElementsByClassName("galeryImg");

menu[0].addEventListener("click", function(e) {
    e.preventDefault();
    myInfo[1].style.display = "none";
});
menu[1].addEventListener("click", function(e) {
    e.preventDefault();
    myInfo[0].style.display = "none";
});

menu[2].addEventListener("click", function() {
    console.log("ingresa");
    mySeccion[0].style.display = "block";

});
