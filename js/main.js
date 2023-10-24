let numero = Math.floor(Math.random()*100) + 1;
let numeroIngresado = document.getElementById(`numeroIngresado`);
let mensaje = document.getElementById(`mensaje`);
let prueba = document.getElementById(`prueba`);
let pruebas = 0;

addEventListener("keydown", (e) => {
    if (e.key === `Enter`) {
        chequearNumero();
    }
})

addEventListener("keydown", (e) => {
    if (e.key === 'r' || e.key === 'R') {
        resetNumero ();
    }    
})

addEventListener("keyup", (e) => {
    if (e.key === `r` || e.key === `R`) {
        document.getElementById(`numeroIngresado`).value = ``;
    }
})

function chequearNumero () {
    let numeroEntrada = parseInt(numeroIngresado.value);

    if (numeroEntrada != numero) {
        pruebas ++;
        prueba.textContent = pruebas;
    }

    if (numeroEntrada < 1 || numeroEntrada > 100 || isNaN(numeroEntrada)) {
        mensaje.textContent = `El dato ingresado no es valido. Vuelva a ingresar un numero entre el 1 y el 100.`
        document.getElementById(`numeroIngresado`).value = ``;
        mensaje.style.color = `red`;
        return
    };
    
    if(numeroEntrada === numero) {
        mensaje.textContent = `FELICIDADES!! EL NUMERO GANADOR ES ${numero}.`;
        mensaje.style.color = `red`;
        mensaje.style.fontWeight = `bold`;
        numeroIngresado.disabled = true;

    }else if (numeroEntrada > numero) {
        mensaje.textContent = `Prueba con otro numero mas BAJO que ${numeroEntrada}.`;
        document.getElementById(`numeroIngresado`).value = ``;
        mensaje.style.color = `red`;
        
    }else {
        mensaje.textContent = `Prueba con otro numero mas ALTO que ${numeroEntrada}.`;
        document.getElementById(`numeroIngresado`).value = ``;
        mensaje.style.color = `red`;
    }

    document.getElementById('numeroIngresado').focus();
}

function resetNumero(){
    pruebas = 0;
    prueba.textContent = pruebas;
    numero = Math.floor(Math.random()*100) + 1;
    numeroIngresado.disabled = false;
    mensaje.textContent = `Comenza a jugar.`;
    mensaje.style.color = `#000000`
    document.getElementById('numeroIngresado').focus();    
    document.getElementById(`numeroIngresado`).value = ``;
}