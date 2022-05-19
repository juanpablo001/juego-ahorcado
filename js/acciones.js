var btnInicia = document.querySelector("#btn-inicia");
var btnAgrega = document.querySelector("#btn-agrega");
var btnGuarda = document.querySelector("#btn-guarda");
var btnCancela = document.querySelector("#btn-cancela");
var btnNuevo = document.querySelector("#btn-nuevo");
var btnSalir = document.querySelector("#btn-salir");

var paginaUno = document.getElementById("uno");
var paginaDos = document.getElementById("dos");
var paginaTres = document.getElementById("tres");

function estadoInicial() {
    paginaUno.classList.add("visible");
    paginaDos.classList.add("oculta");
    paginaTres.classList.add("oculta");
}

estadoInicial();


btnInicia.addEventListener("click", function() {
    cambiaPagina(paginaTres);
});

btnAgrega.addEventListener("click", function() {
    cambiaPagina(paginaDos);
});

btnGuarda.addEventListener("click", function() {
    cambiaPagina(paginaTres);
});

btnNuevo.addEventListener("click", function() { console.log("inicia nuevo juego");});

btnSalir.addEventListener("click", function() {
    cambiaPagina(paginaUno);
});

btnCancela.addEventListener("click", function() {
    cambiaPagina(paginaUno);
});

function cambiaPagina(pagina) {
    console.log("click boton");
    var paginas = document.getElementsByClassName("pagina");
    
    for (var i = 0; i < paginas.length; i++) {
        console.log(paginas[i].id);
        paginas[i].classList.add("oculta");
        paginas[i].classList.remove("visible");
    }
    pagina.classList.add("visible");
}