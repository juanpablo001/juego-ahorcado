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

let txtArea = document.querySelector("#txt-area");
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
    capturaPalabra();
});

btnGuarda.addEventListener("click", function() {
    guardaPalabra();
    //cambiaPagina(paginaTres);
    //iniciaJuego();
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

btnCancela.addEventListener("click", function() {
    cancelaPalabra();
    cambiaPagina(paginaUno);
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

function capturaPalabra() {
    txtArea.value = "";
    txtArea.focus();
    txtArea.addEventListener("keydown", nuevaPalabra);
}

function nuevaPalabra(event) {
    var palabra = event.key;
    console.log(palabra);
    /*
    if(texto.value == "") {
        btnGuarda.disabled = true;
    } else {
        console.log(txtArea.value);
    }
    */
}

function guardaPalabra() {
    cancelaPalabra();
}

function cancelaPalabra() {
    txtArea.removeEventListener("keydown", nuevaPalabra);
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
    quitaListener();
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