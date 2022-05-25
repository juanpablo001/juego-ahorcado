var btnInicia = document.querySelector("#btn-inicia");
var btnAgrega = document.querySelector("#btn-agrega");
var btnGuarda = document.querySelector("#btn-guarda");
var btnCancela = document.querySelector("#btn-cancela");
var btnNuevo = document.querySelector("#btn-nuevo");
var btnSalir = document.querySelector("#btn-salir");
var btnFeliz = document.querySelector("#btn-feliz");

var paginaUno = document.getElementById("uno");
var paginaDos = document.getElementById("dos");
var paginaTres = document.getElementById("tres");

var txtArea = document.querySelector("#txt-area");
var aviso = document.getElementById("aviso");

function estadoInicial() {
    paginaUno.classList.add("visible");
    paginaDos.classList.add("oculta");
    paginaTres.classList.add("oculta");
    aviso.classList.add("oculta");
}

estadoInicial();

btnInicia.addEventListener("click", function() {
    cambiaPagina(paginaTres);
    iniciaJuego();
});

btnAgrega.addEventListener("click", function() {
    cambiaPagina(paginaDos);
    enfocaTextArea();
});

btnGuarda.addEventListener("click", function() {
    revisaPalabraNueva();
});

btnCancela.addEventListener("click", function() {
    terminaEventTxtArea();
    cambiaPagina(paginaUno);
});

btnNuevo.addEventListener("click", function() {
    console.log("inicia nuevo juego");
    termina();
    iniciaJuego();
});

btnSalir.addEventListener("click", function() {
    cambiaPagina(paginaUno);
    termina();
});

btnFeliz.addEventListener("click", function() {
    console.log("boton aceptar activado");
    cerrarIntento();
    iniciaJuego();
});

function cambiaPagina(pagina) {
    console.log("click boton");
    var paginas = document.getElementsByClassName("pagina");
    
    for (var i = 0; i < paginas.length; i++) {
        console.log(paginas[i].id);
        paginas[i].classList.add("oculta");
        paginas[i].classList.remove("visible");
        paginas[i].classList.remove("fadeIn");
        paginas[i].classList.remove("fadeOut");
        pagina.classList.add("fadeOut");
    }
    pagina.classList.add("visible");

    setTimeout( function() {
        pagina.classList.add("fadeIn");
    },500);
    
}

function enfocaTextArea() {
    txtArea.value = "";
    txtArea.focus();
    capturaTextArea();
    mayusculas();
}

function capturaTextArea() {
    txtArea.addEventListener("keyup", mayusculas);
}

function mayusculas(eve) {
    console.log("funcion minusculas activa");
    txtArea.value = txtArea.value.replace(/[^aA-zZ]/, "").toUpperCase();
}

function revisaPalabraNueva() {
    var candidata = txtArea.value;
    if (candidata == "") {
        console.log("No hay palabra que guardar");
        txtArea.focus();
    } else {
        console.log("La palabra agregada es: " + candidata);
        palabras.push(candidata);
        terminaEventTxtArea();
        cambiaPagina(paginaTres);
        iniciaJuego();
    }
}

function terminaEventTxtArea() {
    console.log("funcion minusculas desactivada");
    txtArea.removeEventListener("keyup", mayusculas);
}

function termina() {
    error = 0;
    letrasTecleadas = [];
    letrasAceptadas = [];
    palabraCorrecta = [];
    document.querySelectorAll(".canvasltr").forEach(el => el.remove());
    quitaListener();
    iniciaDibujo();
}

function quitaListener() {
    document.removeEventListener("keydown", teclaUsada);
}

function felicidades() {
    aviso.classList.remove("oculta");
    aviso.classList.add("visible");
    //
    quitaListener();
    //
    textoFeliz();
}

function textoFeliz() {
    document.getElementById("textoFinal").textContent = "¡Felicidades: Encontraste la palabra correcta!";
}

function mejorSuerte() {
    aviso.classList.remove("oculta");
    aviso.classList.add("visible");
    quitaListener();
    textoMejorSuerte();
}

function textoMejorSuerte() {
    document.getElementById("textoFinal").textContent = "¡Oh no, vamos puedes intentarlo otra vez!";
}

function cerrarIntento() {
    aviso.classList.remove("visible");
    aviso.classList.add("oculta");
    termina();
    letraBorra();
}