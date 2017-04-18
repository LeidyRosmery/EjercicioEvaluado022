var cerrar = document.getElementsByClassName("close");
var contenedor = document.getElementsByClassName("content-img");
var myInfo = document.getElementsByTagName("div");
//**********************************FUNCION CLOSE IMAGEN *******************


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
// *********************FUNCION DE BOTONES DEL SEGUNDO MENU
var menu = document.getElementsByClassName("menu");
var mySeccion = document.getElementsByClassName("galeryImg");


menu[0].addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("derecha").classList.toggle("ocultar");
});
menu[1].addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("izquierda").classList.toggle("ocultar");
});
menu[2].addEventListener("click", function() {
    mySeccion[0].style.display = "block";
});
//*********************FUNCION DE MOSTRAR Y OCULTAR ********************
