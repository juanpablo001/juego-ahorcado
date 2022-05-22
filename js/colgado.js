var pantalla = document.getElementById("ahorcado");
var pincel = pantalla.getContext("2d");

function iniciaDibujo() {
    pincel.clearRect(0,0,294,360);
    pincel.strokeStyle = "black";
    pincel.lineWidth = 4;
    pincel.beginPath();
    pincel.moveTo(0,358);pincel.lineTo(294,358);
    pincel.stroke();
}

iniciaDibujo();

function dibujaParte(error) {
    if(error == 1){pincel.moveTo(78,356);pincel.lineTo(78,4);pincel.stroke();}
    if(error == 2){pincel.moveTo(78,4);pincel.lineTo(238,4);pincel.stroke();}
    if(error == 3){pincel.moveTo(238,4);pincel.lineTo(238,50);pincel.stroke();}
    if(error == 4){pincel.moveTo(266,80);pincel.arc(238,80,28,0,Math.PI*2);pincel.stroke();}
    if(error == 5){pincel.moveTo(238,110);pincel.lineTo(238,234);pincel.stroke();}
    if(error == 6){pincel.moveTo(238,234);pincel.lineTo(202,306);pincel.stroke();}
    if(error == 7){pincel.moveTo(238,234);pincel.lineTo(272,306);pincel.stroke();}
    if(error == 8){pincel.moveTo(238,110);pincel.lineTo(202,182);pincel.stroke();}
    if(error == 9){pincel.moveTo(238,110);pincel.lineTo(272,182);pincel.stroke();}
    if(error == 10){termina();}
}