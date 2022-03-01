let timer = setInterval(showTime, 1000);

function start() {
    timer = setInterval(showTime, 1000);
}
function stop() {
    clearInterval(timer);
}

function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    if(h<10) {
        h = "0"+h;
    }
    if(m<10) {
        m = "0"+m;
    }
    if(s<10) {
        s = "0"+s;
    }
    
    let txt = h+':'+m+':'+s;

    document.querySelector('.relogio').innerHTML = txt;

    if ( h < 12 ) {
        document.querySelector('.titulo').innerHTML = "BOM DIA!";
    } else if ( h < 18 ) {
        document.querySelector('.titulo').innerHTML = "BOA TARDE!";
    } else if ( h <= 23 ) {
        document.querySelector('.titulo').innerHTML = "BOA NOITE!";
    } 
    
}

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
    control = setInterval(cronometro,10);
    document.getElementById("inicio").disabled = true;
    document.getElementById("parar").disabled = false;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = false;
}
function parar () {
    clearInterval(control);
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = false;
}
function reinicio () {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    Centesimas.innerHTML = "00";
    Segundos.innerHTML = "00";
    Minutos.innerHTML = "00";
    Horas.innerHTML = "00";
    document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;
}
function cronometro () {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0"+centesimas }
        Centesimas.innerHTML = centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos ++;
        if (segundos < 10) { segundos = "0"+segundos }
        Segundos.innerHTML = segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0) ) {
        minutos++;
        if (minutos < 10) { minutos = "0"+minutos }
        Minutos.innerHTML = minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
        horas ++;
        if (horas < 10) { horas = "0"+horas }
        Horas.innerHTML = horas;
    }
}