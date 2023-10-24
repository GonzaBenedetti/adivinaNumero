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

function chequearNumero () {
    pruebas ++;
    prueba.textContent = pruebas;
    let numeroEntrada = parseInt(numeroIngresado.value);

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
        mensaje.textContent = `Prueba con otro numero mas bajo que ${numeroEntrada}.`;
        document.getElementById(`numeroIngresado`).value = ``;
        mensaje.style.color = `red`;
        
    }else {
        mensaje.textContent = `Prueba con otro numero mas alto que ${numeroEntrada}.`;
        document.getElementById(`numeroIngresado`).value = ``;
        mensaje.style.color = `red`;
    }
}

function resetNumero(){
    pruebas = 0;
    prueba.textContent = pruebas;
    numero = Math.floor(Math.random()*100) + 1;
    numeroIngresado.disabled = false;
    document.getElementById(`numeroIngresado`).value = ``;
    mensaje.textContent = `Comenza a jugar.`
}