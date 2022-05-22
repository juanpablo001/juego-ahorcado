var palabras = ["Archivar","Pileta","Cerradura","Gema",
    "Venecia","Cuarteto","Rollo","Karate","Gas","Membrana"];

var letrasTecleadas = [];
var letrasAceptadas = [];
var palabraCorrecta = [];
var palabra;
var key = "";
let encontrado;
var error = 0;
var sigue = true;

function iniciaJuego() {
    cargaPalabra();

    document.addEventListener("keydown", teclaUsada);
}

function teclaUsada(event) {
    key = event.key.toUpperCase();
    comparaLetra();
}

var ultimo = palabras.length-1;
var ale;

function aleatorio() {
    ale = xyz();
    do {
        ale = xyz();
    } while (ale == ultimo);
    ultimo = ale;
    return ale;
}

function xyz(){
    return Math.round(Math.random()*(palabras.length-1));
}

function cargaPalabra() {
    palabra = palabras[aleatorio()].toUpperCase();
    let div = document.querySelector("#palabra");
    for(var letra = 0; letra < palabra.length; letra++) {
        var nuevaLetra = document.createElement("canvas");
        nuevaLetra.setAttribute("id","letra"+letra);
        nuevaLetra.setAttribute("width","80");
        nuevaLetra.setAttribute("height","92");
        nuevaLetra.classList.add("canvasltr");
        div.appendChild(nuevaLetra);
        dibujarLineas(letra);
    }
    console.log("Letra cargada: " + palabra);
}

function dibujarLineas(letra) {
    var canvasLetra = document.getElementById("letra"+letra);
    var pincelLinea = canvasLetra.getContext("2d");
    pincelLinea.lineWidth = 6;
    pincelLinea.beginPath();
    pincelLinea.moveTo(0,92);
    pincelLinea.lineTo(80,92);
    pincelLinea.stroke();
}

function dibujarLetra(texto, letra){
    var canvasLetra = document.getElementById("letra"+letra);
    var pincelLetra = canvasLetra.getContext("2d");
    pincelLetra.font = "48px Inter";
    pincelLetra.fillStyle = "black";
    pincelLetra.fillText(texto, 22, 46);
}

function comparaLetra() {
    encontrado = false;
    var letraNoEsta = false;
    console.log("se preciono: " + key);

    for (var j = 0; j < letrasTecleadas.length; j++) {
        if (key == letrasTecleadas[j]) {
            encontrado = true;
            break;
        }
    }

    if (encontrado == false) {
        letrasTecleadas.push(key);
        var letraIncluida = false;
        console.log("Se detectó la tecla: " + key);

        for (var indice = 0; indice < palabra.length; indice++){
            if(key == palabra[indice]) {
                dibujarLetra(palabra[indice],indice);
                palabraCorrecta[indice] = palabra[indice];
                letraIncluida = true;
                if(letraIncluida){
                    letrasAceptadas.push(key);
                    console.log("La letra " + key + " fue incluida");
                    if (palabraCorrecta.join("") == palabra){
                        console.log("felicidades resolviste la palabra!!!")
                        felicidades();
                    }
                }
            }
        }
    }

    if(encontrado == false && letraIncluida == false) {
        console.log("Letra que no esta incluida: " + key);
        letraError(key);
        error++;
        console.log("valor del contador: " + error);
        dibujaParte(error);
        if(error == 9) {
            console.log("juego terminado");
            mejorSuerte();
        }
    }
}

function palabraCorrecta () {
    console.log(palabraCorrecta.join(""));
}

function letraError(letra) {
    let div = document.querySelector("#otras-letras");
    div.innerHTML += letra;
}

function letraBorra() {
    let div = document.querySelector("#otras-letras");
    div.innerHTML = "";
}