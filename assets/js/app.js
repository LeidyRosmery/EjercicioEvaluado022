var cerrar = document.getElementsByClassName("close");
var contenedor = document.getElementsByClassName("content-img");
var myInfo = document.getElementsByTagName("div");
var menu = document.getElementsByClassName("menu");
var mySeccion = document.getElementsByClassName("galeryImg");

function closer(primero, segundo, valor) {
    primero.addEventListener("click", function() {
        segundo.style.display = valor;
    });
}
closer(cerrar[0], contenedor[0], "none");
closer(cerrar[1], contenedor[1], "none");
closer(cerrar[2], contenedor[2], "none");
closer(cerrar[3], contenedor[3], "none");
closer(menu[2], mySeccion[0], "block");


function myToggle(parm1, parm2) {
    parm1.addEventListener("click", function(e) {
        e.preventDefault();
        document.getElementById(parm2).classList.toggle("ocultar");
    });
}
myToggle(menu[0], "derecha");
myToggle(menu[1], "izquierda");
